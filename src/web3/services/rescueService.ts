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
  private signer?: providers.JsonRpcSigner;

  private rescueContracts: Record<number, IAaveMerkleDistributor> = {};

  constructor() {
    const initialRescueContracts: Record<number, IAaveMerkleDistributor> = {};
    appConfig.chainIds.forEach((chainId) => {
      const contractAddress = appConfig.contractAddresses[chainId];
      initialRescueContracts[chainId] = IAaveMerkleDistributor__factory.connect(
        contractAddress,
        appConfig.providers[chainId],
      );
    });

    this.rescueContracts = initialRescueContracts;
  }
  connectSigner(signer: providers.JsonRpcSigner) {
    this.signer = signer;
  }

  async isClaimed(chainId: number, index: number, distributionId: number) {
    return await this.rescueContracts[chainId].isClaimed(index, distributionId);
  }

  async claim(chainId: number, tokensForClaim: TokenClaimStruct[]) {
    let connectedRescue = this.rescueContracts[chainId];
    if (this.signer) {
      connectedRescue = this.rescueContracts[chainId].connect(this.signer);
    }
    return connectedRescue.claim(tokensForClaim);
  }
}
