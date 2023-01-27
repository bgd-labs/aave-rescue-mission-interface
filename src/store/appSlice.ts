import { TransactionsSlice } from '../transactions/store/transactionsSlice';
import { appConfig } from '../utils/appConfig';
import { UserData, usersData } from '../utils/usersMarkleTrees';
import { IWeb3Slice } from '../web3/store/web3Slice';
import { StoreSlice } from './types';

export interface FormattedUserData extends UserData {
  isClaimed: boolean;
}

export type IAppSlice = {
  userData: FormattedUserData[];
  getUserData: () => Promise<void>;

  selectedUserData?: FormattedUserData;
  setSelectedUserData: (data: FormattedUserData | undefined) => void;

  claim: (
    index: number,
    address: string,
    amount: string,
    formattedAmount: string,
    proofs: string[],
    distributionId: number,
  ) => Promise<void>;
};

export const createAppSlice: StoreSlice<
  IAppSlice,
  IWeb3Slice & TransactionsSlice
> = (set, get) => ({
  userData: [],
  getUserData: async () => {
    const activeWallet = get().activeWallet;
    if (activeWallet) {
      const userData = usersData[activeWallet.accounts[0]];
      if (userData) {
        const formattedUserData = await Promise.all(
          userData.map(async (data) => {
            // TODO: uncomment after get contract address
            // const isClaimed = await get().rescueService.isClaimed(
            //   data.index,
            //   data.distributionId,
            // );

            const isClaimed = false; // TODO: remove after get contract address

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
    } else {
      set({ userData: [] });
    }
  },

  setSelectedUserData: (data) => {
    set({ selectedUserData: data });
  },

  claim: async (
    index,
    address,
    amount,
    formattedAmount,
    proofs,
    distributionId,
  ) => {
    const rescueService = get().rescueService;

    await get().executeTx({
      body: () =>
        rescueService.claim(index, address, amount, proofs, distributionId),
      params: {
        type: 'claim',
        desiredChainID: appConfig.chainId,
        payload: {
          index,
          address,
          distributionId,
          formattedAmount,
        },
      },
    });
  },
});
