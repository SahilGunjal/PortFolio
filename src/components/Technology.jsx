import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

function Technology() {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-10 mt-5 mb-5">
      {technologies.map((technology) => (
        <motion.div
          className="bg-gradient-to-r from-green-300 to-blue-400 w-20 h-20 md:h-28 md:w-28 rounded-full text-[50px] text-white-100
          flex justify-center items-center hover:from-blue-500 hover:to-green-500"
          key={technology.name}
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}>
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className="h-12 w-12 md:h-20 md:w-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default SectionWrapper(Technology);
