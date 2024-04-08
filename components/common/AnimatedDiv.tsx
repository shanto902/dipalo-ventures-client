"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const AnimatedDiv = ({
  children,
  id = 1,
  className,
  delay = 0.5
}: {
  children: ReactNode;
  id: number;
  className?: string;
  delay?:number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Initial state before the animation starts
      whileInView={{ opacity: 1, y: 0 }} // Target state of the animation
      transition={{ duration: 0.5, delay: id * delay }}
      viewport={{ once: true }}
      key={id}
      className={twMerge(" group rounded-3xl overflow-hidden shadow-md", className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
