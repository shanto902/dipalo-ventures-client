'use client';
import React, { useEffect, useState } from 'react';
import AnimatedPara from '@/components/common/AnimatedPara';
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('@/components/common/LottieAnimation'), {
  ssr: false,
});

const Investment = ({
  text,
  animationLink,
}: {
  text: string;
  animationLink: string;
}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(`https://admin.dipaloventures.com/assets/${animationLink}`);
        const jsonData = await response.json();
        setAnimationData(jsonData);
      } catch (error) {
        console.error('Failed to fetch animation data:', error);
      }
    };

    fetchAnimationData();
  }, [animationLink]);

  return (
    <PaddingContainer className="max-w-5xl">
      <CustomTitle className="my-10">Investment</CustomTitle>
      <div>
        <AnimatedPara>{text}</AnimatedPara>
        {animationData && <LottieAnimation animationData={animationData} />}
      </div>
    </PaddingContainer>
  );
};

export default Investment;
