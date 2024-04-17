import { motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import PaddingContainer from '../Layout/PaddingContainer';
import ResizablePanel from '../common/ResizablePanel';
import Image from 'next/image';
import parse from 'html-react-parser';
import { TCaseStudy } from '../types';
const CaseStudyTab = ({ caseStudies } : {caseStudies:TCaseStudy[]}) => {
  let [activeTab, setActiveTab] = useState(caseStudies[0].id);
  let duration = 0.25;
  const selectedCaseStudy = caseStudies.find((study) => study.id === activeTab);
  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <PaddingContainer>
      <div className="flex  md:gap-6 gap-1 space-x-1 justify-center my-5">
        {caseStudies.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'text-white' : 'hover:text-dipalo'
            } relative rounded-3xl flex-flow shadow-md px-5 bg-stone-50 z-10  w-fit h-fit py-5 overflow-hidden lg:text-lg md:text-md text-base font-medium text-black dipalo transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 rounded-3xl  bg-dipalo -z-30"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.companyName}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration }}>
        {selectedCaseStudy && (
          <ResizablePanel>
            <div className="  rounded-3xl shadow border overflow-hidden border-neutral-200 grid md:grid-cols-3 grid-cols-1">
              <Image
                className="col-span-1 object-cover w-full h-full"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${selectedCaseStudy.bannerPicture}`}
                alt={selectedCaseStudy.companyName}
                height={480}
                width={380}
              />
              <div className="col-span-2 flex flex-1 items-center mb-2 md:px-20 px-5 md:py-5 flex-col">
                <motion.div
                  variants={container}
                  className=" py-5 "
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className=" justify-self-center" variants={item}>
                    <Image
                      className=" mx-auto mb-5"
                      src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${selectedCaseStudy.companyLogo}`}
                      alt={selectedCaseStudy.companyName}
                      height={100}
                      width={100}
                    />
                  </motion.div>
                  <motion.h3
                    variants={item}
                    className=" pb-1 text-dipalo text-base font-semibold"
                  >
                    Overview
                  </motion.h3>
                  <motion.div variants={item} className=" text-black">
                    {parse(selectedCaseStudy.overview)}
                  </motion.div>
                  <motion.h3
                    variants={item}
                    className=" pt-3 pb-1 text-dipalo text-base font-semibold"
                  >
                    Solution
                  </motion.h3>
                  <motion.div variants={item} className=" text-black">
                    {parse(selectedCaseStudy.solution)}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </ResizablePanel>
        )}
      </MotionConfig>

      <button className=" flex items-center mx-auto gap-2 mt-5 text-center border rounded  text-base font-semibold shadow-md border-black border-opacity-30 py-2 px-8 hover:bg-dipalo z-20 text-black  transition-all duration-500 uppercase hover:text-white hover:border-dipalo">
        Submit
      </button>
    </PaddingContainer>
  );
};

export default CaseStudyTab;
