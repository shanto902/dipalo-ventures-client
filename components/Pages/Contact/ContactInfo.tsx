import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { SlLocationPin } from 'react-icons/sl';
import ContactCard from './ContactCard';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <PaddingContainer className=" grid md:grid-cols-3 justify-items-center grid-cols-1 gap-y-14 my-10">
      <ContactCard
        mainText="Location"
        subText="<a href='https://www.google.com/maps/place/1623+W+Fulton+St+%23237,+Chicago,+IL+60612,+USA/@41.8867035,-87.6702241,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d5531f03633:0x733891b95b9b87df!8m2!3d41.8866995!4d-87.6676492?entry=ttu'>1623 W Fulton St, Suite 237
Chicago, IL  60612</a>"
      >
        <SlLocationPin className=" text-dipalo size-7" />
      </ContactCard>
      <ContactCard
        mainText="Mail"
        subText="Email (General): <a href='mailto:info@dipaloventures.com'>info@dipaloventures.com </a> <br/> Deals (Startups): <a href='mailto:deals@dipaloventures.com'>deals@dipaloventures.com</a>"
      >
        <MdOutlineEmail className=" text-dipalo size-7" />
      </ContactCard>
      <ContactCard mainText="Social" isSocial>
        <FaPodcast className=" text-dipalo size-7" />
      </ContactCard>
    </PaddingContainer>
  );
};

export default ContactInfo;
