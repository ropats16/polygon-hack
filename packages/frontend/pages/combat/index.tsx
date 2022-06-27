import type { NextPage } from "next";
import { NFTCard } from "@/components/elements";
import { Controls } from "@/components/sections/combat";
import { NFT1, NFT2 } from "@/mocks/nft-mocks";
import warriorImage from "@/images/warrior.png";
import ninjaImage from "@/images/ninja.png";
import {
  MotionFadeIn,
  MotionSlideLeft,
  MotionSlideRight,
} from "@/components/motion";

const CombatPage: NextPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex p-4 items-center justify-center  from-slate-900 via-slate-700 to-blue-400 bg-gradient-to-t">
            <MotionSlideLeft>
              <NFTCard nft={NFT1} image={warriorImage.src} />
            </MotionSlideLeft>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex p-4 items-center justify-center  from-slate-900 via-slate-700 to-blue-400 bg-gradient-to-t">
            <MotionSlideRight>
              <NFTCard nft={NFT2} image={ninjaImage.src} />
            </MotionSlideRight>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 text-center">
        <MotionFadeIn>
          <Controls />
        </MotionFadeIn>
      </div>
    </div>
  );
};

export default CombatPage;
