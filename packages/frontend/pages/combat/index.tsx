import type { NextPage } from "next";
import { NFTCard } from "@/components/elements";

const CombatPage: NextPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex p-4 items-center justify-center  from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
            <NFTCard />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex p-4 items-center justify-center  from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
            <NFTCard />
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 text-center bg-teal-100">controls here</div>
    </div>
  );
};

export default CombatPage;
