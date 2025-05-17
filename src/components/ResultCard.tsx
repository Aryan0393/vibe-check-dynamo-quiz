
import React, { useState } from "react";
import { QuizResult } from "../types/quiz";
import { Button } from "@/components/ui/button";
import { Share, Star, ArrowUp, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
  answersCount?: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart, answersCount = 0 }) => {
  const { toast } = useToast();
  const [showDetails, setShowDetails] = useState(false);
  
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
      toast({
        title: "Copied to clipboard!",
        description: "Share your results with friends!",
        duration: 3000,
      });
    }
  };

  const saveToFavorites = () => {
    // In a real app, this would save to localStorage or a database
    toast({
      title: "Result saved!",
      description: `Your "${result.title}" result has been saved to favorites.`,
      duration: 3000,
    });
  };

  return (
    <div className="animate-scale-in flex flex-col items-center">
      <div className={`text-6xl md:text-8xl mb-4 animate-bounce-slow`}>
        {result.emoji}
      </div>
      
      <div className="w-full bg-gradient-to-r from-vibe-purple/10 via-vibe-blue/10 to-vibe-teal/10 dark:from-vibe-purple/20 dark:via-vibe-blue/20 dark:to-vibe-teal/20 rounded-lg p-6 mb-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-${result.color} text-center`}>
          Your Vibe: {result.title}
        </h2>
      </div>
      
      <div className={`bg-gradient-to-r ${result.gradient} w-20 h-1 rounded my-4`}></div>
      
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-vibe-purple to-vibe-blue opacity-20 blur rounded-lg"></div>
        <p className="relative bg-white dark:bg-gray-800 p-6 rounded-lg text-lg md:text-xl text-center mb-8 max-w-2xl dark:text-gray-200">
          {result.description}
        </p>
      </div>
      
      <Button 
        variant="outline"
        onClick={() => setShowDetails(!showDetails)}
        className="mb-6 w-full max-w-md flex items-center justify-center"
      >
        {showDetails ? (
          <>
            <ArrowUp className="mr-2 h-4 w-4" />
            Hide Personality Details
          </>
        ) : (
          <>
            <ArrowDown className="mr-2 h-4 w-4" />
            Show Personality Details
          </>
        )}
      </Button>
      
      {showDetails && (
        <div className="w-full max-w-2xl mb-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className={`font-bold text-lg mb-4 text-vibe-green dark:text-green-300`}>Your Strengths</h3>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                    <span className="dark:text-gray-200">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
              <h3 className={`font-bold text-lg mb-4 text-vibe-coral dark:text-orange-300`}>Your Challenges</h3>
              <ul className="space-y-2">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                    <span className="dark:text-gray-200">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <div className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg mb-6">
        <h3 className="font-bold text-center mb-2 dark:text-gray-200">Your Vibe Stats</h3>
        <div className="flex justify-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold dark:text-gray-200">{answersCount}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold dark:text-gray-200">{result.type.charAt(0).toUpperCase() + result.type.slice(1)}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Energy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold dark:text-gray-200">{Math.floor(Math.random() * 90) + 10}%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Match</div>
          </div>
        </div>
      </div>
      
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
          className="w-full border-vibe-purple text-vibe-purple dark:border-purple-500 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          onClick={saveToFavorites}
        >
          <Star className="mr-2 h-4 w-4" />
          Save Result
        </Button>
        
        <Button
          variant="outline"
          className="w-full border-vibe-blue text-vibe-blue dark:border-blue-500 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          onClick={onRestart}
        >
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
