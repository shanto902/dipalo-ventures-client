import React from "react";
import PaddingContainer from "./Layout/PaddingContainer";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="grid w-full grid-cols-2">
      <div className=" col-span-1 bg-amber-500 bg-footer_1 bg-blend-luminosity flex-col justify-start items-start gap-[35px] inline-flex">
        <PaddingContainer>
          <div className="flex-col justify-start items-start gap-[13px] flex m-10">
            <div className="text-white text-[15px] font-normal  uppercase leading-relaxed tracking-[4px]">
              Ready To Do This
            </div>
            <div className="text-white text-8xl font-black  leading-[90px]">
              Let&apos;s get
              <br />
              to work
            </div>
            <button className="btn btn-outline uppercase leading-7 tracking-widest text-white">
              Contact Us
            </button>
          </div>
        </PaddingContainer>
      </div>

      <div className="w-full h-full  bg-black bg-footer_2 bg-blend-overlay py-10 px-20">
        <div className=" " />
        <Image src="/logo.svg" alt="Logo" width={133} height={51} />
        <div className=" grid grid-cols-2 my-10 ">
          <div>
            <p className=" text-slate-300  text-xl py-5">Quick Link</p>
            <ul className=" text-slate-300 text-base font-normal leading-7">
              <li>ClimateTech Investors</li>
              <li>Residency Program</li>
              <li>Golden Visa Opportunity</li>
            </ul>
          </div>

          <div className=" text-slate-300 text-base font-normal leading-7">
            <p className=" text-slate-300  text-xl py-5">Say Hello</p>
            <p>info@dipaloventures.com</p>
            <p>
              350 Coworking 350 N. Orleans, goooN, Chicago
              <br />
              IL 60654
            </p>
          </div>
        </div>

        <div className="left-[120px] top-[408.13px]  opacity-75 text-slate-300 text-sm font-normal leading-[30px]">
          Copyright © 2024 Dipalo Ventures. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
