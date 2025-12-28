"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type CountdownTimerProps = {
    initialMinutes: number;
    className?: string;
}

export function CountdownTimer({ initialMinutes = 30, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    setTimeLeft(initialMinutes * 60);
  }, [initialMinutes]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime !== null ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  if (timeLeft === null) {
    return <div className={cn("text-2xl font-bold font-mono text-accent", className)}>--:--</div>;
  }
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={cn("text-2xl font-bold font-mono text-accent", className)}>
      <span>{String(minutes).padStart(2, '0')}</span>:
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}
