import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { SlLocationPin } from 'react-icons/sl';
import ContactCard from './ContactCard';

const ContactInfo = () => {
  return (
    <PaddingContainer className=" grid grid-cols-3 my-20">
      <div className=' relative h-[240px]'>
        <figure className=' absolute top-5 left-6 bg-white p-6 rounded-full z-10 border'>
          <SlLocationPin className=' size-7' />
        </figure>
        <div className=' absolute bottom-0 border h-[300px]'>
          <h3>Location</h3>
          <h4>1623 W Fulton St, Suite 237 Chicago, IL 60612</h4>
        </div>
      </div>
  <ContactCard mainText='Location' subText='Mail'>
  <SlLocationPin className=' size-7' />
  </ContactCard>
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
