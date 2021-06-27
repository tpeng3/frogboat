import React from "react";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import Layout, { ThemeTypes } from "@components/Layout";
import { SEO } from "@components/seo";
import CharacterAbout from "@components/CharacterPage";
import TabContainer, { tabTypes } from "@components/TabContainer";
import content from "./content.yaml";

const CHARA_KEY = "oc aster";
const THEME_KEY = ThemeTypes.DFC;

const OCPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <Layout currentTheme={THEME_KEY}>
      <CharacterAbout {...content[CHARA_KEY]} />
      <hr />
      <TabContainer
        currentTheme={THEME_KEY}
        keyName={CHARA_KEY}
        tabs={[tabTypes.RELATIONSHIPS, tabTypes.GALLERY, tabTypes.NOTES]}
      />
    </Layout>
  );
};

export default OCPage;
