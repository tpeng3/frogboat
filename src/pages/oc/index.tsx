import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import { SEO } from "@components/seo";
import SocialLinks from "@components/SocialLinks";
import { SlideFromRight } from "@components/StyledContainers";
import { media, font } from "@util/helpers";
import HomePic from "src/images/homepic.jpg";
import sitelog from "src/docs/sitelog.yaml";

const ImageContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  img {
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

const OCPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <SlideFromRight>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
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
      <ImageContainer>
        <img src={HomePic} alt="404 icon" />
      </ImageContainer>
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
