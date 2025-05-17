
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
    gradient: "from-vibe-blue to-vibe-teal",
    strengths: [
      "Natural motivator who inspires others",
      "Quick to take action and initiative",
      "Brings energy to tedious tasks",
      "Thrives in dynamic, fast-paced environments",
      "Great at generating excitement for new ideas"
    ],
    challenges: [
      "May struggle with patience for slower processes",
      "Sometimes becomes bored with routine tasks",
      "Might overwhelm more reserved personalities",
      "Can scatter energy across too many projects",
      "May need help with follow-through"
    ]
  },
  chill: {
    type: "chill",
    title: "Serene Flow",
    description: "Your vibe is calm, collected, and deeply peaceful. People feel at ease around you and appreciate your grounded, thoughtful presence. You create space for genuine connections.",
    emoji: "🌊",
    color: "vibe-teal",
    gradient: "from-vibe-teal to-vibe-green",
    strengths: [
      "Exceptional listener and mediator",
      "Maintains composure under pressure",
      "Creates comfortable environments for others",
      "Thoughtful and considerate decision-maker",
      "Brings stability to chaotic situations"
    ],
    challenges: [
      "May appear too passive in high-energy groups",
      "Sometimes holds back valuable opinions",
      "Can be reluctant to take risks or make changes",
      "Might avoid necessary confrontation",
      "Can be perceived as indifferent when processing internally"
    ]
  },
  creative: {
    type: "creative",
    title: "Artistic Soul",
    description: "Your creative vibe sparks inspiration wherever you go! Your unique perspective and expressive nature make you a catalyst for innovation and artistic exploration.",
    emoji: "✨",
    color: "vibe-purple",
    gradient: "from-vibe-purple to-vibe-pink",
    strengths: [
      "Innovative problem-solver who thinks outside the box",
      "Brings fresh perspectives to stale situations",
      "Natural ability to connect seemingly unrelated ideas",
      "Creates beauty and meaning in everyday experiences",
      "Inspires others to embrace their own creativity"
    ],
    challenges: [
      "May struggle with highly structured environments",
      "Sometimes gets lost in possibilities rather than practicalities",
      "Can be sensitive to criticism of creative work",
      "Might resist conventional approaches even when appropriate",
      "Can have difficulty with strict deadlines or rigid processes"
    ]
  },
  focused: {
    type: "focused",
    title: "Laser Precision",
    description: "Your focused vibe is all about clarity and purpose. You bring structure, reliability, and thoughtful analysis to any situation, making you an anchor for your team.",
    emoji: "🔍",
    color: "vibe-blue",
    gradient: "from-vibe-blue to-vibe-purple",
    strengths: [
      "Excellent at setting and achieving goals",
      "Pays close attention to important details",
      "Reliable and consistent in delivering results",
      "Creates effective systems and processes",
      "Stays committed to tasks until completion"
    ],
    challenges: [
      "May become overly fixated on perfection",
      "Sometimes misses the big picture when focused on details",
      "Can be perceived as rigid or inflexible",
      "Might resist spontaneity or unexpected changes",
      "May need to consciously build in time for relaxation"
    ]
  },
  chaotic: {
    type: "chaotic",
    title: "Wild Card Energy",
    description: "Your chaotic-good vibe brings unpredictable magic to life! You embrace spontaneity and think outside every box, creating unexpected solutions and adventures wherever you go.",
    emoji: "🌪️",
    color: "vibe-pink",
    gradient: "from-vibe-pink to-vibe-coral",
    strengths: [
      "Exceptional adaptability to changing circumstances",
      "Discovers unique paths and unexpected solutions",
      "Brings excitement and surprise to routine situations",
      "Challenges outdated systems and conventions",
      "Thrives in unpredictable or ambiguous environments"
    ],
    challenges: [
      "May struggle with consistent follow-through",
      "Sometimes creates unnecessary complexity",
      "Can be challenging for more structured teammates",
      "Might resist helpful routines or systems",
      "May need help with organization and time management"
    ]
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
