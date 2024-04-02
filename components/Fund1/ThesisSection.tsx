import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import Image from "next/image";

const ThesisSection = () => {
  return (
    <div className=" bg-orange-50 pb-24 pt-16 relative">
      <PaddingContainer>
        <h2 className="text-dipalo text-5xl font-bold uppercase underline  underline-offset-[15px] decoration-dipalo py-10 ">
          Thesis
        </h2>
        <p
          className="text-zinc-900 text-xl font-semibold"
        >
          Building on our deep expertise in product development, we launched our
          first fund in early 2022. Our investment strategy centered around the
          idea that we live in a physical world where our experiences are
          increasingly interconnected with the digital world. As innovative,
          amazing new products and services are being introduced in this space,
          venture capital needs to invest in this next wave of opportunity.
        </p>

        <Image src={'/assets/thesis-design.png'} className="absolute bottom-0 right-20" alt="design" width={200} height={100} />
      </PaddingContainer>
    </div>
  );
};

export default ThesisSection;
