import React from "react";
import { useState } from "react";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import { media } from "@util/helpers";
import { COLORS } from "@util/constants";
import Relationships from "@components/Testimony";
import Gallery from "@components/Gallery";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 4rem 0rem 4rem;
  justify-content: center;
  ${media.laptop`
    justify-content: flex-start;
  `}
`;

const TabButton = styled.button<{ currentTheme: string; selected: boolean }>`
  border: 1px solid ${(props) => props.theme[props.currentTheme].secondaryColor};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? props.theme[props.currentTheme].secondaryColor
      : "transparent"};
  display: flex;
  justify-content: center;
  border-radius: 6px 6px 0 0;
  min-width: 8rem;
  color: ${COLORS.white};
  padding: 0.2rem 1rem;
  :hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme[props.currentTheme].primaryColor
        : COLORS.GREY_HOVER};
  }
`;

const Container = styled.div<{ currentTheme: string }>`
  border: 1px solid
    ${(props) =>
      props.currentTheme
        ? props.theme[props.currentTheme].secondaryColor
        : props.theme.default.secondaryColor};
  border-radius: 12px;
  color: ${COLORS.white};
  padding: 4rem 1rem;
  ${media.laptop`
    padding: 2rem 4rem;
  `}
`;

export enum tabTypes {
  RELATIONSHIPS = "Relationships",
  GALLERY = "Gallery",
  NOTES = "Notes",
}

interface CharacterProps {
  currentTheme: string;
  keyName: string;
  tabs: tabTypes[];
}

const TabContainer = ({ currentTheme, keyName, tabs }: CharacterProps) => {
  const { isTablet } = useWindowSize();
  const [selectedTab, setSelectedTab] = useState<tabTypes>(
    tabTypes.RELATIONSHIPS
  );

  const getCurrentTab = () => {
    switch (selectedTab) {
      case tabTypes.RELATIONSHIPS:
        return <Relationships keyName={keyName} />;
      case tabTypes.GALLERY:
        return <Gallery keyName={keyName} />;
      case tabTypes.NOTES:
        return `notes`;
    }
  };

  return (
    <div>
      <ButtonContainer>
        {tabs.map((tab) => (
          <TabButton
            onClick={() => setSelectedTab(tab)}
            key={tab}
            currentTheme={currentTheme}
            selected={selectedTab === tab}
          >
            {tab}
          </TabButton>
        ))}
      </ButtonContainer>
      <Container currentTheme={currentTheme}>{getCurrentTab()}</Container>
    </div>
  );
};

export default TabContainer;
