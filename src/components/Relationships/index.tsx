import React from "react";
import { useState } from "react";
import styled from "styled-components";
import useSystemStore from "@store/system";
import {
  motion,
  AnimatePresence,
  Variants,
  AnimateSharedLayout,
} from "framer-motion";
import useWindowSize from "@util/screen";
import Link from "@components/Link";
import { hexToRGBA, media, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import content from "./content.yaml";
import MobileArrow from "@images/SVG/mobilearrow.svg";

const StyledDiv = styled.div`
  max-width: 800px;
  margin: auto;
`;

const PortraitIcon = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  object-fit: cover;
  top: -50px;
  left: 20px;
  background-color: ${COLORS.white};
  ${media.laptop`
    position: initial;
    height: 100px;
    width: 100px;
  `}
`;

const Description = styled.p`
  margin: 3.5rem 1rem 1rem 1.5rem;
  align-self: center;
  flex: 1;
  ${media.laptop`
    margin: 2rem;
  `}
`;

const Bubble = styled.div<{ currentTheme: string }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  background-color: ${hexToRGBA(COLORS.GREY_200, 0.2)};
  transition: all 200ms ease;
  position: relative;
  ${media.laptop`
    flex-direction: row;
    height: 100px;
    border-radius: 9999px;
    width: 100%;
  `}
  :hover {
    background-color: ${(props) =>
      props.theme[props.currentTheme].secondaryColor};
    transform: scale(1.02);
    ${(props) => elevation(1, props.theme[props.currentTheme].secondaryColor)};
  }
  .mobilearrow {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 1rem;
    top: 1rem;
  }
`;

const Testimony = styled(motion.div)`
  display: flex;
  max-width: 800px;
  margin-left: 0;
  a {
    width: 100%;
  }
  ${media.laptop`
    margin-right: 100px;
    &:nth-child(2n) {
      justify-content: flex-end;
      margin-left: 100px;
      margin-right: 0;
      ${Bubble} {
        flex-direction: row-reverse;
      }
    }
  `}

  margin-top: 5rem;
  ${media.laptop`
    margin-top: 1.05rem;
  `}
  &:first-child {
    ${media.laptop`
    margin-top: 0rem;
  `}
  }
`;

interface Props {
  keyName: string;
  relationshipData: any;
}

const Relationships = (props: Props) => {
  const { keyName, relationshipData } = props;
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const { isTablet } = useWindowSize();

  const containerVariants: Variants = {
    center: {
      transition: { delay: 4, staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

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
  };

  return (
    <motion.div variants={containerVariants} initial="enter" animate="center">
      <StyledDiv>
        {relationshipData.map((chara, i) => (
          <Testimony
            key={`${chara}-${i}`}
            custom={i}
            variants={testimonyVariants}
          >
            {!isTablet ? (
              <Link to={content[chara.charKey].link}>
                <Bubble currentTheme={currentTheme}>
                  <PortraitIcon
                    src={
                      chara.portrait
                        ? chara.portrait
                        : content[chara.charKey].icon
                    }
                    alt={`${chara.charKey}-icon`}
                  />
                  <Description>{chara.testimony}</Description>
                </Bubble>
              </Link>
            ) : (
              <Bubble currentTheme={currentTheme}>
                <PortraitIcon
                  src={
                    chara.portrait
                      ? chara.portrait
                      : content[chara.charKey].icon
                  }
                  alt={`${chara.charKey}-icon`}
                />
                <Link to={content[chara.charKey].link}>
                  <MobileArrow alt={"goto icon"} className="mobilearrow" />
                </Link>
                <Description>{chara.testimony}</Description>
              </Bubble>
            )}
          </Testimony>
        ))}
      </StyledDiv>
    </motion.div>
  );
};

export default Relationships;
