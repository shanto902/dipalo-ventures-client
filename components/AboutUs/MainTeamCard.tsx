import Image from "next/image";
import React from "react";

const MainTeamCard = ({
  image,
  name,
  designation,
  bio,
  linkedinLink,
}: {
  image: string;
  name: string;
  designation: string;
  bio?: string;
  linkedinLink?: string;
}) => {
  return (
    <div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden  ">
        <div className=" aspect-[3/4] ">
          <Image
            className="h-full w-full object-cover  transition-transform duration-500 "
            src={image}
            alt=""
            width={500}
            height={1000}
          />
        </div>
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="  bg-black bg-opacity-70 w-[363px] h-[110px]  group-hover:opacity-0 transition-opacity duration-300">
            <h2 className="text-center mt-5 text-white text-base font-bold uppercase">
              Rafiq Ahmed
            </h2>
            <h3 className="text-center text-amber-500 text-xs font-semibold mt-2">Managing Partner</h3>
          </div>
          <div className=" absolute h-full w-full text-left   text-white text-xs font-semibold opacity-0 transition-opacity  bg-black bg-opacity-70 duration-300 group-hover:opacity-100 p-5 overflow-y-scroll">
         {bio}
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTeamCard;
