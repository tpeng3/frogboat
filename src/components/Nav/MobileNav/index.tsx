import * as React from "react";
import { useState } from "react";
import useSystemStore from "@store/system";
import Link from "@components/Link";
import {
  DrawerContainer,
  NavItem,
  NavButton,
  StyledAccordion,
  StyledAccordionSummary,
  AccordionIcon,
  StyledAccordionDetails,
  SubNavButton,
} from "./styles";
import content from "../content.yaml";
import { NAVICON_MAP } from "../index";

export interface Props {
  toggleMobileNav: Function;
}

export default function MobileNav({ toggleMobileNav }: Props) {
  const darkMode = useSystemStore((state) => state.darkMode);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <DrawerContainer>
      {content.navItems.map((item) => {
        const Icon = NAVICON_MAP[item.icon];
        return !item.subItems ? (
          <NavItem>
            <Link
              to={item.route}
              extraAction={() => toggleMobileNav(false)}
              key={item.label}
            >
              <NavButton>
                <span>
                  {item.icon && <Icon />}
                  {item.label}
                </span>
              </NavButton>
            </Link>
          </NavItem>
        ) : (
          <StyledAccordion
            square
            expanded={expanded === item.label}
            onChange={handleChange(item.label)}
            key={item.label}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <AccordionIcon
                alt={"accordion icon"}
                expanded={expanded === item.label}
              />
              <span>{item.label}</span>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Link
                to={item.route}
                key={`${item.label}-about`}
                extraAction={() => toggleMobileNav(false)}
              >
                <SubNavButton>
                  <span>About</span>
                </SubNavButton>
              </Link>
              {item.subItems.map((subitem) => (
                <Link
                  to={subitem.route}
                  key={subitem.label}
                  extraAction={() => toggleMobileNav(false)}
                >
                  <SubNavButton>
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
}
