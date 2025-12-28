
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type CountdownTimerProps = {
    initialMinutes: number;
    className?: string;
    onComplete?: () => void;
}

export function CountdownTimer({ initialMinutes = 30, className, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const storedEndTime = localStorage.getItem('countdownEndTime');
    const now = Date.now();
    
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime, 10);
      const remainingTime = Math.round((endTime - now) / 1000);
      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
      } else {
        setTimeLeft(0);
        onComplete?.();
      }
    } else {
      const newEndTime = now + initialMinutes * 60 * 1000;
      localStorage.setItem('countdownEndTime', newEndTime.toString());
      setTimeLeft(initialMinutes * 60);
    }
  }, [initialMinutes, onComplete]);

  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft <= 0) {
      localStorage.removeItem('countdownEndTime');
      if (onComplete) {
        onComplete();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime !== null ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete]);

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

    