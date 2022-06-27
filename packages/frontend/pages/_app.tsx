import * as React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// Imports
import { chain, createClient, WagmiConfig, configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  Chain,
} from "@rainbow-me/rainbowkit";

import { AppLayout } from "@/components/layout";

import { ENV_PROD, ENV_DEV } from "@/config";

import { useIsMounted } from "../hooks";

// Get environment variables
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string;
// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string;

const hardhatChain: Chain = {
  id: 31337,
  name: "Hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Hardhat",
    symbol: "HARD",
  },
  network: "hardhat",
  rpcUrls: {
    default: "http://127.0.0.1:8545",
  },
  testnet: true,
};

const networks = [];
if (ENV_PROD) {
  // networks.push(chain.polygon);
  networks.push(chain.polygonMumbai);
}

if (ENV_DEV) {
  networks.push(chain.polygonMumbai);
  networks.push(hardhatChain);
}

const { chains, provider } = configureChains(networks, [
  alchemyProvider({ alchemyId }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "Create-Web3",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
