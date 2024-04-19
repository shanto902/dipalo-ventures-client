
import { TCompany } from '@/components/types';
import Image from 'next/image';
import React from 'react';

const PortfolioCard = ({ logo, companyName, websiteLink }: TCompany) => {
  return (
    <div className=" relative group h-[300px]  bg-white border flex flex-col justify-around items-center">
      <Image
        className="h-[200px] object-contain"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${logo}`}
        alt={companyName}
        height={200}
        width={200}
      />
      <button className=" absolute group-hover:opacity-100 bottom-3  hover:text-dipalo  transition-all duration-300 opacity-0 justify-self-end border-2 rounded-md p-2 uppercase ">
        Visit Website
      </button>
    </div>
  );
};

export default PortfolioCard;
