"use client";

import { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration?: number;
};

export function AnimatedCounter({ from, to, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const difference = to - from;
  let startTimestamp: number | null = null;

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * difference + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [to, from, duration]);

  return <span>{count.toLocaleString()}</span>;
}
