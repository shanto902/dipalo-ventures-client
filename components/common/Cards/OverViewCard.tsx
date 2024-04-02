'use client'
import React, { useState } from "react";
import { TOverviewData } from "../../Home/types";
import { OverViewSVG } from "./OverViewSVG";
import parse from 'html-react-parser';
const OverViewCard = ({id,  title, subtitle, link }: TOverviewData) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="group flex flex-col items-center gap-4 my-10 trasitio"    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <OverViewSVG id={id} hovered={hovered}/>
      <h3 className="text-center text-zinc-900 text-[32px] font-medium">{title}</h3>
      <p className=" max-w-[412px] text-center text-neutral-600 text-xl font-semibold">{ parse(subtitle)}</p>
    </div>
  );
};

export default OverViewCard;
