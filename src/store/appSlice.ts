import { TransactionsSlice } from '../transactions/store/transactionsSlice';
import { appConfig } from '../utils/appConfig';
import { UserData, usersData } from '../utils/usersMarkleTrees';
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

type AppView = '' | 'connectWallet' | 'info';

export type IAppSlice = {
  appView: AppView;
  prevAppView: AppView;
  setAppView: (view: AppView) => Promise<void>;

  checkedAddress: string;
  setCheckedAddress: (value: string) => void;

  userDataLoading: boolean;
  userData: FormattedUserData[];
  resetUserData: () => void;
  getUserData: (address: string) => Promise<void>;

  claim: (tokensToClaim: TokenToClaim[]) => Promise<void>;
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

  userDataLoading: false,
  userData: [],
  resetUserData: () => {
    set({ userData: [] });
  },
  getUserData: async (address) => {
    const userData = usersData[address];
    if (userData) {
      set({ userDataLoading: true });
      const formattedUserData = await Promise.all(
        userData.map(async (data) => {
          const isClaimed = await get().rescueService.isClaimed(
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

  claim: async (tokensToClaim) => {
    const rescueService = get().rescueService;

    await get().executeTx({
      body: () => rescueService.claim(tokensToClaim),
      params: {
        type: 'claim',
        desiredChainID: appConfig.chainId,
        payload: {
          tokensToClaim,
        },
      },
    });
  },
});
