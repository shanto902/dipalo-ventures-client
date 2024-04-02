'use client'
import React, { useState } from "react";
import { OverViewSVG } from "../SVG/OverViewSVG";
import parse from 'html-react-parser';
import { TInvestment, TKeyMetrics } from "@/components/Fund1/types";
import { InvestmentsSVG } from "@/components/common/SVG/InvestmentsSVG";
const InvestmentsCard = ({id, image, text }: TInvestment) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (

    <div
  style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover",  backgroundPosition: "center"  }}
  className=" group p-5 shadow-lg rounded relative  transition-transform transform hover:scale-105 duration-500 px-10 py-20"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
<div className="z-[-10] absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-black/80 rounded-sm" />
  <div className="z-10 flex flex-col items-center gap-10 justify-center  h-full  ">
   
  <div className="group flex flex-col items-center gap-4 my-10 transition"   >
      <InvestmentsSVG id={id} hovered={hovered}/>
      <h3 className="text-center text-xl mt-16 font-semibold text-white group-hover:text-dipalo transition-colors duration-300">{text}</h3>
    </div>
 
  </div>


</div>

  
  );
};

export default InvestmentsCard;
