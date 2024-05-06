'use client';
import React, { useEffect, useState } from 'react';
import AnimatedPara from '@/components/common/AnimatedPara';
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import dynamic from 'next/dynamic';
import { fundRoutesData } from './const';
import AnimatedDiv from '@/components/common/AnimatedDiv';

const LottieAnimation = dynamic(
  () => import('@/components/common/LottieAnimation'),
  {
    ssr: false,
  }
);

const FundRoute = ({
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
        const response = await fetch(
          `https://admin.dipaloventures.com/assets/${animationLink}`
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setAnimationData(jsonData);
      } catch (error) {
        console.error('Failed to fetch animation data:', error);
      }
    };

    fetchAnimationData();
  }, [animationLink]);

  return (
    <PaddingContainer className="max-w-5xl ">
      <CustomTitle className="my-10">WHY TAKE THE FUND ROUTE?</CustomTitle>
      <div className='flex flex-row items-center'>
        <AnimatedPara>{text}</AnimatedPara>
        {animationData && <LottieAnimation className='md:h-[200px] md:w-[200px] ' animationData={animationData} />}
      </div>

      <div className=' grid md:grid-cols-3 grid-cols-1 gap-10'>
        {
            fundRoutesData.map((item,i)=><AnimatedDiv className=' bg-amber-100 hover:bg-amber-200 text-center rounded-2xl flex justify-center items-center p-5' id={i} key={i}>{item.text}</AnimatedDiv>)
        }
      </div>
    </PaddingContainer>
  );
};

export default FundRoute;
