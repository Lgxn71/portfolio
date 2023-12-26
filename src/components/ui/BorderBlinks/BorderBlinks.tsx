"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { nanoid } from "nanoid";

import styles from "./BorderBlinks.module.css";

interface Line {
  id: string;
  direction: "to bottom" | "to right";
}
const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const BorderBlinks = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const { ref: refViewport, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            id: Date.now().toString(),
          },
        ]);

        renderLine(randomNumberBetween(3500, 5000));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

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
          key={nanoid(9)}
          className={
            line?.direction === "to bottom"
              ? styles.rightBlink
              : styles.topBlink
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
