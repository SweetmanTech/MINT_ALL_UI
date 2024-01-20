import { base } from "viem/chains"
import useCollection from "../../hooks/useCollection"
import Button from "../Core/Button"

const BuyAllButton = () => {
  const imTiredOfBeingHypersurveilled = "0x4b130ef4051a35883e3b399b67d13b9bd4224798"
  const { drops, collectAll } = useCollection(imTiredOfBeingHypersurveilled, base.id)
  console.log("SWEETS drops", drops)

  const handleClick = async () => {
    const response = await collectAll()
    console.log("SWEETS COLLECT ALL RESPONSE", response)
  }
  return (
    <Button onClick={handleClick} className="h-[55px] w-[200px]">
      BUY ALL
    </Button>
  )
}

export default BuyAllButton
