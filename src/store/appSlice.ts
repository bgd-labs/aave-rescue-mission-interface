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
  account: string;
  amount: string;
  formattedAmount: string;
  merkleProof: string[];
  distributionId: number;
};

type AppView = '' | 'connectWallet' | 'info' | 'transaction';

export type IAppSlice = {
  appView: AppView;
  prevAppView: AppView;
  setAppView: (view: AppView) => Promise<void>;

  userData: FormattedUserData[];
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
    await set({ prevAppView: get().appView });
    await set({ appView: view });
  },

  userData: [],
  getUserData: async (address) => {
    const userData = usersData[address];
    if (userData) {
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
  },

  claim: async (tokensToClaim) => {
    const rescueService = get().rescueService;

    await get().executeTx({
      body: () =>
        rescueService.claim(
          tokensToClaim.map((token) => {
            return {
              index: token.index,
              account: token.account,
              amount: token.amount,
              merkleProof: token.merkleProof,
              distributionId: token.distributionId,
            };
          }),
        ),
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
