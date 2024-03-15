import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";
import mainBg from "@/public/assets/main-bg.jpeg";
const Main = () => {
  return (
    <div className=" min-h-screen">
      <div className="w-full absolute top-0 -z-10 bg-cover min-h-screen flex  items-center">
        <Image
          className=" -z-10"
          alt="Mountains"
          src={mainBg}
          placeholder="blur"
          quality={80}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <PaddingContainer>
          <div>
            <span className="text-white text-7xl font-black  leading-relaxed">
              Craftsmanship,
              <br />
              Expertise,
              <br />
              Time{" "}
            </span>
            <span className="text-amber-500 text-7xl font-black leading-relaxed">
              Well Spent.
            </span>
            <div className="text-yellow-50 text-2xl font-medium leading-loose">
              Breakthrough technologies at the intersection of physical and
              digital
            </div>
          </div>
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Main;
