import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
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
    <div>
      <Title>{title}</Title>
      <Genre>
        <span className="accent">Genre:</span>&nbsp;{genre}
      </Genre>
      <hr />
      <AboutContainer>
        <p>{description}</p>
      </AboutContainer>
    </div>
  );
};

export default CharacterAbout;
