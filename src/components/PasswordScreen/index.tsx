import React, { useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { COLORS, LILYPAD } from "@util/constants";
import useSystemStore from "@store/system";
import TextField from "@material-ui/core/TextField";
import LockedIcon from "@images/SVG/locked.svg";
import { AnimationDefinition } from "framer-motion/types/render/VisualElement/utils/animation";

const Overlay = styled(motion.div)`
  position: absolute;
  background-color: ${COLORS.TEAL_500};
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const IconContainer = styled.div`
  position: relative;
  height: 2.2rem;
  width: 2.2rem;
  top: 40%;
  transform: translateY(-60%);
  margin: auto;
`;

const InputContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  top: 45%;
  transform: translateX(0) translateY(-55%);
`;

const StyledInput = styled(TextField)`
  .MuiInputBase-input {
    border-radius: 3rem;
    background-color: ${COLORS.white};
    color: ${COLORS.TEAL_600};
    padding: 8px 16px;
    text-align: center;
    font-size: 2rem;
    max-width: 200px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.TEAL_600};
    border-radius: 3rem;
    border-width: 2px;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.GREY_50};
    border-radius: 3rem;
    border-width: 2px;
  }
`;

export default function PasswordScreen() {
  const setLocked = useSystemStore((state) => state.setLocked);
  const [currentInput, updateInput] = useState<string>("");
  const inputAnimationControls = useAnimation(); //animation ref

  const screenShake: AnimationDefinition = {
    translateX: [-10, 20, 10, 0],
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };

  const handlePassword = () => {
    if (currentInput === LILYPAD) {
      setLocked(false);
    } else {
      inputAnimationControls.start(screenShake);
    }
  };

  const handleKeydown = (e) => {
    if (e.which === 13) {
      // ENTER key code
      e.preventDefault();
      handlePassword();
    }
  };

  return (
    <Overlay>
      <IconContainer>
        <LockedIcon />
      </IconContainer>
      <InputContainer>
        <motion.div
          animate={inputAnimationControls}
          onAnimationComplete={() => inputAnimationControls.stop()}
        >
          <StyledInput
            type="password"
            autoFocus
            variant="outlined"
            onChange={(e) => updateInput(e.target.value)}
            onKeyDown={handleKeydown}
          />
        </motion.div>
      </InputContainer>
    </Overlay>
  );
}
