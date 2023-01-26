/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IAaveMerkleDistributor {
  export type DistributionWithoutClaimedStruct = {
    token: PromiseOrValue<string>;
    merkleRoot: PromiseOrValue<BytesLike>;
  };

  export type DistributionWithoutClaimedStructOutput = [string, string] & {
    token: string;
    merkleRoot: string;
  };
}

export interface IAaveMerkleDistributorInterface extends utils.Interface {
  functions: {
    "_nextDistributionId()": FunctionFragment;
    "addDistributions(address[],bytes32[])": FunctionFragment;
    "claim(uint256,address,uint256,bytes32[],uint256)": FunctionFragment;
    "emergencyEtherTransfer(address,uint256)": FunctionFragment;
    "emergencyTokenTransfer(address,address,uint256)": FunctionFragment;
    "getDistribution(uint256)": FunctionFragment;
    "isClaimed(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_nextDistributionId"
      | "addDistributions"
      | "claim"
      | "emergencyEtherTransfer"
      | "emergencyTokenTransfer"
      | "getDistribution"
      | "isClaimed"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_nextDistributionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addDistributions",
    values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyEtherTransfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyTokenTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDistribution",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_nextDistributionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDistributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyEtherTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;

  events: {
    "Claimed(uint256,address,uint256,uint256)": EventFragment;
    "DistributionAdded(address,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionAdded"): EventFragment;
}

export interface ClaimedEventObject {
  index: BigNumber;
  account: string;
  amount: BigNumber;
  distributionId: BigNumber;
}
export type ClaimedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface DistributionAddedEventObject {
  token: string;
  merkleRoot: string;
  distributionId: BigNumber;
}
export type DistributionAddedEvent = TypedEvent<
  [string, string, BigNumber],
  DistributionAddedEventObject
>;

export type DistributionAddedEventFilter =
  TypedEventFilter<DistributionAddedEvent>;

export interface IAaveMerkleDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAaveMerkleDistributorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _nextDistributionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    addDistributions(
      tokens: PromiseOrValue<string>[],
      merkleRoots: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emergencyEtherTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emergencyTokenTransfer(
      erc20Token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDistribution(
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IAaveMerkleDistributor.DistributionWithoutClaimedStructOutput]>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  _nextDistributionId(overrides?: CallOverrides): Promise<BigNumber>;

  addDistributions(
    tokens: PromiseOrValue<string>[],
    merkleRoots: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claim(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    distributionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emergencyEtherTransfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emergencyTokenTransfer(
    erc20Token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDistribution(
    distributionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IAaveMerkleDistributor.DistributionWithoutClaimedStructOutput>;

  isClaimed(
    index: PromiseOrValue<BigNumberish>,
    distributionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    _nextDistributionId(overrides?: CallOverrides): Promise<BigNumber>;

    addDistributions(
      tokens: PromiseOrValue<string>[],
      merkleRoots: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyEtherTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyTokenTransfer(
      erc20Token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDistribution(
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IAaveMerkleDistributor.DistributionWithoutClaimedStructOutput>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Claimed(uint256,address,uint256,uint256)"(
      index?: null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
      distributionId?: PromiseOrValue<BigNumberish> | null
    ): ClaimedEventFilter;
    Claimed(
      index?: null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
      distributionId?: PromiseOrValue<BigNumberish> | null
    ): ClaimedEventFilter;

    "DistributionAdded(address,bytes32,uint256)"(
      token?: PromiseOrValue<string> | null,
      merkleRoot?: PromiseOrValue<BytesLike> | null,
      distributionId?: PromiseOrValue<BigNumberish> | null
    ): DistributionAddedEventFilter;
    DistributionAdded(
      token?: PromiseOrValue<string> | null,
      merkleRoot?: PromiseOrValue<BytesLike> | null,
      distributionId?: PromiseOrValue<BigNumberish> | null
    ): DistributionAddedEventFilter;
  };

  estimateGas: {
    _nextDistributionId(overrides?: CallOverrides): Promise<BigNumber>;

    addDistributions(
      tokens: PromiseOrValue<string>[],
      merkleRoots: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emergencyEtherTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emergencyTokenTransfer(
      erc20Token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDistribution(
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _nextDistributionId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addDistributions(
      tokens: PromiseOrValue<string>[],
      merkleRoots: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emergencyEtherTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emergencyTokenTransfer(
      erc20Token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDistribution(
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      distributionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
