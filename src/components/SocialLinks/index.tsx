import React from "react";
import styled from "styled-components";
import TwitterIcon from "@images/SVG/twitter.svg";
import ItchIcon from "@images/SVG/itch.svg";
import GithubIcon from "@images/SVG/github.svg";
import MailIcon from "@images/SVG/mail.svg";

const LinkContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;

const StyledLink = styled.a`
  transition: transform 450ms; // on unhover
  &:hover {
    transition: transform 125ms; // on hover
    transform: translateY(-0.6em);
  }
  &:not(:last-child) {
    margin-right: 12px;
    svg {
      margin-right: 6px;
    }
  }
  svg {
    height: 1.6em;
    width: 1.6em;
    display: initial;
    vertical-align: sub;
  }
`;

const SocialLinks = () => {
  return (
    <LinkContainer>
      <StyledLink
        href="https://twitter.com/shuttlefrog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon alt={"twitter icon"} />
      </StyledLink>
      <StyledLink
        href="https://shuttlefrog.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ItchIcon alt={"itch icon"} />
      </StyledLink>
      <StyledLink
        href="https://github.com/tpeng3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon alt={"github icon"} />
      </StyledLink>
      <StyledLink
        href="mailto:hanmorinn@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailIcon alt={"mail icon"} />
      </StyledLink>
    </LinkContainer>
  );
};

export default SocialLinks;
