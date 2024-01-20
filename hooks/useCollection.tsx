import { Contract } from "ethers"
import { useEffect, useMemo, useState } from "react"
import getDefaultProvider from "../lib/getDefaultProvider"
import abi from "../lib/abi/ZoraCreator1155Impl.json"
import getNFTsForContract from "../lib/alchemy/getNFTsForContract"

const useCollection = (collectionAddress, chainId) => {
  const [nextTokenId, setNextTokenId] = useState(null)
  const [drops, setDrops] = useState([])

  const collectionContract = useMemo(
    () => new Contract(collectionAddress, abi, getDefaultProvider(chainId)),
    [collectionAddress, chainId],
  )

  const collectAll = async () => {
    console.log("SWEETS COLLECT ALL", collectionContract)
  }

  useEffect(() => {
    const init = async () => {
      const response = await getNFTsForContract(collectionAddress, chainId)
      console.log("SWEETS NUMBER OF TOKENS", response)
      // GET DROP INFO
      // FORMAT DROP INTO
      //    drop = { contractAddress, chainId, uri, blockNumber, type, tokenId }
      // SET TO STATE
      //    setDrops([drop, drop,drop])
    }

    if (!collectionContract) return
    init()
  }, [collectionContract])

  return { collectAll }
}

export default useCollection
