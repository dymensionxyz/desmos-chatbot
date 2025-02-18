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
    PayableOverrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type {EventFragment, FunctionFragment, Result,} from "@ethersproject/abi";
import type {Listener, Provider} from "@ethersproject/providers";
import type {OnEvent, TypedEvent, TypedEventFilter, TypedListener,} from "./common.ts";

export declare namespace AIGamblingV1 {
  export type BetStruct = {
    promptId: BigNumberish;
    amount: BigNumberish;
    communityFee: BigNumberish;
    guessedNumber: BigNumberish;
    correctNumber: BigNumberish;
    persuasion: string;
    resolved: boolean;
    won: boolean;
    canceled: boolean;
  };

  export type BetStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    boolean,
    boolean,
    boolean
  ] & {
    promptId: BigNumber;
    amount: BigNumber;
    communityFee: BigNumber;
    guessedNumber: BigNumber;
    correctNumber: BigNumber;
    persuasion: string;
    resolved: boolean;
    won: boolean;
    canceled: boolean;
  };

  export type GameInfoStruct = {
    houseSupply: BigNumberish;
    houseActiveBalance: BigNumberish;
    minBetAmount: BigNumberish;
    maxBetAmount: BigNumberish;
    maxBetAmountPercentage: BigNumberish;
  };

  export type GameInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    houseSupply: BigNumber;
    houseActiveBalance: BigNumber;
    minBetAmount: BigNumber;
    maxBetAmount: BigNumber;
    maxBetAmountPercentage: BigNumber;
  };
}

export interface AIGamblingV1Interface extends utils.Interface {
  functions: {
    "PROMPT()": FunctionFragment;
    "__House_init(address)": FunctionFragment;
    "balances(address)": FunctionFragment;
    "bets(address)": FunctionFragment;
    "checkAnswerStatus(uint64)": FunctionFragment;
    "communityPoolPercentage()": FunctionFragment;
    "deposit()": FunctionFragment;
    "depositSupply()": FunctionFragment;
    "estimateCommunityFee(uint256)": FunctionFragment;
    "estimateReward(uint256)": FunctionFragment;
    "getGameInfo()": FunctionFragment;
    "getHistory(address)": FunctionFragment;
    "history(address,uint256)": FunctionFragment;
    "houseFeePercentage()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "maxBetAmountPercentage()": FunctionFragment;
    "minBetAmount()": FunctionFragment;
    "owner()": FunctionFragment;
    "placeBet(uint256,string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resolveBet()": FunctionFragment;
    "setAIOracle(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateCommunityPoolPercentage(uint256)": FunctionFragment;
    "updateHouseFeePercentage(uint256)": FunctionFragment;
    "updateMaxBetAmountPercentage(uint256)": FunctionFragment;
    "updateMinBetAmount(uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawSupply(uint256,address)": FunctionFragment;
    "withdrawalBalance()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PROMPT"
      | "__House_init"
      | "balances"
      | "bets"
      | "checkAnswerStatus"
      | "communityPoolPercentage"
      | "deposit"
      | "depositSupply"
      | "estimateCommunityFee"
      | "estimateReward"
      | "getGameInfo"
      | "getHistory"
      | "history"
      | "houseFeePercentage"
      | "initialize"
      | "maxBetAmountPercentage"
      | "minBetAmount"
      | "owner"
      | "placeBet"
      | "renounceOwnership"
      | "resolveBet"
      | "setAIOracle"
      | "transferOwnership"
      | "updateCommunityPoolPercentage"
      | "updateHouseFeePercentage"
      | "updateMaxBetAmountPercentage"
      | "updateMinBetAmount"
      | "withdraw"
      | "withdrawSupply"
      | "withdrawalBalance"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PROMPT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "__House_init",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(functionFragment: "bets", values: [string]): string;
  encodeFunctionData(
    functionFragment: "checkAnswerStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "communityPoolPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimateCommunityFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getHistory", values: [string]): string;
  encodeFunctionData(
    functionFragment: "history",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "houseFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxBetAmountPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minBetAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "placeBet",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveBet",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setAIOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCommunityPoolPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateHouseFeePercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMaxBetAmountPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinBetAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawSupply",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "PROMPT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "__House_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkAnswerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityPoolPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateCommunityFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHistory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "history", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "houseFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxBetAmountPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minBetAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "placeBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resolveBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAIOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCommunityPoolPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateHouseFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMaxBetAmountPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinBetAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalBalance",
    data: BytesLike
  ): Result;

  events: {
    "BetPlaced(address,(uint64,uint256,uint256,uint256,uint256,string,bool,bool,bool))": EventFragment;
    "BetResolved(address,(uint64,uint256,uint256,uint256,uint256,string,bool,bool,bool))": EventFragment;
    "Initialized(uint64)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BetPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BetResolved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BetPlacedEventObject {
  user: string;
  bet: AIGamblingV1.BetStructOutput;
}
export type BetPlacedEvent = TypedEvent<
  [string, AIGamblingV1.BetStructOutput],
  BetPlacedEventObject
>;

export type BetPlacedEventFilter = TypedEventFilter<BetPlacedEvent>;

export interface BetResolvedEventObject {
  user: string;
  bet: AIGamblingV1.BetStructOutput;
}
export type BetResolvedEvent = TypedEvent<
  [string, AIGamblingV1.BetStructOutput],
  BetResolvedEventObject
>;

export type BetResolvedEventFilter = TypedEventFilter<BetResolvedEvent>;

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface AIGamblingV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AIGamblingV1Interface;

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
    PROMPT(overrides?: CallOverrides): Promise<[string]>;

    __House_init(
      _initialOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    bets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        boolean,
        boolean
      ] & {
        promptId: BigNumber;
        amount: BigNumber;
        communityFee: BigNumber;
        guessedNumber: BigNumber;
        correctNumber: BigNumber;
        persuasion: string;
        resolved: boolean;
        won: boolean;
        canceled: boolean;
      }
    >;

    checkAnswerStatus(
      promptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { answer: string; exists: boolean }>;

    communityPoolPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositSupply(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    estimateCommunityFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    estimateReward(
      betAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGameInfo(
      overrides?: CallOverrides
    ): Promise<[AIGamblingV1.GameInfoStructOutput]>;

    getHistory(
      user: string,
      overrides?: CallOverrides
    ): Promise<[AIGamblingV1.BetStructOutput[]]>;

    history(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        boolean,
        boolean
      ] & {
        promptId: BigNumber;
        amount: BigNumber;
        communityFee: BigNumber;
        guessedNumber: BigNumber;
        correctNumber: BigNumber;
        persuasion: string;
        resolved: boolean;
        won: boolean;
        canceled: boolean;
      }
    >;

    houseFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _initialOwner: string,
      _aiOracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    maxBetAmountPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    minBetAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    placeBet(
      guessedNumber: BigNumberish,
      persuasion: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    resolveBet(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setAIOracle(
      _aiOracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateCommunityPoolPercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateHouseFeePercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateMaxBetAmountPercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateMinBetAmount(
      newAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawSupply(
      amount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawalBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  PROMPT(overrides?: CallOverrides): Promise<string>;

  __House_init(
    _initialOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  bets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      boolean,
      boolean,
      boolean
    ] & {
      promptId: BigNumber;
      amount: BigNumber;
      communityFee: BigNumber;
      guessedNumber: BigNumber;
      correctNumber: BigNumber;
      persuasion: string;
      resolved: boolean;
      won: boolean;
      canceled: boolean;
    }
  >;

  checkAnswerStatus(
    promptId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, boolean] & { answer: string; exists: boolean }>;

  communityPoolPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositSupply(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  estimateCommunityFee(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  estimateReward(
    betAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGameInfo(
    overrides?: CallOverrides
  ): Promise<AIGamblingV1.GameInfoStructOutput>;

  getHistory(
    user: string,
    overrides?: CallOverrides
  ): Promise<AIGamblingV1.BetStructOutput[]>;

  history(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      boolean,
      boolean,
      boolean
    ] & {
      promptId: BigNumber;
      amount: BigNumber;
      communityFee: BigNumber;
      guessedNumber: BigNumber;
      correctNumber: BigNumber;
      persuasion: string;
      resolved: boolean;
      won: boolean;
      canceled: boolean;
    }
  >;

  houseFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _initialOwner: string,
    _aiOracle: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  maxBetAmountPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  minBetAmount(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  placeBet(
    guessedNumber: BigNumberish,
    persuasion: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  resolveBet(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setAIOracle(
    _aiOracle: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateCommunityPoolPercentage(
    newPercentage: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateHouseFeePercentage(
    newPercentage: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateMaxBetAmountPercentage(
    newPercentage: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateMinBetAmount(
    newAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawSupply(
    amount: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawalBalance(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    PROMPT(overrides?: CallOverrides): Promise<string>;

    __House_init(
      _initialOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        boolean,
        boolean
      ] & {
        promptId: BigNumber;
        amount: BigNumber;
        communityFee: BigNumber;
        guessedNumber: BigNumber;
        correctNumber: BigNumber;
        persuasion: string;
        resolved: boolean;
        won: boolean;
        canceled: boolean;
      }
    >;

    checkAnswerStatus(
      promptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { answer: string; exists: boolean }>;

    communityPoolPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<void>;

    depositSupply(overrides?: CallOverrides): Promise<void>;

    estimateCommunityFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateReward(
      betAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameInfo(
      overrides?: CallOverrides
    ): Promise<AIGamblingV1.GameInfoStructOutput>;

    getHistory(
      user: string,
      overrides?: CallOverrides
    ): Promise<AIGamblingV1.BetStructOutput[]>;

    history(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        boolean,
        boolean
      ] & {
        promptId: BigNumber;
        amount: BigNumber;
        communityFee: BigNumber;
        guessedNumber: BigNumber;
        correctNumber: BigNumber;
        persuasion: string;
        resolved: boolean;
        won: boolean;
        canceled: boolean;
      }
    >;

    houseFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _initialOwner: string,
      _aiOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    maxBetAmountPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    minBetAmount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    placeBet(
      guessedNumber: BigNumberish,
      persuasion: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resolveBet(overrides?: CallOverrides): Promise<void>;

    setAIOracle(_aiOracle: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCommunityPoolPercentage(
      newPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateHouseFeePercentage(
      newPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMaxBetAmountPercentage(
      newPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMinBetAmount(
      newAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawSupply(
      amount: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawalBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "BetPlaced(address,(uint64,uint256,uint256,uint256,uint256,string,bool,bool,bool))"(
      user?: string | null,
      bet?: null
    ): BetPlacedEventFilter;
    BetPlaced(user?: string | null, bet?: null): BetPlacedEventFilter;

    "BetResolved(address,(uint64,uint256,uint256,uint256,uint256,string,bool,bool,bool))"(
      user?: string | null,
      bet?: null
    ): BetResolvedEventFilter;
    BetResolved(user?: string | null, bet?: null): BetResolvedEventFilter;

    "Initialized(uint64)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    PROMPT(overrides?: CallOverrides): Promise<BigNumber>;

    __House_init(
      _initialOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    checkAnswerStatus(
      promptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communityPoolPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    depositSupply(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    estimateCommunityFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateReward(
      betAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getHistory(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    history(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    houseFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _initialOwner: string,
      _aiOracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    maxBetAmountPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    minBetAmount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    placeBet(
      guessedNumber: BigNumberish,
      persuasion: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    resolveBet(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    setAIOracle(
      _aiOracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateCommunityPoolPercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateHouseFeePercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateMaxBetAmountPercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateMinBetAmount(
      newAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    withdrawSupply(
      amount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawalBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PROMPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __House_init(
      _initialOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAnswerStatus(
      promptId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    communityPoolPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositSupply(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    estimateCommunityFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateReward(
      betAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHistory(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    history(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    houseFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _initialOwner: string,
      _aiOracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    maxBetAmountPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minBetAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    placeBet(
      guessedNumber: BigNumberish,
      persuasion: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    resolveBet(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setAIOracle(
      _aiOracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateCommunityPoolPercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateHouseFeePercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateMaxBetAmountPercentage(
      newPercentage: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateMinBetAmount(
      newAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawSupply(
      amount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawalBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
