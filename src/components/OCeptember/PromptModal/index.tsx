import React, { useRef } from "react";

import { COLORS } from "@util/constants";
import { Variants, AnimatePresence } from "framer-motion";
import DarkUnderlay from "@components/DarkUnderlay";
import HelpOutlineIcon from "@images/SVG/helpoutline.svg";
import CloseIcon from "@images/SVG/close.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Title,
  ModalContainer,
  ModalItems,
  StyledTextField,
  StyledIconButton,
  StyledForm,
  PromptTooltip,
  ModalButton,
  AddButton,
  ButtonsContainer,
  Footnote,
} from "./styles";

interface PromptProps {
  label: string;
  description: string;
  custom: boolean;
}

interface Props {
  defaultPrompts: PromptProps[];
  promptList: PromptProps[];
  updatePromptList: Function;
  open: boolean;
  togglePrompt: Function;
}

export const PromptModal = (props: Props) => {
  const { defaultPrompts, promptList, updatePromptList, open, togglePrompt } =
    props;

  const modalVariants: Variants = {
    open: {
      opacity: 1,
      scale: [0.9, 1],
      visibility: "visible",
      transition: {
        duration: 0.2,
        type: "spring",
        bounce: 0.25,
      },
    },
    closed: {
      opacity: 0,
      scale: 1,
      transitionEnd: {
        visibility: "hidden",
      },
    },
  };

  const isDefault = (prompt) => defaultPrompts.includes(prompt);

  const handleChange = (e, i) => {
    const value = e.target.value;
    const custom = {
      label: value,
      description: "",
      custom: true,
    };
    const updatedPrompts = promptList.map((prompt, index) => {
      return index == i ? custom : prompt;
    });
    updatePromptList(updatedPrompts);
  };

  const handleClick = () => {
    togglePrompt(false);
  };

  const addPrompt = () => {
    const custom = {
      label: "",
      description: "",
      custom: true,
    };
    updatePromptList([...promptList, custom]);
  };

  const deletePrompt = (i) => {
    const updatedPrompts = promptList.filter((_, index) => i !== index);
    updatePromptList([...updatedPrompts]);
  };

  const resetPrompts = () => {
    updatePromptList(defaultPrompts);
  };

  return (
    <>
      {open && <DarkUnderlay handleClick={handleClick} showDark={0.2} />}
      <AnimatePresence>
        <ModalContainer
          initial={false}
          animate={open ? "open" : "closed"}
          variants={modalVariants}
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
                    onChange={(e) => handleChange(e, i)}
                    inputProps={{
                      maxLength: 32,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {prompt.description && (
                            <PromptTooltip
                              enterTouchDelay={10}
                              title={prompt.description}
                              arrow
                              placement="right-end"
                            >
                              <StyledIconButton iconcolor={"#535353"}>
                                <HelpOutlineIcon />
                              </StyledIconButton>
                            </PromptTooltip>
                          )}
                          <StyledIconButton
                            iconcolor={"#b99e9e"}
                            onClick={() => deletePrompt(i)}
                          >
                            <CloseIcon />
                          </StyledIconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              ))}
              <AddButton onClick={() => addPrompt()}>
                <CloseIcon />
                Add another prompt
              </AddButton>
              <Footnote>
                Max 32 chars. Custom prompts are marked with a star so I'm not
                responsible for any text overflow bugs and boxes that say{" "}
                <i>poopoopeepee</i>.
              </Footnote>
            </StyledForm>
            <ButtonsContainer>
              {defaultPrompts !== promptList ? (
                <ModalButton onClick={() => resetPrompts()}>
                  Reset to Default
                </ModalButton>
              ) : (
                <div />
              )}
              <ModalButton onClick={() => togglePrompt(false)}>
                Close
              </ModalButton>
            </ButtonsContainer>
          </ModalItems>
        </ModalContainer>
      </AnimatePresence>
    </>
  );
};
