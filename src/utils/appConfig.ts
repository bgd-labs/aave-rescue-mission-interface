import { chainInfoHelper } from './chains';

export const appChainId = 3030; // TODO: need changes

export const appConfig = {
  chainId: appChainId,
  provider: chainInfoHelper.providerInstances[appChainId].instance,
  contractAddress: '0x57ce2286A84b3757B7D0286eC4B77CF1dCEd660d', // TODO: need fix
};
