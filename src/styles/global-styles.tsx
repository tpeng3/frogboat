import { createGlobalStyle } from "styled-components";
import { COLORS } from "@util/constants";
import { media, font } from "@util/helpers";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: "Cabin";
    // to override lightbox's stupid bug
    /* overflow: auto !important; */
  }
  h1, h2, h3, h4, h5, h6, span, p {
    color: ${COLORS.white}
  } 
  h1 {
    text-transform: uppercase;
    margin-bottom: 22px;
    ${font("1.8rem", "1.8rem", "400", "-1.25px")}
    ${media.desktop`
      ${font("2.2rem", "2.2rem", "400", "-1px")}
    `}
  }
  h2 {
    ${font("40px", "40px", "500", "-1.25px")}
    ${media.desktop`
      ${font("72px", "64px", "500", "-1.25px")}
    `}
  }
  h3 {
    ${font("36px", "36px", "500", "-1px")}
    ${media.desktop`
      ${font("48px", "48px", "500", "-1px")}
    `}
  }
  h4 {
    ${font("24px", "24px", "500", "-0.5px")}
    ${media.desktop`
      ${font("36px", "40px", "500", "-0.5px")}
    `}
  }
  h5 {
    ${font("18px", "20px", "400", "-0.5px")}
    ${media.desktop`
      ${font("20px", "20px", "400", "-0.25px")}
    `}
  }
  h6 {
    ${font("14px", "24px", "500", "-0.25px")}
    ${media.desktop`
      ${font("16px", "28px", "500", "0")}
    `}
  }
`;

export { GlobalStyles };
