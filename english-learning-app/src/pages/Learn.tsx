import React from 'react';
import { BookOpen, CheckCircle, Lock, Play } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import TooltipButton from '@/components/TooltipButton';

const Learn: React.FC = () => {
  const levels = [
    {
      id: 'A1',
      name: 'Beginner',
      burmese: 'စတင်သူ',
      description: 'Basic English for everyday situations',
      units: 8,
      completed: 8,
      color: 'bg-green-500',
    },
    {
      id: 'A2',
      name: 'Elementary',
      burmese: 'မူလတန်း',
      description: 'Simple communication in familiar contexts',
      units: 10,
      completed: 6,
      color: 'bg-blue-500',
    },
    {
      id: 'B1',
      name: 'Intermediate',
      burmese: 'အလယ်အလတ်',
      description: 'Handle most travel situations and conversations',
      units: 10,
      completed: 0,
      color: 'bg-yellow-500',
    },
    {
      id: 'B2',
      name: 'Upper Intermediate',
      burmese: 'အထက်အလယ်အလတ်',
      description: 'Understand complex texts and technical discussions',
      units: 10,
      completed: 0,
      color: 'bg-orange-500',
    },
    {
      id: 'C1',
      name: 'Advanced',
      burmese: 'အဆင့်မြင့်',
      description: 'Express ideas fluently and spontaneously',
      units: 10,
      completed: 0,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Learning Path</h1>
          <p className="text-gray-600 burmese-text">သင်ကြားရေး လမ်းကြောင်း</p>
        </div>

        {/* Levels Grid */}
        <div className="space-y-6">
          {levels.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LevelCardProps {
  level: {
    id: string;
    name: string;
    burmese: string;
    description: string;
    units: number;
    completed: number;
    color: string;
  };
}

const LevelCard: React.FC<LevelCardProps> = ({ level }) => {
  const progress = (level.completed / level.units) * 100;
  const isLocked = level.completed === 0 && level.id !== 'A1';
  const isCompleted = level.completed === level.units;

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${isLocked ? 'opacity-60' : ''}`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className={`${level.color} text-white p-4 rounded-full`}>
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold text-gray-800">{level.name}</h3>
                <span className="text-sm text-gray-500 burmese-text">{level.burmese}</span>
                {isCompleted && <CheckCircle className="w-6 h-6 text-green-500" />}
                {isLocked && <Lock className="w-6 h-6 text-gray-400" />}
              </div>
              <p className="text-gray-600 mt-1">{level.description}</p>
              <p className="text-sm text-gray-500 burmese-text mt-1">
                {level.completed} of {level.units} units completed
              </p>
            </div>
          </div>
          {!isLocked && (
            <TooltipButton text="Continue" variant="primary" />
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`${level.color} h-3 rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Units Preview */}
        {!isLocked && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {Array.from({ length: level.units }).map((_, index) => (
              <UnitPreview
                key={index}
                number={index + 1}
                completed={index < level.completed}
                current={index === level.completed}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface UnitPreviewProps {
  number: number;
  completed: boolean;
  current: boolean;
}

const UnitPreview: React.FC<UnitPreviewProps> = ({ number, completed, current }) => {
  return (
    <Tooltip burmeseText={`ယူနစ် ${number}`}>
      <div
        className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
          completed
            ? 'bg-green-100 text-green-700 border-2 border-green-500'
            : current
            ? 'bg-[#FFD700] text-[#1E3A8A] border-2 border-[#1E3A8A] animate-pulse'
            : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
        }`}
      >
        <div className="text-sm font-semibold">Unit {number}</div>
        {completed && <CheckCircle className="w-4 h-4 mx-auto mt-1" />}
        {current && <Play className="w-4 h-4 mx-auto mt-1" />}
      </div>
    </Tooltip>
  );
};

export default Learn;
