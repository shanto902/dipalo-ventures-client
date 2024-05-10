'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
const AnimatedPara = ({
  children,
  className,
  duration = 0.5,
  delay = 0.5,
  animationStyle = 'fade',
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  animationStyle?: 'fade' | 'left' | 'right' | 'up' | 'down';
}) => {
  const animations = {
    fade: { opacity: 0 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
  };
  return (
    <motion.p
      className={twMerge(
        'md:text-lg text-base  font-semibold leading-loose text-zinc-900',
        className
      )}
      initial={animations[animationStyle]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: duration, delay: delay, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedPara;
