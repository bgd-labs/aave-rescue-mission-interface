import { providers } from 'ethers';

import {
  createWeb3Slice as createWeb3BaseSlice,
  Web3Slice as BaseWeb3Slice,
} from '../../../packages/src/web3/store/walletSlice';
import { StoreSlice } from '../../store/types';
import { appConfig } from '../../utils/appConfig';
import { chainInfoHelper } from '../../utils/chains';
import { RescueService } from '../services/rescueService';

/**
 * web3Slice is required only to have a better control over providers state i.e
 * change provider, trigger data refetch if provider changed and have globally available instances of rpcs and data providers
 */
export type IWeb3Slice = BaseWeb3Slice & {
  provider: providers.JsonRpcBatchProvider;
  rescueService: RescueService;

  connectSigner: () => void;
};

export const initRescueService = (
  govCoreProvider: providers.JsonRpcBatchProvider,
) => {
  return new RescueService(govCoreProvider);
};

export const createWeb3Slice: StoreSlice<IWeb3Slice> = (set, get) => ({
  ...createWeb3BaseSlice({
    walletConnected: () => {
      get().connectSigner();
    },
    getChainParameters: chainInfoHelper.getChainParameters,
    desiredChainID: appConfig.chainId,
  })(set, get),
  provider: appConfig.provider,
  rescueService: initRescueService(appConfig.provider),

  connectSigner() {
    const activeWallet = get().activeWallet;
    if (activeWallet?.signer) {
      get().rescueService.connectSigner(activeWallet.signer);
    }
  },

  _impersonatedAddress: '0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2', // TODO: maybe need remove
});
