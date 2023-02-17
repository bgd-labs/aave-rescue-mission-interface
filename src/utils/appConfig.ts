import { chainInfoHelper } from './chains';

export const appChainId = 1;

export const appConfig = {
  chainId: appChainId,
  provider: chainInfoHelper.providerInstances[appChainId].instance,
  contractAddress: '0xa88c6D90eAe942291325f9ae3c66f3563B93FE10',
};
