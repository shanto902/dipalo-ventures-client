'use client';

import { motion } from 'framer-motion';

const Template = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    hidden: { opacity: 1, x: 0, y: -30 },
    enter: { opacity: 1, x: 0, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Template;
