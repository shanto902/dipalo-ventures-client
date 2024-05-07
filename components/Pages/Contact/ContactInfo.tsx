import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { SlLocationPin } from 'react-icons/sl';
import ContactCard from './ContactCard';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <PaddingContainer className=" grid grid-cols-3 my-20">
     <ContactCard mainText='Location' subText='1623 W Fulton St, Suite 237
Chicago, IL  60612'>
  <SlLocationPin className=' text-dipalo size-7' />
  </ContactCard>
  <ContactCard mainText='Mail' subText='Email (General): info@dipaloventures.com Deals (Startups): deals@dipaloventures.com'>
  <MdOutlineEmail className=' text-dipalo size-7' />
  </ContactCard>
  <ContactCard mainText='Social' isSocial>
  <FaPodcast className=' text-dipalo size-7' />
  </ContactCard>
    </PaddingContainer>
  );
};

export default ContactInfo;
