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
import content from "./content.yaml";

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
  flex: 1;
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

const Testimony = styled(motion.div)`
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

interface Props {
  keyName: string;
  relationshipData: any;
}

const Relationships = (props: Props) => {
  const { keyName, relationshipData } = props;
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
      {relationshipData.map((chara, i) => (
        <Testimony
          key={`${chara}-${i}`}
          custom={i}
          variants={testimonyVariants}
        >
          <Link to={content[chara.charKey].link}>
            <Bubble>
              <PortraitIcon
                src={content[chara.charKey].icon}
                alt={`${chara.charKey}-icon`}
              />
              {/* <StyledIcon src={HomeIcon} alt={"home icon"} /> */}
              <Description>{chara.testimony}</Description>
            </Bubble>
          </Link>
        </Testimony>
      ))}
    </motion.div>
  );
};

export default Relationships;
