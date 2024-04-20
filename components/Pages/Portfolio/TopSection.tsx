import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import Image from 'next/image';
import AnimatedPara from '@/components/common/AnimatedPara';
const LottieAnimation = dynamic(() => import('../../common/LottieAnimation'), {
  ssr: false,
});
import animationData from '@/components/LottieFiles/portfolio-lottie.json';
import dynamic from 'next/dynamic';
const TopSection = () => {
  return (
    <>
      <PaddingContainer className=" relative">
        <div className=" flex flex-col-reverse md:flex-row items-center mt-5">
          <AnimatedPara className="  text-left ">
            Our first fund specialized in advancing built technologies at the
            intersection of digital and physical. We sought to foster innovative
            solutions that integrate seamlessly into our built world to promote
            sustainability and resilience.
          </AnimatedPara>

          <LottieAnimation animationData={animationData} />
        </div>
      </PaddingContainer>
    </>
  );
};

export default TopSection;
