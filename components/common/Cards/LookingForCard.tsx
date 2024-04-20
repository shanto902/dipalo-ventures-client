import Link from 'next/link';
import React from 'react';
import { TLookingForData } from '../../Pages/Home/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
const LookingForCard = ({
  image,
  title,
  link,
  buttonText
}: TLookingForData) => {
  return (
    <div className="group h-full p-5 relative grid grid-rows-2 transition-transform duration-500 overflow-hidden ">
      <Image
        className="absolute group-hover:scale-110 transition-transform duration-[2000ms] inset-0 w-full h-full object-cover object-center"
        sizes={"(max-width: 500px) 100vw, 33vw"}
        alt="Main Background"
        src={image}
        quality={100}
        fill
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black  rounded-3xl " />
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 top-0  left-0 w-full h-full bg-gradient-to-b from-black/0 to-dipalo rounded-3xl" />
      <div className="z-10 flex items-end justify-center ">
        <p className="text-white text-3xl font-bold text-center">{title}</p>
      </div>

      <Link href={link}>
        <button className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 uppercase text-center border rounded  text-sm shadow-md border-white border-opacity-30 py-2 px-8 hover:bg-dipalo z-20 text-white transition-all duration-500">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default LookingForCard;
