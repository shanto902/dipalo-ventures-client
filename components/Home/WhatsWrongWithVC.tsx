'use client';
import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';
import WhatWrongVCCard from '../common/Cards/WhatWrongVCCard';
import { whatsWrongVC } from './const';
import { motion } from 'framer-motion';
import CustomTitle from '../common/CustomTitle';
import AnimatedDiv from '../common/AnimatedDiv';
const WhatsWrongWithVC = () => {
  return (
    <div className=" lg:py-14 py-10">
      <PaddingContainer>
        {' '}
        <CustomTitle>
          WHAT’S WRONG WITH <span className="text-dipalo">VC</span>
        </CustomTitle>
        <motion.p
          className=" text-center text-zinc-900  font-semibold leading-normal py-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Traditional Accelerators and VC do not go far enough in supporting
          startups that <br /> are at the intersection of hardware and software.
        </motion.p>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 lg:gap-48 mx-auto mt-10">
          {whatsWrongVC.map((card, i) => (
            <AnimatedDiv className="rounded-3xl shadow-md" key={i} id={i}>
              <WhatWrongVCCard
                id={card.id}
                logo={card.logo}
                title={card.title}
              />
            </AnimatedDiv>
          ))}
        </div>
      </PaddingContainer>
    </div>
  );
};

export default WhatsWrongWithVC;
