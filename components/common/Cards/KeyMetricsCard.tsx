import { TKeyMetrics } from "@/components/Fund1/types";
import React from "react";

const KeyMetricsCard = ({ id, text, value }: TKeyMetrics) => {
  return (
    <div>
      <h3 className="text-center text-orange-100 text-6xl font-semibold ">{value}</h3>
      <h4 className=" text-center text-white text-lg font-semibold my-5">{text}</h4>
    </div>
  );
};

export default KeyMetricsCard;
