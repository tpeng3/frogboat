import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import { SEO } from "@components/seo";
import SocialLinks from "@components/SocialLinks";
import { SlideFromRight } from "@components/StyledContainers";
import { media, font, hexToRGBA } from "@util/helpers";
import HomePic from "src/images/homepic.jpg";
import sitelog from "src/docs/sitelog.yaml";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import NAV_CONTENT from "@components/Nav/content.yaml";
import Link from "@components/Link";
import { COLORS } from "@util/constants";
import { StaticImage } from "gatsby-plugin-image";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: hexToRGBA(COLORS.GREY_DEFAULT, 0.9),
    border: `2px solid ${COLORS.WHITE_50}`,
    fontSize: 12,
  },
}));

const ImageContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  .gatsby-image-wrapper {
    border-radius: 16px;
  }
`;

const AboutContainer = styled.div`
  text-align: center;
  p {
    margin-bottom: 2em;
    white-space: pre-line;
  }
  margin: 1rem 0rem;
  ${media.desktop`
    margin: 2rem auto;
    max-width: 50%;
  `}
`;

const LogContainer = styled.div`
  margin: 1rem 0rem;
  h4 {
    ${font("1.5rem", "2rem", "500", "0.1rem")}
  }
  ${media.desktop`
    margin: 2rem 4rem;
    h4 {
    ${font("2rem", "2rem", "500", "0.1rem")}
  }
  `}
`;

const getRandomLink = () => {
  let allLinks: string[] = [];
  NAV_CONTENT.navItems.forEach((nav) => {
    if (nav.route !== "/oc") allLinks.push(nav.route);
    if (nav.subItems) {
      nav.subItems.forEach((subnav) => allLinks.push(subnav.route));
    }
  });
  return allLinks[Math.floor(Math.random() * allLinks.length)];
};

const OCPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <SlideFromRight>
      <SEO title="Froggo's OCs" description="Home page." />
      <h1>Froggo's OCs</h1>
      <hr />
      <AboutContainer>
        <p>
          Hello!
          <br />
          <br />
          This is where I dump my OC refs and gift art. Feel free to look
          around! They're my precious children and I care for them very much
          '-')9
        </p>
        <SocialLinks />
      </AboutContainer>
      <hr />
      <StyledTooltip title="Go to a random page" followCursor placement="right">
        <ImageContainer>
          <Link to={getRandomLink()}>
            <StaticImage
              src={"../../images/homepic.jpg"}
              alt="home pic"
              placeholder="dominantColor"
            />
          </Link>
        </ImageContainer>
      </StyledTooltip>

      <hr />
      <LogContainer>
        <h4>Site Log</h4>
        <ul>
          <li className="accent">
            02.20.22 &#8212; Fixed broken images on site, made link accessible
            to friends
          </li>
          {/* {sitelog.notes.map((log, i) =>
            i === 0 ? (
              <li key={i} className="accent">
                {log}
              </li>
            ) : (
              <li key={i}>{log}</li>
            )
          )} */}
        </ul>
      </LogContainer>
    </SlideFromRight>
  );
};

export default OCPage;
