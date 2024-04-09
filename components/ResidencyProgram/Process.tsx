"use client";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { residencyOutputs } from "./const";
const LottieAnimation = dynamic(() => import("@/components/common/LottieAnimation"), {
  ssr: false,
});
import Image from "next/image";
import arrowSVG from "@/public/assets/arrow.svg";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CustomTitle from "../common/CustomTitle";
import animationData from "@/components/LottieFiles/residency-lottie.json";
import AnimatedPara from "../common/AnimatedPara";

const Process = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className=" pb-5 pt-10">
      <PaddingContainer>
        <CustomTitle>
          PROCESS
        </CustomTitle>
        <div className=" flex items-center mt-5">
          <AnimatedPara
            className=" mt-10 text-left "
          >
            The Dipalo Ventures Residency is our technical diligence program
            identifying product design and engineering gaps. We conduct the
            technical diligence prior to the initial investment.
          </AnimatedPara>

         
            <LottieAnimation animationData={animationData} />
       
        </div>
        <section className="bg-stone-50 rounded-3xl py-10 shadow">
          <motion.div
            className="flex gap-6 px-40 items-center pb-10 justify-around"
            variants={container}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=" text-2xl font-bold"
            >
              In the future, the{" "}
              <span className=" underline decoration-dipalo underline-offset-8 leading-relaxed">
                Residency
              </span>{" "}
              will incorporate two additional phases:
            </motion.h2>
            <Image src={arrowSVG} alt={"Arrow"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=" bg-neutral-600 rounded-xl mx-28"
          >
            <p className=" text-white text-xl font-semibold px-28 py-7">
              The Residency Audit{" "}
              <span className=" text-dipalo">(Phase 1)</span> as a valuable gap
              analysis from which Founders choose topics to solve during{" "}
              <span className=" text-dipalo">Phase 2</span>. 
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=" py-8 text-zinc-900 text-xl font-semibold  mx-28 leading-relaxed"
          >
            With Phase 2, the program provides technical evaluations, workshops,
            mentorship, and specific design and engineering support. It includes
            access to contract manufacturing options, cost analysis, assistance
            refining the startup’s go-to-market, financial planning, and
            fundraising strategies.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=" text-center mt-6 mb-4 pb-3 text-black text-xl font-semibold "
          >
            Examples of Residency outputs:
          </motion.h3>
          <motion.div variants={container} viewport={{once:true}} initial="hidden" whileInView="visible" className=" flex flex-wrap gap-4 justify-center text-xl font-semibold ">
            {residencyOutputs.map((example, i) => (
              <motion.h3 variants={item} className="border rounded-lg  px-2 py-1 border-dipalo hover:bg-dipalo hover:text-white duration-300 transition-colors"  key={i}>{example}</motion.h3>
            ))}
          </motion.div>
        </section>
      </PaddingContainer>
    </div>
  );
};

export default Process;
