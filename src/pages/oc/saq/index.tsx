import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import Layout, { ThemeTypes } from "@components/Layout";
import { SEO } from "@components/seo";
import ProjectAbout from "@components/ProjectAbout";
import content from "./content.yaml";

const THEME_KEY = ThemeTypes.SAQ;

const SAQPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout currentTheme={THEME_KEY}>
      <SEO
        title="About gatsby-starter-template-deluxe"
        description="Examples using the gatsby-starter-template-deluxe."
      />
      <ProjectAbout {...content.main} />
      <hr />
      {/* Chara select screen here */}
      <hr />
      {/* <Project Status/> */}
    </Layout>
  );
};

export default SAQPage;
