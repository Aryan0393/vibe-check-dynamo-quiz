
import React, { useState, useEffect } from "react";

interface QuizTimerProps {
  isRunning: boolean;
  onComplete: () => void;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ isRunning, onComplete }) => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="text-sm text-gray-500 flex items-center">
      <span className="mr-1">Time:</span>
      <span className="font-mono">{formatTime(seconds)}</span>
    </div>
  );
};

export default QuizTimer;
