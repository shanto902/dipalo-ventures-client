import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";

const Thesis = () => {
  return (
    <div className="w-full sm:h-[500px] lg:h-[600px]  h-[680px] relative bg-main_thesis bg-center bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex-col items-start justify-center mx-auto text-white max-w-7xl lg:flex">
        <PaddingContainer>
          <div className=" text-dipalo lg:text-6xl text-5xl  font-bold leading-[84.44px] mt-10 lg:mt-0">
            THESIS
          </div>
          <div className="flex flex-col gap-20 lg:flex-row lg:gap-32">
            <div className="text-lg leading-9 text-white ">
              Currently, sectors emitting the most greenhouse gases receive the
              least VC funding. Climate Tech offers a wave of unique investment
              opportunities that will soon dominate the{" "}
              <span className="underline underline-offset-8 decoration-dipalo">
                market
              </span>
              .
            </div>

            <div>
              <div className=" text-right text-white lg:text-xl text-lg font-normal lg:leading-10">
                The Dipalo Heed ClimateTech Fund offers exposure to rapidly
                growing climate tech innovation in the US and Portugal, combined
                with EU residency and citizenship.
              </div>

              <div className="flex justify-end w-full mt-5 ">
                <Image
                  className=""
                  src="/assets/dipalo-heed.svg"
                  alt="Logo"
                  width={280}
                  height={70}
                />
              </div>
            </div>
          </div>
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Thesis;
