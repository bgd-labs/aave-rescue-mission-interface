import { StaticJsonRpcBatchProvider } from '../../packages/src/utils/StaticJsonRpcBatchProvider';
import { chainInfoHelper } from './chains';

export const mainnetChainId = 1;
export const polygonChainId = 137;
export const avalancheChainId = 43114;
export const OPMainnetChainId = 10;

export const appConfig: {
  chainIds: number[];
  providers: Record<number, StaticJsonRpcBatchProvider>;
  contractAddresses: Record<number, string>;
} = {
  chainIds: [
    mainnetChainId,
    polygonChainId,
    avalancheChainId,
    OPMainnetChainId,
  ],
  providers: {
    [mainnetChainId]:
      chainInfoHelper.providerInstances[mainnetChainId].instance,
    [polygonChainId]:
      chainInfoHelper.providerInstances[polygonChainId].instance,
    [avalancheChainId]:
      chainInfoHelper.providerInstances[avalancheChainId].instance,
    [OPMainnetChainId]:
      chainInfoHelper.providerInstances[OPMainnetChainId].instance,
  },
  contractAddresses: {
    [mainnetChainId]: '0xa88c6D90eAe942291325f9ae3c66f3563B93FE10',
    [polygonChainId]: '0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b',
    [avalancheChainId]: '', // TODO: need add
    [OPMainnetChainId]: '0x1685d81212580dd4cda287616c2f6f4794927e18',
  },
};
