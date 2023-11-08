import Image from "next/image";
import React, { useState } from "react";
import { Icon, Images } from "../../utils/constant/staticImage";
import { accordianItems } from "@/utils/constant/staticContent";

const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <footer className="lg:mt-[4rem] lg:pb-[17rem]">
      {accordianItems.map((item, index) => (
        <div key={index}>
          <div className="rounded p-2 pb-2">
            <div
              className="relative h-[45px] cursor-pointer"
              onClick={() => toggleTab(index)}
            >
              {activeTab === index && (
                <Image
                  src={Images.banner}
                  alt="background-image"
                  layout="fill"
                />
              )}
              <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
                <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                  {item.title}
                </p>
                <button className="text-left text-white font-semibold focus:outline-none">
                  <Image
                    alt="plus-icon"
                    src={activeTab === index ? Icon.plus : Icon.minus}
                  />
                </button>
              </div>
            </div>

            {activeTab === index && (
              <p className="container mx-auto max-w-[1237px] px-5 leading-7 mt-5 text-[#a1a1a1]">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
