import Link from "next/link";
import React from "react";
import { TLookingForData } from "../../Home/types";

const LookingForCard = ({ image, title, link }: TLookingForData) => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      className="h-[410px] p-5 rounded-md relative grid grid-rows-2"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black rounded-md" />
      <div className="z-10 flex items-end justify-center ">
        <p className="text-white text-5xl font-bold leading-9 text-center">
          {title}
        </p>
      </div>

      <Link href={link}>
        <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 uppercase text-center btn btn-outline z-20 text-white">
          See More
        </button>
      </Link>
    </div>
  );
};

export default LookingForCard;
