import type { NextPage } from "next";
import { useContract, useSigner, useAccount } from "wagmi";
import { ethers } from "ethers";

import { MintButton } from "@/components/elements";
import {
  Carousel,
  warriorSelect,
  elementSelect,
  weaponSelect,
} from "@/components/sections/mint";

import contracts from "@/contracts/hardhat_contracts.json";
import { NETWORK_ID } from "@/config";

const MintPage: NextPage = () => {
  const chainId = Number(NETWORK_ID);

  const options: any = {};

  const { data: signerData } = useSigner();
  const { data: accountData } = useAccount();

  const allContracts = contracts as any;
  // console.log(allContracts);
  const mintAddress = allContracts[chainId][0].contracts.SolmateNft.address;
  const mintABI = allContracts[chainId][0].contracts.SolmateNft.abi;

  const mintContract = useContract({
    addressOrName: mintAddress,
    contractInterface: mintABI,
    signerOrProvider: signerData,
  });

  const handleSelect = (sectionType: string, name: string) => {
    options[sectionType] = name;
  };

  const handleMint = async () => {
    // console.log(options);
    try {
      const tx = await mintContract.mintTo(accountData?.address, {
        gasLimit: "1000000",
        value: ethers.utils.parseEther("0.08"),
      });
      tx.wait(1).then((res: any) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white">
      <div className="flex justify-center">
        <MintButton onClick={handleMint}>Mint</MintButton>
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
