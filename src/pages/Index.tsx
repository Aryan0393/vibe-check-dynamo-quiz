
import React from "react";
import QuizContainer from "@/components/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Vibe Check</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Find out what energy you're bringing to the table with this quick personality quiz!
          </p>
        </header>

        <QuizContainer />
        
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Vibe Check. Made with ✨ positive energy ✨</p>
          <p className="mt-2">Created for In-House Vibe Builders</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
