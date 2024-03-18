import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { TLookingForData } from "./types";
import LookingForCard from "../common/Cards/LookingForCard";

const lookingForData: TLookingForData[] = [
  {
    id: 1,
    title: "Founders",
    image: "/assets/lookingfor/l1.jpeg",
    link: "google.com",
  },
  {
    id: 2,
    title: "Investors",
    image: "/assets/lookingfor/l2.jpeg",
    link: "google.com",
  },
  {
    id: 3,
    title: "Partners",
    image: "/assets/lookingfor/l3.jpeg",
    link: "google.com",
  },
];

const LookingFor = () => {
  return (
    <PaddingContainer>
      <div className=" mt-20">
        <span className="text-zinc-900 text-5xl lg:text-6xl font-bold leading-[76px]">
          WHO WE’RE
        </span>
        <span className="text-dipalo text-5xl lg:text-6xl font-bold leading-[76px]">
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
