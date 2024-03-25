import Image from "next/image";
import React from "react";

const PortfolioCard = ({ image, link }: { image: string; link: string }) => {
  return (
    <div className=" w-[410px] h-[515px] flex flex-col">
      <Image
        className=""
        alt="Main Background"
        src={image}
        placeholder="blur"
        quality={80}
        fill
        sizes="100vw"
      />
    </div>
  );
};

export default PortfolioCard;
