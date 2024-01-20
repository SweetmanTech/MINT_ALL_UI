import { sepolia } from "viem/chains"
import { zoraCreatorFixedPriceSaleStrategyAddress } from "@zoralabs/protocol-deployments"
import useCollection from "../../hooks/useCollection"
import Button from "../Core/Button"

const BuyAllButton = () => {
  const imTiredOfBeingHypersurveilled = "0x7a9d13f9427220fd876af288e9359f8fc411febb"
  console.log("SWEETS address")

  // BASE MAINNET "0x4b130ef4051a35883e3b399b67d13b9bd4224798"

  const { drops, collectAll } = useCollection(imTiredOfBeingHypersurveilled, sepolia.id)
  console.log("SWEETS drops", drops)

  const handleClick = async () => {
    const minter = zoraCreatorFixedPriceSaleStrategyAddress[sepolia.id]
    const response = await collectAll(minter)
    console.log("SWEETS COLLECT ALL RESPONSE", response)
  }

  return (
    <Button onClick={handleClick} className="h-[55px] w-[200px]">
      BUY ALL
    </Button>
  )
}

export default BuyAllButton
