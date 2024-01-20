import { base, sepolia } from "@wagmi/core/chains"

export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const TITLE = "ONCHAIN MAGIC"
export const ARTIST = "SWEETMAN.ETH"
