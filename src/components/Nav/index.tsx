import React, { useState } from "react";
import styled from "styled-components";
import { hexToRGBA, media, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import useWindowSize from "@util/screen";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@images/SVG/home.svg";
import MenuIcon from "@images/SVG/menu.svg";
import { SettingsButton, SettingsModal } from "./Settings";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import content from "./content.yaml";

const NAVICON_MAP = {
  home: HomeIcon,
};

const NavWrapper = styled.div`
  position: relative;
`;

const StyledDrawer = styled(Drawer)`
  && {
    .MuiDrawer-paper {
      background-color: ${COLORS.GREY_DEFAULT};
    }
  }
`;

const NavContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.9)};
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 32px 0 12px;
  ${elevation(5)};
  ${media.desktop`
    background-color: ${COLORS.GREY_DEFAULT};
  `}
  & > div:not(:last-child) {
    margin-right: 12px;
  }
  & > div:last-child {
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
  svg {
    height: 24px;
    width: 20px;
    display: initial;
    vertical-align: sub;
    margin-right: 5px;
  }
  :hover {
    background-color: ${COLORS.GREY_HOVER};
  }
`;

const Nav = () => {
  // const darkMode = useSystemStore((state) => state.darkMode);
  const [mobileNavOpened, toggleMobileNav] = useState<boolean>(false);

  const { isTablet } = useWindowSize();

  return (
    <NavWrapper>
      {isTablet ? (
        <>
          <NavContainer>
            <NavButton onClick={() => toggleMobileNav(true)}>
              <MenuIcon alt={"menu icon"} />
            </NavButton>
            <SettingsButton />
          </NavContainer>
          <StyledDrawer
            anchor={"left"}
            open={mobileNavOpened}
            onClose={() => toggleMobileNav(false)}
          >
            <MobileNav />
          </StyledDrawer>
        </>
      ) : (
        <NavContainer>
          {content.navItems.map((item) => {
            return (
              <NavItem
                key={item.label}
                item={item}
                icon={item.icon && NAVICON_MAP[item.icon]}
              />
            );
          })}
          <SettingsButton />
        </NavContainer>
      )}
      <SettingsModal />
    </NavWrapper>
  );
};

export default Nav;
