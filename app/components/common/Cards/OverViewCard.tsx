import Link from "next/link";
import React from "react";
import { TOverviewData } from "../../Home/types";
import Image from "next/image";

const OverViewCard = ({ image, title, subtitle, link }: TOverviewData) => {
  return (
    <div className="h-[512px] m-10 p-5  rounded-md shadow-lg relative grid grid-rows-2 transition-transform transform hover:scale-105 duration-700">
      <Image
        className=" -z-10 object-cover rounded-md "
        alt={title}
        src={image}
        quality={80}
        fill
        sizes="100vw"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md" />
      <div className="z-10">
        <p className="text-dipalo leading-8 text-xl mt-56">{title}</p>
        <p className="text-white text-2xl font-semibold">{subtitle}</p>
      </div>
      <Link href={link}>
        <button className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 uppercase text-center border rounded border-white border-opacity-30 py-2 px-8 hover:border-dipalo z-20 text-white transition-all duration-500">
          See More
        </button>
      </Link>
    </div>
  );
};

export default OverViewCard;
