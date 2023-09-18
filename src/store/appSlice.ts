import { TransactionsSlice } from '../transactions/store/transactionsSlice';
import { UserData } from '../utils/usersMarkleTrees';
import { IWeb3Slice } from '../web3/store/web3Slice';
import { StoreSlice } from './types';

export interface FormattedUserData extends UserData {
  isClaimed: boolean;
}

export type TokenToClaim = {
  index: number;
  amount: string;
  merkleProof: string[];
  distributionId: number;
};

type AppView = '' | 'checkAddress' | 'connectWallet' | 'info';

export type IAppSlice = {
  appView: AppView;
  prevAppView: AppView;
  setAppView: (view: AppView) => Promise<void>;

  checkedAddress: string;
  setCheckedAddress: (value: string) => void;

  usersData: Record<string, UserData[]>;
  usersDataLoading: boolean;
  setUsersDataLoading: (value: boolean) => void;
  setUsersData: (data: Record<string, UserData[]>) => void;

  userDataLoading: boolean;
  userData: FormattedUserData[];
  resetUserData: () => void;
  getUserData: (address: string) => Promise<void>;

  claim: (
    chainId: number,
    address: string,
    tokensToClaim: TokenToClaim[],
  ) => Promise<void>;
};

export const createAppSlice: StoreSlice<
  IAppSlice,
  IWeb3Slice & TransactionsSlice
> = (set, get) => ({
  appView: '',
  prevAppView: '',
  setAppView: async (view) => {
    if (get().appView !== 'connectWallet') {
      await set({ prevAppView: get().appView });
    }
    await set({ appView: view });
  },

  checkedAddress: '',
  setCheckedAddress: (value) => {
    set({ checkedAddress: value });
  },

  usersData: {},
  usersDataLoading: true,
  setUsersDataLoading: (value) => set({ usersDataLoading: value }),
  setUsersData: (data) => {
    if (!Object.keys(get().usersData).length) {
      set({ usersData: data });
    }
  },

  userDataLoading: false,
  userData: [],
  resetUserData: () => {
    set({ userData: [] });
  },
  getUserData: async (address) => {
    const userData = get().usersData[address];
    if (userData) {
      set({ userDataLoading: true });
      const formattedUserData = await Promise.all(
        userData.map(async (data) => {
          const isClaimed = await get().rescueService.isClaimed(
            data.chainId,
            data.index,
            data.distributionId,
          );

          return {
            ...data,
            isClaimed,
          };
        }),
      );

      set({ userData: formattedUserData });
    } else {
      set({ userData: [] });
    }
    set({ userDataLoading: false });
  },

  claim: async (chainId, address, tokensToClaim) => {
    const rescueService = get().rescueService;

    await get().executeTx({
      body: () => rescueService.claim(chainId, tokensToClaim),
      params: {
        type: 'claim',
        desiredChainID: chainId,
        payload: {
          chainId,
          address,
          tokensToClaim,
        },
      },
    });
  },
});
