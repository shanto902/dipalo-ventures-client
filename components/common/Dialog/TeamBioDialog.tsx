"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import linkedinLogo from "@/public/assets/linkedin.svg";
const TeamBioDialog = ({
  id,
  image,
  name,
  designation,
  bio,
  linkedinLink,
}: {
  id: number;
  image: string;
  name: string;
  designation: string;
  bio: string;
  linkedinLink: string;
}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => {
          const modal = document.getElementById(
            `my_modal_${id}`
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        {" "}
        <div className="relative">
  <Image
    className="h-full rounded-md w-full aspect-[3/4] object-cover transition-transform duration-500"
    src={image}
    alt=""
    width={500}
    height={1000}
  />
  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-full h-[110px] group-hover:opacity-0 transition-opacity duration-500">
    <h2 className="text-center mt-5 text-white text-base font-bold uppercase">
      {name}
    </h2>
    <h3 className="text-center text-amber-500 text-xs font-semibold mt-2">{designation}</h3>
  </div>
</div>

      </button>
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl rounded-xl">
          <div className=" flex gap-5 items-center overflow-hidden  ">
     
         <div className="flex-1">
         <Image
            className="h-full w-full aspect-square rounded-lg  object-cover  transition-transform duration-500 "
            src={image}
            alt=""
            width={500}
            height={1000}
          />
 <h2 className="text-center text-black text-2xl font-bold uppercase mt-5">
              {name}
            </h2>
            <h3 className="text-center text-amber-500 text-lg pb-2 font-semibold ">
              {designation}
            </h3>
         </div>
          

          <div className=" flex-1">
         

            {parse(bio)}
            <Link href={linkedinLink}>
              <Image
                src={linkedinLogo}
                className=" my-3 mx-auto"
                alt="Linkedin Icon"
              ></Image>
            </Link>
          </div>
            <div>
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
