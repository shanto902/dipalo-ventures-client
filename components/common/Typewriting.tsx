'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
const Typewriting = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [typedText, setTypedText] = useState(''); // Text to be typed

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Update typedText with one more character
      setTypedText(text.substring(0, typedText.length + 1));
    }, 100); // Adjust typing speed as needed
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [text, typedText]); // Run effect whenever typedText changes

  return (
    <motion.h2 className={twMerge(' ', className)}>
      {typedText} {/* Display the typed text */}
    </motion.h2>
  );
};

export default Typewriting;
