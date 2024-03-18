import Link from "next/link";
import React from "react";
import { TOverviewData } from "../../Home/types";
import Image from "next/image";

const OverViewCard = ({ image, title, subtitle, link }: TOverviewData) => {
  return (
    <div className="xl:h-[512px] lg:h-[500px] h-[300px] xl:m-10 m-5 xl:p-5 p-3  rounded-md shadow-lg relative grid grid-rows-2 transition-transform transform hover:scale-105 duration-700">
      <Image
        className="object-cover rounded-md -z-10"
        alt={title}
        src={image}
        quality={80}
        fill
        sizes="100vw"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-50 " />
      <div className="z-10">
        <p className="mt-10 text-lg leading-8 text-dipalo lg:text-xl lg:mt-56">
          {title}
        </p>
        <p className="text-xl font-semibold text-white lg:text-2xl">
          {subtitle}
        </p>
      </div>
      <Link href={link}>
        <button className="absolute z-20 px-4 py-2 text-sm text-center text-white uppercase transition-all duration-500 transform -translate-x-1/2 border border-white rounded bottom-8 left-1/2 border-opacity-30 hover:border-dipalo">
          See More
        </button>
      </Link>
    </div>
  );
};

export default OverViewCard;
