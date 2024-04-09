import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";
import { ignoreCircularReferences } from "./utils/ignoreCircularReferences";

const ResizablePanel = ({ children } : {children: ReactNode}) => {
    let [ref, { height }] = useMeasure();
    let duration = 0.5;
  
    return (
      <motion.div
        animate={{ height: height || "auto" }}
        className="relative overflow-hidden"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={JSON.stringify(children, ignoreCircularReferences())}
            initial={{
               opacity: 0,
     
            }}
            animate={{
               opacity: 1,
    
               transition: { duration: duration / 2, delay: duration / 2 },
            }}
            exit={{
              // opacity: 0,
  
               transition: { duration: duration / 2 }
            }}
          >
            <div
              ref={ref}
              className={`${height ? "absolute" : "relative"} `}
            >
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
  
  export default ResizablePanel