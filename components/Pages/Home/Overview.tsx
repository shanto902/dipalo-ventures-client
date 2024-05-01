'use client';
import React from 'react';
import OverViewCard from '../../common/Cards/OverViewCard';
import { overViewData } from './const';
import PaddingContainer from '../../Layout/PaddingContainer';
import { motion } from 'framer-motion';
import CustomTitle from '../../common/CustomTitle';
import AnimatedDiv from '../../common/AnimatedDiv';

const Overview = () => {
  return (
    <PaddingContainer>
      <div className="md:py-14 py-10">
        {/* Title Text  */}
        <CustomTitle>OVERVIEW</CustomTitle>

        <div className="mt-10 grid lg:grid-cols-4 grid-cols-2 gap-6">
          {overViewData.map((card, index) => (
            <AnimatedDiv
              className="rounded-3xl shadow-md"
              key={card.id}
              id={card.id}
            >
              <OverViewCard
                id={card.id}
                subtitle={card.subtitle}
                title={card.title}
                link={''}
              />
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </PaddingContainer>
  );
};

export default Overview;
