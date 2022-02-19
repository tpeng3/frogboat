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
// import { CSSDebugger } from "../css-debugger";
import Nav from "@components/Nav";
import { hexToRGBA, elevation, media } from "@util/helpers";
import { COLORS } from "@util/constants";
import BackgroundGradient from "@components/BackgroundGradient";
import PasswordScreen from "@components/PasswordScreen";

const HeaderImage = styled.div`
  background-color: #000;
  background-image: url("https://pbs.twimg.com/profile_banners/2777423928/1613272393/1500x500");
  background-size: cover;
  background-position: center;
  height: 100px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1.5px); /* apply the blur */
    pointer-events: none; /* make the overlay click-through */
  }
`;

const Main = styled.main<{ currentTheme: string }>`
  position: relative;
  padding: 2rem 1rem 5rem 1rem;
  background-color: ${(props) =>
    props.theme[props.currentTheme].backgroundColor};
  h1,
  .accent {
    color: ${(props) => props.theme[props.currentTheme].accentColor};
  }
  hr {
    border: none;
    border-top: 0.1em solid
      ${(props) => props.theme[props.currentTheme].accentColor};
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
  width: 100%;
  /* ${media.desktop`
    width: 90%;
  `} */
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

const Layout = ({ location, children }: PageProps) => {
  const darkMode = useSystemStore((state) => state.darkMode);
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const setPreviousTheme = useSystemStore((state) => state.setPreviousTheme);
  const setCurrentTheme = useSystemStore((state) => state.setCurrentTheme);
  const isLocked = useSystemStore((state) => state.isLocked);

  useEffect(() => {
    const pathList = location.pathname.split("/");
    const pageTheme = pathList.length > 2 ? pathList[2] : "";
    // TODO: figure out how to not cause background color blink, after password screen is saved with cache
    if (
      Object.values(ThemeTypes).includes(ThemeTypes[pageTheme.toUpperCase()])
    ) {
      setPreviousTheme(pageTheme);
      setCurrentTheme(pageTheme);
    }
  }, []);

  const isPublic = () => {
    // TODO: make this more generic later
    const pathList = location.pathname;
    const PUBLIC_PAGES = ["/oceptember", "/oceptember/"];
    return PUBLIC_PAGES.includes(pathList);
  };

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      {!isPublic() ? (
        isLocked ? (
          // TODO: change OC Layout to a layout case controller
          <PasswordScreen />
        ) : (
          <>
            <HeaderImage />
            <Nav />
            <Main currentTheme={currentTheme}>
              <BackgroundGradient />
              <BackgroundTexture />
              <BackgroundTexture rotated />
              <AnimateSharedLayout>
                <Container>
                  {/* <CSSDebugger /> */}
                  <main>{children}</main>
                </Container>
              </AnimateSharedLayout>
            </Main>
            {/* <Footer /> */}
          </>
        )
      ) : (
        <main>{children}</main>
      )}
    </ThemeProvider>
  );
};

export default Layout;
