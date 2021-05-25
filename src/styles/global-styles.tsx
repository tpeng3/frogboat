import { createGlobalStyle } from "styled-components";
import { THEME } from "@util/constants";
import { media, font } from "@util/helpers";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.darkblue};
    color: white;
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  h1, h2, h3, h4, h5, h6, span {
    color: ${THEME.default.primaryColor}
  } 
  h1 {
    ${font('48px', '48px', '500', '-1.25px')}
    ${media.desktop`
      ${font('120px', '108px', '500', '-3px')}
    `}
  }
  h2 {
    ${font('40px', '40px', '500', '-1.25px')}
    ${media.desktop`
      ${font('72px', '64px', '500', '-1.25px')}
    `}
  }
  h3 {
    ${font('36px', '36px', '500', '-1px')}
    ${media.desktop`
      ${font('48px', '48px', '500', '-1px')}
    `}
  }
  h4 {
    ${font('24px', '24px', '500', '-0.5px')}
    ${media.desktop`
      ${font('36px', '40px', '500', '-0.5px')}
    `}
  }
  h5 {
    ${font('18px', '20px', '400', '-0.5px')}
    ${media.desktop`
      ${font('20px', '20px', '400', '-0.25px')}
    `}
  }
  h6 {
    ${font('14px', '24px', '500', '-0.25px')}
    ${media.desktop`
      ${font('16px', '28px', '500', '0')}
    `}
  }
`;

export { GlobalStyles };
