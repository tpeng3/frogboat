import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const Link = styled(GatsbyLink)`
  display: block;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export default Link;
