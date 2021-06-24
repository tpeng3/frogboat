import * as React from "react";
import styled from "styled-components";
import content from "./content.yaml";
import useSystemStore from "@store/system";
import Link from "@components/Link";
import HomeIcon from "@images/SVG/home.svg";
import SettingsIcon from "@images/SVG/settings.svg";
import MenuIcon from "@images/SVG/menu.svg";
import { hexToRGBA, media, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import useWindowSize from "@util/screen";

const NavContainer = styled.div`
  /* background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.9)}; */
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 1)};
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  ${elevation(5)}
  ${media.desktop`
    background-color: ${COLORS.GREY_DEFAULT};
  `}
`;

const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:last-child {
    margin-left: auto;
  }
`;

const NavButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 8px 12px;
  min-width: 80px;
  :hover {
    background-color: ${COLORS.GREY_HOVER};
  }
  img {
    margin-right: 6px;
  }
`;

const SubNavButton = styled.button`
  background-color: ${COLORS.GREY_DEFAULT};
  color: ${COLORS.white};
  padding: 16px;
  font-size: 16px;
  border: none;
  text-align: left;
  width: 100%;
  :hover {
    background-color: ${COLORS.GREY_HOVER};
  }
  a {
    width: 100%;
  }
`;

const SubNavContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${COLORS.GREY_DEFAULT};
  width: 250px;
  ${elevation(2)}
  z-index: 0;
  :hover {
    display: block;
  }
`;

// const SubNavContainer = styled.div`
//   position: absolute;
//   background-color: ${COLORS.GREY_DEFAULT};
//   width: 250px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 0;
//   opacity: 0;
//   height: 0;
//   max-height: 0;
//   overflow: hidden;
//   :hover {
//     top: 50px;
//     height: auto;
//     max-height:500px;
//     opacity: 1;
//     display: block;
//   }
// `;

// const DropdownContainer = styled.div`
//   border-radius: 10px;
//   position: relative;
//   display: inline-block;
//   z-index: 0;
//   :hover ${SubNavContainer} {
//     top: 50px;
//     height: auto;
//     max-height:500px;
//     opacity: 1;
//     display: block;
//     transition: all 500ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
//   }
// `;

const DropdownContainer = styled.div`
  border-radius: 10px;
  position: relative;
  display: inline-block;
  :hover ${SubNavContainer} {
    display: block;
  }
`;

const StyledIcon = styled.img`
  height: 24px;
  width: 20px;
  display: initial;
  vertical-align: sub;
`;

export interface NavProps {
  primary?: boolean;
}

const Nav = ({ primary }: NavProps) => {
  const darkMode = useSystemStore((state) => state.darkMode);
  const setDarkMode = useSystemStore((state) => state.setDarkMode);
  const { isTablet } = useWindowSize();

  return (
    // <ModalContainer>
    //   <Title>Settings</Title>
    //   <MenuItem>
    //   <span>Dark mode</span>
    //   <Toggle/>
    //   </MenuItem>
    // </ModalContainer>
    <div />
  );
};

export default Nav;
