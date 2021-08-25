import React, { useState } from "react";
import styled from "styled-components";
import Link from "@components/Link";
import { elevation, hexToRGBA } from "@util/helpers";
import { COLORS } from "@util/constants";
import { motion, Variants } from "framer-motion";

const NavItemWrapper = styled(motion.div)``;

const NavButton = styled(motion.div).attrs({
  variants: {
    active: {
      background: hexToRGBA(COLORS.GREY_HOVER, 1),
      scale: 1.1,
    },
    default: {
      background: hexToRGBA(COLORS.GREY_DEFAULT, 0),
      scale: 1.0,
    },
  },
})`
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 8px 12px;
  min-width: 80px;
  svg {
    height: 24px;
    width: 20px;
    display: initial;
    vertical-align: sub;
    margin-right: 5px;
  }
`;

const SubNavContainer = styled(motion.div)`
  position: absolute;
  background-color: ${COLORS.GREY_DEFAULT};
  width: 250px;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  ${elevation(2)}
`;

const SubNavButton = styled(motion.div).attrs({
  variants: {
    active: {
      backgroundColor: COLORS.GREY_HOVER,
    },
    default: {
      backgroundColor: COLORS.GREY_DEFAULT,
    },
  },
})`
  cursor: pointer;
  background-color: ${COLORS.GREY_DEFAULT};
  color: ${COLORS.white};
  padding: 16px 16px 16px 32px;
  font-size: 16px;
  border: none;
  text-align: left;
  width: 100%;
  span {
    width: 100%;
  }
`;

const ButtonSpan = styled(motion.span).attrs({
  variants: {
    active: {
      scale: 1.15,
    },
    default: {
      scale: 1.0,
    },
  },
})`
  display: inline-block;
`;

interface NavItemProps {
  label: string;
  route: string;
}

interface Props {
  item: {
    label: string;
    route: string;
    subItems?: NavItemProps[];
  };
  icon?: any;
}

export default function DropdownMenu(props: Props) {
  const { item, icon } = props;
  const [subNavOpen, toggleSubNav] = useState<boolean>(false);
  // const darkMode = useSystemStore((state) => state.darkMode);

  const modalBackgroundVariants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
      visibility: "visible",
      transition: {
        maxHeight: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        maxHeight: { stiffness: 1000 },
      },
    },
  };

  return (
    <NavItemWrapper
      initial="closed"
      animate={subNavOpen ? "open" : "closed"}
      onHoverStart={() => {
        if (!subNavOpen) {
          toggleSubNav(true);
        }
      }}
      onHoverEnd={() => {
        toggleSubNav(false);
      }}
    >
      <Link to={item.route}>
        <NavButton key={item.label} initial="default" whileHover="active">
          <ButtonSpan>
            {icon && <props.icon />}
            {item.label}
          </ButtonSpan>
        </NavButton>
      </Link>
      {item.subItems && (
        <SubNavContainer variants={modalBackgroundVariants}>
          {item.subItems.map((i) => (
            <Link
              to={i.route}
              key={i.label}
              extraAction={() => toggleSubNav(false)}
            >
              <SubNavButton key={i.label} initial="default" whileHover="active">
                <ButtonSpan>{i.label}</ButtonSpan>
              </SubNavButton>
            </Link>
          ))}
        </SubNavContainer>
      )}
    </NavItemWrapper>
  );
}
