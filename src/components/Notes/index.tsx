import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "@components/Link";
import { font } from "@util/helpers";

const TriviaContainer = styled(motion.div)`
  h5 {
    ${font("1.8rem", "2rem", "400", "1.75px")}
    margin: 1.5rem 0;
  }
  li {
    ${font("1rem", "2rem", "400", "normal")}
    &:last-child {
      font-style: italic;
    }
  }
`;

interface Props {
  otherData: any;
}

export default function Notes(props: Props) {
  const { otherData } = props;

  return (
    <div>
      <TriviaContainer>
        <h5>Trivia</h5>
        <ul>
        {otherData.map((fact, i) =>
          i === otherData.length - 1 ? (
            <li key={i} className="accent">{fact}</li>
          ) : (
            <li key={i}>{fact}</li>
          )
        )}
        </ul>
      </TriviaContainer>
    </div>
  );
}
