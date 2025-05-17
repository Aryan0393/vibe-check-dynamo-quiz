
import React from "react";
import { QuizQuestion as QuizQuestionType, QuizOption, AnswerType } from "../types/quiz";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | null;
  onSelectAnswer: (optionId: string, answerType: AnswerType) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer 
}) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        {question.question}
      </h2>
      <div className="grid gap-4">
        {question.options.map((option: QuizOption) => (
          <div 
            key={option.id}
            className={`option-card ${selectedAnswer === option.id ? 'selected' : ''}`}
            onClick={() => onSelectAnswer(option.id, option.type)}
          >
            <span className="text-2xl">{option.emoji}</span>
            <span className="text-lg">{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
