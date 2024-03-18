import Image from "next/image";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import imageBG from "../../../public/assets/what-1.png";
const WhatWeDo = () => {
  return (
    <div className=" relative">
      <Image
        className=" absolute hidden lg:block bottom-0 -z-10 right-0"
        src={"/assets/whatWeDoBG.svg"}
        alt="Logo"
        width={550}
        height={267}
      />

      <PaddingContainer>
        <div className=" lg:-mt-56 lg:mb-10 my-20 justify-start items-center gap-28 lg:inline-flex">
          <Image
            className=" object-cover  hidden lg:block w-[420px] h-[720px] rounded-md"
            src={imageBG}
            alt="Logo"
            placeholder="blur"
            width={520}
            height={820}
            quality={100}
          />

          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div>
              <span className="text-zinc-900 lg:text-5xl text-3xl font-bold ">WHAT</span>
              <span className="text-dipalo lg:text-5xl text-3xl font-bold "> WE DO</span>
            </div>
            <div className=" text-neutral-700 lg:text-2xl text-lg font-semibold leading-[50px]">
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
