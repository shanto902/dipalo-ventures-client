import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { investment } from './const';
import InvestmentsCard from '../../common/Cards/InvestmentsCard';
import CustomTitle from '../../common/CustomTitle';

const Investments = () => {
  return (
    <PaddingContainer className=" mb-20">
      <CustomTitle>INVESTMENTS</CustomTitle>
      <div className=" grid grid-cols-3 gap-20 mt-20">
        {investment.map((invest) => (
          <InvestmentsCard
            key={invest.id}
            id={invest.id}
            text={invest.text}
            image={invest.image}
          />
        ))}
      </div>
    </PaddingContainer>
  );
};

export default Investments;
