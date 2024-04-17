import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import CustomTitle from '../../common/CustomTitle';
import AnimatedSection from '../../common/AnimatedSection';
import AnimatedPara from '../../common/AnimatedPara';

const Fund2Thesis = () => {
  return (
    <PaddingContainer>
      <CustomTitle  className=' my-14'> Thesis </CustomTitle>
      <AnimatedSection animationStyle='fade' >
      <PaddingContainer className="relative h-[450px] w-full bg-[url('../public/assets/fund-2/1.jpeg')]  bg-fixed bg-center bg-cover rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 " />
        <div className="absolute inset-0 flex-col text-justify items-center justify-center mx-auto text-white max-w-3xl lg:flex">
          <div>
            <AnimatedPara
              animationStyle="fade"
              className=" text-white text-center text-xl pb-5"
            >
            Hard Tech Innovation for Climate Change: Engineering for a <span className=' text-emerald-400'>Greener</span> World
            </AnimatedPara>
            <AnimatedPara
              animationStyle="fade"
              className="text-white text-lg leading-loose font-medium text-center"
            >
              Climate Tech is primed to generate the next wave of unicorns. Historically, sectors emitting the most greenhouse gasses have received the least venture capital funding. Climate startups need seasoned VCs with product expertise in hard tech, data, and decentralization. By combining our capital with our deep expertise in launching hardtech innovations, we offer a differentiated way to invest in these impactful projects without sacrificing return.
            </AnimatedPara>
          </div>
        </div>
      </PaddingContainer>{' '}
      </AnimatedSection>
    </PaddingContainer>
  );
};

export default Fund2Thesis;
