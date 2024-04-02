'use client'
import React, { useState } from "react";
import { TOverviewData } from "../../Home/types";
import { OverViewSVG } from "./OverViewSVG";

const OverViewCard = ({id, image, title, subtitle, link }: TOverviewData) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  console.log(hovered)
  return (
    <div className="group flex flex-col items-center gap-4 my-10 trasitio"    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <OverViewSVG id={id} hovered={hovered}/>
      <h3 className="text-center text-zinc-900 text-[32px] font-medium">{title}</h3>
      <p className=" max-w-[412px] text-center">Investments in Hard Tech innovation for climate change</p>
    </div>
  );
};

export default OverViewCard;
