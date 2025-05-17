
import React from "react";
import { QuizResult } from "../types/quiz";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart }) => {
  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Vibe Check Result',
        text: `I just got "${result.title}" on the Vibe Check quiz! What's your vibe? Take the quiz to find out!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(
        `I just got "${result.title}" on the Vibe Check quiz! What's your vibe? Take the quiz to find out! ${window.location.href}`
      );
      alert("Result copied to clipboard! Share it with your friends!");
    }
  };

  return (
    <div className="animate-scale-in flex flex-col items-center">
      <div className={`text-6xl md:text-8xl mb-4 animate-bounce-slow`}>
        {result.emoji}
      </div>
      
      <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-${result.color}`}>
        Your Vibe: {result.title}
      </h2>
      
      <div className={`bg-gradient-to-r ${result.gradient} w-20 h-1 rounded my-4`}></div>
      
      <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
        {result.description}
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <Button 
          className="w-full bg-gradient-to-r from-vibe-purple to-vibe-blue hover:opacity-90"
          onClick={shareResult}
        >
          <Share className="mr-2 h-4 w-4" />
          Share My Vibe
        </Button>
        
        <Button
          variant="outline"
          className="w-full border-vibe-blue text-vibe-blue hover:bg-blue-50"
          onClick={onRestart}
        >
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
