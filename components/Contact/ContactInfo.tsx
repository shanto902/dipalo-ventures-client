import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';

const ContactInfo = () => {
  return (
    <PaddingContainer className=" grid grid-cols-3 my-20">
      <div className="w-[420px] h-[236.33px] relative">
        <div className="w-[390px] h-[206.33px] left-[15px] top-[30px] absolute bg-white rounded-[10px] border border-gray-200">
          <div className="w-[79.71px] h-[25.33px] left-[41px] top-[55px] absolute text-neutral-800 text-lg font-bold  leading-relaxed">
            Location
          </div>
          <div className="w-[306.48px] left-[41px] top-[94.83px] absolute text-zinc-900 text-opacity-75 text-lg font-semibold  leading-[30px]">
            1623 W Fulton St, Suite 237
            <br />
            Chicago, IL 60612
          </div>
        </div>
        <div className="w-[78px] h-[78px] left-[47px] top-[-13px] absolute bg-white rounded-[78px] border border-gray-200">
          <div className="w-7 h-7 left-[25px] top-[25.33px] absolute" />
        </div>
      </div>
      <div className="w-[420px] h-[236.33px] relative">
        <div className="w-[390px] h-[206.33px] left-[15px] top-[30px] absolute bg-white rounded-[10px] border border-gray-200">
          <div className="w-[132.36px] h-[25.33px] left-[41px] top-[55px] absolute text-neutral-800 text-lg font-bold  leading-relaxed">
            Email Address
          </div>
          <div className="w-[211px] left-[41px] top-[93px] absolute text-zinc-900 text-opacity-75 text-base font-semibold ">
            Email (General): info@dipaloventures.com
          </div>
          <div className="w-[281px] left-[41px] top-[142px] absolute text-zinc-900 text-opacity-75 text-base font-semibold ">
            Deals (Startups): deals@dipaloventures.com
          </div>
        </div>
        <div className="w-[78px] h-[78px] left-[47px] top-[-13px] absolute bg-white rounded-[78px] border border-gray-200">
          <div className="w-7 h-7 left-[25px] top-[25.33px] absolute" />
        </div>
      </div>
      <div className="w-[420px] h-[236.33px] relative">
        <div className="w-[390px] h-[206.33px] left-[15px] top-[30px] absolute bg-white rounded-[10px] border border-gray-200">
          <div className="w-[264.27px] h-[25.33px] left-[41px] top-[55px] absolute text-neutral-800 text-lg font-bold  leading-relaxed">
            Social
          </div>
        </div>
        <div className="w-[78px] h-[78px] left-[47px] top-[-13px] absolute bg-white rounded-[78px] border border-gray-200">
          <div className="w-7 h-7 left-[25px] top-[25.33px] absolute" />
        </div>
      </div>
    </PaddingContainer>
  );
};

export default ContactInfo;
