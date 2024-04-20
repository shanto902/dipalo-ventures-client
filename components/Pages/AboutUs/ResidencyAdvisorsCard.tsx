import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import linkedinLogo from '@/public/assets/linkedin.svg';

const ResidencyAdvisorsCard = ({
  image,
  name,
  designation,
  companyName,
  linkedinLink
}: {
  image: string;
  name: string;
  designation: string;
  companyName:string;
  linkedinLink: string;
}) => {
  return (
    <div>
      <div className="group relative  items-center justify-center  rounded-full overflow-hidden drop-shadow-md">
        <div className=" aspect-square  ">
          <Image
            className="h-full w-full object-cover  transition-transform duration-500 "
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${image}`}
            alt=""
            width={500}
            height={1000}
          />
        </div>
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-end px-9 text-center transition-all duration-500 group-hover:translate-y-10">
          <div className=" h-[80%]  bg-white  bg-opacity-80 w-[360px] transition-opacity duration-500 text-black">
            <h2 className="text-center mt-2  text-xs font-bold uppercase">
              {name}
            </h2>
            <h4 className="text-center text-xs py-1  ">
              {designation}
            </h4>
            <h3 className="text-center text-dipalo text-xs font-semibold ">
              {companyName}
            </h3>
            <Link className=' opacity-0 group-hover:opacity-100 duration-300' href={linkedinLink}>
              <Image
                src={linkedinLogo}
                className=" mt-3 mx-auto"
                alt="Linkedin Icon"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidencyAdvisorsCard;
