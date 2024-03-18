import Image, { StaticImageData } from "next/image";
import React from "react";

const Header = ({ image, title, subtitle }: { image: StaticImageData; title: string, subtitle?: string }) => {
  return (
    <div className="relative h-[455px] overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Main Background"
        placeholder="blur"
        src={image}
        quality={80}
        fill
      />
      <div className="absolute inset-0 flex flex-col z-10 items-center justify-center text-white">
        <h2 className="text-center  text-5xl font-bold font-Poppins">
          {title}
        </h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default Header;
