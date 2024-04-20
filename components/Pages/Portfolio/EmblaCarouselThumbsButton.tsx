
import Image from 'next/image';
import React from 'react';

type PropType = {
  selected: boolean;
  onClick: () => void;
  companyLogo: string;
  companyName: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected,  onClick, companyLogo, companyName } = props;

  return (
    <div
    onClick={onClick}
      className={`${selected ? ' bg-dipalo shadow-md ' : ' '} active:shadow-none  shadow-lg hover:shadow-2xl transition-all rounded-2xl mb-3  duration-300`}
    >
      <div className=" mix-blend-multiply aspect-square  appearance-none bg-transparent touch-manipulation p-2  no-underline cursor-pointer text-lg font-semibold  flex items-center justify-center  w-full">
        <Image
          className="object-contain"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${companyLogo}`}
         
          alt={companyName}
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
};
