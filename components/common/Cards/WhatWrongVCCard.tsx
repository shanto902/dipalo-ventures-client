import { TWhatsWrongVC } from "@/components/Home/types";
import React, { useState } from "react";
import { WhatsWrongWithVCSVG } from "../SVG/WhatsWrongWithVCSVG";
import { motion } from "framer-motion";
const WhatWrongVCCard = ({ id, logo, title }: TWhatsWrongVC) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const icon = { hidden: { y: -10, scale: 1.1 } };
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="hidden"
      className="group p-5 shadow-md rounded-3xl relative bg-white  aspect-square hover:bg-dipalo  transition-colors duration-500"
    >
      <div className="z-10  grid-rows-2 grid place-items-center h-full ">
        <div className=" row-span-1 mt-8">
          <motion.div variants={icon}>
            <WhatsWrongWithVCSVG
              id={id}
              width="100"
              height="100"
              hovered={hovered}
            />
          </motion.div>
        </div>
        <p className=" grod text-base font-bold text-center group-hover:text-white transition-colors duration-300">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default WhatWrongVCCard;
