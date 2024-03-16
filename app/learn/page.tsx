import React from "react";
import Header from "../components/common/Header";
import image from "../../public/assets/headers/learn.jpeg";
import PaddingContainer from "../components/Layout/PaddingContainer";
import Image from "next/image";
const Learn = () => {
  return (
    <>
      <Header title="Portfolio" image={"/assets/headers/learn.jpeg"} />
      <PaddingContainer className="my-24 relative pb-20">
        <span className="text-dipalo text-4xl font-semibold  leading-10">
          O
        </span>
        <span className="text-dipalo text-2xl font-semibold  leading-10">
          ur
        </span>
        <span className="text-neutral-600 text-2xl font-semibold leading-10">
          {" "}
          first fund specialized in advancing built technologies at the
          intersection of digital and physical. We sought to foster innovative
          solutions that integrate seamlessly into our built world to promote
          sustainability and{" "}
          <span className=" underline underline-offset-8 decoration-dipalo">
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
      <div className=" bg-[#FFF9EE]">
        <div></div>
      </div>
    </>
  );
};

export default Learn;
