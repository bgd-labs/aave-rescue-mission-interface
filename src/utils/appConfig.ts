import { chainInfoHelper } from './chains';

export const appChainId = 3030; // TODO: need change

export const appConfig = {
  chainId: appChainId,
  provider: chainInfoHelper.providerInstances[appChainId].instance,
  contractAddress: '0x0df59C1A93b8a22d4a6236914A4956ab9891bb15', // TODO: need change
};
