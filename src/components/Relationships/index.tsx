import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  Variants,
  AnimateSharedLayout,
} from "framer-motion";
import useWindowSize from "@util/screen";
import Link from "@components/Link";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS } from "@util/constants";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PortraitIcon = styled.img`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  object-fit: cover;
  top: -50px;
  right: -20px;
  background-color: ${COLORS.white};
  ${media.laptop`
    position: initial;
    height: 150px;
    width: 150px;
  `}
`;

const Description = styled.p`
  margin: 2rem;
  align-self: center;
`;

const Bubble = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100%;
  background-color: ${hexToRGBA(COLORS.GREY_200, 0.2)};
  ${media.laptop`
    height: 150px;
    border-radius: 150px;
    width: 700px;
  `}
`;

const Testimony = styled(motion.div)<{ currentTheme?: string }>`
  display: flex;
  ${media.laptop`
    &:nth-child(2n) {
      justify-content: flex-end;
      ${Bubble} {
        flex-direction: row-reverse;
      }
    }
  `}

  &:not(:last-child) {
    margin-bottom: 6rem;
    ${media.laptop`
      margin-bottom: 2rem;
    `}
  }
`;

interface CharacterProps {
  keyName: string;
  currentTheme?: string;
}

const Relationships = ({ keyName }: CharacterProps) => {
  const { isTablet } = useWindowSize();

  const containerVariants: Variants = {
    center: {
      transition: { delay: 4, staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  // TODO: maybe add the animation based on when user scrolls down as well
  const testimonyVariants: Variants = {
    enter: (order: number) => ({
      x: order % 2 === 0 ? -100 : 100,
      opacity: 0,
      visibility: "visible",
      transition: {
        x: { type: "easeIn", stiffness: 1000, velocity: 0 },
      },
    }),
    center: {
      x: 0,
      opacity: 1,
      visibility: "visible",
      transition: {
        x: { type: "easeIn", stiffness: 1000, velocity: 0 },
      },
    },
    // exit is not currently getting used
    exit: {
      x: 0,
      opacity: 0,
      visibility: "hidden",
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {[1, 2, 3].map((chara, i) => (
        <Testimony key={chara} custom={i} variants={testimonyVariants}>
          <Bubble>
            <PortraitIcon
              src={
                "http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png"
              }
              alt={"aaa"}
            />
            <Link to={"/oc"}>
              {/* <StyledIcon src={HomeIcon} alt={"home icon"} /> */}
            </Link>
            <Description>testt test aaaa</Description>
          </Bubble>
        </Testimony>
      ))}
      <ButtonContainer>
        {/* {tabs.map(tab =>
          <TabButton onClick={() => setSelectedTab(tab)} key={tab} currentTheme={currentTheme} selected={selectedTab === tab}>{tab}</TabButton>
        )} */}
      </ButtonContainer>
    </motion.div>
  );
};

export default Relationships;
