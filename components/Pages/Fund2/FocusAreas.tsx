import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { focusAreas } from './const';
import FocusAreaCard from '../../common/Cards/FocusAreaCard';
import CustomTitle from '@/components/common/CustomTitle';
import AnimatedPara from '@/components/common/AnimatedPara';

const FocusAreas = () => {
  return (
    <PaddingContainer className=" py-10">
      <CustomTitle className=' pb-10'>
        FOCUS AREAS
      </CustomTitle>
      <AnimatedPara className=" text-center text-black text-lg font-medium ">
        The Dipalo Heed ClimateTech fund invests in enabling architecture and
        scalable products with which we can save the planet. We target emerging
        technologies in sectors that address key market needs where our product
        expertise is a differentiator. 
      </AnimatedPara>

      <div className=" grid grid-cols-2 py-10">
        {focusAreas.map((area, index) => (
          <FocusAreaCard
            key={index}
            listText={area.listText}
            logo={area.logo}
            title={area.title}
          />
        ))}
      </div>
    </PaddingContainer>
  );
};

export default FocusAreas;
