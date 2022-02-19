import React from "react";
import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import useSystemStore from "@store/system";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS } from "@util/constants";
import FilterIcon from "@images/SVG/filter.svg";
import CloseIcon from "@images/SVG/close.svg";
import { ThemeTypes } from "@components/Layout";
import content from "./content.yaml";

const GalleryFiltersContainer = styled(motion.div)`
  margin-bottom: 1rem;
  position: relative;
  min-height: 40px;
  ${media.laptop`
  margin-bottom: 2rem;
  `}
`;

const FilterButton = styled.button<{ currentTheme: ThemeTypes }>`
  border: 1px solid ${(props) => props.theme[props.currentTheme].accentColor};
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border-radius: 24px;
  min-width: 5rem;
  color: ${(props) => props.theme[props.currentTheme].accentColor};
  padding: 0.2rem 1rem;
  right: 0;
  position: absolute;
  svg {
    height: 0.8rem;
    width: 1.2rem;
    margin-right: 5px;
    align-self: center;
    path {
      fill: ${(props) =>
        props.theme[props.currentTheme].accentColor} !important;
    }
  }
  :hover {
    background-color: ${COLORS.GREY_HOVER};
  }
`;

const MenuContainer = styled(motion.div)`
  position: relative;
  display: flex;
  border-radius: 12px;
  width: 100%;
  background-color: ${hexToRGBA(COLORS.GREY_200, 0.2)};
  overflow: hidden;
  padding: 1rem;
  ${media.laptop`
    padding: 1.4rem 2rem 2rem 2rem;
  `}
`;

const FilterTitle = styled.h5`
  margin: 0;
  padding-bottom: 5px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1.4rem;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  transition: 180ms transform ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
`;

const FilterOptions = styled(motion.div)`
  display: grid;
  width: 100%;
  gap: 24px;
  grid-template-columns: 1fr;
  flex-direction: column;
  ${media.laptop`
    grid-template-columns: 3fr 2fr;
  `}
`;

const FilterContainer = styled.div`
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.laptop`
    height: 6rem;
  `}
`;

const RadioLabel = styled(motion.label)`
  line-height: 1;
  display: flex;
  cursor: pointer;
  margin-top: 12px;
  max-width: fit-content;
`;

const RadioControl = styled.span`
  display: grid;
  place-items: center;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  border: 0.1em solid ${COLORS.white};
  margin-right: 0.6em;
`;

const RadioInput = styled.span`
  display: flex;
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  input + ${RadioControl}::before {
    content: "";
    width: 0.6em;
    height: 0.6em;
    box-shadow: inset 0.5em 0.5em currentColor;
    border-radius: 50%;
    transition: 180ms transform ease-in-out;
    transform: scale(0);
  }
  input:checked + ${RadioControl}::before {
    transform: scale(1);
  }
  &:focus + ${RadioControl} {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
  }
`;

interface Props {
  currentTheme: ThemeTypes;
  filters?: string[];
}

const GalleryFilters = ({ currentTheme, filters }: Props) => {
  const { isTablet } = useWindowSize();
  const updateActiveFilters = useSystemStore(
    (state) => state.updateActiveFilters
  );
  const updateFilterType = useSystemStore((state) => state.updateFilterType);
  const filterType = useSystemStore((state) => state.filterType);
  const updateSortType = useSystemStore((state) => state.updateSortType);
  const sortType = useSystemStore((state) => state.sortType);

  const [filterMenuOpened, toggleFilterMenu] = React.useState<boolean>(false);

  const menuContainerVariants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
      visibility: "visible",
      transition: {
        height: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      height: "10px",
      opacity: 0,
      transition: {
        height: { stiffness: 1000 },
      },
      transitionEnd: {
        visibility: "hidden",
      },
    },
  };

  const galleryFiltersVariants: Variants = {
    open: {
      transition: { delay: 0.5, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const radioLabelVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      visibility: "visible",
      transition: {
        ease: "easeIn",
        y: { stiffness: 1000, velocity: 0 },
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      visibility: "hidden",
      transition: {
        ease: "easeIn",
        y: { stiffness: 1000 },
      },
    },
  };

  const handleChange = (type: string) => {
    const filterList = filters ? [type, ...filters] : [type];
    updateActiveFilters(filterList);
    updateFilterType(type);
  };

  return (
    <GalleryFiltersContainer
      initial="closed"
      animate={filterMenuOpened ? "open" : "closed"}
      exit="closed"
    >
      {!filterMenuOpened && (
        <FilterButton
          currentTheme={currentTheme}
          onClick={() => toggleFilterMenu(true)}
        >
          <FilterIcon />
          Filters
        </FilterButton>
      )}
      <AnimatePresence>
        {filterMenuOpened && (
          <MenuContainer variants={menuContainerVariants}>
            {/* TODO: add a style that indicates default filters aren't on maybe? an "active" icon */}
            <StyledCloseIcon
              alt={"close icon"}
              onClick={() => toggleFilterMenu(false)}
            />
            <FilterOptions variants={galleryFiltersVariants}>
              <div>
                <FilterTitle>Show only</FilterTitle>
                <FilterContainer>
                  {content.filter.map((item) => (
                    <RadioLabel key={item.value} variants={radioLabelVariants}>
                      <RadioInput>
                        <input
                          type="radio"
                          name="filter"
                          value={item.value}
                          onChange={() => handleChange(item.value)}
                          checked={filterType === item.value}
                        />
                        <RadioControl />
                      </RadioInput>
                      <span>{item.label}</span>
                    </RadioLabel>
                  ))}
                </FilterContainer>
              </div>
              <div>
                <FilterTitle>Sort by</FilterTitle>
                {/* TODO: add reverse button icon */}
                {content.sort.map((item) => (
                  <RadioLabel key={item.value} variants={radioLabelVariants}>
                    <RadioInput>
                      <input
                        type="radio"
                        name="sort"
                        value={item.value}
                        onChange={() => updateSortType(item.value)}
                        checked={sortType === item.value}
                      />
                      <RadioControl />
                    </RadioInput>
                    <span>{item.label}</span>
                  </RadioLabel>
                ))}
              </div>
            </FilterOptions>
          </MenuContainer>
        )}
      </AnimatePresence>
    </GalleryFiltersContainer>
  );
};

export default GalleryFilters;
