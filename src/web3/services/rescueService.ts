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

  async isClaimed(index: number, distributionId: number) {
    return await this.rescueContract.isClaimed(index, distributionId);
  }

  async claim(
    index: number,
    address: string,
    amount: string,
    proofs: string[],
    distributionId: number,
  ) {
    let connectedRescue = this.rescueContract;
    if (this.signer) {
      connectedRescue = this.rescueContract.connect(this.signer);
    }
    return connectedRescue.claim(
      index,
      address,
      amount,
      proofs,
      distributionId,
    );
  }
}
