'use client'
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa6';

type Step = {
  text: string;
  duration?: string;
  subtext?: string;
};

const Process: React.FC = () => {
  const steps: Step[] = [
    {
      text: 'INVESTMENT READINESS',
      duration: '3 Weeks',
    },
    { text: 'PORTUGUESE INVESTMENTS', duration: '2 Weeks' },
    {
      text: 'ONLINE APPLICATIONS',
      duration: '~4 Months',
    },
    {
      text: 'PRE APPROVAL',
      duration: '~10 Months',
    },
    {
      text: 'FINAL APPROVAL BIOMETRICS',
      duration: '~5 Months',
    },
    {
      text: '1ST RESIDENCY CARD ISSUED',
      duration: '2 Years',
    },
    {
      text: '2ND RESIDENCY CARD ISSUED',
      duration: '2 Years',
    },
    {
      text: '3RD RESIDENCY CARD ISSUED',
      subtext: 'PASSPORT APPLICATION',
      duration: '1 Year',
    },
    {
      text: 'PASSPORT OR PERMANENT RESIDENCY ISSUED',
    },
  ];

  return (
    <PaddingContainer>
      <CustomTitle className='my-10'> Process</CustomTitle>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {steps.map((step, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{once: true}}
            >
              <div className="timeline-middle">
                {step.duration ? (
                  <FaArrowDown className='bg-dipalo rounded-full p-1 text-white' />
                ) : (
                  <FaCheck className='bg-success rounded-full p-1 text-white' />
                )}
              </div>
              <div className={`${i % 2 === 0 ? 'timeline-start' : 'timeline-end'} md:text-end mb-10`}>
                {step.duration && <time className="font-mono italic">{step.duration}</time>}
                <div className="text-lg font-black">{step.text}</div>
                {step.subtext && <div className="text-lg font-black">{step.subtext}</div>}
              </div>

              {step.duration ? <hr /> : null}
            </motion.li>
          ))}
          <motion.li />
        </ul>
      </motion.div>
    </PaddingContainer>
  );
};

export default Process;
