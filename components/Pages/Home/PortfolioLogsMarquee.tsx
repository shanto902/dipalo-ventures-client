import React from 'react';
import { companies } from '../Portfolio/const';
import Image from 'next/image';
import PaddingContainer from '../../Layout/PaddingContainer';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
const PortfolioLogsMarquee = () => {
  return (
    <PaddingContainer className=" my-10">
      <div>
        <Marquee gradient pauseOnHover gradientColor="white">
          {' '}
          {companies.map((company, i) => (
            <Link href={'/portfolio'} className="" key={i}>
              <Image
                className=" mx-10"
                src={company.logo}
                alt={company.name}
                height={150}
                width={150}
              />
              {/* <p className="opacity-0 group-hover:opacity-100 bottom-0 left-1/2 absolute ">
              {company.name}
            </p> */}
            </Link>
          ))}
        </Marquee>
      </div>
    </PaddingContainer>
  );
};

export default PortfolioLogsMarquee;
