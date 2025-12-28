
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type CountdownTimerProps = {
    initialMinutes: number;
    className?: string;
    onComplete?: () => void;
}

export function CountdownTimer({ initialMinutes = 10, className, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) {
        onComplete();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete]);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={cn("text-2xl font-bold font-mono text-accent", className)}>
      <span>{String(minutes).padStart(2, '0')}</span>:
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}
