import Link from "next/link";
import React from "react";
import { TOverviewData } from "../../Home/types";

const Card = ({ image, title, subtitle, link }: TOverviewData) => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover" }}
      className="h-96 m-5 p-5 rounded-md relative grid grid-rows-2"
    >
      <div className="z-10">
        <p className="text-amber-500 leading-8 text-xl mt-32">{title}</p>
        <p className="text-white text-2xl font-semibold">{subtitle}</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md" />

      <Link href={link}>
        <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 uppercase text-center btn btn-outline z-20 text-white">
          See More
        </button>
      </Link>
    </div>
  );
};

export default Card;
