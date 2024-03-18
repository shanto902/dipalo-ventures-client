import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";
import mainBg from "@/public/assets/main-bg.jpeg";
const Main = () => {
  return (
    <div className=" lg:min-h-screen min-h-[50vh]">
      <div className="absolute top-0 flex items-center w-full bg-cover lg:min-h-screen min-h-[50vh] -z-10">
        <Image
          className="object-cover -z-10"
          alt="Main Background"
          src={mainBg}
          placeholder="blur"
          quality={80}
          fill
          sizes="100vw"
        />
        <PaddingContainer>
          <div>
            <span className="text-white  text-3xl md:text-6xl lg:text-7xl font-black leading-[40px] md:leading-[70px]  lg:leading-[100px]">
              Craftsmanship,
              <br />
              Expertise,
              <br />
              Time{" "}
            </span>
            <span className="text-dipalo text-3xl md:text-6xl lg:text-7xl font-black leading-[40px] md:leading-[70px]  lg:leading-[100px]">
              Well Spent.
            </span>
            <div className="text-base font-medium leading-relaxed text-yellow-50 lg:text-2xl md:text-xl">
              Breakthrough technologies at the intersection of physical and
              digital
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 opacity-30" />
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Main;
