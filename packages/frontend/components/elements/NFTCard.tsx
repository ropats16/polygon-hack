interface NFT {
  tokenId: string;
  warriorType: string;
  weapon: string;
  flag: string;
  attributes: {
    speed: string;
    stamina: string;
    strength: string;
    health: string;
    magicMastery: string;
    powerBuildup: string;
  };
}

interface NFTCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  tokenId?: string;
  nft?: NFT;
}

export const NFTCard = ({
  title,
  subtitle,
  description,
  image,
  tokenId,
  nft,
}: NFTCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div
        id="partnerCard"
        className="bg-gray-900 text-gray-50 border border-gray-800 shadow-md shadow-gray-700  overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col"
      >
        <div className="flex items-center justify-center bg-gray-900 min-h-[200px]">
          <img src={image} alt={title} className="w-1/2 object-cover" />
        </div>
        <div className="p-4 pr-0 text-lg w-full">
          <h4 className="font-bold">Type: {nft?.warriorType}</h4>

          <div className="border border-slate-600 shadow-md shadow-slate-700 rounded-lg p-2 my-2 text-sm">
            <p>health: {nft?.attributes.health} </p>
            <p>speed: {nft?.attributes.speed} </p>
            <p>stamina: {nft?.attributes.stamina} </p>
            <p>strength: {nft?.attributes.strength} </p>
            <p>magic mastery: {nft?.attributes.magicMastery}</p>
            <p>power buildup: {nft?.attributes.powerBuildup} </p>
          </div>
        </div>

        <div className="mt-auto pl-4">
          <p>#{nft?.tokenId}</p>
        </div>
      </div>
    </div>
  );
};
