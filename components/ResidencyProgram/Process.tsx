import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { residencyOutputs } from "./const";
import ProcessCard from "../common/Cards/ResidencyCard";
const ResidencyLottie = dynamic(() => import('./ResidencyLottie'), {
  ssr: false
});
import Image from "next/image";
import arrowSVG from "@/public/assets/arrow.svg";
import dynamic from "next/dynamic";

const Process = () => {
  return (
    <div className=" pb-5 pt-10">
      <PaddingContainer>
        <h2
          className=" text-center text-2xl
font-bold text-black underline underline-offset-8 decoration-dipalo "
        >
          PROCESS
        </h2>
        <div className=" flex items-center mt-5">
          <p className=" mt-10 text-left text-zinc-900 text-lg leading-loose font-semibold">
            The Dipalo Ventures Residency is our technical diligence program
            identifying product design and engineering gaps. We conduct the
            technical diligence prior to the initial investment.
          </p>

          <div>
            <ResidencyLottie />
          </div>
        </div>
        <section className="bg-stone-50 rounded-3xl py-10 shadow">
          <div className="flex gap-6 px-40 items-center pb-10 justify-around">
            <h2 className=" text-2xl font-bold">
              In the future, the{" "}
              <span className=" underline decoration-dipalo underline-offset-8 leading-relaxed">
                Residency
              </span>{" "}
              will incorporate two additional phases:
            </h2>
            <Image src={arrowSVG} alt={"Arrow"} />
          </div>
          <div className=" bg-neutral-600 rounded-xl mx-28">
            <p className=" text-white text-xl font-semibold px-28 py-7" >
              The Residency Audit{" "}
              <span className=" text-dipalo">(Phase 1)</span> as a valuable gap
              analysis from which Founders choose topics to solve during{" "}
              <span className=" text-dipalo">Phase 2</span>. 
            </p>
          </div>
          <p className=" py-8 text-zinc-900 text-xl font-semibold  mx-28 leading-relaxed">
          With Phase 2, the program provides technical evaluations, workshops, mentorship, and specific design and engineering support. It includes access to contract manufacturing options, cost analysis, assistance refining the startup’s go-to-market, financial planning, and fundraising strategies.
          </p>

          <h3 className=" text-center mt-6 mb-4 pb-3 text-black text-xl font-semibold">Examples of Residency outputs:</h3>
          <div className=" flex flex-wrap gap-4 justify-center text-xl font-semibold ">
            {
              residencyOutputs.map((example, i) => <h3 key={i}>{example}</h3>)
            }
          </div>
        </section>
      </PaddingContainer>
    </div>
  );
};

export default Process;
