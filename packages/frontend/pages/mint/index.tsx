import type { NextPage } from "next";
import { MintButton } from "@/components/elements";
import { Carousel, warriorSelect, elementSelect, weaponSelect } from "@/components/sections/mint"

const MintPage: NextPage = () => {
  const options: any = {}

  const handleSelect = (sectionType: string, name: string) => {
    options[sectionType] = name;
  }

  return (
    <div className="text-white">
      <div className="flex justify-center">
        <MintButton>Mint</MintButton>
      </div>
      <div className="mb-4 flex flex-row mt-8 p-4">
        <Carousel section={warriorSelect} handleSelect={handleSelect} />
        <Carousel section={elementSelect} handleSelect={handleSelect} />
        <Carousel section={weaponSelect} handleSelect={handleSelect} />
      </div>
    </div>
  );
};

export default MintPage;