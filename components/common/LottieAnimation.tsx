'use client';
import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const LottieAnimation = ({ animationData, className }: { animationData: any, className?:string }) => {
  if (typeof document === 'undefined') {
    return null; 
  }

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <Player
        className={ twMerge("h-full w-full", className)}
        src={animationData}
        autoplay
        loop
        speed={1}
      />
    </motion.div>
  );
};

export default LottieAnimation;
