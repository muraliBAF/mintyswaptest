import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AccountLiquidated,
  Deposit,
  FundingAccrued,
  SyntheticBalanceUpdate,
  Withdraw
} from "../generated/Swap/Swap"

export function createAccountLiquidatedEvent(
  account: Address,
  liquidator: Address
): AccountLiquidated {
  let accountLiquidatedEvent = changetype<AccountLiquidated>(newMockEvent())

  accountLiquidatedEvent.parameters = new Array()

  accountLiquidatedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  accountLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )

  return accountLiquidatedEvent
}

export function createDepositEvent(
  account: Address,
  tokenAddress: Address,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createFundingAccruedEvent(
  tradeId: BigInt,
  account: Address,
  market: string,
  amount: ethereum.Tuple,
  fundingRate: ethereum.Tuple
): FundingAccrued {
  let fundingAccruedEvent = changetype<FundingAccrued>(newMockEvent())

  fundingAccruedEvent.parameters = new Array()

  fundingAccruedEvent.parameters.push(
    new ethereum.EventParam(
      "tradeId",
      ethereum.Value.fromUnsignedBigInt(tradeId)
    )
  )
  fundingAccruedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  fundingAccruedEvent.parameters.push(
    new ethereum.EventParam("market", ethereum.Value.fromString(market))
  )
  fundingAccruedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromTuple(amount))
  )
  fundingAccruedEvent.parameters.push(
    new ethereum.EventParam(
      "fundingRate",
      ethereum.Value.fromTuple(fundingRate)
    )
  )

  return fundingAccruedEvent
}

export function createSyntheticBalanceUpdateEvent(
  tradeId: BigInt,
  account: Address,
  assetBalance: ethereum.Tuple
): SyntheticBalanceUpdate {
  let syntheticBalanceUpdateEvent = changetype<SyntheticBalanceUpdate>(
    newMockEvent()
  )

  syntheticBalanceUpdateEvent.parameters = new Array()

  syntheticBalanceUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tradeId",
      ethereum.Value.fromUnsignedBigInt(tradeId)
    )
  )
  syntheticBalanceUpdateEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  syntheticBalanceUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "assetBalance",
      ethereum.Value.fromTuple(assetBalance)
    )
  )

  return syntheticBalanceUpdateEvent
}

export function createWithdrawEvent(
  account: Address,
  tokenAddress: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
