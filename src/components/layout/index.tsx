import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  motion,
  AnimatePresence,
  Variants,
  AnimateSharedLayout,
} from "framer-motion";
import useSystemStore from "@store/system";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import { theme, GlobalStyles } from "src/styles";
// Components
import { CSSDebugger } from "../css-debugger";
import Nav from "@components/Nav";
// import Polka from "@images/SVG/polka.svg";
import { hexToRGBA, elevation } from "@util/helpers";
import { COLORS } from "@util/constants";
import BackgroundGradient from "@components/BackgroundGradient";

const HeaderImage = styled.div`
  background-color: #fff;
  height: 150px;
`;

const Main = styled.main<{ currentTheme: string }>`
  position: relative;
  padding: 5rem 1rem;
  background-color: ${(props) =>
    props.currentTheme
      ? props.theme[props.currentTheme].backgroundColor
      : props.theme.default.backgroundColor};
  background-image: ${(props) =>
    props.currentTheme
      ? props.theme[props.currentTheme].backgroundGradient
      : props.theme.default.backgroundColor};
  h1,
  .accent {
    color: ${(props) =>
      props.currentTheme
        ? props.theme[props.currentTheme].accentColor
        : props.theme.default.accentColor};
  }
  hr {
    border: none;
    border-top: 0.1em solid
      ${(props) =>
        props.currentTheme
          ? props.theme[props.currentTheme].accentColor
          : props.theme.default.accentColor};
  }
`;

const Container = styled(motion.div)`
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.8)};
  margin: 0 auto;
  min-height: 500px;
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

const BackgroundTexture = styled.div<{ rotated?: boolean }>`
  clip-path: polygon(45% 0, 100% 100%, 100% 0);
  background-image: radial-gradient(#fff 0.15rem, transparent 0.15rem),
    radial-gradient(#fff 0.15rem, transparent 0.15rem);
  background-color: transparent;
  background-position: 0 0, 1rem 1rem;
  background-size: 2rem 2rem;
  height: 30%;
  width: 100%;
  position: absolute;
  opacity: 50%;
  ${(props) =>
    props.rotated
      ? `
      clip-path: polygon(0 0, 55% 100%, 0 100%);
      bottom: 0;
      left: 0;
  `
      : `
    top: 0;
    right: 0;
  `}
`;

export enum ThemeTypes {
  DEFAULT = "default",
  SAQ = "saq",
  DFC = "dfc",
  ONM = "onm",
  HORO = "horo",
}

interface LayoutProps extends PageProps {}

const Layout = ({ location, children }: LayoutProps) => {
  const darkMode = useSystemStore((state) => state.darkMode);
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const setPreviousTheme = useSystemStore((state) => state.setPreviousTheme);
  const setCurrentTheme = useSystemStore((state) => state.setCurrentTheme);

  useEffect(() => {
    const pathList = location.pathname.split("/");
    const pageTheme = pathList.length > 2 ? pathList[2] : "";
    if (
      Object.values(ThemeTypes).includes(ThemeTypes[pageTheme.toUpperCase()])
    ) {
      setPreviousTheme(pageTheme);
      setCurrentTheme(pageTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <HeaderImage />
      <Nav />
      <Main currentTheme={currentTheme}>
        <BackgroundGradient />
        <BackgroundTexture />
        <BackgroundTexture rotated />
        <AnimateSharedLayout>
          {/* TODO: move opacity to text and delay on change so box is less awkward */}
          <Container
          // layout
          // transition={{ ease: "linear", stiffness: 0, velocity: 0 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition: { delay: 2, delayChildren: 1 } }}
          // exit={{ opacity: 0 }}
          >
            {/* <CSSDebugger /> */}
            <main>{children}</main>
          </Container>
        </AnimateSharedLayout>
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
