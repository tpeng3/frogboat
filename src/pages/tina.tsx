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
  console.log(data);
  return (
    <SlideFromRight>
      <Gallery imageData={data.allImageDataJson.nodes} />
    </SlideFromRight>
  );
}

export default TestPage;

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
