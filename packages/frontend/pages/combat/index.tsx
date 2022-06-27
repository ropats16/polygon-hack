import type { NextPage } from "next";
import { NFTCard } from "@/components/elements";
import { Controls } from "@/components/sections/combat";
import { NFT1, NFT2 } from "@/mocks/nft-mocks";
import warriorImage from "@/images/warrior.png";
import ninjaImage from "@/images/ninja.png";

const CombatPage: NextPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex p-4 items-center justify-center  from-slate-900 via-slate-700 to-blue-400 bg-gradient-to-t">
            <NFTCard nft={NFT1} image={warriorImage.src} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex p-4 items-center justify-center  from-slate-900 via-slate-700 to-blue-400 bg-gradient-to-t">
            <NFTCard nft={NFT2} image={ninjaImage.src} />
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 text-center">
        <Controls />
      </div>
    </div>
  );
};

export default CombatPage;
