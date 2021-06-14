import React, { Component } from "react";
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
  &:not(:last-child) {
    margin-right: 12px;
    img {
      margin-right: 6px;
    }
  }
`;

const StyledIcon = styled.img`
  height: 1.6em;
  width: 1.6em;
  display: initial;
  vertical-align: sub;
  &:hover {
    path: ;
  }
`;

const SocialLinks = () => {
  return (
    <LinkContainer>
      <StyledLink href="https://twitter.com/shuttlefrog">
        <StyledIcon src={TwitterIcon} alt={"twitter icon"} />
      </StyledLink>
      <StyledLink href="https://shuttlefrog.itch.io/">
        <StyledIcon src={ItchIcon} alt={"itch icon"} />
      </StyledLink>
      <StyledLink href="https://github.com/tpeng3">
        <StyledIcon src={GithubIcon} alt={"github icon"} />
      </StyledLink>
      <StyledLink href="mailto:hanmorinn@gmail.com">
        <StyledIcon src={MailIcon} alt={"mail icon"} />
      </StyledLink>
    </LinkContainer>
  );
};

export default SocialLinks;
