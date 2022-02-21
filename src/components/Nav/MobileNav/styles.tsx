import styled from "styled-components";
import DownArrowIcon from "@images/SVG/down_arrow.svg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { font, media, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import { withStyles } from "@mui/styles";

export const StyledAccordion = withStyles({
  root: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderTop: `2px solid ${COLORS.GREY_100}`,
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

export const StyledAccordionSummary = withStyles({
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

export const DrawerContainer = styled.div`
  background-color: ${COLORS.GREY_DEFAULT};
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  ${elevation(3)}
  ${media.laptop`
    width: 415px;
  `}
`;

export const NavItem = styled.div`
  padding: 8px;
  &:not(:first-child) {
    border-top: 2px solid ${COLORS.GREY_100};
  }
`;

export const NavButton = styled.div`
  border: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  display: flex;
  border-radius: 10px;
  padding-left: 30px;
  min-width: 80px;
  :hover {
    background-color: ${COLORS.GREY_HOVER};
  }
  svg {
    height: 1rem;
    width: 24px;
    display: initial;
    position: absolute;
    vertical-align: sub;
    left: 2px;
    top: 2px;
  }
`;

export const SubNavButton = styled.div`
  background-color: ${COLORS.GREY_DEFAULT};
  color: ${COLORS.white};
  padding: 10px;
  font-size: 1.1rem;
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

export const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: transparent;
  flex-direction: column;
  padding: 0 0 12px 26px !important;
`;

export const AccordionIcon = styled(DownArrowIcon)<{ expanded: boolean }>`
  height: 24px;
  width: 13px;
  display: initial;
  vertical-align: sub;
  margin-right: 8px;
  transition: transform 200ms ease-in-out;
  ${(props) => props.expanded && `transform: rotate(-180deg);`}
`;
