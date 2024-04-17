'use client';
import React, { useState } from 'react';

import { TResidencyData } from '@/components/Pages/ResidencyProgram/types';
import { ResidencySVG } from '../SVG/ResidencySVG';
import { motion } from 'framer-motion';
const ResidencyCard = ({ id, text }: TResidencyData) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const icon = { hidden: { y: -5, scale: 1.1 } };
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="hidden"
      className="group shadow-md rounded flex items-center md:justify-start md:px-10 px-2 md:py-5 py-3 bg-stone-50 hover:bg-dipalo  justify-center size-full transition-colors duration-500"
    >
      <div className=" flex md:flex-row  flex-col md:gap-5 gap-2 items-center  h-full  ">
        <motion.div variants={icon}>
          <ResidencySVG id={id} width={70} height={70} hovered={hovered} />
        </motion.div>
        <h3 className="text-center md:text-lg text-sm font-semibold text-black group-hover:text-white transition-colors duration-300">
          {text}
        </h3>
      </div>
    </motion.div>
  );
};

export default ResidencyCard;
