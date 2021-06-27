import React, {useRef} from "react";
import styled from "styled-components";
import useSystemStore from "@store/system";
import { hexToRGBA, media, elevation, font } from "@util/helpers";
import { COLORS } from "@util/constants";
import Toggle from "@components/Toggle";
import { motion, Variants } from "framer-motion";
import {useDimensions} from "@util/screen";
import DarkUnderlay from "@components/DarkUnderlay";

const MODAL_ZINDEX = 99;

const Title = styled(motion.h2)`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  ${font("1.2rem", "1.2rem", "500", ".4rem")};
  padding: 2rem 2rem 0rem 2rem;
`;

const ModalContainer = styled(motion.nav)`
  position: absolute;
  top: 64px;
  right: 0;
  margin: 12px;
  height: auto;
  width: 300px;
  z-index: ${MODAL_ZINDEX};
  overflow: hidden;
`;

const ModalBackground = styled(motion.div)<{height?: number}>`
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.9)};
  border-radius: 5px;
  position: absolute;
  width: 100%;
  height: ${props => props.height}px;
  ${elevation(5)}
`;

const ModalItems = styled(motion.div)`
  position: relative;
  z-index: ${MODAL_ZINDEX + 1};
  margin: 24px;
  div {
    margin-bottom: 6px;
  }
`;

const MenuItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  span {
    align-self: center;
  }
`;

// TODO: fix this later for lock icon
const StyledIcon = styled.img`
  height: 24px;
  width: 20px;
  display: initial;
  vertical-align: sub;
`;

export const SettingsModal = () => {
  const darkMode = useSystemStore((state) => state.darkMode);
  const setDarkMode = useSystemStore((state) => state.setDarkMode);
  const showSettingsModal = useSystemStore((state) => state.showSettingsModal);
  const toggleSettingsModal = useSystemStore((state) => state.toggleSettingsModal);

  const containerRef = useRef<HTMLDivElement>(null);;
  const { height } = useDimensions(containerRef);

  const SETTING_OPTIONS = [
    {
      name: "Dark mode",
      func: setDarkMode,
      value: darkMode
    },
    {
      name: "Reduce motion",
      func: setDarkMode,
      value: darkMode
    },
    {
      name: "Simplify theme",
      func: setDarkMode,
      value: darkMode
    }
  ]

  const modalBackgroundVariants: Variants = {
    open: {
      maxHeight: height + "px",
      opacity: 1,
      visibility: "visible",
      transition: {
        maxHeight: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      maxHeight: "0px",
      opacity: 0,
      transition: {
        maxHeight: { stiffness: 1000 }
      },
      transitionEnd: {
        visibility: "hidden",
      }
    }
  };

  const modalItemsVariants: Variants = {
      open: {
        transition: { delay: 2.2, staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { delay: 2.2, staggerChildren: 0.05, staggerDirection: -1 },
    }
  };

  const titleVariants: Variants = {
    open: {
      opacity: 1,
      visibility: "visible",
      transition: {
        y: { stiffness: 1000, velocity: 0 }
      }
    },
    closed: {
      opacity: 0,
      visibility: "hidden",
      transition: {
        y: { stiffness: 1000 }
      }
  }
  }

  const menuItemVariants: Variants = {
      open: {
        x: 0,
        opacity: 1,
        visibility: "visible",
        transition: {
          x: { stiffness: 1000, velocity: 0 }
        }
      },
      closed: {
        x: 50,
        opacity: 0,
        visibility: "hidden",
        transition: {
          x: { stiffness: 1000 }
        }
    }
  }

  const handleClick = () => {
    toggleSettingsModal(false);
  }

  return (
    <>
    {showSettingsModal && <DarkUnderlay handleClick={handleClick} showDark={false} />}
    <ModalContainer
      initial={false}
      animate={showSettingsModal ? "open" : "closed"}
      ref={containerRef}
    >
      <ModalBackground height={height} variants={modalBackgroundVariants} />
      <Title variants={titleVariants}>Settings</Title>
      <ModalItems variants={modalItemsVariants}>
        {SETTING_OPTIONS.map(i => 
          <MenuItem variants={menuItemVariants} key={i.name}>
            <span>{i.name}</span>
            <Toggle value={i.value} toggleFunction={i.func}/>
          </MenuItem>
        )}
      </ModalItems>
      {/* TODO: add secret mode input and lock animation */}
    </ModalContainer>
    </>
  );
};
