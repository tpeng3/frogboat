import React from "react";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import { media } from "@util/helpers";

const Name = styled.h1`
  margin: 1rem 4rem;
`;

const AboutContainer = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 2rem;
    white-space: pre-line;
    text-align: left;
  }
  ${media.laptop`
    flex-direction: row;
  `}
`;

const AboutDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  ${media.laptop`
    flex-grow: 1;
    flex-direction: column;
    margin-bottom: 0rem;
  `}
`;

const Quote = styled.span`
  font-style: italic;
  text-align: center;
  align-self: center;
  margin-left: 2rem;
  ${media.laptop`
    width: clamp(0px, 32vw, 380px);
    margin-left: 0rem;
    margin-bottom: 2rem;
  `}
`;

const MainImage = styled.img`
  width: 32vw;
  max-height: 480px;
  background-color: #fff;
  border-radius: 1vw;
  object-fit: cover;
  ${media.desktop`
    width: 320px;
    height: 480px;
  `}
`;

interface CharacterProps {
  key: string;
  name: string;
  quote: string;
  description: string;
  mainImg?: string;
}

const CharacterAbout = ({
  key,
  name,
  quote,
  description,
  mainImg,
}: CharacterProps) => {
  const { isTablet } = useWindowSize();

  return (
    <div>
      <Name>{name}</Name>
      <hr />
      {isTablet ? (
        <AboutContainer>
          <AboutDescription>
            {mainImg && <MainImage src={mainImg} alt={`${key} image`} />}
            <Quote>{quote}</Quote>
          </AboutDescription>
          <p>{description}</p>
        </AboutContainer>
      ) : (
        <AboutContainer>
          <AboutDescription>
            <Quote>{quote}</Quote>
            <p>{description}</p>
          </AboutDescription>
          {mainImg && <MainImage src={mainImg} alt={`${key} image`} />}
        </AboutContainer>
      )}
    </div>
  );
};

export default CharacterAbout;
