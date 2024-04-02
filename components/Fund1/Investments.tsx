import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { investment } from "./const";
import InvestmentsCard from "../common/Cards/InvestmentsCard";

const Investments = () => {
  return (
    <div className=" py-20">
      <PaddingContainer>
      <div className="text-center text-amber-500 text-5xl font-bold underline underline-offset-[15px] decoration-dipalo">
        INVESTMENTS
      </div>
      <div className=" grid grid-cols-3 gap-20 mt-20">
        {
            investment.map((invest) => <InvestmentsCard key={invest.id} id={invest.id} text={invest.text} image={invest.image}/>)
        }
      </div>
      </PaddingContainer>
    </div>
  );
};

export default Investments;
