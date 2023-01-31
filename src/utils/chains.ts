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
    urls: ['https://rpc.tenderly.co/fork/94803b9a-e072-4e7f-a812-3baaa8a529c8'], // TODO: need change
    nativeCurrency: ETH,
    name: 'Tenderly mainnet fork',
    blockExplorerUrls: ['https://etherscan.io'],
  },
};

export const chainInfoHelper = initChainInformationConfig(CHAINS);
