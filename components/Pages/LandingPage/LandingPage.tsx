import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import useIsMobile from "../../../hooks/useIsMobile"
import Button from "../../Core/Button"

const LandingPage = () => {
  const isMobile = useIsMobile()

  const handleClick = () => {
    console.log("SWEETS HELLO WORLD")
  }

  return (
    <Layout type={isMobile ? "mobile" : "base"}>
      <SeoHead title="MINT ALL" />
      <div className="flex flex-col justify-center items-center h-[100vh] md:h-full">
        <Button onClick={handleClick} className="h-[55px] w-[200px]">
          BUY ALL
        </Button>
      </div>
    </Layout>
  )
}

export default LandingPage
