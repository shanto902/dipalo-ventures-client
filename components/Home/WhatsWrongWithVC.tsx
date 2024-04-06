"use client";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import WhatWrongVCCard from "../common/Cards/WhatWrongVCCard";
import { whatsWrongVC } from "./const";
import { motion } from "framer-motion";
const WhatsWrongWithVC = () => {
  return (
    <div className=" py-10 mt-10">
      <PaddingContainer>
        {" "}
        <motion.h2
          className=" text-center  text-4xl font-bold "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          WHAT’S WRONG WITH{" "}
          <span className=" underline  text-dipalo underline-offset-8 decoration-dipalo">
            {" "}
            VC ?
          </span>
        </motion.h2>
        <motion.p  className=" text-center text-zinc-900  text-xl font-semibold leading-normal py-5" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}>
          Traditional Accelerators and VC do not go far enough in supporting
          startups that are at the intersection of hardware and software.
        </motion.p>
        <div className=" grid grid-cols-3 gap-48 mx-auto my-10">
          {whatsWrongVC.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} // Initial state before the animation starts
              whileInView={{ opacity: 1, y: 0 }} // Target state of the animation
              transition={{ duration: 0.5, delay: i * 0.5 }}
              viewport={{ once: true }}
            >
              <WhatWrongVCCard
                id={card.id}
                logo={card.logo}
                title={card.title}
              />
            </motion.div>
          ))}
        </div>
      </PaddingContainer>
    </div>
  );
};

export default WhatsWrongWithVC;
