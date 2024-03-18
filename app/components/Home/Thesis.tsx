import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";

const Thesis = () => {
  return (
    <div className="w-full md:h-[600px] h-[700px] relative bg-main_thesis bg-center bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

 
  <div className="absolute max-w-7xl mx-auto inset-0  text-white lg:flex flex-col justify-center items-start">
  <PaddingContainer>
        <div className=" text-dipalo lg:text-6xl text-5xl font-bold leading-[84.44px] mt-10 lg:mt-0">
          THESIS
        </div>
        <div className=" flex flex-col lg:flex-row lg:gap-32 gap-20">
          <div className="  text-white text-lg leading-9">
            Currently, sectors emitting the most greenhouse gases receive the
            least VC funding. Climate Tech offers a wave of unique investment
            opportunities that will soon dominate the{" "}
            <span className=" underline underline-offset-8 decoration-dipalo">
              market
            </span>
            .
          </div>

          <div>
            <div className=" text-right text-white lg:text-2xl text-lg font-semibold lg:leading-[50px]">
              The Dipalo Heed ClimateTech Fund offers exposure to rapidly
              growing climate tech innovation in the US and Portugal, combined
              with EU residency and citizenship.
            </div>

            <div className=" w-full flex justify-end mt-5">
              <Image
                className=""
                src="/logo.svg"
                alt="Logo"
                width={133}
                height={51}
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
