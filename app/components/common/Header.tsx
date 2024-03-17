import Image from "next/image";
import React from "react";

const Header = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="relative h-[455px] overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Main Background"
        src={image}
        quality={80}
        fill
      />
      <div className="absolute inset-0 flex z-10 items-center justify-center">
        <div className="text-center text-white text-5xl font-bold font-Poppins">
          {title}
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-30" />
    </div>
  );
};

export default Header;
