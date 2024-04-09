'use client'
import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'

const LottieAnimation = ({animationData}:{animationData:any}) => {
    // Check if `document` is available before rendering
    if (typeof document === 'undefined') {
        return null; // Return null if `document` is not available (for SSR)
    }

  
    return (
      <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Player
      className='h-[400px] w-[400px]'
      src={animationData}
      autoplay
      loop
      speed={1}
    /></motion.div>
    );
}

export default LottieAnimation;
