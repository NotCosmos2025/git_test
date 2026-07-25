import React, { useState } from 'react';
import { Brain, Library, MessageSquare } from 'lucide-react';
import TooltipButton from '@/components/TooltipButton';

const Practice: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const practiceModes = [
    {
      id: 'flashcards',
      name: 'Flashcards',
      burmese: 'ဖလက်ရှ်ကဒ်များ',
      description: 'Spaced repetition vocabulary practice',
      icon: <Library className="w-12 h-12" />,
      color: 'bg-blue-500',
    },
    {
      id: 'mcq',
      name: 'Multiple Choice',
      burmese: 'ရွေးချယ်စရာ မေးခွန်းများ',
      description: 'Test your knowledge with MCQs',
      icon: <Brain className="w-12 h-12" />,
      color: 'bg-green-500',
    },
    {
      id: 'short-answer',
      name: 'Short Answer',
      burmese: 'တိုတိုတုတ်တုတ် အဖြေ',
      description: 'Practice writing responses',
      icon: <MessageSquare className="w-12 h-12" />,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Practice</h1>
          <p className="text-gray-600 burmese-text">လေ့ကျင့်ရန်</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceModes.map((mode) => (
            <div
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedMode === mode.id ? 'ring-4 ring-[#1E3A8A]' : ''
              }`}
            >
              <div className={`${mode.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {mode.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">{mode.name}</h3>
              <p className="text-sm text-gray-500 burmese-text text-center mb-4">{mode.burmese}</p>
              <p className="text-gray-600 text-center mb-6">{mode.description}</p>
              <div className="flex justify-center">
                <TooltipButton text="Start Practice" variant="primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
