
import { QuizQuestion, QuizResult } from "../types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Pick your ideal weekend activity:",
    options: [
      {
        id: "q1a",
        text: "Dance party with friends",
        emoji: "🎉",
        type: "energetic"
      },
      {
        id: "q1b",
        text: "Reading a book in a cozy café",
        emoji: "📚",
        type: "chill"
      },
      {
        id: "q1c",
        text: "Creating art or working on a DIY project",
        emoji: "🎨",
        type: "creative"
      },
      {
        id: "q1d",
        text: "Planning and organizing your upcoming week",
        emoji: "📝",
        type: "focused"
      },
      {
        id: "q1e",
        text: "Spontaneous road trip to somewhere new",
        emoji: "🚗",
        type: "chaotic"
      }
    ]
  },
  {
    id: "q2",
    question: "What's your go-to drink?",
    options: [
      {
        id: "q2a",
        text: "Espresso or energy drink",
        emoji: "☕",
        type: "energetic"
      },
      {
        id: "q2b",
        text: "Herbal tea or natural juice",
        emoji: "🍵",
        type: "chill"
      },
      {
        id: "q2c",
        text: "Colorful craft cocktail or smoothie",
        emoji: "🍹",
        type: "creative"
      },
      {
        id: "q2d",
        text: "Black coffee, no sugar",
        emoji: "☕",
        type: "focused"
      },
      {
        id: "q2e",
        text: "Whatever's available or looks interesting",
        emoji: "🥤",
        type: "chaotic"
      }
    ]
  },
  {
    id: "q3",
    question: "How do you approach a new project?",
    options: [
      {
        id: "q3a",
        text: "Dive right in with enthusiasm",
        emoji: "🏊",
        type: "energetic"
      },
      {
        id: "q3b",
        text: "Take time to reflect and find inspiration",
        emoji: "🌿",
        type: "chill"
      },
      {
        id: "q3c",
        text: "Brainstorm unique approaches and ideas",
        emoji: "💡",
        type: "creative"
      },
      {
        id: "q3d",
        text: "Create a detailed plan with clear steps",
        emoji: "📊",
        type: "focused"
      },
      {
        id: "q3e",
        text: "Wing it and solve problems as they arise",
        emoji: "🎭",
        type: "chaotic"
      }
    ]
  },
  {
    id: "q4",
    question: "Your desk or workspace is usually:",
    options: [
      {
        id: "q4a",
        text: "Full of multiple ongoing projects",
        emoji: "📊",
        type: "energetic"
      },
      {
        id: "q4b",
        text: "Minimal with plants and calming elements",
        emoji: "🌱",
        type: "chill"
      },
      {
        id: "q4c",
        text: "Decorated with inspiring visuals and colors",
        emoji: "🎨",
        type: "creative"
      },
      {
        id: "q4d",
        text: "Perfectly organized with everything in its place",
        emoji: "📁",
        type: "focused"
      },
      {
        id: "q4e",
        text: "A beautiful mess that somehow works for you",
        emoji: "🌪️",
        type: "chaotic"
      }
    ]
  },
  {
    id: "q5",
    question: "Your approach to deadlines is:",
    options: [
      {
        id: "q5a",
        text: "Working in intense bursts to get things done",
        emoji: "⚡",
        type: "energetic"
      },
      {
        id: "q5b",
        text: "Steady progress with breaks for balance",
        emoji: "⚖️",
        type: "chill"
      },
      {
        id: "q5c",
        text: "Finding creative solutions that inspire you",
        emoji: "✨",
        type: "creative"
      },
      {
        id: "q5d",
        text: "Meeting them well in advance, always prepared",
        emoji: "⏰",
        type: "focused"
      },
      {
        id: "q5e",
        text: "Last-minute rush that somehow produces great work",
        emoji: "🚀",
        type: "chaotic"
      }
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  energetic: {
    type: "energetic",
    title: "Electric Vibrance",
    description: "You radiate energetic, upbeat vibes! Your enthusiasm is contagious, and you bring excitement to everything you do. You're the person who lights up a room and gets everyone moving.",
    emoji: "⚡",
    color: "vibe-blue",
    gradient: "from-vibe-blue to-vibe-teal"
  },
  chill: {
    type: "chill",
    title: "Serene Flow",
    description: "Your vibe is calm, collected, and deeply peaceful. People feel at ease around you and appreciate your grounded, thoughtful presence. You create space for genuine connections.",
    emoji: "🌊",
    color: "vibe-teal",
    gradient: "from-vibe-teal to-vibe-green"
  },
  creative: {
    type: "creative",
    title: "Artistic Soul",
    description: "Your creative vibe sparks inspiration wherever you go! Your unique perspective and expressive nature make you a catalyst for innovation and artistic exploration.",
    emoji: "✨",
    color: "vibe-purple",
    gradient: "from-vibe-purple to-vibe-pink"
  },
  focused: {
    type: "focused",
    title: "Laser Precision",
    description: "Your focused vibe is all about clarity and purpose. You bring structure, reliability, and thoughtful analysis to any situation, making you an anchor for your team.",
    emoji: "🔍",
    color: "vibe-blue",
    gradient: "from-vibe-blue to-vibe-purple"
  },
  chaotic: {
    type: "chaotic",
    title: "Wild Card Energy",
    description: "Your chaotic-good vibe brings unpredictable magic to life! You embrace spontaneity and think outside every box, creating unexpected solutions and adventures wherever you go.",
    emoji: "🌪️",
    color: "vibe-pink",
    gradient: "from-vibe-pink to-vibe-coral"
  }
};

export const getResult = (answers: Record<string, string>): QuizResult => {
  const counts: Record<string, number> = {
    energetic: 0,
    chill: 0,
    creative: 0,
    focused: 0,
    chaotic: 0
  };
  
  // Count the occurrences of each answer type
  Object.values(answers).forEach((type) => {
    if (type in counts) {
      counts[type]++;
    }
  });

  // Find the most common answer type
  let maxCount = 0;
  let resultType = "creative"; // Default
  
  Object.entries(counts).forEach(([type, count]) => {
    if (count > maxCount) {
      maxCount = count;
      resultType = type;
    }
  });
  
  return quizResults[resultType];
};
