import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { COLORS } from "@util/constants";
import { hexToRGBA, media, elevation, font } from "@util/helpers";
import { motion } from "framer-motion";
import TextField from "@material-ui/core/TextField";
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from "@material-ui/core";

const MODAL_ZINDEX = 99;

export const Title = styled(motion.h2)`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: ${COLORS.GREY_800};
  ${font("1.2rem", "1.2rem", "500", ".4rem")};
  padding: 2rem 2rem 0rem 2rem;
`;

export const ModalContainer = styled(motion.nav)`
  background-color: ${COLORS.white};
  border-radius: 10px;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 500px;
  max-height: 500px;
  z-index: ${MODAL_ZINDEX};
`;

export const ModalItems = styled(motion.div)`
  position: relative;
  z-index: ${MODAL_ZINDEX + 1};
  margin: 24px;
  div {
    margin-bottom: 6px;
  }
`;

export const StyledTextField = styled(TextField)`
  max-width: 80%;
  ${media.desktop`
    max-width: 85%;
  `}
`;

export const StyledIconButton = styled(IconButton) <{ iconcolor: string }>`
  && {
    margin-left: 12px;
    margin-top: 6px;
    padding: 8px;
    svg {
      width: 1rem;
    }
    path {
      fill: ${props => props.iconcolor} !important;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: scroll;
  padding: 10px 0;
  padding-bottom: 50px;
  ${StyledTextField} {
    margin-bottom: 10px;
    margin-right: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const PromptTooltip = withStyles({
  tooltip: {
    backgroundColor: '#f5f5f9',
    borderRadius: '5px',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: 12,
    border: '1px solid #dadde9',
  },
})(Tooltip);

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const ModalButton = styled.button`
  background-color: ${hexToRGBA('#635353', .10)};
  color: #535353;
  border: 1px solid #e7e4d8;
  border-radius: 5px;
  padding: 8px;
  min-width: 140px;
  transition: all 200ms ease;
  svg {
    width: 10px;
    margin-left: 3px;
    fill: #635353;
  }
  :hover {
    cursor: pointer;
    background-color: ${hexToRGBA('#e7e4d8', .50)};
  }
`;

export const Footnote = styled.span`
  color: #535353;
  font-size: 13px;
`;