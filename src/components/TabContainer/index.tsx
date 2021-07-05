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
import { media } from "@util/helpers";
import { COLORS } from "@util/constants";
import { ThemeTypes } from "@components/Layout";
import Relationships from "@components/Relationships";
import Gallery from "@components/Gallery";

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
        : COLORS.GREY_HOVER};
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
  imageData?: any; // TODO: update type later
}

const TabContainer = ({ keyName, tabs, imageData }: CharacterProps) => {
  const { isTablet } = useWindowSize();
  const currentTheme = useSystemStore((state) => state.currentTheme);
  const [selectedTab, setSelectedTab] = useState<tabTypes>(
    tabTypes.RELATIONSHIPS
  );
  const [direction, setDirection] = useState<number>(0);

  const handleTabChange = (tab: tabTypes, i: number) => {
    setDirection(i > selectedTab ? 1 : -1);
    setSelectedTab(tab);
  };

  const getCurrentTab = () => {
    switch (selectedTab) {
      case tabTypes.RELATIONSHIPS:
        return <Relationships keyName={keyName} />;
      case tabTypes.GALLERY:
        return <Gallery imageData={imageData} />;
      case tabTypes.NOTES:
        return `notes`;
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
