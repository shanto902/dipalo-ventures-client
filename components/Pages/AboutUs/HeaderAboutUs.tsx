
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';


import Typewriting from '@/components/common/Typewriting';
import AnimatedDiv from '@/components/common/AnimatedDiv';

const HeaderAboutUs = ({ image }: { image: StaticImageData }) => {

  return (
    <div className="relative md:h-[455px] h-[60vh] overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-start object-cover "
        alt="Main Background"
        placeholder="blur"
        src={image}
        fill
      />
      <PaddingContainer className="absolute inset-0 flex flex-col z-10 items- justify-center text-white px-5 mt-44">
        <Typewriting className='text-white text-3xl leading-[76px] font-bold drop-shadow-2xl'   text='Dipalo [DI-PA-LO]'/>
        <AnimatedDiv animationStyle='down' delay={2} >
        <ol className="list-decimal pl-5 lg:text-lg md:text-base font-normal leading-loose text-white ">
          <li>
            From Bangla, the modern South Asian language rooted in Sanskrit
          </li>
          <li>
            ‘Pra-dip’ (Bangla), ‘Pra-di-pa’ (Sanskrit) meaning “light, lantern”
          </li>
          <li>‘Alo’ meaning light</li>
        </ol>
        </AnimatedDiv>
      </PaddingContainer>
      <div className="absolute inset-0 bg-black opacity-70" />
    </div>
  );
};

export default HeaderAboutUs;
