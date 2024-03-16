import React from "react";

const Methodology = () => {
  return (
    <div className="relative h-[500px] w-full bg-methodologyBG  bg-center bg-cover overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold leading-relaxed">
          <span className="text-white">OUR UNIQUE</span>{" "}
          <span className="text-dipalo">METHODOLOGY</span>
        </h1>

        <div className="w-[1502px]">
          <span className="text-dipalo text-xl font-semibold  leading-[50px]">
            Dipalo{" "}
          </span>
          <span className="text-white text-xl font-semibold  leading-[50px]">
            Ventures de-risks investments by incorporating hands-on product
            design and engineering reviews in our due diligence process. Our
            technical diligence identifies gaps mitigated post-investment via a
            hands-on 6-week Residency program
          </span>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
