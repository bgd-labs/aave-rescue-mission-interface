import { BigNumberish, BytesLike, providers } from 'ethers';

import { PromiseOrValue } from '../../contracts/common';
import { IAaveMerkleDistributor } from '../../contracts/IAaveMerkleDistributor';
import { IAaveMerkleDistributor__factory } from '../../contracts/IAaveMerkleDistributor__factory';
import { appConfig } from '../../utils/appConfig';

export type TokenClaimStruct = {
  index: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  merkleProof: PromiseOrValue<BytesLike>[];
  distributionId: PromiseOrValue<BigNumberish>;
};

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

  async claim(tokensForClaim: TokenClaimStruct[]) {
    let connectedRescue = this.rescueContract;
    if (this.signer) {
      connectedRescue = this.rescueContract.connect(this.signer);
    }
    return connectedRescue.claim(tokensForClaim);
  }
}
