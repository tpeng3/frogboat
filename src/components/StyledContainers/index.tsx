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

export const SlideFromRight = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: 20,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          opacity: { delay: 0.25, duration: 0.75 },
          x: {
            type: "easeIn",
            stiffness: 1000,
            velocity: 0,
            delay: 0.25,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
