import { TKeyMetrics } from '@/components/Pages/Fund1/types';
import React from 'react';
import { AnimatedNumbers } from '../AnimatedNumbers';

const KeyMetricsCard = ({ id, text, value }: TKeyMetrics) => {
  const symbolMatch = value.match(/[%+]+/g);
  const symbol = symbolMatch ? symbolMatch[0] : ''; // Extract symbol if present
  const numberValue = parseFloat(value.replace(/[%+]/g, '')); //
  return (
    <div>
      <h3 className="text-center text-orange-100 text-5xl font-semibold ">
        {<AnimatedNumbers key={id} value={numberValue} />} {symbol}
      </h3>
      <h4 className=" text-center text-white text-base font-semibold my-5">
        {text}
      </h4>
    </div>
  );
};

export default KeyMetricsCard;
