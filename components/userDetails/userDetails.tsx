import Image from 'next/image';
import React from 'react';

interface Item {
  id: number;
  title: string;
  image: string;
  icon: string;
  desc: string
}

interface Props {
  detail: Item[];
}

const HomeReuseContent:React.FC<Props>=({ detail })=> {
  return (
    <>
      {detail.map((item,index)=>(
        <div key={index}> 
          {(item.title || item.image) &&
            <div className="md:my-0 mb-8 mt-15" >
              {item.image && (
                <Image
                  alt="user-image"
                  src={item.image}
                  width="500"
                  height="500"
                  className=" mr-2 mb-10 mt-5"
                />
              )}
              <h1 className="font-bold text-[1.5rem] lg:leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase mt-5">
                {item.title}
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">{item.desc}</p>
              <div className="mt-5">
                {item.icon && (
                  <Image
                    alt="server-icon"
                    src={item.icon}
                    width="20"
                    height="20"
                    className=" mr-2"
                  />
                )}
              </div>
            </div>
          }
        </div>
      ))}
    </>
  );
}

export default HomeReuseContent;
