import { TKeyMetrics } from '@/components/Pages/Fund1/types';
import React from 'react';
import { AnimatedNumbers } from '../../common/AnimatedNumbers';

const KeyMetricsCard = ({ id, text, value }: TKeyMetrics) => {
  const symbolMatch = value.match(/[%+]+/g);
  const symbol = symbolMatch ? symbolMatch[0] : ''; // Extract symbol if present
  const numberValue = parseFloat(value.replace(/[%+]/g, '')); //
  return (
    <div className=' lg:space-y-5 md:space-x-3 sm:space-x-2 space-x-1'>
      <h3 className="text-center text-orange-100 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold ">
        {<AnimatedNumbers key={id} value={numberValue} />} {symbol}
      </h3>
      <h4 className=" text-center text-white lg:text-base md:text-sm text-xs font-semibold">
        {text}
      </h4>
    </div>
  );
};

export default KeyMetricsCard;
