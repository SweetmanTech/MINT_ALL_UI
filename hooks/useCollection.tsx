import { useEffect, useState } from "react"
import { BigNumber } from "ethers"
import { useAccount } from "wagmi"
import { useZoraFixedPriceSaleStrategy } from "onchain-magic"
import { zoraCreatorFixedPriceSaleStrategyAddress } from "@zoralabs/protocol-deployments"
import getNFTsForContract from "../lib/alchemy/getNFTsForContract"
import getFormattedDrops from "../lib/getFormattedDrops"
import useUniversalMinter from "./useUniversalMinter"
import getCalldatas from "../lib/getCalldatas"
import { ZORA_FEE } from "../lib/consts"

const useCollection = (collectionAddress, chainId) => {
  const [drops, setDrops] = useState([])
  const { mintBatchWithoutFees } = useUniversalMinter(chainId)
  const { address } = useAccount()
  const defaultMinter = zoraCreatorFixedPriceSaleStrategyAddress[chainId]
  const { sale } = useZoraFixedPriceSaleStrategy(defaultMinter)

  const getValues = async () => {
    const pricesPromises = drops.map((_, index) => {
      const tokenId = BigNumber.from(index + 1)
      return sale(collectionAddress, tokenId.toString())
    })
    const prices = await Promise.all(pricesPromises)
    const values = prices.map((price) => price.pricePerToken.add(ZORA_FEE).toString())
    return values
  }

  const collectAll = async (minter = defaultMinter) => {
    const targets = Array(drops.length).fill(collectionAddress)
    const calldatas = getCalldatas(drops.length, minter, address, address)
    const values = await getValues()
    const totalValue = values.reduce(
      (total, value) => total.add(BigNumber.from(value)),
      BigNumber.from(0),
    )
    const response = await mintBatchWithoutFees(targets, calldatas, values, totalValue)
    return response
  }

  useEffect(() => {
    const init = async () => {
      const response = await getNFTsForContract(collectionAddress, chainId)
      const formattedDrops = getFormattedDrops(response.nfts, chainId)
      setDrops(formattedDrops)
    }

    init()
  }, [collectionAddress, chainId])

  return { drops, collectAll }
}

export default useCollection
