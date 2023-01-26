import { providers } from 'ethers';

import { IAaveMerkleDistributor } from '../../contracts/IAaveMerkleDistributor';
import { IAaveMerkleDistributor__factory } from '../../contracts/IAaveMerkleDistributor__factory';
import { appConfig } from '../../utils/appConfig';

export class RescueService {
  private rpcProvider: providers.JsonRpcBatchProvider;
  private signer?: providers.JsonRpcSigner;

  private rescueContract: IAaveMerkleDistributor;

  constructor(rpcProvider: providers.JsonRpcBatchProvider) {
    this.rpcProvider = rpcProvider;

    this.rescueContract = IAaveMerkleDistributor__factory.connect(
      appConfig.contractAddress,
      this.rpcProvider,
    );
  }
  connectSigner(signer: providers.JsonRpcSigner) {
    this.signer = signer;
  }

  // TODO: add contract functions
}
