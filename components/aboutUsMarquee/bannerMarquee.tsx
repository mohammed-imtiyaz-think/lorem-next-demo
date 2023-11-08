import Image from "next/image";
import React from "react";
import { Images } from "../../utils/constant/staticImage";
export default function Banner() {
  const marqueeItems = [1, 2, 3, 4];

  const Marquee = () => (
    <div className="animate-marquee whitespace-nowrap text-white flex items-center">
      {marqueeItems.map((index) => (
        <span key={index} className="text-[1.2rem] font-bold mx-4 uppercase">
          lorem ipsum
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden flex relative h-[50px]">
      <Image src={Images.banner} alt="background-image" layout="fill" />
      {marqueeItems.map((index) => (
        <Marquee key={index} />
      ))}
    </div>
  );
}
