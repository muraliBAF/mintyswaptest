import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AccountLiquidated } from "../generated/schema"
import { AccountLiquidated as AccountLiquidatedEvent } from "../generated/Swap/Swap"
import { handleAccountLiquidated } from "../src/swap"
import { createAccountLiquidatedEvent } from "./swap-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let liquidator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAccountLiquidatedEvent = createAccountLiquidatedEvent(
      account,
      liquidator
    )
    handleAccountLiquidated(newAccountLiquidatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountLiquidated created and stored", () => {
    assert.entityCount("AccountLiquidated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccountLiquidated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
