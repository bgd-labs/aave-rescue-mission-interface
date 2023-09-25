import { createWalletSlice, IWalletSlice } from '../../../packages/src';
import { StoreSlice } from '../../store/types';
import { TransactionsSlice } from '../../transactions/store/transactionsSlice';
import { chainInfoHelper } from '../../utils/chains';
import { RescueService } from '../services/rescueService';

/**
 * web3Slice is required only to have a better control over providers state i.e
 * change provider, trigger data refetch if provider changed and have globally available instances of rpcs and data providers
 */
export type IWeb3Slice = IWalletSlice & {
  rescueService: RescueService;
  connectSigner: () => void;
};

export const createWeb3Slice: StoreSlice<IWeb3Slice, TransactionsSlice> = (
  set,
  get,
) => ({
  ...createWalletSlice({
    walletConnected: () => {
      get().connectSigner();
    },
    getChainParameters: chainInfoHelper.getChainParameters,
  })(set, get),
  rescueService: new RescueService(),
  connectSigner() {
    const activeWallet = get().activeWallet;
    if (activeWallet?.signer) {
      get().rescueService.connectSigner(activeWallet.signer);
    }
  },
});
