import { TFocusAreas } from '@/components/Pages/Fund2/types';
import Image from 'next/image';
import React from 'react';

const FocusAreaCard = ({ logo, listText, title }: TFocusAreas) => {
  const dataArray: string[] = listText.split('. ');
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1   p-10 hover:shadow-xl hover:shadow-dipalo/50 transition-all duration-500  decoration-dipalo hover:border-dipalo border rounded-3xl bg-white">
      <div className="flex flex-col justify-around items-center ">
        <Image src={logo} alt={title} width={80} height={80} />
        <h3 className="text-lg text-center font-bold py-5">{title}</h3>
      </div>
      <ul className=" list-disc ml-5 space-y-1">
        {dataArray ? (
          dataArray.map((data, i) => (
            <li
              className="lg:text-base md:text-sm text-xs
          font-semibold "
              key={i}
            >
              {data}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default FocusAreaCard;
