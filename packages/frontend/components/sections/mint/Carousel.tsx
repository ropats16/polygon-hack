import { useState } from 'react';
import { MotionFadeIn } from "@/components/motion";
import { MintCard } from "@/components/elements/MintCard";

export const Carousel = ({ section, handleSelect }: any) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [direction, setDirection] = useState<string>('left');

  const handleSelectedImage = (direction: string) => {
    if (direction === "left") {
      selectedImage === 0 ? setSelectedImage(section.cards.length - 1) : setSelectedImage(selectedImage - 1)
      setDirection("left");
    }
    else {
      selectedImage === section.cards.length - 1 ? setSelectedImage(0) : setSelectedImage(selectedImage + 1)
      setDirection("right");
    }
  }

  const handleSelectedValue = (name: string) => {
    handleSelect(section.type.toLowerCase(), name);
  }

  return (
    <MotionFadeIn>
      <div className="border-white px-20 w-[30rem]">
        <div className="mt-8 w-[20rem]">
          <h3 className="text-3xl text-center pb-8">{section?.type}</h3>
          {section && section?.cards.map((object: any, i: number) => {
            return (
              <div>
                <div className={
                  i === selectedImage
                    ? "lg:block flex flex-col justify-center"
                    : "hidden"
                }>
                  <MintCard
                    section={object}
                    direction={direction}
                    setDirection={setDirection}
                    index={i}
                    handleSelectedValue={handleSelectedValue}
                    handleSelectedImage={handleSelectedImage}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </MotionFadeIn>
  )
}