import { Web3Provider as Web3BaseProvider } from '../../../packages/src/web3/providers/Web3Provider';
import { useStore } from '../../store';
import { appConfig } from '../../utils/appConfig';
import { chainInfoHelper, CHAINS } from '../../utils/chains';

export default function Web3Provider() {
  return (
    <Web3BaseProvider
      connectorsInitProps={{
        appName: 'AAVE_Rescue',
        chains: CHAINS,
        desiredChainId: appConfig.chainId,
        urls: chainInfoHelper.urls,
      }}
      useStore={useStore}
    />
  );
}
