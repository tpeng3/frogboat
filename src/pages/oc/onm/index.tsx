import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import Layout, { ThemeTypes } from "@components/Layout";
import { SEO } from "@components/seo";
import content from "./content.yaml";

const THEME_KEY = ThemeTypes.ONM;

const AboutContainer = styled.div`
  margin: 2em 5em;
  text-align: center;
  p {
    margin-bottom: 2em;
    white-space: pre-line;
  }
`;

const SAQPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout currentTheme={THEME_KEY}>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <h1>{content.main.title}</h1>
      <h4>Genre: {content.main.genre}</h4>
      <hr />
      <AboutContainer>
        <p>{content.main.description}</p>
      </AboutContainer>
      <hr />
      {/* Chara select screen here */}
      <hr />
      {/* <Project Status/> */}
    </Layout>
  );
};

export default SAQPage;
