import { utils } from "ethers"
import getEncodedMinterArgs from "./getEncodedMinterArgs"
import abi from "./abi/ZoraCreator1155Impl.json"

const getCalldatas = (count, minter, referral, to) => {
  const iface = new utils.Interface(abi)
  const quantity = 1
  const mintReferral = referral
  const minterArguments = getEncodedMinterArgs(to, "MAGIC")

  return Array.from({ length: count }, (_, index) => {
    const tokenId = index + 1
    return iface.encodeFunctionData("mintWithRewards", [
      minter,
      tokenId,
      quantity,
      minterArguments,
      mintReferral,
    ])
  })
}

export default getCalldatas
