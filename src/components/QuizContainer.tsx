import React, { useState } from "react";
import { quizQuestions, getResult } from "../data/quizData";
import { AnswerType, UserAnswers } from "../types/quiz";
import ProgressBar from "./ProgressBar";
import QuizQuestion from "./QuizQuestion";
import ResultCard from "./ResultCard";
import QuizTimer from "./QuizTimer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, RefreshCw } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const [timerActive, setTimerActive] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const progress = quizStarted ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0;
  
  const handleSelectAnswer = (optionId: string, answerType: AnswerType) => {
    setSelectedAnswer(optionId);
    
    // Store the answer type for the current question
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerType
    }));
  };
  
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setLoading(true);
      // Simulate processing time
      setTimeout(() => {
        setQuizComplete(true);
        setTimerActive(false);
        setLoading(false);
      }, 800);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null); // Reset selection for next question
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedAnswer(null);
    setQuizComplete(false);
    setTimerActive(true);
    setQuizStarted(true);
    toast({
      title: "Quiz restarted",
      description: "Let's find out your true vibe!",
      duration: 3000,
    });
  };
  
  const startQuiz = () => {
    setQuizStarted(true);
    setTimerActive(true);
    toast({
      title: "Quiz started!",
      description: "Let's discover your unique vibe!",
      duration: 3000,
    });
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'card' ? 'list' : 'card');
    toast({
      title: `Switched to ${viewMode === 'card' ? 'list' : 'card'} view`,
      duration: 1500,
    });
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-xl dark:shadow-2xl rounded-2xl p-6 md:p-8 transition-colors">
      {!quizStarted ? (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="text-6xl mb-6 animate-bounce-slow">🎭</div>
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Ready to discover your vibe?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">Answer a few questions to find out what energy you're bringing!</p>
          <Button
            onClick={startQuiz}
            className="bg-gradient-to-r from-vibe-purple to-vibe-blue hover:opacity-90 px-8 py-6 text-lg"
          >
            Start Quiz
          </Button>
        </div>
      ) : !quizComplete ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={quizQuestions.length} 
            />
            <QuizTimer isRunning={timerActive} onComplete={() => {}} />
          </div>
          
          <div className="flex justify-end mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleViewMode} 
              className="text-xs"
            >
              <RefreshCw className="mr-1 h-3 w-3" />
              Switch to {viewMode === 'card' ? 'list' : 'card'} view
            </Button>
          </div>
          
          <div className="mt-8 mb-8">
            {viewMode === 'card' ? (
              <QuizQuestion
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
              />
            ) : (
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                  {currentQuestion.question}
                </h2>
                <RadioGroup value={selectedAnswer || ""} onValueChange={(value) => {
                  const option = currentQuestion.options.find(opt => opt.id === value);
                  if (option) {
                    handleSelectAnswer(option.id, option.type);
                  }
                }}>
                  {currentQuestion.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <label htmlFor={option.id} className="flex items-center cursor-pointer w-full dark:text-gray-200">
                        <span className="text-xl mr-2">{option.emoji}</span>
                        <span>{option.text}</span>
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </div>
          
          <div className="flex justify-end">
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer || loading}
              className="bg-gradient-to-r from-vibe-purple to-vibe-blue hover:opacity-90"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  {isLastQuestion ? 'See Results' : 'Next Question'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </>
      ) : (
        <ResultCard 
          result={getResult(userAnswers)}
          onRestart={handleRestartQuiz}
          answersCount={Object.keys(userAnswers).length}
        />
      )}
    </div>
  );
};

export default QuizContainer;
