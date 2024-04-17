'use client';
import React, { useState } from 'react';
import { TOverviewData } from '../../Pages/Home/types';
import { OverViewSVG } from '../SVG/OverViewSVG';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';
const OverViewCard = ({ id, title, subtitle, link }: TOverviewData) => {
  const icon = { hidden: { y: -10, scale: 1.1 } };
  return (
    <motion.div
      whileHover="hidden"
      className="text-center hover:bg-dipalo transition-colors duration-300 w-full justify-center place-items-center bg-neutral-800 lg:aspect-square  items-center grid grid-rows-2 h-full p-5 rounded-3xl text-white shadow-md "
    >
      <div className=" row-span-1  mt-8 ">
        <motion.div variants={icon}>
          {' '}
          <OverViewSVG height="100" width="100" id={id} />
        </motion.div>
      </div>
      <div>
        <h3 className=" font-medium text-xl py-2">{title}</h3>
        <p className=" text-sm">{parse(subtitle)}</p>
      </div>
    </motion.div>
  );
};

export default OverViewCard;
