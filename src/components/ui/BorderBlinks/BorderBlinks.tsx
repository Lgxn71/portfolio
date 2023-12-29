"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { nanoid } from "nanoid";

import { generateRandomNumberInRange, linePositionGenerator } from "./utils";

import styles from "./BorderBlinks.module.css";

interface Line {
  id: string;
  position: "Left" | "Top" | "Right";
}

const BorderBlinks = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { ref: refViewport, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          { position: linePositionGenerator(), id: Date.now().toString() },
        ]);

        renderLine(generateRandomNumberInRange(3250, 4000));
      }, timeout);
    };

    renderLine(generateRandomNumberInRange(700, 1200));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  const removeLine = (id: string) =>
    setLines((prev) => prev.filter((line) => line?.id !== id));

  return (
    <div ref={refViewport} className={styles.wrapperDiv}>
      {lines.map((line) => (
        <span
          key={nanoid(8)}
          className={
            line?.position === "Right"
              ? styles.rightBlink
              : line?.position === "Top"
              ? styles.topBlink
              : styles.leftBlink
          }
          onAnimationEnd={() => {
            if (line) return removeLine(line.id);
          }}
        />
      ))}
    </div>
  );
};
export default BorderBlinks;
