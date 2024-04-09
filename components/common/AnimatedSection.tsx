"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const AnimatedSection = ({ children , className , y=40 }: { children: ReactNode , className?:string, y?:number }) => {
    
  return (
    <motion.div
      initial={{ y: y }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={twMerge("",className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
