import React from "react";
import { motion } from "framer-motion";
import { ThemeTypes } from "@components/Layout";
import { SEO } from "@components/seo";
import { graphql } from "gatsby";
import CharacterAbout from "@components/CharacterPage";
import TabContainer, { tabTypes } from "@components/TabContainer";
import content from "./content.yaml";

const CHARA_KEY = "oc hotaru";
const THEME_KEY = ThemeTypes.ONM;

interface Props {
  location: string;
  data: any; // figure out later
}

export default function OCPage(props: Props) {
  const { location, data } = props;
  // const path = location.pathname;
  return (
    <div>
      <CharacterAbout {...content[CHARA_KEY]} />
      <hr />
      <TabContainer
        currentTheme={THEME_KEY}
        keyName={CHARA_KEY}
        tabs={[tabTypes.RELATIONSHIPS, tabTypes.GALLERY, tabTypes.NOTES]}
        imageData={data.allImageDataJson.nodes}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query CharacterQuery {
    allImageDataJson(
      filter: { tags: { elemMatch: { key: { eq: "oc hotaru" } } } }
    ) {
      nodes {
        comment
        date
        fileName
        filePaths
        id
        key
        mimeType
        name
        order
        tags {
          color
          key
          name
          type
        }
      }
    }
  }
`;
