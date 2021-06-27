import React from "react";
import { useEffect, useState } from "react";
import useSystemStore from "@store/system";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import Link from "@components/Link";
import { hexToRGBA, media } from "@util/helpers";
import { COLORS } from "@util/constants";
import FilterIcon from "@images/SVG/filter.svg";
import CloseIcon from "@images/SVG/close.svg";
import { ThemeTypes } from "@components/Layout";
import content from "./content.yaml";

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 12px;
  width: 100%;
  background-color: ${hexToRGBA(COLORS.GREY_200, 0.2)};
  padding: 1.4rem 2rem 2rem 2rem;
`;

const GalleryFiltersContainer = styled.div<{ open: boolean }>`
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  /* height: ${(props) => (props.open ? "auto" : "40px")};
  overflow: hidden;
  transition: transform .3s cubic-bezier(0, .52, 0, 1); */
  /* opacity: 0; */
  overflow: hidden;
  /* transition: all .3s cubic-bezier(0, .52, 0, 1); */
  transition: all 1s ease-in;
  ${MenuContainer} {
    max-height: ${(props) => (props.open ? "500px" : "40px")};
  }
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
`;

const FilterOptions = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 2fr;
`;

const FilterContainer = styled.div`
  height: 6rem;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const RadioLabel = styled.label`
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

  const handleChange = (type: string) => {
    const filterList = filters ? [type, ...filters] : [type];
    updateActiveFilters(filterList);
    updateFilterType(type);
  };

  return (
    <GalleryFiltersContainer open={filterMenuOpened}>
      {!filterMenuOpened ? (
        <FilterButton
          currentTheme={currentTheme}
          onClick={() => toggleFilterMenu(true)}
        >
          <FilterIcon />
          Filters
        </FilterButton>
      ) : (
        <MenuContainer>
          {/* TODO: add a style that indicates default filters aren't on maybe? an "active" icon */}
          <StyledCloseIcon
            alt={"close icon"}
            onClick={() => toggleFilterMenu(false)}
          />
          <FilterOptions>
            <div>
              <FilterTitle>Show only</FilterTitle>
              <FilterContainer>
                {content.filter.map((item) => (
                  <RadioLabel key={item.value}>
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
                <RadioLabel key={item.value}>
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
    </GalleryFiltersContainer>
  );
};

export default GalleryFilters;
