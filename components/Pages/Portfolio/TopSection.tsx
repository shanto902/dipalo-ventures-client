import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import Image from 'next/image';
import AnimatedPara from '@/components/common/AnimatedPara';

const TopSection = () => {
  return (
    <>
      <PaddingContainer className="my-24 relative pb-20">
        <AnimatedPara >
        Our first fund specialized in advancing built technologies at the intersection of digital and physical. We sought to foster innovative solutions that integrate seamlessly into our built world to promote sustainability and resilience.
        </AnimatedPara>
        
      </PaddingContainer>
    </>
  );
};

export default TopSection;
