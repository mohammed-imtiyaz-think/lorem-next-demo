import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "../../utils/constant/staticImage";
import Banner from "../aboutUsMarquee/bannerMarquee";

const Header: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);
  const menu = ["home", "dolor", "about"];

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      <div className="mx-auto py-4 items-center">
        <div className="flex items-center px-5">
          <Link href="/">
            <Image
              src={Icon.logo}
              alt="logo"
              className="mr-2"
              width={35}
              height={30}
            />
          </Link>
          <p className="px-2 text-[1rem] font-semibold w-full ">
            {isMenu ? "Menu" : "Lorem"}
          </p>
          <nav className="flex max-sm:hidden">
            {menu.map((item, index) => (
              <Link href={`/${item}`} key={index}>
                <p className="px-2 text-[1rem] font-semibold w-full hover:text-gray-300 capitalize">
                  {item}
                </p>
              </Link>
            ))}
          </nav>
          <Image
            alt="menu-icon"
            className="sm:hidden"
            src={isMenu ? Icon.close : Icon.menu}
            onClick={() => setIsMenu(!isMenu)}
          />
        </div>
        {isMenu && (
          <div className="flex h-[85vh] items-center sm:hidden">
            <nav
              className="mt-2 space-y-6 px-5 flex flex-col"
              onClick={() => setIsMenu(!isMenu)}
            >
              {menu.map((item, index) => (
                <Link href={`/${item}`} key={index}>
                  <p className="hover:text-gray-300 font-medium text-xl tracking-wide capitalize">
                    {item}
                  </p>
                </Link>
              ))}
            </nav>
            <div className="fixed bottom-0 w-full">
              <Banner />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
