import React from "react";
import { useState } from "react";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import Link from "@components/Link";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS } from "@util/constants";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

const GalleryPreview = styled.img`
  border-radius: 5px;
  width: 100%;
  max-height: 160px;
  object-fit: cover;
`;

interface GalleryProps {
  keyName: string;
  currentTheme?: string;
}

const Gallery = ({ keyName }: GalleryProps) => {
  const { isTablet } = useWindowSize();
  var gallery = [
    {
      src: "http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png",
    },
    {
      src: "http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png",
    },
    {
      src: "http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png",
    },
  ];

  const renderGalleryPreview = () => {
    const tempImgSrc =
      "http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png";
    const pic = {
      full: tempImgSrc,
      preview: tempImgSrc,
    };
    return (
      <a className="spotlight" href={pic.full}>
        <GalleryPreview src={pic.preview} />
      </a>
    );
  };

  return (
    <GalleryContainer>
      {[0, 1, 2, 3, 4].map(() => renderGalleryPreview())}
    </GalleryContainer>
  );
};

export default Gallery;
