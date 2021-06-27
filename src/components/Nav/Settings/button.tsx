import React, { useState } from "react";
import styled from "styled-components";
import useSystemStore from "@store/system";
import SettingsIcon from "@images/SVG/settings.svg";
import { motion, useAnimation } from "framer-motion";
import { AnimationDefinition } from "framer-motion/types/render/VisualElement/utils/animation";

const StyledButton = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
  }
`;

export function SettingsButton() {
  // const darkMode = useSystemStore((state) => state.darkMode);
  const [gearSpinning, setIsGearSpinning] = useState<boolean>(false);
  const toggleSettingsModal = useSystemStore(
    (state) => state.toggleSettingsModal
  );
  const showSettingsModal = useSystemStore((state) => state.showSettingsModal);

  const settingsAnimationControls = useAnimation(); //animation ref

  const gearSpin: AnimationDefinition = {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1,
      ease: "linear",
    },
  };

  return (
    <StyledButton
      animate={settingsAnimationControls}
      onHoverStart={() => {
        if (!gearSpinning) {
          setIsGearSpinning(true);
          settingsAnimationControls.start(gearSpin);
        }
      }}
      onHoverEnd={() => {
        setIsGearSpinning(false);
        settingsAnimationControls.set({
          rotate: 0,
        });
        settingsAnimationControls.stop();
      }}
      onClick={() => !showSettingsModal && toggleSettingsModal(true)}
    >
      <SettingsIcon alt={"settings icon"} />
    </StyledButton>
  );
}
