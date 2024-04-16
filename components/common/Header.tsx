import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = ({
  image,
  title,
  subtitle,
  breadcrumb
}: {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Main Background"
        placeholder="blur"
        src={image}
        quality={80}
        fill
      />
      <div className="absolute inset-0 flex flex-col z-10 items-center justify-center text-white">
        <h2 className="text-center md:mt-20 mt-10  lg:text-3xl md:text-2xl text-xl font-bold font-Poppins">
          {title}
        </h2>
        {subtitle && <p>{subtitle}</p>}
        <p className=" mt-4 md:text-sm text-xs">
          <Link className=" hover:text-dipalo" href={'/'}>
            Home
          </Link>{' '}
          / <span className=" text-dipalo">{breadcrumb}</span>
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default Header;
