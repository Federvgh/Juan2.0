"use client";

import { useEffect, useState } from "react";

interface TextCycleProps {
  words: string[];
  interval?: number;
}

export function TextCycle({ words, interval = 3000 }: TextCycleProps) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {words[index]}
    </span>
  );
}
