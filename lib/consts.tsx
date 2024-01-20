import { base, sepolia } from "@wagmi/core/chains"
import { BigNumber } from "ethers"

export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const TITLE = "ONCHAIN MAGIC"
export const ARTIST = "SWEETMAN.ETH"
export const ZORA_FEE = BigNumber.from("777000000000000")
