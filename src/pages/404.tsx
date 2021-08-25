import React from "react";
import { SEO } from "../components/seo";
import styled from "styled-components";
import ApologyIcon from "src/images/404hotato.png";

const PageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

// turn into an image query later once you draw seina and sev
const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  align-self: center;
  margin-bottom: 1rem;
`;

const NotFoundPage: React.FC = () => (
  <PageContainer>
    <SEO title="404: Not found" />
    <ImageContainer>
      <img src={ApologyIcon} alt="404 icon" />
    </ImageContainer>
    <h1>404 Not Found</h1>
    <span>
      I'm still in the process of updating the site, so if you came here through
      a link, please come back later!
    </span>
  </PageContainer>
);

export default NotFoundPage;
