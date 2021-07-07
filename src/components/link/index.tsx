import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { ThemeTypes } from "@components/Layout";
import useSystemStore from "@store/system";

const StyledLink = styled(GatsbyLink)`
  display: block;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

interface Props {
  children: any;
  to: string;
  extraAction?: Function;
}

export default function Link(props: Props) {
  const { to, children, extraAction } = props;
  const setPreviousTheme = useSystemStore((state) => state.setPreviousTheme);
  const setCurrentTheme = useSystemStore((state) => state.setCurrentTheme);
  const currentTheme = useSystemStore((state) => state.currentTheme);

  const handleClick = () => {
    const pathList = to.split("/");
    const pageTheme = pathList.length > 2 ? pathList[2] : "";
    setTimeout(() => {
      if (
        Object.values(ThemeTypes).includes(ThemeTypes[pageTheme.toUpperCase()])
      ) {
        setPreviousTheme(currentTheme);
        setCurrentTheme(pageTheme);
      } else {
        setPreviousTheme(currentTheme);
        setCurrentTheme(ThemeTypes.DEFAULT);
      }
    }, 100); // add buffer time for the fade transition from one page to finish

    if (extraAction) {
      extraAction();
    }
  };

  return (
    <StyledLink onClick={handleClick} to={to}>
      {children}
    </StyledLink>
  );
}
