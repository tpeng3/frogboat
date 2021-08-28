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
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 500px;
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
  width: 100%;
  .MuiInputBase-root.Mui-disabled {
    background-color: ${hexToRGBA('#635353', .10)};
    color: #535353;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #6bb4aa;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #535353;
  }
  .MuiOutlinedInput-root:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline {
    background-color: ${hexToRGBA('#6bb4aa', .15)};
  }
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

export const AddButton = styled.div`
  width: 100%;
  text-align: center;
  color: #535353;
  border: 1px solid #535353;
  border-radius: 5px;
  padding: 8px;
  min-width: 140px;
  transition: all 200ms ease;
  svg {
    width: 12px;
    margin-right: 8px;
    transform: rotate(45deg);
    path {
      fill: #535353 !important;
    }
  }
  :hover {
    cursor: pointer;
    background-color: ${hexToRGBA('#6bb4aa', .15)};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  padding-right: 10px;
  ${StyledTextField} {
    margin-bottom: 10px;
    margin-right: 10px;
  }
  max-height: 50vh;
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
    backgroundColor: '#fffae7',
    borderRadius: '5px',
    color: '#535353',
    maxWidth: 220,
    padding: '12px',
    fontSize: 12,
    boxShadow: '0 1px 2px 0 #53535333'
  },
})(Tooltip);

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const ModalButton = styled.button`
  color: #535353;
  background-color: transparent;
  border-radius: 5px;
  padding: 6px;
  min-width: 80px;
  transition: all 200ms ease;
  border: none;
  text-align: center;
  ${font("1rem", "1rem", "500", "1.25px")};
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