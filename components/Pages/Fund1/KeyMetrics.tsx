import React, { useEffect, useRef } from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { keyMetrics } from './const';
import KeyMetricsCard from './KeyMetricsCard';
import CustomTitle from '../../common/CustomTitle';
import AnimatedDiv from '../../common/AnimatedDiv';

const KeyMetrics = () => {
  return (
    <PaddingContainer className=" py-20">
      <CustomTitle> KEY METRICS</CustomTitle>
      <div className=" mt-14 p-10 h-[500px]  rounded-3xl shadow-md overflow-hidden relative bg-[url('../public/assets/investmentsBG.jpeg')] bg-center bg-fixed bg-cover">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="absolute inset-0 flex-col items-start justify-center mx-auto text-white lg:flex">
          <div className=" grid md:grid-cols-3  grid-cols-2 place-items-center lg:gap-10 gap-14 p-20 h-full w-full">
            {keyMetrics.map((key, i) => (
              <AnimatedDiv className=" " key={key.id} id={i}>
                <KeyMetricsCard text={key.text} value={key.value} id={key.id} />
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default KeyMetrics;
