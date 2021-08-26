import React from "react";
import styled from "styled-components";
import { COLORS } from "@util/constants";

const Underlay = styled.div<{ showDark: number }>`
  background-color: ${COLORS.black};
  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  z-index: 90;
  opacity: ${(props) => props.showDark ? props.showDark : 0};
`;

interface Props {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  showDark: boolean;
}

const DarkUnderlay = (props) => {
  const { handleClick, showDark }: Props = props;
  return (
    <Underlay
      aria-label={`Close modal`}
      role={`button`}
      showDark={showDark}
      tabIndex={98}
      onClick={handleClick}
    />
  );
};

export default DarkUnderlay;
