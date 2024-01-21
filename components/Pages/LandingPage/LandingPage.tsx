import { ConnectButton } from "@rainbow-me/rainbowkit"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import useIsMobile from "../../../hooks/useIsMobile"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import BuyAllButton from "../../BuyAllButton"

const LandingPage = () => {
  const isMobile = useIsMobile()
  const signer = useEthersSigner()

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="MINT ALL" />
      <div className="flex flex-col justify-center items-center h-[100vh] md:h-full gap-5">
        <ConnectButton />
        {signer && <BuyAllButton />}
      </div>
    </Layout>
  )
}

export default LandingPage
