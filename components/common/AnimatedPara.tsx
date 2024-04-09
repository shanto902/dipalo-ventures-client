'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
const AnimatedPara = ({
  children,
  className,
  duration = 0.5,
  delay = 0.5,
  animationStyle = 'fade'
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  animationStyle?: 'fade' | 'left' | 'right';
}) => {
  const fade = { opacity: 0 };
  const left = { opacity: 0, x: -30 };
  const right = { opacity: 0, x: 30 };
  return (
    <motion.p
      className={twMerge(
        'text-lg font-semibold leading-loose text-zinc-900',
        className
      )}
      initial={
        animationStyle === 'fade'
          ? fade
          : animationStyle === 'left'
            ? left
            : right
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: duration, delay: delay, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedPara;
