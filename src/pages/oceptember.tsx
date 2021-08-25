import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { COLORS, LILYPAD } from "@util/constants";
import {shuffle} from "@util/helpers";
import useSystemStore from "@store/system";
import TextField from "@material-ui/core/TextField";
import LockedIcon from "@images/SVG/locked.svg";
import { AnimationDefinition } from "framer-motion/types/render/VisualElement/utils/animation";
import TemplateImage from "src/images/canvas.png";
import content from "./oceptember.yaml"; // TODO: move this to a yaml folder... maybe

const Overlay = styled(motion.div)`
  background-color: ${COLORS.TEAL_500};
  width: 100vw;
  height: 100vh;
`;

const IconContainer = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  margin: auto;
`;

const CanvasContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  canvas {
    width: 400px;
  }
`;

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [promptList, updatePromptList] = useState(content.prompts);
  const canvasAnimationControls = useAnimation(); //animation ref
  // TODO: add modal to edit prompts, with a restore default button
  // mark custom prompts with a star

  const showCanvas: AnimationDefinition = {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      translateY: { stiffness: 1000, velocity: -100 },
    },
  };

  const handleCanvasComplete = () => {
    canvasAnimationControls.stop();
  }

  const handlePrompts = () => {
    updatePromptList(content.prompts);
  }

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let finalLines: any = [];

    for(let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        finalLines.push({line, x, y})
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }

    // adjust y for aligning vertically center
    finalLines.forEach((line, i) => {
      const newY = line.y - ((finalLines.length - i) * lineHeight / 2 );
      context.fillText(line.line, line.x, newY);
    });

    context.fillText(line, x, y);
  }

  const updateTemplate = () => {
    canvasAnimationControls.set({
      opacity: 0,
      translateY: 150
    });
    canvasAnimationControls.start(showCanvas);
    const ctx = canvasRef.current && canvasRef.current.getContext('2d');
    if (ctx) {
      const template = new Image();

      template.onload = function () {
        //draw background image
        ctx.drawImage(template, 0, 0);

        // fill template with prompts
        const shuffled = shuffle(promptList);
        const X_PADDING = 191.2, Y_PADDING = 190, X_START = 162, Y_START = 220;
        const MAX_WIDTH = 100, LINE_HEIGHT=22;
        ctx.font = '24px Asap';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#338792';
        let x = X_START, y = Y_START; // starting positions
        ctx.textBaseline = 'middle';
        shuffled.slice(0, 30).forEach((prompt, i) => {
          if (i !== 0 && i % 5 === 0) {
            y += Y_PADDING;
            x = X_START;
          }
          wrapText(ctx, prompt.label, x, y, MAX_WIDTH, LINE_HEIGHT);
          x += X_PADDING;
        })
      };

      template.src = TemplateImage;
    }
  };

  return (
    <div>
      <Overlay>
        <IconContainer>
          <button onClick={updateTemplate}>Redraw</button>
        </IconContainer>
        <CanvasContainer 
          animate={canvasAnimationControls}
          onAnimationComplete={() => handleCanvasComplete()}
        >
          <canvas ref={canvasRef} width="1080" height="1350"></canvas>
        </CanvasContainer>
      </Overlay>
    </div>
  );
}
