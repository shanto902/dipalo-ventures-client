import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { caseStudies } from "./const";
import PaddingContainer from "../Layout/PaddingContainer";

const CaseStudyTab = () => {
  let [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const selectedCaseStudy = caseStudies.find((study) => study.id === activeTab);
  return (
    <PaddingContainer>
      <div className="flex space-x-1 justify-center my-5">
        {caseStudies.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "text-white" : "hover:text-dipalo"
            } relative rounded-full px-3 z-10 py-1.5 text-sm font-medium text-black dipalo transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0  bg-dipalo -z-30"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.company}
          </button>
        ))}
      </div>
      {selectedCaseStudy && (
        <motion.div
          key={selectedCaseStudy.id}
          className="   bg-white p-4 border border-gray-300 rounded-md shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-2">
            {selectedCaseStudy.company}
          </h2>
          <div className="flex items-center mb-2">
            <p>{selectedCaseStudy.solution}</p>
          </div>
          {/* You can add more details here */}
        </motion.div>
      )}
    </PaddingContainer>
  );
};

export default CaseStudyTab;
