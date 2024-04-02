import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { TLookingForData } from "./types";
import LookingForCard from "../common/Cards/LookingForCard";
import { lookingForData } from "./const";



const LookingFor = () => {
  return (
    <PaddingContainer>
      <div className=" mt-20">
        <span className="text-zinc-900 text-4xl lg:text-5xl font-bold leading-[76px]">
          WHO WE’RE
        </span>
        <span className="text-dipalo text-4xl lg:text-5xl font-bold leading-[76px]">
          {" "}
          LOOKING FOR
        </span>
      </div>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-16 mt-5 mb-24">
        {lookingForData.map((data) => (
          <LookingForCard
            key={data.id}
            title={data.title}
            image={data.image}
            link={data.link}
          />
        ))}
      </div>
    </PaddingContainer>
  );
};

export default LookingFor;
