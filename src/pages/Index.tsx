
import React from "react";
import QuizContainer from "@/components/QuizContainer";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 
      'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' : 
      'bg-gradient-to-br from-indigo-50 via-white to-purple-50'} py-12 px-4 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Vibe Check</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find out what energy you're bringing to the table with this quick personality quiz!
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="bg-vibe-purple/10 text-vibe-purple dark:bg-vibe-purple/20 dark:text-purple-300 px-3 py-1 rounded-full text-sm">Multiple Views</span>
            <span className="bg-vibe-blue/10 text-vibe-blue dark:bg-vibe-blue/20 dark:text-blue-300 px-3 py-1 rounded-full text-sm">Animations</span>
            <span className="bg-vibe-teal/10 text-vibe-teal dark:bg-vibe-teal/20 dark:text-teal-300 px-3 py-1 rounded-full text-sm">Interactive Results</span>
            <span className="bg-vibe-coral/10 text-vibe-coral dark:bg-vibe-coral/20 dark:text-coral-300 px-3 py-1 rounded-full text-sm">Social Sharing</span>
          </div>
        </header>

        <QuizContainer />
        
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 Vibe Check. Made with ✨ positive energy ✨</p>
          <p className="mt-2">Created for In-House Vibe Builders</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
