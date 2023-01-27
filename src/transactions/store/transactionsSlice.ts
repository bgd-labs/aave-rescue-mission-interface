import { StoreSlice } from '../../../packages/src';
import {
  BaseTx,
  createTransactionsSlice as createBaseTransactionsSlice,
  ITransactionsSlice,
} from '../../../packages/src/web3/store/transactionsSlice';
import { IAppSlice } from '../../store/appSlice';
import { appConfig } from '../../utils/appConfig';
import { IWeb3Slice } from '../../web3/store/web3Slice';

const providers = {
  [appConfig.chainId]: appConfig.provider,
};

type TestTx = BaseTx & {
  type: 'claim';
  status?: number;
  pending: boolean;
  payload: {
    index: number;
    address: string;
    distributionId: number;
    formattedAmount: string;
  };
};

export type TransactionUnion = TestTx;

export type TransactionsSlice = ITransactionsSlice<TransactionUnion>;

export const createTransactionsSlice: StoreSlice<
  TransactionsSlice,
  IWeb3Slice & IAppSlice
> = (set, get) => ({
  ...createBaseTransactionsSlice<TransactionUnion>({
    txStatusChangedCallback: async (data) => {
      switch (data.type) {
        case 'claim':
          await get().getUserData();
          break;
      }
    },
    providers,
  })(set, get),
});
