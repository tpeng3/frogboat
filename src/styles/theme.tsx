import { breakpoints } from "@util/constants";

export default {
  screens: {
    // max-widths in pixels
    ...breakpoints,
  },
  mobile: `@media screen and (min-width: ${(props) => props.mobile})
    @content`,
  tablet: `@media screen and (min-width: ${(props) => props.tablet})
    @content`,
  laptop: `@media screen and (min-width: ${(props) => props.laptop})
      @content`,
  desktop: `@media screen and (min-width: ${(props) => props.desktop})
      @content`,
  colors: {
    blue: "#0099ff",
    darkblue: "#00072e",
    orange: "#FF9429",
    shadow: "#606467",
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`,
};
