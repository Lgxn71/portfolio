"use client";
import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter";

import styles from "./TypingHeading.module.css";

const TypingHeading = () => {
  const splitter = new GraphemeSplitter();

  return (
    <TypeAnimation
      splitter={(str) => splitter.splitGraphemes(str)}
      sequence={[
        "Hi, i am Ali! 🇬🇧",
        1500,
        "안녕하세요, 제 이름은 알리입니다! 🇰🇷",
        1500,
        "Привет, меня зовут Али! 🇷🇺",
        1500,
        "Cәлем, менің атым Али! 🇰🇿",
        1500,
      ]}
      speed={50}
      wrapper="h1"
      repeat={Infinity}
      className={styles.heading}
      preRenderFirstString
    />
  );
};

export default TypingHeading;
