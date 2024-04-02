
import React from "react";
import OverViewCard from "../common/Cards/OverViewCard";
import { overViewData } from "./const";


const Overview = () => {

  return (
    <div className="bg-orange-50"><div className="py-20 lg:py-24 lg:mx-24 ">
    {/* Title Text  */}
    <div className="text-dipalo lg:text-5xl text-5xl font-bold text-center uppercase ">
      OVERVIEW
    </div>

    <div className=" grid grid-cols-4">
      {
        overViewData.map((card) => <OverViewCard key={card.id} id={card.id} subtitle={card.subtitle} title={card.title} link={""} />)
      }
    </div>
  
  </div></div>
  );
};

export default Overview;
