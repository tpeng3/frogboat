import React, { useRef } from "react";
import { useEffect, useState } from "react";
import useWindowSize from "@util/screen";
import GalleryFilters from "@components/GalleryFilters";
import { ThemeTypes } from "@components/Layout";
import Link from "@components/Link";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS, TAG_TYPE, GET_TAG_LINK } from "@util/constants";
import { imageDataProps } from "@util/types";
import FsLightbox from "fslightbox-react";
import useSystemStore from "@store/system";
import "./lightbox.scss";
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import MultiImage from "@images/SVG/multi_image.svg";
import {
  GalleryContainer,
  PreviewContainer,
  MultiTag,
  HorizontalImageContainer,
  VerticalImageContainer,
  CaptionBox,
  SingleImageContainer,
  TagList,
  TagSpan,
} from "./styles";
// TODO: add image container for grid and 1v3 twitter esque styled
interface Props {
  imageData: imageDataProps[];
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
  const [displayedList, updateDisplayedList] = useState<imageDataProps[]>([]);
  const [productIndex, setProductIndex] = useState(0);
  const lightboxRef = useRef<any>(null);

  const imageQuery = {};
  // const imageQuery = useStaticQuery(graphql`
  //   query ImagesQuery {
  //     allFile(
  //       filter: {
  //         extension: { regex: "/(jpg)|(png)|(jpeg)/" }
  //         relativeDirectory: { regex: "/uploads/" }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           base
  //           relativePath
  //           childImageSharp {
  //             full: gatsbyImageData(
  //               layout: CONSTRAINED
  //               placeholder: NONE
  //               transformOptions: { fit: CONTAIN }
  //             )
  //             gatsbyImageData(
  //               layout: CONSTRAINED
  //               width: 160
  //               height: 160
  //               transformOptions: { cropFocus: ENTROPY }
  //             )
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // hacky fix to disable wheel scrolling in the lightbox
  useEffect(() => {
    const stopWheelZoom = (e) => e.stopImmediatePropagation();
    window.addEventListener("wheel", stopWheelZoom, true);
    return () => {
      window.removeEventListener("wheel", stopWheelZoom);
      // make sure lightbox styles reset on unmount
      document.children[0].classList.remove("fslightbox-open");
      document.body.style.marginRight = "0";
    };
  }, []);

  // update imageData based on filter menu
  useEffect(() => {
    let filteredList = imageData;
    console.log(filteredList);

    // filter next by filter options
    switch (filterType) {
      case "all":
        break;
      case "personal":
        filteredList = filteredList.filter((i) =>
          i.tags.some(
            (t) => !["externalart", "friendart", "commission"].includes(t.key)
          )
        );
        break;
      case "friend":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.key === "friendart")
        );
        break;
      case "reference":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.key === "reference")
        );
        break;
      case "commission":
        filteredList = filteredList.filter((i) =>
          i.tags.some((t) => t.key === "commission")
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
    setProductIndex(productIndex + 1);
  }, [filterType, sortType]);

  const hasTag = (img, tagKey) => {
    return img.tags.some((t) => t.key === tagKey);
  };

  const onPreviewClick = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };

  // const getFluidImage = (path, preview = false) => {
  //   const base = imageQuery.allFile.edges.find(
  //     (i) => i.node.relativePath === path
  //   );
  //   if (base) {
  //     if (preview) {
  //       return base.node.childImageSharp.gatsbyImageData;
  //     } else {
  //       return base.node.childImageSharp.full;
  //     }
  //   } else {
  //     console.log("couldn't find image", path);
  //   }
  // };

  const renderGalleryPreview = (img, index) => {
    return (
      <PreviewContainer onClick={() => onPreviewClick(index + 1)} key={img.key}>
        {/* <GatsbyImage
          className={"gallery-preview"}
          image={getFluidImage(img.filePaths[0], true)}
          alt={img.name}
        /> */}
        <img 
        className={"gallery-preview"}
        src={`/${img.filePaths[0]}`}
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
    // TODO: mayhaps layout tags...
    if (img.filePaths.length > 2 || hasTag(img, "comic")) {
      return (
        <VerticalImageContainer row={img.filePaths.length}>
          {img.filePaths.map((path, i) => (
            <img
              src={`/${img.filePaths[i]}`}
              alt={img.name}
              key={path}
            />
          ))}
        </VerticalImageContainer>
      );
    } else if (img.filePaths.length === 1) {
      return (
        <SingleImageContainer>
          <img
            src={`/${img.filePaths[0]}`}
            alt={img.name}
            className={"full-image"}
          />
        </SingleImageContainer>
      );
    } else if (img.filePaths.length === 2) {
      return (
        <div>
          <HorizontalImageContainer col={img.filePaths.length}>
            {img.filePaths.map((path, i) => (
              <img
                src={`/${img.filePaths[i]}`}
                alt={img.name}
                key={path}
              />
            ))}
          </HorizontalImageContainer>
        </div>
      );
    } else {
      return <div />;
    }
  };

  const getCaptions = (img) => {
    const d = new Date(img.date);
    const addLeadingZero = (value) => ("0" + value).slice(-2);
    const prettyDate = `${addLeadingZero(d.getMonth() + 1)}.${addLeadingZero(
      d.getDate()
    )}.${d.getFullYear()}`;

    // I'm not smart enough to figure out a cleaner regex and solution
    const comment: any = [];
    const matches = img.comment.split(/(\[([^\[]+)\])(\(.*\))/gm);
    if (matches) {
      for (let i = 0; i < matches?.length; i++) {
        if (i + 2 <= matches.length) {
          const text = /\[([^\[]+)\]\((.*)\)/.exec(matches[i] + matches[i + 2]);
          if (text && text.length > 1) {
            if (text[2].startsWith("/")) {
              comment.push(<Link to={text[2]}>{text[1]}</Link>);
            } else {
              comment.push(
                <a href={text[2]} target="_blank" rel="noopener noreferrer">
                  {text[1]}
                </a>
              );
            }
            i += 2;
          } else {
            comment.push(matches[i]);
          }
        } else {
          comment.push(matches[i]);
        }
      }
    }

    return (
      <CaptionBox>
        <h2>{prettyDate}</h2>
        <p>{comment}</p>
        <TagList>
          {img.tags.map((t) => (
            // <Link to={GET_TAG_LINK(t)}>
            <a>
              <TagSpan key={t.name} tagColor={t.color}>
                {t.name}
              </TagSpan>
            </a>
          ))}
        </TagList>
      </CaptionBox>
    );
  };

  return (
    <div>
      <GalleryFilters currentTheme={currentTheme} filters={[]} />
      {displayedList.length > 0 ? (
        <>
          <GalleryContainer>
            {displayedList.map((img, index) =>
              renderGalleryPreview(img, index)
            )}
          </GalleryContainer>
          <FsLightbox
            key={productIndex}
            ref={lightboxRef}
            toggler={lightboxController.toggler}
            sources={displayedList.map((img) => renderLightboxImage(img))}
            thumbs={displayedList.map(
              (img) => `/${img.filePaths[0]}`
            )}
            captions={displayedList.map((img) => getCaptions(img))}
            slide={lightboxController.slide}
            slideChangeAnimation="fade"
            exitFullscreenOnClose
            zoomIncrement={0.5}
          />
        </>
      ) : (
        <h5>No images found under this filter.</h5>
      )}
    </div>
  );
};

export default Gallery;
