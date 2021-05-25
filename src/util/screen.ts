import { isRunningInBrowser } from '../util/helpers';

/**
 * @fileoverview
 * Basic utils for guestimating if the user is on mobile based on the screen size.
 */

export const breakpoints = {
  mobile: 370,
  tablet: 600,
  laptop: 800,
  desktop: 1024,
  desktopLarge: 1280,
  desktopXlarge: 2400,
};

export const isMobile = () => {
  if (isRunningInBrowser) {
    return document.documentElement.clientWidth < breakpoints.tablet;
  }
};

export const isLessThanScreenSize = (breakpoint: number) => {
  if (isRunningInBrowser) {
    return document.documentElement.clientWidth < breakpoint;
  }
};