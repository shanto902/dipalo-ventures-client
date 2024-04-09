"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const AnimatedDiv = ({
  children,
  id = 1,
  className,
  delay = 0.25,
  animationStyle = "up",
}: {
  children: ReactNode;
  id: number;
  className?: string;
  delay?: number;
  animationStyle?: "fade" | "left" | "right" | "up" | "down";
}) => {
  const animations = {
    fade: { opacity: 0 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
  };
  return (
    <motion.div
      initial={animations[animationStyle]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: id * delay }}
      viewport={{ once: true }}
      key={id}
      className={twMerge("  overflow-hidden ", className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
