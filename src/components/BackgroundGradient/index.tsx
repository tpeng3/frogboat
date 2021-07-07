import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useSystemStore from "@store/system";
import { COLORS } from "@util/constants";

const GRADIENT_MAP = {
  default: {
    backgroundColor: COLORS.GREY_HOVER,
    endGradient: [
      [COLORS.GREY_HOVER, "0.00%"],
      [COLORS.GREY_HOVER, "15.00%"],
      [COLORS.GREY_HOVER, "70.00%"],
      [COLORS.GREY_HOVER, "100.00%"],
    ],
  },
  saq: {
    backgroundColor: "#d18481",
    endGradient: [
      ["#FFE096", "0.00%"],
      ["#E59D82", "25.00%"],
      ["#d18481", "65.00%"],
      ["#503f5c", "100.00%"],
    ],
  },
  dfc: {
    backgroundColor: "#5C88E0",
    endGradient: [
      ["#cbeaf1", "0.00%"],
      ["#86E3FF", "5.00%"],
      ["#5C88E0", "70.00%"],
      ["#5259db", "100.00%"],
    ],
  },
  onm: {
    backgroundColor: "#262539",
    endGradient: [
      ["#2F9A8C", "0.00%"],
      ["#235764", "50.00%"],
      ["#262539", "80.00%"],
      ["#141725", "100.00%"],
    ],
  },
  horo: {
    backgroundColor: "#2E2847",
    endGradient: [
      ["#6F526B", "0.00%"],
      ["#6F526B", "50.00%"],
      ["#2E2847", "80.00%"],
      ["#181425", "100.00%"],
    ],
  },
};

const MotionSvg = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default function BackgroundGradient(props) {
  const prevTheme = useSystemStore((state) => state.prevTheme);
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const darkMode = useSystemStore((state) => state.darkMode);

  const getGradientVariants = (order: number) => {
    return {
      default: {
        stopColor: [
          GRADIENT_MAP[prevTheme].endGradient[order][0],
          GRADIENT_MAP.default.endGradient[order][0],
        ],
        offset: GRADIENT_MAP.default.endGradient[order][1],
      },
      saq: {
        stopColor: [
          GRADIENT_MAP[prevTheme].endGradient[order][0],
          GRADIENT_MAP.saq.endGradient[order][0],
        ],
        offset: GRADIENT_MAP.saq.endGradient[order][1],
      },
      dfc: {
        stopColor: [
          GRADIENT_MAP[prevTheme].endGradient[order][0],
          GRADIENT_MAP.dfc.endGradient[order][0],
        ],
        offset: GRADIENT_MAP.dfc.endGradient[order][1],
      },
      onm: {
        stopColor: [
          GRADIENT_MAP[prevTheme].endGradient[order][0],
          GRADIENT_MAP.onm.endGradient[order][0],
        ],
        offset: GRADIENT_MAP.onm.endGradient[order][1],
      },
      horo: {
        stopColor: [
          GRADIENT_MAP[prevTheme].endGradient[order][0],
          GRADIENT_MAP.horo.endGradient[order][0],
        ],
        offset: GRADIENT_MAP.horo.endGradient[order][1],
      },
    };
  };

  return (
    <MotionSvg animate={currentTheme}>
      <defs>
        <linearGradient id="linear" x1="100%" y1="0%" x2="100%" y2="100%">
          {/* We're only doing four gradient stops for now, just to see how it looks */}
          {[0, 1, 2, 3].map((i) => (
            <motion.stop
              stopColor={GRADIENT_MAP[currentTheme].endGradient[i][0]}
              key={`gradient-${i}`}
              variants={getGradientVariants(i)}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              offset="25%"
            />
          ))}
        </linearGradient>
      </defs>
      <motion.rect x="0" y="0" width="100%" height="100%" fill="url(#linear)" />
    </MotionSvg>
  );
}
