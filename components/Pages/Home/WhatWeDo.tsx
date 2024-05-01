'use client';
import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { motion } from 'framer-motion';
import CustomTitle from '../../common/CustomTitle';
import AnimatedPara from '../../common/AnimatedPara';
const WhatWeDo = () => {
  return (
    <div className="relative lg:pt-10  lg:pb-14">
   
      <PaddingContainer>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="items-center justify-start   md:justify-center lg:-mt-[200px]  gap-28 lg:inline-flex"
        >
          <video
            className="h-full shadow-md object-cover aspect-square overflow-hidden rounded-3xl"
            width="1000"
            height="800"
            loop
            autoPlay
            muted
            preload="none"
          >
            <source src="/homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className=" lg:mt-32 my-10 lg:mb-0">
            <CustomTitle className="text-left">
              WHAT <span className="text-dipalo">WE DO ?</span>
            </CustomTitle>
            <AnimatedPara className="  pt-5 text-left">
              We invest in a balanced portfolio across pre-seed to early-stage
              rounds in physical products utilizing data intelligence and
              designed for sustainability.
            </AnimatedPara>
          </div>
        </motion.div>
      </PaddingContainer>
    </div>
  );
};

export default WhatWeDo;
