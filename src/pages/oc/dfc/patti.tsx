import React from "react";
import { graphql } from "gatsby";
import { imageDataProps } from "@util/types";
import { SEO } from "@components/seo";
import CharacterAbout from "@components/CharacterPage";
import TabContainer, { tabTypes } from "@components/TabContainer";
import { PageTransition } from "@components/StyledContainers";
import content from "./content.yaml";

const CHARA_KEY = "oc patti";

interface Props {
  data: {
    allImageDataJson: {
      nodes: imageDataProps;
    };
  };
}

export default function OCPage(props: Props) {
  const { data } = props;
  return (
    <PageTransition>
      {/* figure out SEO later, if not never */}
      <SEO {...content[CHARA_KEY]} />
      <CharacterAbout {...content[CHARA_KEY]} />
      <hr />
      <TabContainer
        keyName={CHARA_KEY}
        tabs={[tabTypes.GALLERY, tabTypes.RELATIONSHIPS, tabTypes.NOTES]}
        relationshipData={content[CHARA_KEY].relationships}
        otherData={content[CHARA_KEY].facts}
        imageData={data.allImageDataJson.nodes}
      />
    </PageTransition>
  );
}

export const pageQuery = graphql`
  query {
    allImageDataJson(
      filter: { tags: { elemMatch: { key: { eq: "oc patti" } } } }
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
