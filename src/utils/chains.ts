import {
  ChainInformation,
  ETH,
  initChainInformationConfig,
} from '../../packages/src/utils/chainInfoHelpers';

// TODO: remove after mainnet connect
export const CHAINS: {
  [chainId: number]: ChainInformation;
} = {
  3030: {
    urls: ['https://rpc.tenderly.co/fork/ca9d4458-9385-449c-9435-33bc3ce3658b'], // TODO: need change
    nativeCurrency: ETH,
    name: 'Tenderly mainnet fork',
    blockExplorerUrls: ['https://etherscan.io'],
  },
};

export const chainInfoHelper = initChainInformationConfig(CHAINS);
