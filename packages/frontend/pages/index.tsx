import Head from "next/head";
import { Header } from "@/components/layout";
import { Hero } from "@/components/sections/landing";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>App</title>
        <meta name="description" content="content here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="">
        <Hero />
      </main>
    </div>
  );
}
