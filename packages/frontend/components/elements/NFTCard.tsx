interface NFTCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  tokenId?: string;
}

export const NFTCard = ({
  title,
  subtitle,
  description,
  image,
  tokenId,
}: NFTCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div
        id="partnerCard"
        className="bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col"
      >
        <div>
          <h3 className="text-left pl-8 pb-4 pt-2 text-xl">{title}</h3>
        </div>

        <div className="flex items-center justify-center bg-[#2a2a2a] min-h-[200px]">
          <img src={image} alt={title} className="w-1/2 object-cover" />
        </div>
        <div className="grid grid-cols-4">
          <div className="p-4 pr-0 text-lg col-span-3">
            <h4 className="font-bold">Webdevolpement:</h4>

            <p>{description}</p>
          </div>
          <div className="col-span-1 pt-4">
            <div className="w-20 h-20 shadow-inner shadow-[#2a2a2a] mt-auto ml-auto flex flex-col items-center justify-center">
              <p className="text-semibold text-xl">
                12 <br /> HP
              </p>
            </div>
            <div className="mt-2 w-20 h-20 shadow-inner shadow-[#2a2a2a] ml-auto flex flex-col items-center justify-center">
              <p className="text-semibold text-xl">
                16 <br /> SP
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pl-4">
          <p>{tokenId}</p>
        </div>
      </div>
    </div>
  );
};
