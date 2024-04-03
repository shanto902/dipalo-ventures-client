import { TFocusAreas } from "@/components/Fund2/types";
import Image from "next/image";
import React from "react";

const FocusAreaCard = ({ logo, listText, title }: TFocusAreas) => {
  const dataArray: string[] = listText.split(". ");
  return (
    <div className=" grid grid-cols-2">
      <div className="flex flex-col justify-around items-center">
        <Image src={logo} alt={title} width={111} height={111} />
        <h3
          className="text-lg font-bold py-5" 
        >
          {title}
        </h3>
      </div>
      <ul className=" list-disc">
        {dataArray ? (
          dataArray.map((data, i) => <li className="text-lg
          font-semibold " key={i}>{data}</li>)
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default FocusAreaCard;
