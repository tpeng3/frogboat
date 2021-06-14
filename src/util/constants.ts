export const breakpoints = {
  mobile: 370,
  tablet: 600,
  laptop: 800,
  desktop: 1024,
  desktopLarge: 1280,
};

export const COLORS = {
  GREY_DEFAULT: "#29282C",
  GREY_HOVER: "#3B3A3C",
  GREY_1000: "#1A1A1A",
  GREY_800: "#1D1D1D",
  GREY_300: "#2D2C2F",
  GREY_200: "#55535A",
  GREY_100: "#696969",
  GREY_50: "#F3F3F3",
  white: "#FFFFFF",
  black: "#000000",
  shadow: "#29282C",
  TEAL_500: "#73DFCB",
};

export enum themeTypes {
  default,
  onm,
}

export const THEME = {
  default: {
    primaryColor: COLORS.GREY_50,
    secondaryColor: COLORS.GREY_100,
    accentColor: COLORS.TEAL_500,
    backgroundColor: COLORS.GREY_HOVER,
  },
  onm: {
    accentColor: "#28B5B3",
    primaryColor: "#28B5B3",
    secondaryColor: "#118180",
    backgroundColor: "#141725",
    backgroundGradient:
      "linear-gradient(180.00deg, #2F9A8C 0.00%, #262539 70.00%, #141725 100.00%);",
  },
};
