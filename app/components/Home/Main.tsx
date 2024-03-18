import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";
import mainBg from "@/public/assets/main-bg.jpeg";
const Main = () => {
  return (
    <div className=" min-h-screen">
      <div className="w-full absolute top-0 -z-10 bg-cover min-h-screen flex  items-center">
        <Image
          className=" -z-10 object-cover"
          alt="Main Background"
          src={mainBg}
          placeholder="blur"
          quality={80}
          fill
          sizes="100vw"
        />
        <PaddingContainer>
          <div>
            <span className="text-white  text-4xl lg:text-7xl font-black leading-[50px]  lg:leading-[100px]">
              Craftsmanship,
              <br />
              Expertise,
              <br />
              Time{" "}
            </span>
            <span className="text-dipalo text-4xl lg:text-7xl font-black leading-[50px]  lg:leading-[100px]">
              Well Spent.
            </span>
            <div className="text-yellow-50 lg:text-2xl text-lg font-medium leading-relaxed">
              Breakthrough technologies at the intersection of physical and
              digital
            </div>
          </div>
          <div className="absolute top-0 -z-10 left-0 w-full h-full bg-black opacity-30" />
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Main;
