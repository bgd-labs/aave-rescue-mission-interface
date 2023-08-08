import { Web3Provider as Web3BaseProvider } from '../../../packages/src/web3/providers/Web3Provider';
import { useStore } from '../../store';
import { mainnetChainId } from '../../utils/appConfig';
import { chainInfoHelper, internalChains } from '../../utils/chains';

export default function Web3Provider() {
  return (
    <Web3BaseProvider
      connectorsInitProps={{
        appName: 'AAVE_Rescue',
        chains: internalChains,
        desiredChainId: mainnetChainId,
        urls: chainInfoHelper.urls,
        wcProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '',
      }}
      useStore={useStore}
    />
  );
}
