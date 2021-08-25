import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "@util/constants";
import useSystemStore from "@store/system";

export const REDACTED_STR =
  "[the following content is unavailable to the public]";

const RedactedString = styled.div`
  margin-right: 1rem;
  word-break: break-all;
  p {
    font-family: "Courier New";
    color: ${COLORS.black};
    /* filter: blur(3px); */
    /* -webkit-filter: blur(3px); */
  }
`;

interface Props {
  format: string;
}

export default function Secret({ format }: Props) {
  // for now use the title to generate a string array of empty chars
  const getStringArrays = (redacted = false) => {
    const numbers = format.split("").map((char) => {
      const len = (char.charCodeAt(0) % 23) + 8;
      const fill = redacted ? "█" : " ";
      return new Array(len).fill(fill);
    });
    return numbers;
  };

  const redactionComplete = useSystemStore((state) => state.redactionComplete);
  const setRedactedComplete = useSystemStore(
    (state) => state.setRedactedComplete
  );
  const [stringList, setStringList] = useState(
    getStringArrays(redactionComplete)
  );
  const [totalTime, setTotalTime] = useState(0);
  const [animRef, setAnimRef] = useState<any>(null);
  const ANIM_INTERVAL = 60;
  const ANIM_FINISH = 1800;
  const WEIGHTS = [
    "文",
    "字",
    "化",
    "け",
    "％",
    "！",
    "＠",
    "。",
    "あ",
    "０",
    "ｓ",
    "死",
    "殺",
    "人",
    "じ",
    "っ",
    "ら",
    "愛",
    "神",
    "秘",
    "み",
    "つ",
    "希",
    "望",
    "Ａ",
    "a",
    "＃",
    "＄",
    "ア",
  ];

  // useEffect(() => {
  //   if (!redactionComplete) {
  //     const anim = setInterval(() => setTotalTime(totalTime => totalTime + ANIM_INTERVAL), ANIM_INTERVAL);
  //     setAnimRef(animRef);
  //     return () => {
  //       clearInterval(anim);
  //     }
  //   }
  //   return
  // }, []);

  // useEffect(() => {
  //   if (totalTime < 1800 - 60) {
  //     const newList = stringList.map((str) => {
  //       const newStr = str.map(char => {
  //         if (char == "█") {
  //           return "█";
  //         }
  //         return Math.random() < 0.3 ? "█" : WEIGHTS[Math.floor(Math.random() * WEIGHTS.length)];
  //       })
  //       return newStr;
  //     })
  //     setStringList(newList);
  //   } else {
  //     setStringList(getStringArrays(true));
  //     setRedactedComplete(true);
  //     animRef && clearInterval(animRef);
  //   }
  // }, [totalTime]);

  return (
    <RedactedString>
      <p>
        {/* {stringList.map(str => str.join("") + (str.length % 10 !== 0 ? "　" : `\n\n`))} */}
      </p>
    </RedactedString>
  );
}
