import Head from "next/head";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>App</title>
        <meta name="description" content="content here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-2">
        <ConnectButton />
      </header>

      <main className="">Landing Page</main>
    </div>
  );
}
