import React from "react";
import { motion } from "framer-motion";
import { PageProps } from "gatsby";

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-20px" }}
      animate={{
        opacity: 1,
        x: "0px",
        transition: {
          delay: 0.25,
          ease: "easeIn",
          x: { stiffness: 1000, velocity: 0 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
