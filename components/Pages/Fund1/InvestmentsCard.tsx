'use client';
import React, { useState } from 'react';
import { OverViewSVG } from '../../common/SVG/OverViewSVG';
import parse from 'html-react-parser';
import { TInvestment, TKeyMetrics } from '@/components/Pages/Fund1/types';
import { InvestmentsSVG } from '@/components/common/SVG/InvestmentsSVG';
import { motion } from 'framer-motion';
import Link from 'next/link';
const InvestmentsCard = ({ id, image, text }: TInvestment) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const icon = { hidden: { y: -5, scale: 1.1 } };
  const encodedText = encodeURIComponent(text);
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="hidden"
      className="group shadow-md rounded-xl overflow-hidden flex items-center md:justify-start justify-center md:px-10 px-2 py-5 bg-stone-50 hover:bg-dipalo  transition-colors duration-500"
    >
      <div className=" flex md:flex-row flex-col  gap-5   items-center  h-full  ">
        <Link
          href={{
            pathname: '/portfolio',
            search: `category=${encodedText}`,
            hash: '#portfolio',
          }}
        >
          <motion.div variants={icon}>
            <InvestmentsSVG id={id} hovered={hovered} width={80} height={80} />
          </motion.div>
        </Link>
        <h3 className="text-center lg:text-lg md:text-base text-sm  font-semibold text-black group-hover:text-white transition-colors duration-300">
          {text}
        </h3>
      </div>
    </motion.div>
  );
};

export default InvestmentsCard;
