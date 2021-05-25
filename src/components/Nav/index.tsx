import * as React from "react";
import useSystemStore from "@store/system";
import content from './content.yaml';
import './style.scss';
import { Link } from "gatsby"
import HomeIcon from '@images/SVG/home.svg';
import styled from "styled-components";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS } from "@util/constants";

const NavContainer = styled.div`
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, .90)};
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  z-index: 1;
  ${media.desktop`
    background-color: ${COLORS.GREY_DEFAULT};
  `}
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
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:first-child {
    margin-left: 12px;
    img {
      margin-right: 6px;
    }
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 0;
  :hover {
    display: block;
  }
`;

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

const Nav = ({
  primary
}: NavProps) => {
  const darkMode = useSystemStore(state => state.darkMode);

  return (
    <NavContainer>
      {content.navItems.map(item => {
        return (
          <DropdownContainer>
            {item.label === "Home" ?
              <NavButton key={item.label}>
                <Link to={item.route}>
                  <span><StyledIcon src={HomeIcon} alt={'home icon'} />
                    {item.label}</span>
                </Link>
              </NavButton>
              :
              <NavButton key={item.label}>
                <Link to={item.route}>

                  <span>{item.label}</span>
                </Link>
              </NavButton>}
            {item.subItems && <SubNavContainer>
              {item.subItems.map(subitem =>
                <SubNavButton key={subitem.label}>
                  <Link to={subitem.route}>
                    <span>{subitem.label}</span>
                  </Link>
                </SubNavButton>
              )}
            </SubNavContainer>}
          </DropdownContainer>
        )
      }
      )}
    </NavContainer>
  );
}

export default Nav;