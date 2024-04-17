import Image, { StaticImageData } from 'next/image';
import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';

const HeaderAboutUs = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="relative md:h-[455px] h-[60vh] overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-center object-cover "
        alt="Main Background"
        placeholder="blur"
        src={image}
        fill
      />
      <PaddingContainer className="absolute inset-0 flex flex-col z-10 items- justify-center text-white px-5 mt-44">
        <h2
          style={{
            textShadow:
              '3px 0px 7px #514315cc, -3px 0px 7px #514315cc, 0px 4px 7px #514315cc'
          }}
          className=" text-white text-3xl  leading-[76px] font-bold drop-shadow-2xl"
        >
          Dipalo [DI-PA-LO]
        </h2>
        <ol className="list-decimal pl-5 text-lg font-normal leading-loose ">
          <li>
            From Bangla, the modern South Asian language rooted in Sanskrit
          </li>
          <li>
            ‘Pra-dip’ (Bangla), ‘Pra-di-pa’ (Sanskrit) meaning “light, lantern”
          </li>
          <li>‘Alo’ meaning light</li>
        </ol>
      </PaddingContainer>
      <div className="absolute inset-0 bg-black opacity-70" />
    </div>
  );
};

export default HeaderAboutUs;
