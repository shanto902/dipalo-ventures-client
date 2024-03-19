import React from "react";
import PaddingContainer from "./Layout/PaddingContainer";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid w-full md:grid-cols-2 grid-cols-1">
      <div className=" col-span-1 bg-dipalo bg-footer_1 bg-blend-luminosity flex-col justify-start items-start  inline-flex">
        <PaddingContainer>
          <div className="flex-col justify-start items-start gap-[13px] flex lg:m-10 my-10">
            <div className="text-white text-[15px] font-normal  uppercase leading-relaxed tracking-[4px]">
              Ready To Do This
            </div>
            <div className="text-white text-8xl font-black  leading-[90px]">
              Let&apos;s get
              <br />
              to work
            </div>
            <Link href={'/contact'} className=" uppercase leading-7 tracking-widest text-white border px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-dipalo">
              Contact Us
            </Link>
          </div>
        </PaddingContainer>
      </div>

      <div className="w-full h-full  bg-black bg-footer_2 bg-blend-overlay py-10 lg:px-20 px-5">
        <div className=" " />
        <Image src="/logo.svg" alt="Logo" width={133} height={51} />
        <div className=" grid md:grid-cols-2 grid-cols-1 my-10 ">
          <div>
            <p className=" text-white  text-xl py-5">Quick Link</p>
            <ul className=" text-white text-base font-normal leading-7">
              <li>ClimateTech Investors</li>
              <li>Residency Program</li>
              <li>Golden Visa Opportunity</li>
            </ul>
          </div>

          <div className=" text-white text-base font-normal leading-7">
            <p className=" text-white  text-xl py-5">Say Hello</p>
            <p>info@dipaloventures.com</p>
            <p>
              350 Coworking 350 N. Orleans, goooN, Chicago
              <br />
              IL 60654
            </p>
          </div>
        </div>

        <div className="left-[120px] top-[408.13px]  opacity-75 text-white text-sm font-normal leading-[30px]">
          Copyright © 2024 Dipalo Ventures. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
