import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// TODO: update toggle colors, use constants
const Switch = styled.div<{ toggled: boolean }>`
  width: 4rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  ${(props) => props.toggled && "justify-content: flex-end;"}
`;

const Handle = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  margin: .25rem;
  border-radius: 1.5rem;
  background-color: white;
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

interface Props {
  value: boolean;
  toggleFunction: Function;
}

export default function Toggle(props: Props) {
  const {value, toggleFunction} = props;

  return (
    <Switch toggled={value} onClick={() => toggleFunction(!value)}>
      <Handle layout transition={spring} />
    </Switch>
  );
}
