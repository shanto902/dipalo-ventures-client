import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';

import AnimatedPara from '../common/AnimatedPara';
import AnimatedSection from '../common/AnimatedSection';

const QuotesSection = () => {
  return (
    <AnimatedSection className="px-8 max-w-7xl mx-auto" y={80}>
      <PaddingContainer className="  h-[350px] relative bg-[url('../public/assets/quotesBG.jpeg')] bg-center  bg-cover rounded-3xl overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-black bg-opacity-50 " />
        <div className="absolute inset-0 flex-col text-justify items-center justify-center mx-auto text-white max-w-3xl lg:flex">
          <div>
            <AnimatedPara
              animationStyle="fade"
              className=" text-white text-xl pb-5"
            >
              “There’s a tremendous amount of craftsmanship in between a great
              idea and a great product.”
            </AnimatedPara>
            <AnimatedPara
              animationStyle="right"
              className="text-white text-2xl font-light text-right"
            >
              - Steve Jobs, 1997
            </AnimatedPara>
          </div>
        </div>
      </PaddingContainer>{' '}
    </AnimatedSection>
  );
};

export default QuotesSection;
