import Image from "next/image";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";

const WhatWeDo = () => {
  return (
    <div className=" relative">
      <Image
        className=" absolute bottom-0 -z-10 right-0"
        src="/assets/whatWeDoBG.svg"
        alt="Logo"
        width={550}
        height={267}
      />

      <PaddingContainer>
        <div className=" -mt-56 mb-32 justify-start items-center gap-28 inline-flex">
          <Image src="/assets/what-1.png" alt="Logo" width={520} height={820} />
          <div className="flex-col justify-start items-start gap-[39px] inline-flex">
            <div>
              <span className="text-zinc-900 text-5xl font-bold leading-[84.44px]">
                WHAT
              </span>
              <span className="text-amber-500 text-5xl font-bold leading-[84.44px]">
                {" "}
                WE DO
              </span>
            </div>
            <div className="w-[739px] text-neutral-700 text-3xl font-semibold leading-[50px]">
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
