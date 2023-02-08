import { create, GetState, SetState } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IWalletSlice } from '../../packages/src';
import {
  createTransactionsSlice,
  TransactionsSlice,
} from '../transactions/store/transactionsSlice';
import { createUISlice, IUISlice } from '../ui/store/uiSlice';
import { createWeb3Slice, IWeb3Slice } from '../web3/store/web3Slice';
import { createAppSlice, IAppSlice } from './appSlice';

type RootState = IWeb3Slice &
  TransactionsSlice &
  IWalletSlice &
  IUISlice &
  IAppSlice;

const createRootSlice = (
  set: SetState<RootState>,
  get: GetState<RootState>,
) => ({
  ...createWeb3Slice(set, get),
  ...createTransactionsSlice(set, get),
  ...createUISlice(set, get),
  ...createAppSlice(set, get),
});

export const useStore = create(devtools(createRootSlice, { serialize: true }));
