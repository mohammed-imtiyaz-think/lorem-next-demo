"use client";
import UserDetails from "@/components/userDetails/userDetails";
import Banner from "@/components/aboutUsMarquee/bannerMarquee";
import AboutUs from "@/components/aboutUs/aboutUs";
import { UserData1, UserData2 } from "@/utils/constant/staticContent";
import Footer from "@/components/footer/footer";
export default function Index() {
  return (
    <main>
      <div className="container mx-auto max-w-[1237px] px-5 pt-16" id="home">
        <div className="container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[7.5rem] dark:text-white">
            LOREM IPSUM
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-12">
            <UserDetails detail={UserData1} />
          </div>
        </div>

        <div
          className="lg:mt-[20rem] py-10 mb-[10rem] lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer"
          id="about"
        >
          <AboutUs />
        </div>
      </div>

      <div>
        <Banner />
      </div>

      <div className="container mx-auto max-w-[1237px] px-5 pt-16" id="dolor">
        <div className="container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0">
          <h1 className="lg:mb-24 sm:mb-5 text-4xl font-bold text-white md:text-5xl lg:text-[7rem] dark:text-white uppercase md:w-9/12 xs:w-full">
            lorem ipsum dolor set
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2.5rem] mt-12">
            <UserDetails detail={UserData2} />
          </div>
        </div>

        <div className="pt-20 lg:mt-[15rem] md:mt-[5rem]">
          <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase">
            lorem ipsum dolor
          </h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}
