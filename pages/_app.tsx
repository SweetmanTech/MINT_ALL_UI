import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"
import "@progress/kendo-theme-default/dist/all.css"

import type { AppProps } from "next/app"
import { RainbowKitProvider, darkTheme, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import Swiper, { Mousewheel } from "swiper"
import { base, sepolia } from "viem/chains"
import { ThemeProvider } from "../providers/ThemeProvider"
import { TITLE } from "../lib/consts"

Swiper.use([Mousewheel])

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [base, sepolia],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: TITLE,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_KEY,
  chains,
})

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        chains={chains}
        theme={darkTheme({
          accentColorForeground: "white",
          borderRadius: "large",
          overlayBlur: "small",
        })}
      >
        <ThemeProvider>
          <SessionProvider>
            <Component {...pageProps} />
            <ToastContainer />
            <Analytics />
          </SessionProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
