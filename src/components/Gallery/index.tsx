import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import GalleryFilters from "@components/GalleryFilters";
import { ThemeTypes } from "@components/Layout";
import Link from "@components/Link";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS } from "@util/constants";
import Spotlight from "spotlight.js/src/js/spotlight.js";

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

const HiddenBackstore = styled.div`
  display: none;
`;

const Fragment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: ${COLORS.black};
  border-radius: 5px;
  padding: 0.6rem;
  width: fit-content;
`;

const ImageContainer = styled.div`
  display: flex;
  align-self: center;
`;

interface Props {
  keyName: string;
  currentTheme: ThemeTypes;
}

const Gallery = ({ keyName, currentTheme }: Props) => {
  const { isTablet } = useWindowSize();
  // const activeFilters = useSystemStore((state) => state.activeFilters);
  const [displayedList, updateDisplayedList] = useState([]);

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

  useEffect(() => {
    Spotlight.show(gallery)
  }, []);


  const renderGalleryPreview = () => {
    const tempImgSrc =
      "http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png";
    const pic = {
      full: tempImgSrc,
      preview: tempImgSrc,
    };
    return (
      <a
        className="spotlight"
        href={pic.full}
        key={Math.random()}
        data-media="node"
        data-fullscreen={false}
        data-page={false}
        data-src={"#fragment"}
        data-control={"close,prev,next"} // FUCK ZOOM ALL MY HOMIES HATE ZOOM
      >
        <GalleryPreview src={pic.preview} />
      </a>
    );
  };

  const renderNodeImage = () => {
    return (
      <Fragment id="fragment">
        <ImageContainer>
          <img
            className="image"
            src="http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png"
          />
          <img
            className="image"
            src="http://pestemon.weebly.com/uploads/2/8/6/2/28624773/editor/seeevevne.png"
          />
        </ImageContainer>
        <h5>test hi seven, we can load tags here too</h5>
      </Fragment>
    );
  };

  return (
    <div>
      <GalleryFilters currentTheme={currentTheme} filters={[]} />
      <GalleryContainer className="spotlight-group">
        {[0, 1, 2, 3, 4].map(() => renderGalleryPreview())}
      </GalleryContainer>
      <HiddenBackstore>
        {[0, 1, 2, 3, 4].map(() => renderNodeImage())}
      </HiddenBackstore>
    </div>
  );
};

export default Gallery;
