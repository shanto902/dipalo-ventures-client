"use client";
import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import LookingForCard from "../common/Cards/LookingForCard";
import { lookingForData } from "./const";
import { motion } from "framer-motion";

const LookingFor = () => {
  return (
    <PaddingContainer>
      <motion.h2 initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
               viewport={{once:true}} className="mb-10 text-2xl  font-bold text-center ">
        <span className="text-zinc-900 ">WHO WE’RE </span>
        <span className="text-dipalo underline underline-offset-8">
          LOOKING
        </span>
        <span className="text-zinc-900 "> FOR</span>
      </motion.h2>
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-16 mt-5 mb-24">
        {lookingForData.map((data, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Initial state before the animation starts
            whileInView={{ opacity: 1, y: 0 }} // Target state of the animation
            transition={{ duration: 0.5, delay: i * 0.5 }}
            viewport={{ once: true }}
            key={data.id}
            className=" group rounded-3xl shadow-md   overflow-hidden aspect-[69/72]"
          >
            <LookingForCard
              title={data.title}
              image={data.image}
              link={data.link}
              buttonText={data.buttonText}
            />
          </motion.div>
        ))}
      </div>
    </PaddingContainer>
  );
};

export default LookingFor;
