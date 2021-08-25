import React from "react";
import { useState } from "react";
import styled from "styled-components";
import useSystemStore from "@store/system";
import {
  motion,
  AnimatePresence,
  Variants,
  AnimateSharedLayout,
} from "framer-motion";
import useWindowSize from "@util/screen";
import { media, hexToRGBA } from "@util/helpers";
import { COLORS } from "@util/constants";
import { ThemeTypes } from "@components/Layout";
import Relationships from "@components/Relationships";
import Gallery from "@components/Gallery";
import Notes from "@components/Notes";
import { imageDataProps, RelationshipDataProps } from "@util/types";

const ButtonContainer = styled(motion.div)`
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
  text-transform: capitalize;
  :hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme[props.currentTheme].primaryColor
        : hexToRGBA(COLORS.GREY_HOVER, 0.7)};
  }
`;

const Container = styled(motion.div)<{ currentTheme: string }>`
  border: 1px solid
    ${(props) =>
      props.currentTheme
        ? props.theme[props.currentTheme].secondaryColor
        : props.theme.default.secondaryColor};
  border-radius: 12px;
  color: ${COLORS.white};
  padding: 4rem 1rem;
  min-height: 500px;
  ${media.laptop`
    padding: 2rem 4rem;
  `}
`;

export enum tabTypes {
  RELATIONSHIPS,
  GALLERY,
  NOTES,
}

interface CharacterProps {
  keyName: string;
  tabs: tabTypes[];
  relationshipData?: RelationshipDataProps; // if relationship
  imageData?: imageDataProps[]; // if gallery
  otherData?: any; // if notes
}

const TabContainer = (props: CharacterProps) => {
  const { keyName, tabs, imageData, relationshipData, otherData } = props;
  const { isTablet } = useWindowSize();
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const [selectedTab, setSelectedTab] = useState<tabTypes>(tabTypes.GALLERY);
  const [direction, setDirection] = useState<number>(0);

  const handleTabChange = (tab: tabTypes, i: number) => {
    setDirection(i > selectedTab ? 1 : -1);
    setSelectedTab(tab);
  };

  const getCurrentTab = () => {
    switch (selectedTab) {
      case tabTypes.RELATIONSHIPS:
        return (
          relationshipData && (
            <Relationships
              keyName={keyName}
              relationshipData={relationshipData}
            />
          )
        );
      case tabTypes.GALLERY:
        return imageData && <Gallery imageData={imageData} />;
      case tabTypes.NOTES:
        return otherData && <Notes otherData={otherData} />;
    }
  };

  return (
    <div>
      <ButtonContainer>
        {tabs.map((tab, i) => (
          <TabButton
            onClick={() => handleTabChange(tab, i)}
            key={tab}
            currentTheme={currentTheme}
            selected={selectedTab === tab}
          >
            {tabTypes[tab].toLowerCase()}
          </TabButton>
        ))}
      </ButtonContainer>
      <AnimateSharedLayout>
        <Container currentTheme={currentTheme} layout>
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
          >
            {getCurrentTab()}
          </motion.div>
        </Container>
      </AnimateSharedLayout>
    </div>
  );
};

export default TabContainer;
