"use client";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { motion } from "framer-motion";
const Methodology = () => {
  return (
<PaddingContainer>
<div className="relative h-[350px] bg-methodologyBG shadow-md rounded-3xl bg-fixed  bg-center bg-cover overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="absolute inset-0  mx-auto flex flex-col justify-center items-center text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          viewport={{ once: true }}
          className=" text-2xl lg:font-bold font-semibold leading-normal text-center"
        >
          <span className="text-white">OUR UNIQUE</span>{" "}
          <span className="text-dipalo underline underline-offset-8">
            METHODOLOGY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className=" text-lg text-center pt-5 px-32  "
        >
          <span className="text-dipalo font-semibold ">Dipalo </span>
          <span className="text-white    leading-normal">
            Ventures de-risks investments by incorporating hands-on product
            design and engineering reviews in our due diligence process. Our
            technical diligence identifies gaps mitigated post-investment via a
            hands-on 6-week Residency program
          </span>
        </motion.p>
      </div>
    </div>
</PaddingContainer>
  );
};

export default Methodology;
