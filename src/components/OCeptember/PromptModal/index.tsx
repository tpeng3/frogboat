import React, { useRef } from "react";

import { COLORS } from "@util/constants";
import { Variants } from "framer-motion";
import DarkUnderlay from "@components/DarkUnderlay";
import HelpOutlineIcon from '@images/SVG/helpoutline.svg';
import CloseIcon from '@images/SVG/close.svg';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  Title,
  ModalContainer,
  ModalItems,
  StyledTextField,
  StyledIconButton,
  StyledForm,
  PromptTooltip,
  ModalButton,
  ButtonsContainer,
  Footnote
} from "./styles";

interface PromptProps {
  label: string;
  description: string;
  custom: boolean;
}

interface Props {
  defaultPrompts: PromptProps[],
  promptList: PromptProps[];
  updatePromptList: Function;
  open: boolean;
  togglePrompt: Function;
}

export const PromptModal = (props: Props) => {
  const { defaultPrompts, promptList, updatePromptList, open, togglePrompt } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const titleVariants: Variants = {
    open: {
      opacity: 1,
      visibility: "visible",
      transition: {
        y: { stiffness: 1000, velocity: 0 },
      },
    },
    closed: {
      opacity: 0,
      visibility: "hidden",
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const isDefault = (prompt) => defaultPrompts.includes(prompt);

  const handleChange = (e, i) => {
    const value = e.target.value;
    const custom = {
      label: value,
      description: "",
      custom: true
    }
    const updatedPrompts = promptList.map((prompt, index) => { return index == i ? custom : prompt; });
    updatePromptList(updatedPrompts);
  };

  const handleClick = () => {
    togglePrompt(false);
  };

  const addPrompt = () => {
    const custom = {
      label: "",
      description: "",
      custom: true
    }
    updatePromptList([...promptList, custom]);
  }

  const deletePrompt = (i) => {
    const updatedPrompts = promptList.filter((_, index) => i !== index);
    updatePromptList([...updatedPrompts]);
  }

  const resetPrompts = () => {
    updatePromptList(defaultPrompts);
  }

  return (
    <>
      {open && (
        <DarkUnderlay handleClick={handleClick} showDark={0.2} />
      )}
      <ModalContainer
        initial={false}
        animate={open ? "open" : "closed"}
        variants={titleVariants}
        ref={containerRef}
      >
        <Title>Edit Prompts</Title>
        <ModalItems>
          <StyledForm noValidate autoComplete="off">
            {promptList.map((prompt, i) => (
              <div key={i}>
                <StyledTextField
                  size="small"
                  label={`${i < 10 ? "0" : ""}${i + 1}.`}
                  variant="outlined"
                  fullWidth
                  disabled={isDefault(prompt)}
                  value={prompt.label}
                  onChange={e => handleChange(e, i)}
                  inputProps={{
                    maxLength: 32
                  }}
                  InputProps={{
                    endAdornment: prompt.description && <InputAdornment position="end">
                      <PromptTooltip title={prompt.description}>
                        <StyledIconButton iconcolor={COLORS.GREY_300}>
                          <HelpOutlineIcon />
                        </StyledIconButton>
                      </PromptTooltip>
                    </InputAdornment>
                  }}
                />
                <StyledIconButton iconcolor={COLORS.GREY_800} onClick={() => deletePrompt(i)}>
                  <CloseIcon />
                </StyledIconButton>
              </div>
            ))}
            <button>
              <StyledIconButton iconcolor={COLORS.TEAL_500} onClick={() => addPrompt()}>
                <CloseIcon />
              </StyledIconButton>
              Add another prompt
            </button>
            <Footnote>
              Custom prompts are marked with a star background so that I'm not responsible for any text overflow bugs and boxes that say <i>poopoopeepee</i>. Also note there's a max length limit of 32 characters!
            </Footnote>
          </StyledForm>
          <ButtonsContainer>
            <ModalButton onClick={() => resetPrompts()}>
              Reset Prompts to Default
          </ModalButton>
            <ModalButton onClick={() => togglePrompt(false)}>
              Close
          </ModalButton>
          </ButtonsContainer>
        </ModalItems>
      </ModalContainer>
    </>
  );
};
