import { ConnectButton } from "@rainbow-me/rainbowkit"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import useIsMobile from "../../../hooks/useIsMobile"
import Button from "../../Core/Button"
import { useEthersSigner } from "../../../hooks/useEthersSigner"

const LandingPage = () => {
  const isMobile = useIsMobile()
  const signer = useEthersSigner()

  const handleClick = () => {}

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="MINT ALL" />
      <div className="flex flex-col justify-center items-center h-[100vh] md:h-full gap-5">
        <ConnectButton />
        {signer && (
          <Button onClick={handleClick} className="h-[55px] w-[200px]">
            BUY ALL
          </Button>
        )}
      </div>
    </Layout>
  )
}

export default LandingPage
