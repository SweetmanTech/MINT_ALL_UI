import { Contract } from "ethers"
import { useEffect, useMemo, useState } from "react"
import getDefaultProvider from "../lib/getDefaultProvider"
import abi from "../lib/abi/ZoraCreator1155Impl.json"
import getNFTsForContract from "../lib/alchemy/getNFTsForContract"
import getFormattedDrops from "../lib/getFormattedDrops"

const useCollection = (collectionAddress, chainId) => {
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
      const formattedDrops = getFormattedDrops(response.nfts, chainId)
      setDrops(formattedDrops)
    }

    if (!collectionContract) return
    init()
  }, [collectionContract])

  return { drops, collectAll }
}

export default useCollection
