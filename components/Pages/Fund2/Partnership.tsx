import AnimatedPara from '@/components/common/AnimatedPara';
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import React from 'react';

const Partnership = () => {
  return (
    <PaddingContainer>
      <CustomTitle className="py-5">Partnership</CustomTitle>

      <AnimatedPara className=" text-center">
        A joint collaboration between Dipalo Ventures and Heed Capital, this
        cross-Atlantic partnership will capitalize on the XXX. Investments will
        be allocated into direct investments and a combination of Climate Tech
        funds <br />
        <span className=" text-dipalo">
          (60% in Portugal and 40% in the US)
        </span>
      </AnimatedPara>
    </PaddingContainer>
  );
};

export default Partnership;
