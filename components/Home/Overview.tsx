"use client";
import React from "react";
import OverViewCard from "../common/Cards/OverViewCard";
import { overViewData } from "./const";
import PaddingContainer from "../Layout/PaddingContainer";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <PaddingContainer>
      <div className="py-20  ">
        {/* Title Text  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className=" pb-10 text-4xl font-bold text-center uppercase underline underline-offset-8 decoration-dipalo "
        >
          OVERVIEW
        </motion.div>

        <div className=" grid grid-cols-4 gap-6">
          {overViewData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: .1, y: 30 }} // Initial state before the animation starts
              whileInView={{ opacity: 1, y: 0 }} // Target state of the animation
              transition={{ duration: .5, delay: index * 0.5 }}
              viewport={{once:true}} // Delay each animation by index * 0.2 seconds
              className="overflow-hidden"
            >
              <OverViewCard
                id={card.id}
                subtitle={card.subtitle}
                title={card.title}
                link={""}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </PaddingContainer>
  );
};

export default Overview;
