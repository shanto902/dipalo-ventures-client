import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import CustomTitle from '../../common/CustomTitle';
import dynamic from 'next/dynamic';
import animationData from '@/components/LottieFiles/fund-1-lottie.json';
import AnimatedPara from '../../common/AnimatedPara';
import AnimatedDiv from '../../common/AnimatedDiv';
import AnimatedSection from '../../common/AnimatedSection';
const LottieAnimation = dynamic(() => import('../../common/LottieAnimation'), {
  ssr: false
});

const ThesisSection = () => {
  return (
    <PaddingContainer>
      <CustomTitle className=" my-10 ">Thesis</CustomTitle>
      <div className=" flex md:flex-row flex-col-reverse gap-5 items-center">
        <AnimatedPara>
          Building on our deep expertise in product development, we launched our
          first fund in early 2022. Our investment strategy centered around the
          idea that we live in a physical world where our experiences are
          increasingly interconnected with the digital world. As innovative,
          amazing new products and services are being introduced in this space,
          venture capital needs to invest in this next wave of opportunity.
        </AnimatedPara>
        <LottieAnimation animationData={animationData} />
      </div>
    </PaddingContainer>
  );
};

export default ThesisSection;
