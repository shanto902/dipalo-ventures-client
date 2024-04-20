import React from 'react';
import Image from 'next/image';
import PaddingContainer from '../../Layout/PaddingContainer';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { TCompany } from '@/components/types';
const PortfolioLogsMarquee = ({companies}:{companies:TCompany[]}) => {
  return (
    <PaddingContainer className=" my-10">
      <div>
        <Marquee gradient pauseOnHover gradientColor="white">
          {' '}
          {companies.map((company, i) => (
            <Link href={company.websiteLink} className="overflow-hidden" key={i}>
              <Image
                className=" mx-10 my-6 hover:scale-110 transition-transform h-auto w-auto duration-500 object-contain"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${company.logo}`}
                alt={company.companyName}
                height={80}
                width={80}
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
