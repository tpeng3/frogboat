import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "@components/layout";
import { SEO } from "@components/seo";
import SocialLinks from "@components/SocialLinks";
import CharacterAbout from "@components/CharacterPage";
import content from "./characters.yaml";
import TabContainer, { tabTypes } from "@components/TabContainer";

const OCPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout currentTheme="onm">
      <CharacterAbout {...content.hotaru} />
      <hr />
      <TabContainer
        currentTheme="onm"
        keyName="hotaru"
        tabs={[tabTypes.RELATIONSHIPS, tabTypes.GALLERY, tabTypes.NOTES]}
      />
    </Layout>
  );
};

export default OCPage;
