import { StoreSlice } from '../../store/types';

export interface IUISlice {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const createUISlice: StoreSlice<IUISlice> = (set, get) => ({
  isModalOpen: false,
  setModalOpen: (value) => {
    set({ isModalOpen: value });
  },
});
