import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import linkedinLogo from '@/public/assets/linkedin.svg'

const ResidencyAdvisorsCard = ({
    image,
    name,
    designation,

    linkedinLink,
  }: {
    image: string;
    name: string;
    designation: string;

    linkedinLink: string;
  }) => {
  return (
    <div>
    <div className="group relative  items-center justify-center overflow-hidden  ">
      <div className=" aspect-square ">
        <Image
          className="h-full w-full object-cover  transition-transform duration-500 "
          src={image}
          alt=""
          width={500}
          height={1000}

        />
      </div>
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className="  bg-black  bg-opacity-70 w-[363px] h-[120px]  group-hover:opacity-0 transition-opacity duration-500">
          <h2 className="text-center mt-2 text-white text-sm font-bold uppercase">
           {name}
          </h2>
          <h4 className="text-center text-white text-xs py-1  ">{designation}</h4>
          <h3 className="text-center text-amber-500 text-xs font-semibold ">Diplo</h3>
        </div>
        <div className=" absolute h-full w-full text-left   text-white text-xs font-semibold opacity-0 transition-opacity  bg-black bg-opacity-70 duration-300 group-hover:opacity-100 p-5 flex justify-center items-center">
     
         <Link href={linkedinLink}   >
         <Image  src={linkedinLogo} className=" my-3 mx-auto" alt="Linkedin Icon">
          </Image></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ResidencyAdvisorsCard