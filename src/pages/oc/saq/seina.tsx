import React from "react";
import { motion } from "framer-motion";
import { RouteComponentProps } from "@reach/router";
import { ThemeTypes } from "@components/Layout";
import { SEO } from "@components/seo";
import CharacterAbout from "@components/CharacterPage";
import TabContainer, { tabTypes } from "@components/TabContainer";
import content from "./content.yaml";

const CHARA_KEY = "oc seina";
const THEME_KEY = ThemeTypes.SAQ;

const OCPage: React.FC<RouteComponentProps> = ({ location = {} }) => {
  const path = location.pathname;
  return (
    <div>
      <CharacterAbout {...content[CHARA_KEY]} />
      <hr />
      <TabContainer
        currentTheme={THEME_KEY}
        keyName={CHARA_KEY}
        tabs={[tabTypes.RELATIONSHIPS, tabTypes.GALLERY, tabTypes.NOTES]}
      />
    </div>
  );
};

export default OCPage;
