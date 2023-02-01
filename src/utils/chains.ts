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
    urls: ['https://rpc.tenderly.co/fork/d40140cd-47b0-45aa-b614-8d8e381a61b3'], // TODO: need change
    nativeCurrency: ETH,
    name: 'Tenderly mainnet fork',
    blockExplorerUrls: ['https://etherscan.io'],
  },
};

export const chainInfoHelper = initChainInformationConfig(CHAINS);
