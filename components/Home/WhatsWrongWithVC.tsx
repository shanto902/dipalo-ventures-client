import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import WhatWrongVCCard from "../common/Cards/WhatWrongVCCard";
import { whatsWrongVC } from "./const";




const WhatsWrongWithVC = () => {
  return (
    <div className=" bg-orange-50 py-10">
      <PaddingContainer>
        {" "}
        <h2 className=" text-center text-amber-500 text-5xl font-bold ">
          WHAT’S WRONG WITH{" "}
          <span className=" underline  underline-offset-[15px] decoration-dipalo">
            {" "}
            VC
          </span>
          ?
        </h2>
        <p className=" text-center text-zinc-900 text-opacity-75 text-2xl font-semibold leading-[30px] py-5">
          Traditional Accelerators and VC do not go far enough in supporting
          startups that are at the intersection of hardware and software.
        </p>
      </PaddingContainer>
<div className=" grid grid-cols-3 gap-10 max-w-7xl mx-auto my-10">
  
{ whatsWrongVC.map((card, i)=> <WhatWrongVCCard key={i} image={card.image} logo={card.logo} title={card.title}/>)}
</div>
    </div>
  );
};

export default WhatsWrongWithVC;
