'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const CustomTitle = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className={twMerge(
        ' text-center lg:text-3xl md:text-2xl text-xl font-bold uppercase text-zinc underline underline-offset-8 decoration-dipalo ',
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export default CustomTitle;
