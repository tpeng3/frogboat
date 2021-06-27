// import { isRunningInBrowser } from "../util/helpers";

import { useEffect, useState, useRef } from "react";

export const breakpoints = {
  mobile: 370,
  tablet: 600,
  laptop: 800,
  desktop: 1024,
  desktopLarge: 1280,
  desktopXlarge: 2400,
};

/**
 * Get the current size of the browser window.
 * @return {windowSize}
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < breakpoints.tablet,
    isTablet: window.innerWidth <= breakpoints.laptop,
    isLandscape: window.matchMedia(
      "only screen and (max-device-height: 411px) and (max-device-width: 823px) and (orientation: landscape)"
    ).matches,
  });

  useEffect(() => {
    /**
     * update window dimensions
     */
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < breakpoints.tablet,
        isTablet: window.innerWidth <= breakpoints.laptop,
        isLandscape: window.matchMedia(
          "only screen and (max-device-height: 411px) and (max-device-width: 823px) and (orientation: landscape)"
        ).matches,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  const handleResize = () => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return dimensions;
}