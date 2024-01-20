import useCollection from "../../hooks/useCollection"
import Button from "../Core/Button"
import { CHAIN_ID } from "../../lib/consts"

const BuyAllButton = () => {
  const imTiredOfBeingHypersurveilled = process.env.NEXT_PUBLIC_DROP_ADDRESS

  const { collectAll } = useCollection(imTiredOfBeingHypersurveilled, CHAIN_ID)

  const handleClick = async () => {
    await collectAll()
  }

  return (
    <Button onClick={handleClick} className="h-[55px] w-[200px]">
      BUY ALL
    </Button>
  )
}

export default BuyAllButton
