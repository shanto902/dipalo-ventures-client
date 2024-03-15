import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";

const Main = () => {
  return (
    <div className=" min-h-screen">
      <div className="w-full absolute top-0 -z-10 bg-main_bg bg-cover min-h-screen flex  items-center">
        <PaddingContainer>
          <div>
            <span className="text-white text-7xl font-black  leading-relaxed">
              Craftsmanship,
              <br />
              Expertise,
              <br />
              Time{" "}
            </span>
            <span className="text-amber-500 text-7xl font-black leading-relaxed">
              Well Spent.
            </span>
            <div className="text-yellow-50 text-2xl font-medium leading-loose">
              Breakthrough technologies at the intersection of physical and
              digital
            </div>
          </div>
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Main;
