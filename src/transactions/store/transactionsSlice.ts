import { StoreSlice } from '../../../packages/src';
import {
  BaseTx,
  createTransactionsSlice as createBaseTransactionsSlice,
  ITransactionsSlice,
} from '../../../packages/src/web3/store/transactionsSlice';
import { appConfig } from '../../utils/appConfig';
import { IWeb3Slice } from '../../web3/store/web3Slice';

const providers = {
  [appConfig.chainId]: appConfig.provider,
};

type TestTx = BaseTx & {
  type: 'test';
  status?: number;
  pending: boolean;
};

export type TransactionUnion = TestTx;

export type TransactionsSlice = ITransactionsSlice<TransactionUnion>;

export const createTransactionsSlice: StoreSlice<
  TransactionsSlice,
  IWeb3Slice
> = (set, get) => ({
  ...createBaseTransactionsSlice<TransactionUnion>({
    txStatusChangedCallback: async (data) => {
      switch (data.type) {
        case 'test':
          await console.log('tx executed');
          break;
      }
    },
    providers,
  })(set, get),
});
