import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";

const TopSection = () => {
  return (
    <>
      <PaddingContainer className="my-24 relative pb-20">
        <span className="text-dipalo text-4xl font-semibold  leading-10">
          O
        </span>
        <span className="text-dipalo text-2xl font-semibold  leading-10">
          ur
        </span>
        <span className="text-[#555555] text-2xl font-semibold leading-10">
          {" "}
          first fund specialized in advancing built technologies at the
          intersection of digital and physical. We sought to foster innovative
          solutions that integrate seamlessly into our built world to promote
          sustainability and{" "}
          <span className=" underline  underline-offset-[15px] decoration-dipalo">
            resilience
          </span>
          .
          <br />
        </span>
        <Image
          className=" absolute right-0 -z-10 "
          alt="Main Background"
          src={"/assets/learnBgDsign.png"}
          width={394}
          height={191}
        />
      </PaddingContainer>
     
    </>
  );
};

export default TopSection;
