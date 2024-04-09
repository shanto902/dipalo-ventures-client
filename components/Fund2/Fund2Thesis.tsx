import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';

const Fund2Thesis = () => {
  return (
    <div className="relative h-[500px] w-full bg-[url('../public/assets/fund-2/1.jpeg')]  bg-fixed bg-center bg-cover overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center items-center text-white">
        <PaddingContainer>
          <h1 className="lg:text-5xl text-4xl lg:font-bold font-semibold lg:leading-relaxed leading-normal text-dipalo uppercase underline underline-offset-[15px] text-center">
            Thesis
          </h1>

          <h2 className="text-white text-xl py-4 font-bold text-center">
            Hard Tech Innovation for Climate Change: Engineering for a Greener
            World
          </h2>

          <div className=" leading-10 text-lg  text-center">
            Climate Tech is primed to generate the next wave of unicorns.
            Historically, sectors emitting the most greenhouse gasses have
            received the least venture capital funding. Climate startups need
            seasoned VCs with product expertise in hard tech, data, and
            decentralization.By combining our capital with our deep expertise in
            launching hardtech innovations, we offer a differentiated way to
            invest in these impactful projects without sacrificing return.
          </div>
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Fund2Thesis;
