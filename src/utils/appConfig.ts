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
    [polygonChainId]: '', // TODO: need add
    [avalancheChainId]: '', // TODO: need add
    [OPMainnetChainId]: '', // TODO: need add
  },
};
