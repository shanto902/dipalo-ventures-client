import React from 'react';
import PaddingContainer from './PaddingContainer';
import Image from 'next/image';
import Link from 'next/link';

import { FaCaretRight } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className=" bg-zinc-900">
      <PaddingContainer className=" pt-12 pb-6">
        <Image src="/logo.svg" alt="Logo" width={133} height={51} />
        <div className=" grid lg:grid-cols-4 grid-cols-1  mt-10 mb-5 ">
          <section>
            <p className=" text-white  text-xl py-5">Quick Links</p>
            <ol className=" text-white text-base font-normal leading-7 list-none">
              <li>
                <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                  ClimateTech Investors
                </span>
              </li>
              <li>
                <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                  Residency Program
                </span>
              </li>
              <li>
                <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                  Golden Visa Opportunity
                </span>
              </li>
            </ol>
          </section>

          <section className="  text-white text-base font-normal leading-7">
            <h3 className=" text-white  text-xl py-5">Say Hello</h3>
            <ul className=' list-none'>
             
           <li>
           <a href="mailto:info@dipaloventures.com">
              <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                info@dipaloventures.com
              </span>
            </a>
           </li>

          <li>  <a href="mailto: deals@dipaloventures.com">
              <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                deals@dipaloventures.com
              </span>
            </a></li>
            
            </ul>
          </section>
          <div className=" text-white text-base font-normal leading-7">
            <p className=" text-white  text-xl py-5">Find us in</p>
            <p className="">
               1623 W Fulton St, Suite 237 <br /> Chicago, IL 60612
            </p>
          </div>

          <div className="">
            <p className=" text-white  text-4xl font-bold pt-5 pb-3">
              Get in touch!
            </p>

            <p className="text-white">Subscribe to our newsletter</p>

            <div className="relative mt-5 ">
              <input
                type="text"
                id="username"
                className="border-b py-1 w-full md:w-auto focus:outline-none text-white bg-zinc-900 focus:border-dipalo focus:border-b-2 transition-colors peer"
                autoComplete="off"
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-1 text-white text-base cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-dipalo transition-all"
              >
                Email
              </label>
            </div>
            <button className=" flex items-center  gap-2 mt-5 uppercase text-center border rounded  text-sm shadow-md border-white border-opacity-30 py-2 px-4 hover:bg-dipalo z-20 text-white transition-all duration-500">
              Subscribe <FaCaretRight />
            </button>
          </div>
        </div>

        <div className=" opacity-75 text-white text-sm font-normal leading-[30px]">
          Copyright © 2024 Dipalo Ventures. All Rights Reserved.
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
