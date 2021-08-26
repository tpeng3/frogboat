import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { COLORS, LILYPAD } from "@util/constants";
import { shuffle } from "@util/helpers";
import useSystemStore from "@store/system";
import TextField from "@material-ui/core/TextField";
import { PromptModal } from "@components/OCeptember/PromptModal";
import { AnimationDefinition } from "framer-motion/types/render/VisualElement/utils/animation";
import TemplateImage from "src/images/canvas.png";
import InfoImage from "src/images/canvas-front.png";
import content from "./oceptember.yaml"; // TODO: move this to a yaml folder... maybe

const Overlay = styled(motion.div)`
  background-color: ${COLORS.TEAL_500};
  width: 100vw;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  margin: auto;
  display: flex;
`;

const CanvasContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  canvas, img {
    width: 400px;
  }
`;

const InfoContainer = styled(motion.div)`
  position: absolute;
`;

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [promptList, updatePromptList] = useState(content.prompts);
  const [promptOpen, togglePrompt] = useState(false);
  const [showInfo, toggleInfo] = useState(true);
  const canvasAnimationControls = useAnimation();

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

  const showCard: AnimationDefinition = {
    rotateY: 180
  }

  const flipCard = () => {
    toggleInfo(!showInfo);
    // updateTemplate()
  }

  const handleCanvasComplete = () => {
    canvasAnimationControls.stop();
    canvasAnimationControls.set({
      rotateY: 0,
    });
    canvasAnimationControls.start(showCanvas);
  }

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let finalLines: any = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        finalLines.push({ line, x, y })
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }

    // adjust y for aligning vertically center
    finalLines.forEach((line, i) => {
      const newY = line.y - ((finalLines.length - i) * lineHeight / 2);
      context.fillText(line.line, line.x, newY);
    });

    context.fillText(line, x, y);
  }

  const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y)
      rot += step
    }
    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = '#33879239';
    ctx.fill();
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
        const X_PADDING = 190.2, Y_PADDING = 190, X_START = 162, Y_START = 220;
        const MAX_WIDTH = 100, LINE_HEIGHT = 22;
        ctx.font = '24px Asap';
        ctx.textAlign = 'center';
        let x = X_START, y = Y_START; // starting positions
        ctx.textBaseline = 'middle';
        shuffled.slice(0, 30).forEach((prompt, i) => {
          if (i !== 0 && i % 5 === 0) {
            y += Y_PADDING;
            x = X_START;
          }
          // add a watermark for custom prompts
          if (prompt.custom) {
            drawStar(ctx, x, y + 12, 5, 80, 50);
          }
          // add text
          ctx.fillStyle = '#338792';
          wrapText(ctx, prompt.label, x, y, MAX_WIDTH, LINE_HEIGHT);
          x += X_PADDING;
        })
      };

      template.src = TemplateImage;
    }
  };

  const downloadCard = () => {
    if (canvasRef.current) {
      const img = canvasRef.current.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = "2021OCeptemberBingo.png";
      link.href = img;
      link.click();
    }
  }

  return (
    <div>
      <Overlay>
        <ButtonContainer>
          <button onClick={updateTemplate}>Redraw</button>
          <button onClick={() => togglePrompt(true)}>Edit Prompts</button>
          <button onClick={downloadCard}>Download Card</button>
          <button onClick={flipCard}>View Info</button>
        </ButtonContainer>
        <CanvasContainer
          animate={canvasAnimationControls}
          onAnimationComplete={() => handleCanvasComplete()}
        >
          <InfoContainer
            initial={false}
            animate={{ rotateY: showInfo ? -90 : 0 }}
            transition={{ duration: 1, delay: showInfo ? 0 : 1 }}
          >
            <canvas ref={canvasRef} width="1080" height="1350"></canvas>
          </InfoContainer>
          <InfoContainer
            initial={false}
            animate={showInfo ?
              {
                rotateY: 0,
              } : {
                rotateY: -90,
              }
            }
            transition={{ duration: 1, delay: showInfo ? 1 : 0 }}
          >
            <img src={InfoImage} />
          </InfoContainer>
        </CanvasContainer>
      </Overlay>
      <PromptModal defaultPrompts={content.prompts} promptList={promptList} updatePromptList={updatePromptList} open={promptOpen} togglePrompt={togglePrompt} />
    </div>
  );
}
