import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { residencyData } from "./const";
import ResidencyCard from "../common/Cards/ResidencyCard";

const Residency = () => {
  return (
    <PaddingContainer className=" py-5">
      {" "}
      <h2
        className=" text-center text-2xl py-10
font-bold text-black underline underline-offset-8 decoration-dipalo "
      >
        RESIDENCY
      </h2>
      <div className=" grid grid-cols-3 gap-x-6 gap-y-10">
        {
            residencyData.map((card)=><ResidencyCard key={card.id} id={card.id}text={card.text} />)
        }
      </div>
    </PaddingContainer>
  );
};

export default Residency;
