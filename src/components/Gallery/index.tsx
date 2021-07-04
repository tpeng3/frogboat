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
// import imageData from "src/data/imageData.json";
import "./lightbox.scss";
import {
  StaticImage,
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import MultiImage from "@images/SVG/multi_image.svg";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

const PreviewContainer = styled.div`
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

const MultiTag = styled.div`
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
  imageData?: any; // TODO: fix later
}

const Gallery = (props: Props) => {
  const { imageData } = props;
  const { isTablet } = useWindowSize();
  // const activeFilters = useSystemStore((state) => state.activeFilters);
  const filterType = useSystemStore((state) => state.filterType);
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const sortType = useSystemStore((state) => state.sortType);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [displayedList, updateDisplayedList] = useState([]);
  const [productIndex, setProductIndex] = useState(0);

  const imageQuery = useStaticQuery(graphql`
    query ImagesQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "uploads" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
              resize(height: 160, width: 160, fit: COVER, cropFocus: ENTROPY) {
                src
                aspectRatio
                originalName
              }
              blur: resize(
                height: 160
                width: 160
                fit: COVER
                cropFocus: ENTROPY
                base64: true
              ) {
                base64: src
              }
            }
          }
        }
      }
    }
  `);

  // hacky fix to disable wheel scrolling in the lightbox
  useEffect(() => {
    const stopWheelZoom = (e) => e.stopImmediatePropagation();
    window.addEventListener("wheel", stopWheelZoom, true);

    return () => window.removeEventListener("wheel", stopWheelZoom);
  }, []);

  // update imageData based on filter menu
  useEffect(() => {
    let filteredList = imageData;

    // filter next by filter options
    switch (filterType) {
      case "all":
        break;
      case "personal":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.includes("personal"))
        );
        break;
      case "friend":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.includes("friendart"))
        );
        break;
      case "reference":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.includes("reference"))
        );
        break;
      case "commission":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.includes("commission"))
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

  const getFluidImage = (img, preview = false) => {
    const base = imageQuery.allFile.edges.find(
      (i) => i.node.base === img.fileName
    );
    if (preview) {
      // hack to address gatsby transformer sharp only returning base64 as the src
      return {
        ...base.node.childImageSharp.resize,
        ...base.node.childImageSharp.blur,
        srcSet: `${base.node.childImageSharp.resize.src} 32w`,
        sizes: "(max-width: 32px) 100vw, 32px",
      };
    } else {
      return base.node.childImageSharp.fluid;
    }
  };

  const renderGalleryPreview = (img, index) => {
    // TODO: think about how to preview multi-img pics
    return (
      <PreviewContainer
        onClick={() => onPreviewClick(index + 1)}
        key={img.name}
      >
        <Img
          className={"gallery-preview"}
          fluid={getFluidImage(img, true)}
          alt={img.name}
        />
        {img.filePaths.length > 1 && (
          <MultiTag>
            <span>
              +{img.filePaths.length - 1} <MultiImage />
            </span>
          </MultiTag>
        )}
      </PreviewContainer>
    );
  };

  const renderLightboxImage = (img) => {
    // TODO: add img grid styles here...
    // TODO: mayhaps layout tags...
    if (img.filePaths.length === 1) {
      return (
        <img
          src={getFluidImage(img).src}
          srcSet={getFluidImage(img).srcSet}
          alt={img.fileName}
          key={img.filePaths[0]}
        />
      );
    } else if (img.filePaths.length === 2) {
      return (
        <div>
          <HorizontalImageContainer col={img.filePaths.length}>
            {img.filePaths.map((path, i) => (
              <img
                src={getFluidImage(img).src}
                alt={`${img.fileName}-${i}`}
                key={path}
              />
            ))}
          </HorizontalImageContainer>
        </div>
      );
    } else if (img.filePaths.length > 2) {
      return (
        <VerticalImageContainer row={img.filePaths.length}>
          {img.filePaths.map((path, i) => (
            <img
              src={"../images/" + path}
              alt={`${img.fileName}-${i}`}
              key={path}
            />
          ))}
        </VerticalImageContainer>
      );
    } else {
      return <div />;
    }
  };

  const getCaptions = (img) => {
    // TODO: style this, or figure out where to move the captions (maybe as part of the pic)
    return (
      <div>
        <p>{img.comment}</p>
      </div>
    );
  };

  const getAttributes = (img) => {
    return {
      alt: img.fileName,
    };
  };

  // TODO: add styling to thumbnails
  const getThumbnails = (img) => {
    return getFluidImage(img, true).src;
  };

  return (
    <div>
      <GalleryFilters currentTheme={currentTheme} filters={[]} />
      {displayedList.length > 0 && (
        <>
          {/* TODO: probably add a max height with overflow */}
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
            thumbs={displayedList.map((img) => getThumbnails(img))}
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
