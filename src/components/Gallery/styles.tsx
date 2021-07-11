import styled from "styled-components";
import { hexToRGBA, media, font } from "@util/helpers";
import { COLORS, TAG_TYPE } from "@util/constants";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  max-height: 160px;
  object-fit: cover;
  filter: brightness(80%);
  transition: all 200ms ease;
  :hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;

export const MultiTag = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${hexToRGBA(COLORS.GREY_DEFAULT, 0.7)};
  padding-left: 0.3rem;
  border-radius: 5px 0 0 0;
  span {
    display: flex;
    align-items: center;
  }
  svg {
    width: 1rem;
    height: 1rem;
    margin: 0.3rem;
  }
`;

export const SingleImageContainer = styled.div``;

export const HorizontalImageContainer = styled.div<{ col: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.col}, 1fr)`};
  grid-gap: 15px;
`;

export const VerticalImageContainer = styled.div<{ row: number }>`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 10px;
  max-width: 500px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  .gatsby-image-wrapper {
    img {
      height: auto !important;
    }
  }
`;

export const TagSpan = styled.span<{ tagColor: string }>`
  color: ${(props) => props.tagColor};
`;

export const TagList = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  a:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const CaptionBox = styled.div`
  font-family: "Asap";
  max-width: 800px;
  padding-bottom: 1rem;
  a {
    color: ${COLORS.LINK};
    text-decoration: none;
    &:active {
      color: ${COLORS.LINK_ACTIVE};
    }
  }
  h2 {
    ${font("1.4rem", "2rem", "500", "0.1rem")}
  }
  p {
    ${font("0.9rem", "1rem", "400", "0.75px")}
  }
  span {
    /* display: none; */
  }
`;
