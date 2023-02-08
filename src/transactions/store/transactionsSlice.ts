import { StoreSlice } from '../../../packages/src';
import {
  BaseTx,
  createTransactionsSlice as createBaseTransactionsSlice,
  ITransactionsSlice,
} from '../../../packages/src/web3/store/transactionsSlice';
import { IAppSlice, TokenToClaim } from '../../store/appSlice';
import { appConfig } from '../../utils/appConfig';
import { IWeb3Slice } from '../../web3/store/web3Slice';

const providers = {
  [appConfig.chainId]: appConfig.provider,
};

type ClaimTx = BaseTx & {
  type: 'claim';
  status?: number;
  pending: boolean;
  payload: {
    address: string;
    tokensToClaim: TokenToClaim[];
  };
};

export type TransactionUnion = ClaimTx;

export type TransactionsSlice = ITransactionsSlice<TransactionUnion>;

export const createTransactionsSlice: StoreSlice<
  TransactionsSlice,
  IWeb3Slice & IAppSlice
> = (set, get) => ({
  ...createBaseTransactionsSlice<TransactionUnion>({
    txStatusChangedCallback: async (data) => {
      switch (data.type) {
        case 'claim':
          await get().getUserData(data.payload.address);
          break;
      }
    },
    defaultProviders: providers,
  })(set, get),
});
