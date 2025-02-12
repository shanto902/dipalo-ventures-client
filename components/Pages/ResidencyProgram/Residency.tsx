import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { residencyData } from './const';
import ResidencyCard from '../../common/Cards/ResidencyCard';
import CustomTitle from '../../common/CustomTitle';
import AnimatedDiv from '../../common/AnimatedDiv';

const Residency = () => {
  return (
    <PaddingContainer className=" py-10">
      {' '}
      <CustomTitle>RESIDENCY</CustomTitle>
      <div className=" mt-10 grid md:grid-cols-3 grid-cols-2 gap-x-6 gap-y-10">
        {residencyData.map((card) => (
          <AnimatedDiv
            className="rounded-3xl shadow-md"
            key={card.id}
            id={card.id}
            delay={0.25}
          >
            <ResidencyCard key={card.id} id={card.id} text={card.text} />
          </AnimatedDiv>
        ))}
      </div>
    </PaddingContainer>
  );
};

export default Residency;
