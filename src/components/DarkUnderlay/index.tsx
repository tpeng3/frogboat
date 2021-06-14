import * as React from "react";
import styled from "styled-components";
import { COLORS } from "@util/constants";

const Underlay = styled.div<{ visible: boolean }>`
  background-color: ${COLORS.black};
  position: fixed;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 250ms ease-in-out;
  ${(props) =>
    props.visible &&
    `
    pointer-events: auto;
    opacity: 0.8;
  `}
`;

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  visible: boolean;
}

const DarkUnderlay = (props) => {
  const { onClick, visible }: Props = props;
  return (
    <Underlay
      aria-label={`Close modal`}
      role={`button`}
      visible={visible}
      tabIndex={0}
      onClick={onClick}
    />
  );
};

export default DarkUnderlay;
