import { Contract } from "ethers"
import { useEffect, useMemo, useState } from "react"
import getDefaultProvider from "../lib/getDefaultProvider"
import abi from "../lib/abi/ZoraCreator1155Impl.json"
import getNFTsForContract from "../lib/alchemy/getNFTsForContract"
import getFormattedDrops from "../lib/getFormattedDrops"
import useUniversalMinter from "./useUniversalMinter"

const useCollection = (collectionAddress, chainId) => {
  const [drops, setDrops] = useState([])
  const { mintBatchWithoutFees } = useUniversalMinter(chainId)

  const collectionContract = useMemo(
    () => new Contract(collectionAddress, abi, getDefaultProvider(chainId)),
    [collectionAddress, chainId],
  )

  const collectAll = async () => {
    const targets = [
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
      "0x4B130eF4051a35883e3B399B67D13b9bD4224798",
    ]
    // TODO: HOW TO GENERATE CALLDATA?
    const calldatas = [
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
      "0x9dbb844d000000000000000000000000ff8b0f870ff56870dc5abd6cb3e6e89c8ba2e0620000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cfbf34d385ea2d5eb947063b67ea226dcda3dc38",
    ]
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
      const formattedDrops = getFormattedDrops(response.nfts, chainId)
      setDrops(formattedDrops)
    }

    if (!collectionContract) return
    init()
  }, [collectionContract])

  return { drops, collectAll }
}

export default useCollection
