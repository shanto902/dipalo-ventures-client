'use client';
import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Thesis = () => {
  return (
    <PaddingContainer>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="  lg:h-[350px] md:h-[400px] sm:h-[450px] h-[500px] rounded-3xl overflow-hidden relative bg-main_thesis bg-center shadow-md  bg-cover"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="absolute inset-0 flex-col  items-center justify-center mx-auto text-white lg:p-28 p-5 lg:flex">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className=" text-dipalo  text-2xl mb-2 font-bold "
          >
            THESIS
          </motion.div>
          <div className="flex flex-col gap-20 lg:flex-row lg:gap-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className=" leading-normal font-normal text-white "
            >
              Currently, sectors emitting the most greenhouse gases receive the
              least VC funding. Climate Tech offers a wave of unique investment
              opportunities that will soon dominate the{' '}
              <span className="underline  underline-offset-8 decoration-dipalo">
                market
              </span>
              .
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className=" text-right text-white font-normal leading-normal"
              >
                The Dipalo Heed ClimateTech Fund offers exposure to rapidly
                growing climate tech innovation in the US and Portugal, combined
                with EU residency and citizenship.
              </motion.div>

              <motion.div
                className="flex justify-end w-full mt-5 "
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                <Image
                  className=""
                  src="/assets/dipalo-heed.svg"
                  alt="Logo"
                  width={280}
                  height={70}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </PaddingContainer>
  );
};

export default Thesis;
