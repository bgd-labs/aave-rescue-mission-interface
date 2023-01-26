import { StoreSlice } from '../../store/types';

export interface IUISlice {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;

  accountInfoModalOpen: boolean;
  setAccountInfoModalOpen: (value: boolean) => void;

  allTransactionModalOpen: boolean;
  setAllTransactionModalOpen: (value: boolean) => void;

  isTxModalOpen: boolean;
  setIsTxModalOpen: (value: boolean) => void;
}

export const createUISlice: StoreSlice<IUISlice> = (set, get) => ({
  isModalOpen: false,
  setModalOpen: (value) => {
    set({ isModalOpen: value });
  },

  accountInfoModalOpen: false,
  setAccountInfoModalOpen: (value) => {
    set({ accountInfoModalOpen: value });
  },

  allTransactionModalOpen: false,
  setAllTransactionModalOpen: (value) => {
    set({ allTransactionModalOpen: value });
  },

  isTxModalOpen: false,
  setIsTxModalOpen: (value) => {
    set({ isTxModalOpen: value });
  },
});
