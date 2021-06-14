import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useSystemStore from "@store/system";
import { useStaticQuery, graphql } from "gatsby";
import { theme, GlobalStyles } from "../../styles";
// Components
import { CSSDebugger } from "../css-debugger";
import Nav from "@components/Nav";
import Polka from "@images/SVG/polka.svg";
import { THEME, COLORS } from "@util/constants";
import { hexToRGBA, elevation } from "@util/helpers";
import { test } from "./anim";

const HeaderImage = styled.div`
  background-color: #fff;
  height: 150px;
`;

const Main = styled.main<{ currentTheme: string }>`
  padding: 5rem 1rem;
  background-color: ${(props) =>
    props.currentTheme
      ? THEME[props.currentTheme].backgroundColor
      : THEME.default.backgroundColor};
  background-image: ${(props) =>
    props.currentTheme
      ? THEME[props.currentTheme].backgroundGradient
      : THEME.default.backgroundColor};
  /* animation: ${test} 1s; */
  h1,
  span {
    color: ${(props) =>
      props.currentTheme
        ? THEME[props.currentTheme].accentColor
        : THEME.default.accentColor};
  }
  hr {
    border: none;
    border-top: 0.1em solid
      ${(props) =>
        props.currentTheme
          ? THEME[props.currentTheme].accentColor
          : THEME.default.accentColor};
  }
`;

const Container = styled.div`
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.8)};
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
  border-radius: 5px;
  position: relative;
  ${elevation(2, "#000000")}
`;

const Footer = styled.div`
  background-color: ${COLORS.GREY_1000};
  height: 200px;
  position: relative;
`;

const BackgroundTexture = styled.img<{ rotated?: boolean }>`
  position: absolute;
  max-width: 40%;
  z-index: 0;
  ${(props) =>
    props.rotated
      ? `
    transform: rotate(180deg);
    bottom: 0;
  `
      : `
    right: 0;
  `}
`;

export interface LayoutProps {
  currentTheme: string;
  children?: any;
}

const Layout = ({ currentTheme = "default", children }: LayoutProps) => {
  const darkMode = useSystemStore((state) => state.darkMode);
  // const currentTheme = useSystemStore((state) => state.currentTheme);
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `);

  // const { title, description } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <HeaderImage />
      <Nav />
      <BackgroundTexture src={Polka} alt={"polka image"} />
      {/* <BackgroundTexture src={Polka} alt={"polka image"} rotated /> */}
      <Main currentTheme={currentTheme}>
        <Container>
          {/* <CSSDebugger /> */}
          <main>{children}</main>
        </Container>
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export { Layout };
