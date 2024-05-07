import React, { ReactNode } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

const ContactCard = ({
  mainText,
  subText,
  children,
  isSocial,
}: {
  mainText: string;
  subText?: string;
  children: ReactNode;
  isSocial?: boolean;
}) => {
  return (
    <div className="w-[420px] h-[236.33px] relative">
      <div className="w-[390px] h-[206.33px] left-[15px] top-[30px] absolute bg-white rounded-[10px] border border-gray-200">
        <div className="w-[132.36px] h-[25.33px] left-[41px] top-[55px] absolute text-neutral-800 text-lg font-bold  leading-relaxed">
          {mainText}
        </div>
        <div className="w-[211px] left-[41px] top-[93px] absolute text-zinc-900 text-opacity-75 text-base font-semibold ">
          {isSocial ? (
            <div className=" flex gap-5 text-4xl text-black">
              {' '}
              <a target='_blank' href="https://www.linkedin.com/company/dipaloventures/">
                <FaLinkedin className="hover:text-dipalo cursor-pointer transition-colors duration-300" />{' '}
              </a>
              <a target='_blank' href="https://twitter.com/DipaloVentures">
                <FaTwitter className="hover:text-dipalo cursor-pointer transition-colors duration-300" />
              </a>{' '}
            <a target='_blank' href="https://www.instagram.com/dipaloventures/">  <FaInstagram className="hover:text-dipalo cursor-pointer transition-colors duration-300" /></a>{' '}
              <a target='_blank' href="https://www.youtube.com/@dipaloventures9243"><FaYoutube className="hover:text-dipalo cursor-pointer transition-colors duration-300" /></a>{' '}
            </div>
          ) : (
            subText
          )}
        </div>
      </div>
      <div className="w-[78px] h-[78px] left-[47px] top-[-13px] flex justify-center items-center absolute bg-white rounded-[78px] border border-gray-200">
        {children}
      </div>
    </div>
  );
};

export default ContactCard;
