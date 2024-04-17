'use client';
import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import LookingForCard from '../../common/Cards/LookingForCard';
import { lookingForData } from './const';
import { motion } from 'framer-motion';
import CustomTitle from '../../common/CustomTitle';
import AnimatedDiv from '../../common/AnimatedDiv';

const LookingFor = () => {
  return (
    <PaddingContainer>
      <CustomTitle>
        WHO WE’RE <span className="text-dipalo">LOOKING</span> FOR
      </CustomTitle>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-16 mt-10 mb-24">
        {lookingForData.map((data, i) => (
          <AnimatedDiv
            key={i}
            id={i}
            className="aspect-[69/72] rounded-3xl shadow-md"
          >
            <LookingForCard
              title={data.title}
              image={data.image}
              link={data.link}
              buttonText={data.buttonText}
            />
          </AnimatedDiv>
        ))}
      </div>
    </PaddingContainer>
  );
};

export default LookingFor;
