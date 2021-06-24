import * as React from "react";
import styled from "styled-components";
import content from "./content.yaml";
import useSystemStore from "@store/system";
import Link from "@components/Link";
import MobileNav from "./MobileNav";
import SettingsModal from "./SettingsModal";
import HomeIcon from "@images/SVG/home.svg";
import SettingsIcon from "@images/SVG/settings.svg";
import MenuIcon from "@images/SVG/menu.svg";
import { hexToRGBA, media, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import useWindowSize from "@util/screen";
import Drawer from "@material-ui/core/Drawer";

const StyledDrawer = styled(Drawer)`
  && {
    .MuiDrawer-paper {
      background-color: ${COLORS.GREY_DEFAULT};
    }
  }
`;

const NavContainer = styled.div`
  position: relative;
  z-index: 1; // added for now because polka background is acting funky
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.9)};
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

const SubNavButton = styled.button`
  cursor: pointer;
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
  z-index: 1;
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

export interface NavProps {
  primary?: boolean;
}

const Nav = ({ primary }: NavProps) => {
  const darkMode = useSystemStore((state) => state.darkMode);
  const [mobileNavOpened, toggleMobileNav] = React.useState<boolean>(false);
  const [settingsModalOpened, togglSettingsModal] =
    React.useState<boolean>(false);

  const { isTablet } = useWindowSize();

  return isTablet ? (
    <>
      <NavContainer>
        <NavItem>
          <NavButton onClick={() => toggleMobileNav(true)}>
            <MenuIcon alt={"menu icon"} />
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton>
            <SettingsIcon alt={"settings icon"} />
          </NavButton>
        </NavItem>
      </NavContainer>
      {/* <SettingsModal /> */}
      <StyledDrawer
        anchor={"left"}
        open={mobileNavOpened}
        onClose={() => toggleMobileNav(false)}
      >
        <MobileNav />
      </StyledDrawer>
    </>
  ) : (
    <>
      <NavContainer>
        <NavItem>
          <Link to={"/oc"}>
            <NavButton>
              <span>
                <HomeIcon alt={"home icon"} />
                Home
              </span>
            </NavButton>
          </Link>
        </NavItem>
        {content.navItems.map((item) => {
          return (
            <NavItem key={item.label}>
              <DropdownContainer>
                <Link to={item.route}>
                  <NavButton key={item.label}>
                    <span>{item.label}</span>
                  </NavButton>
                </Link>
                {item.subItems && (
                  <SubNavContainer>
                    {item.subItems.map((subitem) => (
                      <Link to={subitem.route} key={subitem.label}>
                        <SubNavButton key={subitem.label}>
                          <span>{subitem.label}</span>
                        </SubNavButton>
                      </Link>
                    ))}
                  </SubNavContainer>
                )}
              </DropdownContainer>
            </NavItem>
          );
        })}
        <NavItem>
          <NavButton>
            <SettingsIcon alt={"settings icon"} />
          </NavButton>
        </NavItem>
      </NavContainer>
      {/* <SettingsModal /> */}
    </>
  );
};

export default Nav;
