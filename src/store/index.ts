import { create, GetState, SetState } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Web3Slice as BaseWeb3Slice } from '../../packages/src/web3/store/walletSlice';
import {
  createTransactionsSlice,
  TransactionsSlice,
} from '../transactions/store/transactionsSlice';
import { createUISlice, IUISlice } from '../ui/store/uiSlice';
import { createWeb3Slice, IWeb3Slice } from '../web3/store/web3Slice';

type RootState = IWeb3Slice & TransactionsSlice & BaseWeb3Slice & IUISlice;

const createRootSlice = (
  set: SetState<RootState>,
  get: GetState<RootState>,
) => ({
  ...createWeb3Slice(set, get),
  ...createTransactionsSlice(set, get),
  ...createUISlice(set, get),
});

export const useStore = create(devtools(createRootSlice, { serialize: true }));
