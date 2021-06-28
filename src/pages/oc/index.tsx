import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import { SEO } from "@components/seo";
import SocialLinks from "@components/SocialLinks";

const AboutContainer = styled.div`
  margin: 2em 5em;
  text-align: center;
  p {
    margin-bottom: 2em;
    white-space: pre-line;
  }
`;

const OCPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <div>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <h1>Froggo's OCs</h1>
      <hr />
      <AboutContainer>
        <p>
          Hello! This is where I dump my OC refs and gift art. Feel free to look
          around! They're my precious children and I care for them very much
          '-')9
        </p>
        <SocialLinks />
      </AboutContainer>
      <hr />
      {/* there should be a carousel here... or just image */}
      <hr />
      {/* <DevNotes/> */}
    </div>
  );
};

export default OCPage;
