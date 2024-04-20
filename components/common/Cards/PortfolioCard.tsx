import { TCompany } from '@/components/types';
import Image from 'next/image';
import React from 'react';

import { FaLocationDot } from 'react-icons/fa6';

const PortfolioCard = ({
  logo,
  companyName,
  websiteLink,
  shortDescription,
  state,
}: TCompany) => {
  return (
    <div className="relative group drop-shadow-md  m-3 hover:drop-shadow-none overflow-hidden transition-all duration-500 aspect-[3/4] bg-white border flex rounded-3xl flex-col justify-around items-center hover:bg-dipalo hover:backdrop-blur-lg">
      <Image
        className="size-[150px]  object-contain mix-blend-multiply md:group-hover:translate-y-[-60%] sm:group-hover:translate-y-[-90%]  group-hover:translate-y-[-90%] group-hover:scale-50 transition-all duration-500"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${logo}`}
        alt={companyName}
        height={200}
        width={200}
      />
      <p className="text-white drop-shadow-md text-sm opacity-0 w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-500 lg:mt-24 md:mt-36 sm:mt-32 mt-32 px-4 line-clamp-6 ">
        {shortDescription}
      </p>
      <div className="absolute bottom-0 group-hover:bottom-5 text-white transition-all duration-500 ">
        <p className=" flex items-center w-full justify-center gap-1 translate-y-5 group-hover:translate-y-0  p-2 drop-shadow-md text-black group-hover:text-white transition-all duration-300">
          <FaLocationDot /> {state}{' '}
        </p>
        <a
          href={websiteLink}
          target="_blank"
          className=" drop-shadow-sm group-hover:opacity-100 transition-all duration-500   text-xs font-semibold hover:text-dipalo hover:bg-white  opacity-0 justify-self-end border-2 rounded-md md:p-2 p-3 uppercase cursor-pointer"
        >
          <span className=" drop-shadow-sm">Visit Website</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
