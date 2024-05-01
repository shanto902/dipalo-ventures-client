import AnimatedPara from '@/components/common/AnimatedPara';
import CustomTitle from '@/components/common/CustomTitle';
const LottieAnimation = dynamic(
  () => import('@/components/common/LottieAnimation'),
  {
    ssr: false,
  }
);
import PaddingContainer from '@/components/Layout/PaddingContainer';
import dynamic from 'next/dynamic';
import React from 'react';

const Investment = ({
  text,
  animationLink,
}: {
  text: string;
  animationLink: string;
}) => {
  console.log(animationLink);

  return (
    <PaddingContainer className=" max-w-5xl">
      <CustomTitle className="my-10">Investment</CustomTitle>

      <div>
        <AnimatedPara>{text}</AnimatedPara>

        <LottieAnimation
          animationData={`https://admin.dipaloventures.com/assets/${animationLink}`}
        />
      </div>
    </PaddingContainer>
  );
};

export default Investment;
