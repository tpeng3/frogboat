import React from "react";
import { graphql } from "gatsby";
import { SlideFromRight } from "@components/StyledContainers";
import Gallery from "@components/Gallery";
import { imageDataProps } from "@util/types";

interface Props {
  data: {
    allImageDataJson: {
      nodes: imageDataProps[];
    };
  };
}

export function TestPage(props: Props) {
  const { data } = props;
  return (
    <SlideFromRight>
      <Gallery imageData={data.allImageDataJson.nodes} />
    </SlideFromRight>
  );
}

export default TestPage;

// {regex: "/(?:art|doodles)/"}}}}

export const pageQuery = graphql`
  query {
    allImageDataJson(
      filter: { tags: { elemMatch: { key: { eq: "sorted" } } } }
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
