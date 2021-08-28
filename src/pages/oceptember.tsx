import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { COLORS, LILYPAD } from "@util/constants";
import { shuffle, hexToRGBA, media } from "@util/helpers";
import useSystemStore from "@store/system";
import TextField from "@material-ui/core/TextField";
import { PromptModal } from "@components/OCeptember/PromptModal";
import { AnimationDefinition } from "framer-motion/types/render/VisualElement/utils/animation";
import TemplateImage from "src/images/canvas.png";
import InfoImage from "src/images/canvas-front.png";
import DownloadIcon from "@images/SVG/download.svg";
import { useDimensions } from "@util/screen";
import content from "./oceptember.yaml"; // TODO: move this to a yaml folder... maybe

const GlobalStyle = createGlobalStyle`
  body {
    overflow: auto;
    ${media.tablet`
      overflow: hidden;
    `}
  }
`;

const Overlay = styled(motion.div)`
  background-color: #dac8bf;
  width: 100vw;
  height: 100vh;
`;

const TemplateContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  ${media.laptop`
    flex-direction: row;
  `}
`;

const CanvasPlaceholder = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const CanvasContainer = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  canvas,
  img {
    max-width: 100vw;
    ${media.tablet`
      max-width: 500px;
      max-height: calc(100vh - 64px);
    `}
    ${media.laptop`
      max-width: max(500px, 40vw);
      max-height: calc(100vh - 64px);
    `}
  }
`;

const InfoContainer = styled(motion.div)`
  position: absolute;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 32px;
  ${media.tablet`
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;

const StyledButton = styled.button`
  background-color: ${hexToRGBA("#635353", 0.1)};
  color: #535353;
  border: 1px solid #e7e4d8;
  border-radius: 5px;
  padding: 8px;
  min-width: 140px;
  transition: all 200ms ease;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  svg {
    width: 10px;
    margin-left: 3px;
    fill: #635353;
  }
  :hover {
    cursor: pointer;
    background-color: ${hexToRGBA("#e7e4d8", 0.5)};
    transform: scale(1.1);
  }
`;

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [promptList, updatePromptList] = useState(content.prompts);
  const [promptOpen, togglePrompt] = useState(false);
  const [showInfo, toggleInfo] = useState(true);
  const canvasAnimationControls = useAnimation();
  const { width, height } = useDimensions(canvasRef);

  useEffect(() => {
    updateTemplate();
  }, []);

  const showCanvas: AnimationDefinition = {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      translateY: { stiffness: 1000, velocity: -100 },
    },
  };

  const flipCard = () => {
    toggleInfo(!showInfo);
  };

  const handleCanvasComplete = () => {
    canvasAnimationControls.stop();
    canvasAnimationControls.set({
      rotateY: 0,
    });
    canvasAnimationControls.start(showCanvas);
  };

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";
    let finalLines: any = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        finalLines.push({ line, x, y });
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    // adjust y for aligning vertically center
    finalLines.forEach((line, i) => {
      const newY = line.y - ((finalLines.length - i) * lineHeight) / 2;
      context.fillText(line.line, line.x, newY);
    });

    context.fillText(line, x, y);
  };

  const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "rgba(51, 135, 146, 0.2)";
    ctx.fill();
  };

  const updateTemplate = () => {
    canvasAnimationControls.set({
      opacity: 0,
      translateY: 100,
    });
    canvasAnimationControls.start(showCanvas);
    const ctx = canvasRef.current && canvasRef.current.getContext("2d");
    if (ctx) {
      const template = new Image();

      template.onload = function () {
        //draw background image
        ctx.drawImage(template, 0, 0);

        // fill template with prompts
        const shuffled = shuffle(promptList);
        const X_PADDING = 187.5,
          Y_PADDING = 188,
          X_START = 165,
          Y_START = 238;
        const MAX_WIDTH = 100,
          LINE_HEIGHT = 22;
        ctx.font = "bold 24px Open Sans";
        ctx.textAlign = "center";
        let x = X_START,
          y = Y_START; // starting positions
        ctx.textBaseline = "middle";
        shuffled.slice(0, 30).forEach((prompt, i) => {
          if (i !== 0 && i % 5 === 0) {
            y += Y_PADDING;
            x = X_START;
          }
          // add a watermark for custom prompts
          if (prompt.custom) {
            drawStar(ctx, x, y + 14, 5, 70, 40);
          }
          // add text
          ctx.fillStyle = "#475d62";
          wrapText(ctx, prompt.label, x, y, MAX_WIDTH, LINE_HEIGHT);
          x += X_PADDING;
        });
      };

      template.src = TemplateImage;
    }
  };

  const downloadCard = () => {
    if (canvasRef.current) {
      const img = canvasRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "2021OCeptemberBingo.png";
      link.href = img;
      link.click();
    }
  };

  return (
    <Overlay>
      <GlobalStyle />
      <div style={{ fontFamily: "Open Sans", opacity: 0 } as const}>.</div>
      <TemplateContainer>
        <CanvasContainer
          animate={canvasAnimationControls}
          onAnimationComplete={() => handleCanvasComplete()}
        >
          <CanvasPlaceholder width={width} height={height} />
          <InfoContainer
            initial={false}
            animate={{ rotateY: showInfo ? -90 : 0 }}
            transition={{ duration: 0.6, delay: showInfo ? 0 : 0.6 }}
          >
            <canvas ref={canvasRef} width="1080" height="1350"></canvas>
          </InfoContainer>
          <InfoContainer
            initial={false}
            animate={
              showInfo
                ? {
                  rotateY: 0,
                }
                : {
                  rotateY: -90,
                }
            }
            transition={{ duration: 0.6, delay: showInfo ? 0.6 : 0 }}
          >
            <img src={InfoImage} />
          </InfoContainer>
        </CanvasContainer>
        <ButtonContainer>
          <StyledButton onClick={flipCard}>
            {showInfo ? "View Bingo" : "View Info"}
          </StyledButton>
          <StyledButton onClick={updateTemplate}>Draw a New Card</StyledButton>
          <StyledButton onClick={() => togglePrompt(true)}>
            Edit Prompts
          </StyledButton>
          <StyledButton onClick={downloadCard}>
            Download <DownloadIcon />
          </StyledButton>
        </ButtonContainer>
      </TemplateContainer>
      <PromptModal
        defaultPrompts={content.prompts}
        promptList={promptList}
        updatePromptList={updatePromptList}
        open={promptOpen}
        togglePrompt={togglePrompt}
        updateTemplate={updateTemplate}
      />
    </Overlay>
  );
}
