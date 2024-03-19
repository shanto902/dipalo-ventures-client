import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";

const Methodology = () => {
  return (
    <div className="relative h-[500px] w-full bg-methodologyBG  bg-fixed bg-center bg-cover overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center items-center text-white">
      <PaddingContainer>
      <h1 className="lg:text-5xl text-4xl lg:font-bold font-semibold lg:leading-relaxed leading-normal">
          <span className="text-white">OUR UNIQUE</span>{" "}
          <span className="text-dipalo">METHODOLOGY</span>
        </h1>

        <div className="">
          <span className="text-dipalo lg:text-xl text-lg font-semibold  lg:leading-[50px]">
            Dipalo{" "}
          </span>
          <span className="text-white lg:text-xl text-lg lg:font-normal text-justify  lg:leading-[50px] leading-relaxed">
            Ventures de-risks investments by incorporating hands-on product
            design and engineering reviews in our due diligence process. Our
            technical diligence identifies gaps mitigated post-investment via a
            hands-on 6-week Residency program
          </span>
        </div>
      </PaddingContainer>
      </div>
    </div>
  );
};

export default Methodology;
