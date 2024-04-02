import { TCompany } from "@/components/Portfolio/types";
import Image from "next/image";
import React from "react";

const PortfolioCard = ({ logo, name, link  }: TCompany) => {
  return (
    <div className=" group h-[300px]  bg-white border flex flex-col justify-around items-center">
   <Image className="h-[200px] object-contain" src={logo}  alt={name} height={200} width={200}/>
   <button className=" group-hover:opacity-100   hover:text-dipalo  transition-all duration-300 opacity-0 justify-self-end border-2 rounded-md p-2 uppercase " >Visit Website</button>
    </div>
  );
};

export default PortfolioCard;
