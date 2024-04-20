'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import linkedinLogo from '@/public/assets/linkedin.svg';
import Tooltip from '../Tooltip';
import { TTeam } from '../../types';


const TeamBioDialog = ({
  photo,
  name,
  designation,
  bio,
  linkedinLink,
  priorInvestments,
  serialNo
}: TTeam) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const isLargeScreen = window.innerWidth > 768;
  return (
    <div>
      <section
        className=" group relative h-[315px]  rounded-3xl   "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {' '}
        <Image
          className=" h-[170] drop-shadow-lg mx-auto absolute top-0 left-0 right-0 justify-center  w-[170] aspect-square object-cover rounded-full"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${photo}`}
          alt=""
          width={200}
          height={200}
        />
       <div>
       {hovered || !isLargeScreen  ? (
          <div className="absolute bottom-4 left-0 right-0 mx-auto transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}">
            <div className="text-center text-white">
              <h2 className="text-base font-bold uppercase group-hover:drop-shadow-lg  md:drop-shadow-none drop-shadow-lg  transition-shadow duration-300">{name}</h2>
              <h3 className="text-xs group-hover:drop-shadow-md md:drop-shadow-none drop-shadow-md transition-shadow duration-300">{designation}</h3>
              <div>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-2 -mb-1 inline-block"
                >
                  <Image
                    src={linkedinLogo}
                    className=" cursor-pointer drop-shadow-md hover:drop-shadow-none transition-all duration-300"
                    alt="Linkedin Icon"
                  />
                </a>
              </div>
              <div
                className="z-20 inline-block text-xs mx-auto pointer hover:underline underline-offset-4 cursor-pointer transition-all duration-300 drop-shadow-md"
                onClick={() => {
                  const modal = document.getElementById(
                    `my_modal_${serialNo}`
                  ) as HTMLDialogElement;
                  if (modal) {
                    modal.showModal();
                  }
                }}
              >
                Click To Learn More
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-4 left-0 right-0 mx-auto transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}">
            <div className="text-center text-black px-4 ">
              <h2 className="text-base font-bold uppercase">{name}</h2>
              <h3 className="text-xs">{designation}</h3>
              <div className=" text-xs line-clamp-2 my-2">{parse(bio)}</div>
            </div>
          </div>
        )}
       </div>
        <div className="shadow-md absolute w-full group-hover:bg-dipalo bg-dipalo  md:bg-stone-50 h-[180px] rounded-3xl bottom-0 -z-10 transition-colors duration-300" />
      </section>

      <dialog id={`my_modal_${serialNo}`} className="modal">
        <div className="modal-box md:max-w-6xl max-w-sm rounded-xl bg-stone-50">
          <div className=" grid md:grid-cols-3 grid-cols-1 overflow-hidden lg:px-20 lg:pb-10 lg:pt-14 md:gap-x-12 place-items-center ">
            <div className="col-span-1 flex justify-center flex-col items-center">
              <Image
                className="md:h-[330px] md:w-[330px] aspect-square rounded-xl  object-cover  transition-transform duration-500 "
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${photo}`}
                alt=""
                width={500}
                height={500}
              />
              <h2 className="text-center text-black md:text-2xl text-xl font-semibold uppercase mt-5">
                {name}
              </h2>
              <h3 className="text-center text-amber-500 md:text-lg text-base pb-2 font-medium ">
                {designation}
              </h3>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-2 md:-mb-1 mb-2  inline-block"
              >
                <Image
                  src={linkedinLogo}
                  className=" cursor-pointer size-8 md:size-10 "
                  alt="Linkedin Icon"
                />
              </a>
            </div>

            <div className=" col-span-2 md:text-base text-sm ">
              {parse(bio)}
              <div className="font-semibold text-lg text-center pt-5">
                {priorInvestments && priorInvestments?.length > 0 && (
                  <span>
                    <span className="underline decoration-dipalo underline-offset-4">
                      Prior Investments
                    </span>
                  </span>
                )}
              </div>
              <div>
                {priorInvestments && (
                  <div className=" flex flex-row flex-wrap gap-4 mt-4 justify-center">
                    {priorInvestments.map((company) => (
                      <Link
                        key={company.id}
                        href={company.companyLink}
                        className=" relative  border rounded-xl "
                      >
                        {company.status !== 'ongoing' && (
                          <span
                            className={` absolute badge z-10 badge-xs  bottom-0 left-0 text-white ${
                              company.status === 'exit'
                                ? `badge-error`
                                : `badge-warning`
                            }`}
                          >
                            {company.status}
                          </span>
                        )}
                        <Tooltip message={company.companyName}>
                          <Image
                            className=" -z-20 aspect-square object-contain m-1"
                            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${company.companyLogo}`}
                            alt={company.companyName}
                            height={60}
                            width={60}
                          />
                        </Tooltip>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default TeamBioDialog;
