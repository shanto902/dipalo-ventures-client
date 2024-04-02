
import React from "react";
import OverViewCard from "../common/Cards/OverViewCard";
import { overViewData } from "./const";


const Overview = () => {

  return (
    <div className="my-20 lg:my-24 lg:mx-24">
      {/* Title Text  */}
      <div className="text-dipalo lg:text-5xl text-5xl font-bold text-center uppercase ">
        OVERVIEW
      </div>

      <div className=" grid grid-cols-4">
        {
          overViewData.map((card) => <OverViewCard key={card.id} id={card.id} image={card.image} subtitle={card.subtitle} title={card.title} link={""} />)
        }
      </div>
    
    </div>
  );
};

export default Overview;
