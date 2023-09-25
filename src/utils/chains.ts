import {
  ChainInformation,
  ETH,
  initChainInformationConfig,
  initialChains,
} from '../../packages/src';

const CHAINS: {
  [chainId: number]: ChainInformation;
} = {
  10: {
    urls: [`https://optimism.blockpi.network/v1/rpc/public`],
    nativeCurrency: ETH,
    name: 'OP Mainnet',
    blockExplorerUrls: ['https://optimistic.etherscan.io/'],
  },
};

export const internalChains = {
  1: initialChains[1],
  137: initialChains[137],
  43114: initialChains[43114],
  ...CHAINS,
};

export const chainInfoHelper = initChainInformationConfig(CHAINS);
