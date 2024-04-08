'use client'
import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "@/components/LottieFiles/residency-lottie.json";

const ResidencyLottie = () => {
    // Check if `document` is available before rendering
    if (typeof document === 'undefined') {
        return null; // Return null if `document` is not available (for SSR)
    }

  
    return (
      <Player
      src={animationData}
      autoplay
      loop
      speed={1}
    />
    );
}

export default ResidencyLottie;
