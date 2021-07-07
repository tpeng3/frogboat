import React from "react";
import { motion } from "framer-motion";

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.25,
          ease: "easeIn",
        },
      }}
    >
      {children}
    </motion.div>
  );
};
