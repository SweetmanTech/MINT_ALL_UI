import { useEffect, useState } from "react"
import { utils } from "ethers"
import { useAccount } from "wagmi"
import getNFTsForContract from "../lib/alchemy/getNFTsForContract"
import getFormattedDrops from "../lib/getFormattedDrops"
import useUniversalMinter from "./useUniversalMinter"
import abi from "../lib/abi/ZoraCreator1155Impl.json"
import getEncodedMinterArgs from "../lib/getEncodedMinterArgs"

const useCollection = (collectionAddress, chainId) => {
  const [drops, setDrops] = useState([])
  const { mintBatchWithoutFees } = useUniversalMinter(chainId)
  const { address } = useAccount()

  const collectAll = async (minter) => {
    const targets = Array(drops.length).fill(collectionAddress)

    // TODO: HOW TO GENERATE CALLDATA?
    const iface = new utils.Interface(abi)
    const quantity = 1
    const mintReferral = address
    const minterArguments = getEncodedMinterArgs(address, "MAGIC")

    // Generate calldata for each drop
    const calldatas = drops.map((drop, index) => {
      const tokenId = index + 1 // Assuming tokenId starts from 1 and increments
      return iface.encodeFunctionData("mintWithRewards", [
        minter,
        tokenId,
        quantity,
        minterArguments,
        mintReferral,
      ])
    })

    const values = [
      "1554000000000000",
      "1554000000000000",
      "1554000000000000",
      "1554000000000000",
      "1554000000000000",
      "1554000000000000",
      "1554000000000000",
      "1554000000000000",
    ]
    const value = "12432000000000000"
    const response = await mintBatchWithoutFees(targets, calldatas, values, value)
    console.log("SWEETS COLLECT ALL", response)
  }

  useEffect(() => {
    const init = async () => {
      const response = await getNFTsForContract(collectionAddress, chainId)
      console.log("SWEETS getNFTsForContract", response)
      const formattedDrops = getFormattedDrops(response.nfts, chainId)
      setDrops(formattedDrops)
    }

    init()
  }, [collectionAddress, chainId])

  return { drops, collectAll }
}

export default useCollection
