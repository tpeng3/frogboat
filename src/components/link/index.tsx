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
}

export default function Link(props: Props) {
  const { to, children } = props;
  const setPreviousTheme = useSystemStore((state) => state.setPreviousTheme);
  const setCurrentTheme = useSystemStore((state) => state.setCurrentTheme);
  const currentTheme = useSystemStore((state) => state.currentTheme);

  const handleClick = () => {
    // TODO: probably look into making this cleaner
    const pathList = to.split("/");
    const pageTheme = pathList.length > 2 ? pathList[2] : "";
    if (
      Object.values(ThemeTypes).includes(ThemeTypes[pageTheme.toUpperCase()])
    ) {
      setPreviousTheme(currentTheme);
      setCurrentTheme(pageTheme);
    } else {
      setPreviousTheme(currentTheme);
      setCurrentTheme(ThemeTypes.DEFAULT);
    }
  };

  return (
    <StyledLink onClick={handleClick} to={to}>
      {children}
    </StyledLink>
  );
}
