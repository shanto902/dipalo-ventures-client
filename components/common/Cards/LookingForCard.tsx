import Link from "next/link";
import React from "react";
import { TLookingForData } from "../../Home/types";

const LookingForCard = ({ image, title, link, buttonText }: TLookingForData) => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      className="h-[532px] p-5 shadow-lg rounded-md relative grid grid-rows-2 transition-transform transform hover:scale-105 duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black rounded-md" />
      <div className="z-10 flex items-end justify-center ">
        <p className="text-white text-5xl font-bold leading-9 text-center">
          {title}
        </p>
      </div>

      <Link href={link}>
        <button className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 uppercase text-center border rounded border-white border-opacity-30 py-2 px-8 hover:border-dipalo z-20 text-white transition-all duration-500">
        {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default LookingForCard;
