import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';

import AnimatedPara from '../../common/AnimatedPara';
import AnimatedSection from '../../common/AnimatedSection';

const QuotesSection = () => {
  return (
    <AnimatedSection className="px-8 max-w-7xl mx-auto mt-20 md:mt-5 " y={80}>
      <PaddingContainer className="  h-[350px] relative bg-[url('../public/assets/quotesBG.jpeg')] bg-center  bg-cover rounded-3xl overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-black bg-opacity-50 " />
        <div className="absolute inset-0 flex-col text-justify items-center justify-center mx-auto text-white max-w-3xl flex px-5">
          <div>
            <AnimatedPara
              animationStyle="fade"
              className=" text-white lg:text-xl md:text-lg text-base pb-5"
            >
              “There’s a tremendous amount of craftsmanship in between a great
              idea and a great product.”
            </AnimatedPara>
            <AnimatedPara
              animationStyle="right"
              className="text-white lg:text-2xl md:text-xl text-lg font-light text-right"
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
