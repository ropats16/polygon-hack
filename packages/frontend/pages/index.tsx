import Head from "next/head";
import { Hero, What, How, Team } from "@/components/sections/landing";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>App</title>
        <meta name="description" content="content here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        <What />
        <How />
        <Team />
      </main>
    </div>
  );
}
