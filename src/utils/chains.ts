import {
  ChainInformation,
  ETH,
  initChainInformationConfig,
} from '../../packages/src/utils/chainInfoHelpers';

export const CHAINS: {
  [chainId: number]: ChainInformation;
} = {
  3030: {
    urls: ['https://rpc.tenderly.co/fork/8ed34876-8ca4-43fb-a04c-38a083cff022'], // TODO: need change
    nativeCurrency: ETH,
    name: 'Tenderly mainnet fork',
    blockExplorerUrls: [''],
  },
};

export const chainInfoHelper = initChainInformationConfig(CHAINS);
