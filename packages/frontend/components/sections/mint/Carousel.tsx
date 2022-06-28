import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Carousel = ({ section }: any) => {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  console.log(selectedImage)
  return (
    <div className="flex">
      {section && section?.map((object: any, i: number) => {
        return (
          <div className="mt-8">
            <div className="max-w-sm h-72 overflow-hidden">
              <AiOutlineLeft onClick={selectedImage === 0 ? () => setSelectedImage(section.length - 1) : () => setSelectedImage(selectedImage - 1)}
                className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer'
              />
              <img
                src={object.img}
                alt="This is a carousel slide"
                key={i}
                className={
                  i === selectedImage
                    ? "block w-[250px] h-auto object-cover"
                    : "hidden"
                }
              />
              <AiOutlineRight onClick={selectedImage === section.length - 1 ? () => setSelectedImage(0) : () => setSelectedImage(selectedImage + 1)} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' />
            </div>
          </div>
        )
      })}
    </div>
  )
}