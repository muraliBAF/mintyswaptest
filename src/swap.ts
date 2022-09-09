import {
  AccountLiquidated as AccountLiquidatedEvent,
  Deposit as DepositEvent,
  FundingAccrued as FundingAccruedEvent,
  SyntheticBalanceUpdate as SyntheticBalanceUpdateEvent,
  Withdraw as WithdrawEvent
} from "../generated/Swap/Swap"
import {
  AccountLiquidated,
  Deposit,
  FundingAccrued,
  SyntheticBalanceUpdate,
  Withdraw
} from "../generated/schema"

export function handleAccountLiquidated(event: AccountLiquidatedEvent): void {
  let entity = new AccountLiquidated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.liquidator = event.params.liquidator
  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount
  entity.save()
}

export function handleFundingAccrued(event: FundingAccruedEvent): void {
  let entity = new FundingAccrued(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tradeId = event.params.tradeId
  entity.account = event.params.account
  entity.market = event.params.market
  entity.amount_value = event.params.amount.value
  entity.amount_sign = event.params.amount.sign
  entity.fundingRate_value = event.params.fundingRate.value
  entity.fundingRate_sign = event.params.fundingRate.sign
  entity.save()
}

export function handleSyntheticBalanceUpdate(
  event: SyntheticBalanceUpdateEvent
): void {
  let entity = new SyntheticBalanceUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tradeId = event.params.tradeId
  entity.account = event.params.account
  entity.assetBalance_market = event.params.assetBalance.market
  entity.assetBalance_sign = event.params.assetBalance.sign
  entity.assetBalance_amount_value = event.params.assetBalance.amount.value
  entity.assetBalance_amount_sign = event.params.assetBalance.amount.sign
  entity.assetBalance_cost_value = event.params.assetBalance.cost.value
  entity.assetBalance_cost_sign = event.params.assetBalance.cost.sign
  entity.assetBalance_cachedFunding_value =
    event.params.assetBalance.cachedFunding.value
  entity.assetBalance_cachedFunding_sign =
    event.params.assetBalance.cachedFunding.sign
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount
  entity.save()
}
