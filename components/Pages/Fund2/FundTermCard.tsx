'use client';
import { useState } from 'react';
import { TInvestment } from '@/components/Pages/Fund1/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FundTermSVG } from '@/components/common/SVG/FundTermsSvg';
const FundTermCard = ({ id, text }: TInvestment) => {
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
    <Link
      href={{
        pathname: '/portfolio',
        search: `category=${encodedText}`,
        hash: '#portfolio',
      }}
    >
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover="hidden"
        className="group shadow-md rounded-xl overflow-hidden flex items-center md:justify-start justify-center md:px-10 px-2 py-5 bg-stone-50 hover:bg-dipalo  transition-colors duration-500"
      >
        <div className=" flex md:flex-row flex-col  gap-5   items-center  h-full  ">
          <motion.div variants={icon}>
            <FundTermSVG id={id} hovered={hovered} width={80} height={80} />
          </motion.div>

          <h3 className="text-center lg:text-lg md:text-base text-sm  font-semibold text-black group-hover:text-white transition-colors duration-300">
            {text}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default FundTermCard;
