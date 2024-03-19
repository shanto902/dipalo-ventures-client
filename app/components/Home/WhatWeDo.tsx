import Image from "next/image";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import imageBG from "../../../public/assets/what-1.png";
const WhatWeDo = () => {
  return (
    <div className="relative lg:pt-10 lg:pb-14">
      <Image
        className="absolute bottom-0 right-0 hidden w-56 md:block md:w-96 -z-10"
        src={"/assets/whatWeDoBG.svg"}
        alt="Logo"
        width={550}
        height={267}
      />

      <PaddingContainer>
        <div className="items-center justify-start -mt-10 md:justify-center lg:-mt-56 md:-mt-10 gap-28 lg:inline-flex">
          <Image
            className=" object-cover shadow-xl mx-auto lg:w-[420px] lg:h-[720px] aspect-square  rounded-md"
            src={imageBG}
            alt="Logo"
            placeholder="blur"
            width={520}
            height={820}
            quality={100}
          />

          <div className="inline-flex flex-col items-center justify-center gap-5 py-10 md:items-start md:justify-start lg:py-72">
            <p className="text-center md:text-left">
              <span className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl ">WHAT</span>
              <span className="text-3xl font-bold text-dipalo md:text-4xl lg:text-5xl "> WE DO</span>
            </p>
            <div className="  lg:text-2xl md:text-lg text-base font-normal md:leading-[50px] text-center md:text-left bg-white rounded-xl">
              We invest in a balanced portfolio across pre-seed to early-stage
              rounds in physical products utilizing data intelligence and
              designed for sustainability.
            </div>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default WhatWeDo;
