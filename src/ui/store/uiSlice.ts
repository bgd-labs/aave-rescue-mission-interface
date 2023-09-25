import { StoreSlice } from '../../store/types';

export interface IUISlice {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;

  isAboutModalOpen: boolean;
  setIsAboutModalOpen: (value: boolean) => void;

  isAppBlockedByTerms: boolean;
  checkIsAppBlockedByTerms: () => void;
  setIsTermsAccept: (value: boolean) => void;
}

export const createUISlice: StoreSlice<IUISlice> = (set, get) => ({
  isModalOpen: false,
  setModalOpen: (value) => {
    set({ isModalOpen: value });
  },

  isAboutModalOpen: false,
  setIsAboutModalOpen: (value) => {
    set({ isAboutModalOpen: value });
  },

  isAppBlockedByTerms: false,
  checkIsAppBlockedByTerms: () => {
    if (localStorage?.getItem('termsAccept') !== 'true') {
      set({ isAppBlockedByTerms: true });
    } else {
      set({ isAppBlockedByTerms: false });
    }
  },
  setIsTermsAccept: (value: boolean) => {
    if (value) {
      localStorage?.setItem('termsAccept', 'true');
      set({ isAppBlockedByTerms: false });
    }
  },
});
