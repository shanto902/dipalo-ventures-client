'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';


const AnimatedSection = ({
  children,
  className,
  y = 40,
  x = 40,
  animationStyle = 'up'
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  animationStyle?: 'fade' | 'left' | 'right' | 'up' | 'down';
}) => {
  const animations = {
  fade: { opacity: 0 },
    left: { opacity: 0, x: -x },
    right: { opacity: 0, x: x },
    up: { opacity: 0, y: y },
    down: { opacity: 0, y: -y }
  };
  return (
    <motion.div
      initial={animations[animationStyle]}
      whileInView={{ y: 0, x:0, opacity:1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className={twMerge('', className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
