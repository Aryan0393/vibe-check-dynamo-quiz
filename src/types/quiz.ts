
export type AnswerType = 'energetic' | 'chill' | 'creative' | 'focused' | 'chaotic';

export interface QuizOption {
  id: string;
  text: string;
  emoji: string;
  type: AnswerType;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  type: AnswerType;
  title: string;
  description: string;
  emoji: string;
  color: string;
  gradient: string;
  strengths: string[];
  challenges: string[];
}

export type UserAnswers = Record<string, AnswerType>;
