'use client';
import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import Image from 'next/image';
import mainBg from '@/public/assets/main-bg.jpeg';
import { motion } from 'framer-motion';
const Main = () => {
  return (
    <div className=" container  lg:min-h-screen min-h-[80vh]">
      <div className="absolute top-0 flex items-center w-full bg-cover min-h-screen -z-10">
        <Image
          className="object-cover h-full -z-10"
          alt="Main Background"
          src={mainBg}
          placeholder="blur"
          quality={80}
          fill
          sizes="100vw"
        />
        <PaddingContainer>
          <div>
            <h2 className="text-white  md:text-5xl text-3xl  font-black  leading-relaxed md:leading-relaxed">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                {' '}
                Craftsmanship,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                {' '}
                Expertise,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                {' '}
                Time <span className="text-dipalo">Well Spent.</span>
              </motion.span>
            </h2>
            <motion.h3
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="text-base font-medium leading-relaxed py-5 text-yellow-50 lg:text-xl md:text-lg"
            >
              Breakthrough technologies at the intersection of physical and
              digital
            </motion.h3>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 opacity-30" />
        </PaddingContainer>
      </div>
    </div>
  );
};

export default Main;
