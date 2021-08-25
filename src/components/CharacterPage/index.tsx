import React from "react";
import styled from "styled-components";
import useWindowSize from "@util/screen";
import { media } from "@util/helpers";
import { SlideFromRight } from "@components/StyledContainers";
import Secret, { REDACTED_STR } from "./secret";

const Name = styled.h1`
  margin: 1rem 4rem;
`;

const AboutContainer = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  p {
    white-space: pre-line;
    text-align: left;
    ${media.laptop`
      margin-right: 2rem;
    `}
  }
  ${media.laptop`
    flex-direction: row;
    margin-bottom: 2rem;
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
  title: string;
  quote: string;
  description: string;
  mainImg?: string;
}

const CharacterAbout = ({
  title,
  quote,
  description,
  mainImg,
}: CharacterProps) => {
  const { isTablet } = useWindowSize();

  return (
    <SlideFromRight>
      <Name>{title}</Name>
      <hr />
      {isTablet ? (
        <AboutContainer>
          <AboutDescription>
            {mainImg && <MainImage src={mainImg} alt={`${title} image`} />}
            <Quote className="accent">{quote}</Quote>
          </AboutDescription>
          <p>{description}</p>
          {description === REDACTED_STR && <Secret format={title} />}
        </AboutContainer>
      ) : (
        <AboutContainer>
          <AboutDescription>
            <Quote className="accent">{quote}</Quote>
            <p>{!description.includes(REDACTED_STR) && description}</p>
            {description.includes(REDACTED_STR) && <Secret format={title} />}
          </AboutDescription>
          {mainImg && <MainImage src={mainImg} alt={`${title} image`} />}
        </AboutContainer>
      )}
    </SlideFromRight>
  );
};

export default CharacterAbout;
