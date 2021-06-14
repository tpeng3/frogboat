import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import content from "./content.yaml";
import useSystemStore from "@store/system";
import Link from "@components/Link";
import HomeIcon from "@images/SVG/home.svg";
import DownArrowIcon from "@images/SVG/down_arrow.svg";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { hexToRGBA, media, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import { makeStyles, Theme, withStyles } from "@material-ui/core/styles";

const StyledAccordion = withStyles({
  root: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderTop: `1px solid ${COLORS.GREY_100}`,
    margin: "0px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "0px",
    },
  },
  expanded: {
    margin: "0px",
  },
})(Accordion);

const StyledAccordionSummary = withStyles({
  root: {
    minHeight: "32px",
    "&$expanded": {
      minHeight: "32px",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(AccordionSummary);

const DrawerContainer = styled.div`
  background-color: ${COLORS.GREY_DEFAULT};
  width: 415px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 24px;
  ${elevation(3)}
`;

const NavItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
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

// const StyledAccordion = styled(Accordion)`
//   && {
//     background-color: transparent;
//     box-shadow: none;
//     border-top: 1px solid ${COLORS.GREY_100};
//     margin: 0px;
//     &:not(:last-child) {
//       border-bottom: 0;
//     }
//     &:before {
//       display: none;
//     }
//     .MuiAccordionSummary-root.Mui-expanded {
//       margin: 0px;
//     }
//   }
// `;

// const StyledAccordionSummary = styled(AccordionSummary)`
//   background-color: transparent;
// `;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: transparent;
  flex-direction: column;
`;

const StyledIcon = styled.img`
  height: 24px;
  width: 20px;
  display: initial;
  vertical-align: sub;
`;

const AccordionIcon = styled.img<{ expanded: boolean }>`
  height: 24px;
  width: 13px;
  display: initial;
  vertical-align: sub;
  margin-right: 8px;
  transition: transform 200ms ease-in-out;
  ${(props) => props.expanded && `transform: rotate(-180deg);`}
`;

export interface NavProps {
  primary?: boolean;
}

const Nav = ({ primary }: NavProps) => {
  const darkMode = useSystemStore((state) => state.darkMode);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <DrawerContainer>
      <NavItem>
        <Link to={"/io"}>
          <NavButton>
            <span>
              <StyledIcon src={HomeIcon} alt={"home icon"} />
              Home
            </span>
          </NavButton>
        </Link>
      </NavItem>
      {content.navItems.map((item) => {
        return (
          <StyledAccordion
            square
            expanded={expanded === item.label}
            onChange={handleChange(item.label)}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <AccordionIcon
                src={DownArrowIcon}
                alt={"accordion icon"}
                expanded={expanded === item.label}
              />
              <span>{item.label}</span>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              {item.subItems &&
                item.subItems.map((subitem) => (
                  <Link to={subitem.route}>
                    <SubNavButton key={subitem.label}>
                      <span>{subitem.label}</span>
                    </SubNavButton>
                  </Link>
                ))}
            </StyledAccordionDetails>
          </StyledAccordion>
        );
      })}
    </DrawerContainer>
  );
};

export default Nav;
