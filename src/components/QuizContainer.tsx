
import React, { useState } from "react";
import { quizQuestions, getResult } from "../data/quizData";
import { AnswerType, UserAnswers } from "../types/quiz";
import ProgressBar from "./ProgressBar";
import QuizQuestion from "./QuizQuestion";
import ResultCard from "./ResultCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  
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
      setQuizComplete(true);
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
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-8">
      {!quizComplete ? (
        <>
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={quizQuestions.length} 
          />
          
          <div className="mt-8 mb-8">
            <QuizQuestion
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
            />
          </div>
          
          <div className="flex justify-end">
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="bg-gradient-to-r from-vibe-purple to-vibe-blue hover:opacity-90"
            >
              {isLastQuestion ? 'See Results' : 'Next Question'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <ResultCard 
          result={getResult(userAnswers)}
          onRestart={handleRestartQuiz}
        />
      )}
    </div>
  );
};

export default QuizContainer;
