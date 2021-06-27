import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import GalleryFilters from "@components/GalleryFilters";
import { ThemeTypes } from "@components/Layout";
import Link from "@components/Link";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS, TAG_TYPE } from "@util/constants";
import FsLightbox from "fslightbox-react";
import useSystemStore from "@store/system";
// TODO: we can import imageData for now but eventually move it to firebase and set it to the store
import imageData from "src/data/imageData.json";
import "./lightbox.scss";
import { light } from "@material-ui/core/styles/createPalette";

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
  filter: brightness(80%);
  transition: all 200ms ease;
  :hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;

const HiddenBackstore = styled.div`
  display: none;
`;

const GalleryBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
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

const HorizontalImageContainer = styled.div<{ col: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-gap: 15px;
`;

const VerticalImageContainer = styled.div<{ row: number }>`
  display: flex;
  flex-direction: row;
  ${media.desktop`
    display: grid;
    grid-template-rows: repeat(${(props) => props.row}, 1fr);
    grid-gap: 10px;
    min-width: 500px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  `}
`;

// TODO: add image container for grid and 1v3 twitter esque styled

interface Props {
  keyList: string[];
  currentTheme: ThemeTypes;
}

const Gallery = ({ keyList, currentTheme }: Props) => {
  const { isTablet } = useWindowSize();
  // const activeFilters = useSystemStore((state) => state.activeFilters);
  const filterType = useSystemStore((state) => state.filterType);
  const sortType = useSystemStore((state) => state.sortType);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [displayedList, updateDisplayedList] = useState([]);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    // hacky fix to disable wheel scrolling in the lightbox
    const stopWheelZoom = (e) => e.stopImmediatePropagation();
    window.addEventListener("wheel", stopWheelZoom, true);

    return () => window.removeEventListener("wheel", stopWheelZoom);
  }, []);

  useEffect(() => {
    // filter image data by parent page's keys first
    let filteredList = Object.values(imageData).filter((i) =>
      i.tags.map((t) => t.key).some((t) => keyList.includes(t))
    );
    console.log(filteredList, keyList);

    // filter next by filter options
    switch (filterType) {
      case "all":
        break;
      case "personal":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => keyList.includes("personal"))
        );
        break;
      case "friend":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => keyList.includes("friendart"))
        );
        break;
      case "reference":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => keyList.includes("reference"))
        );
        break;
      case "commission":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => keyList.includes("commission"))
        );
        break;
      default:
        break;
    }

    // sort filteredList by sort options
    switch (sortType) {
      case "popularity":
        filteredList = filteredList.sort((a, b) =>
          a.order > b.order ? 1 : -1
        );
        break;
      case "created":
        filteredList = filteredList.sort((a, b) => (a.date > b.date ? -1 : 1));
        break;
      case "headcount":
        const getHeadcount = (img) =>
          img.tags.filter((t) => t.type === TAG_TYPE.CHARACTER).length;
        filteredList = filteredList.sort((a, b) =>
          getHeadcount(a) > getHeadcount(b) ? 1 : -1
        );
        break;
      default:
        break;
    }

    // update preview list + remount lightbox by updating its key
    updateDisplayedList(filteredList);
    // setProductIndex(productIndex + 1);
  }, [filterType, sortType]);

  const onPreviewClick = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };

  const renderGalleryPreview = (img, index) => {
    // TODO: think about how to preview multi-img pics
    return (
      <div onClick={() => onPreviewClick(index + 1)} key={img.name}>
        {/* TODO: gatsby images */}
        <GalleryPreview src={"/" + img.filePaths[0]} />
      </div>
    );
  };

  const renderLightboxImage = (img) => {
    // TODO: add img grid styles here...
    // TODO: mayhaps layout tags...
    if (img.filePaths.length === 1) {
      return "/" + img.filePaths[0];
    } else if (img.filePaths.length === 2) {
      return (
        <div>
          <HorizontalImageContainer col={img.filePaths.length}>
            {img.filePaths.map((path) => (
              <img src={"/" + path} key={path} />
            ))}
          </HorizontalImageContainer>
        </div>
      );
    } else if (img.filePaths.length > 2) {
      return (
        <VerticalImageContainer row={img.filePaths.length}>
          {img.filePaths.map((path) => (
            <img src={"/" + path} key={path} />
          ))}
        </VerticalImageContainer>
      );
    } else {
      return <div />;
    }
  };

  const getCaptions = (img) => {
    return (
      <div>
        <p>{img.comment}</p>
      </div>
    );
  };

  const getAttributes = (img) => {
    return {
      alt: img.name,
    };
  };

  return (
    <div>
      <GalleryFilters currentTheme={currentTheme} filters={[]} />
      {displayedList.length > 0 && (
        <>
          <GalleryContainer>
            {displayedList.map((img, index) =>
              renderGalleryPreview(img, index)
            )}
          </GalleryContainer>
          <FsLightbox
            key={productIndex}
            toggler={lightboxController.toggler}
            sources={displayedList.map((img) => renderLightboxImage(img))}
            captions={displayedList.map((img) => getCaptions(img))}
            customAttributes={displayedList.map((img) => getAttributes(img))}
            thumbs={[null]}
            slide={lightboxController.slide}
            exitFullscreenOnClose
            showThumbsOnMount
            zoomIncrement={0.5}
          />
        </>
      )}
    </div>
  );
};

export default Gallery;
