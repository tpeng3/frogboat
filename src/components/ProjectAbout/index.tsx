import React from "react";
import { SlideFromRight } from "@components/StyledContainers";
import styled from "styled-components";
import { media } from "@util/helpers";

const Title = styled.h1`
  text-align: center;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 2rem;
    white-space: pre-line;
    text-align: left;
  }
  margin: 2rem 0rem;
  ${media.desktop`
    margin: 2rem 4rem;
  `}
`;

const Genre = styled.span`
  display: flex;
  justify-content: flex-end;
`;

interface CharacterProps {
  key: string;
  title: string;
  genre: string;
  description: string;
}

const CharacterAbout = ({ title, genre, description }: CharacterProps) => {
  return (
    <SlideFromRight>
      <Title>{title}</Title>
      <Genre>
        <span className="accent">Genre:</span>&nbsp;{genre}
      </Genre>
      <hr />
      <AboutContainer>
        <p>{description}</p>
      </AboutContainer>
    </SlideFromRight>
  );
};

export default CharacterAbout;
