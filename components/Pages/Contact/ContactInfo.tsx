import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { SlLocationPin } from 'react-icons/sl';
import ContactCard from './ContactCard';
import AnimatedDiv from '@/components/common/AnimatedDiv';

type TContactInfo = {
  mainText: string;
  subText?: string;
  icon: React.JSX.Element;
  isSocial?: boolean;
};

const contactInfoText: TContactInfo[] = [
  {
    mainText: 'Location',
    subText:
      "<a target='_blank' href='https://www.google.com/maps/place/1623+W+Fulton+St+%23237,+Chicago,+IL+60612,+USA/@41.8867035,-87.6702241,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d5531f03633:0x733891b95b9b87df!8m2!3d41.8866995!4d-87.6676492?entry=ttu'>1623 W Fulton St, Suite 237 Chicago, IL 60612</a>",
    icon: <SlLocationPin className="  size-7" />,
  },
  // {
  //   mainText: 'Mail',
  //   subText:
  //     "<b>Email (General) </b>: <a href='mailto:info@dipaloventures.com'>info@dipaloventures.com </a> <br/> <b>Deals (Startups)</b>: <a href='mailto:deals@dipaloventures.com'>deals@dipaloventures.com</a>",
  //   icon: <MdOutlineEmail className="  size-7" />,
  // },
  // {
  //   mainText: 'Social',
  //   isSocial: true,
  //   icon: <FaPodcast className="  size-7" />,
  // },
];

const ContactInfo = () => {
  return (
    <PaddingContainer className=" grid lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1   ">
      {contactInfoText.map((info, i) => (
        <AnimatedDiv key={i} id={i} className="overflow-visible">
          <ContactCard
            mainText={info.mainText}
            subText={info.subText}
            isSocial={info.isSocial}
          >
            {info.icon}
          </ContactCard>
        </AnimatedDiv>
      ))}
    </PaddingContainer>
  );
};

export default ContactInfo;
