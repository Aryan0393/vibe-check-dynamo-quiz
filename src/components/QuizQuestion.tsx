
import React from "react";
import { QuizQuestion as QuizQuestionType, QuizOption, AnswerType } from "../types/quiz";
import { motion } from "framer-motion";

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
        {question.options.map((option: QuizOption, index) => (
          <motion.div 
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`option-card group ${selectedAnswer === option.id ? 'selected' : ''}`}
            onClick={() => onSelectAnswer(option.id, option.type)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl group-hover:scale-125 transition-transform">{option.emoji}</span>
            <span className="text-lg">{option.text}</span>
            {selectedAnswer === option.id && (
              <span className="absolute right-4 opacity-90 text-vibe-purple">
                ✓
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
