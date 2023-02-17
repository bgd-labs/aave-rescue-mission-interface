import { initialChains } from '../../../packages/src';
import { Web3Provider as Web3BaseProvider } from '../../../packages/src/web3/providers/Web3Provider';
import { useStore } from '../../store';
import { appConfig } from '../../utils/appConfig';
import { chainInfoHelper } from '../../utils/chains';

export default function Web3Provider() {
  return (
    <Web3BaseProvider
      connectorsInitProps={{
        appName: 'AAVE_Rescue',
        chains: initialChains,
        desiredChainId: appConfig.chainId,
        urls: chainInfoHelper.urls,
      }}
      useStore={useStore}
    />
  );
}
