import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Clock, TrendingUp, Target, Star } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import TooltipButton from '@/components/TooltipButton';

const Home: React.FC = () => {
  const stats = {
    totalTime: '24h 35m',
    currentStreak: 12,
    longestStreak: 15,
    lessonsCompleted: 45,
  };

  const weakAreas = [
    { name: 'Past Tense', burmese: 'အတီတကာလ' },
    { name: 'Vocabulary', burmese: 'ဝေါဟာရ' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to English Learning
            </h1>
            <p className="text-xl text-gray-200 burmese-text mb-8">
              အင်္ဂလိပ်စာကို စိတ်ချမ်းသာစွာ လေ့လာပါ
            </p>
            <div className="flex justify-center space-x-4">
              <TooltipButton text="Start Learning" variant="secondary" size="lg" />
              <TooltipButton text="Continue" variant="outline" size="lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<Clock className="w-8 h-8" />}
            title="Total Time"
            value={stats.totalTime}
            burmeseTitle="စုစုပေါင်း အချိန်"
            color="bg-blue-500"
          />
          <StatCard
            icon={<Trophy className="w-8 h-8" />}
            title="Current Streak"
            value={`${stats.currentStreak} days`}
            burmeseTitle="လက်ရှိ အဆက်မပြတ်"
            color="bg-green-500"
          />
          <StatCard
            icon={<Star className="w-8 h-8" />}
            title="Longest Streak"
            value={`${stats.longestStreak} days`}
            burmeseTitle="အရှည်ဆုံး အဆက်မပြတ်"
            color="bg-yellow-500"
          />
          <StatCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Lessons Completed"
            value={stats.lessonsCompleted.toString()}
            burmeseTitle="ပြီးဆုံးသော သင်ခန်းစာများ"
            color="bg-purple-500"
          />
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Continue Learning</h2>
              <span className="text-sm text-gray-500 burmese-text">လေ့လာမှုကို ဆက်လုပ်ရန်</span>
            </div>
            
            <div className="space-y-4">
              <LessonCard
                level="A2 Elementary"
                unit="Unit 3: Past Simple Tense"
                lesson="Lesson 4: Negative Sentences"
                progress={75}
                burmeseLevel="အလယ်အလတ် အဆင့်"
              />
              
              <div className="flex justify-center mt-6">
                <TooltipButton text="View All Lessons" variant="primary" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weak Areas */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-red-500" />
                  Weak Areas
                </h3>
                <span className="text-xs text-gray-500 burmese-text">အားနည်းသော နေရာများ</span>
              </div>
              <div className="space-y-3">
                {weakAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700">{area.name}</span>
                    <span className="text-sm text-gray-500 burmese-text">{area.burmese}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Practice</h3>
              <div className="space-y-3">
                <TooltipButton text="Flashcards" variant="outline" size="sm" className="w-full" />
                <TooltipButton text="MCQ Practice" variant="outline" size="sm" className="w-full" />
                <TooltipButton text="Speaking Exercise" variant="outline" size="sm" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  burmeseTitle: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, burmeseTitle, color }) => {
  return (
    <Tooltip burmeseText={burmeseTitle}>
      <div className={`${color} text-white rounded-xl p-6 cursor-pointer hover:opacity-90 transition-opacity`}>
        <div className="flex items-center justify-between">
          <div>{icon}</div>
        </div>
        <p className="text-sm opacity-90 mt-2">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
    </Tooltip>
  );
};

interface LessonCardProps {
  level: string;
  unit: string;
  lesson: string;
  progress: number;
  burmeseLevel: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ level, unit, lesson, progress, burmeseLevel }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold text-gray-800">{unit}</h4>
          <p className="text-sm text-gray-600">{lesson}</p>
        </div>
        <span className="text-xs bg-[#FFD700] text-[#1E3A8A] px-2 py-1 rounded burmese-text">
          {burmeseLevel}
        </span>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#1E3A8A] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
