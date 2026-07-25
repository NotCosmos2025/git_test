import React from 'react';
import { Clock, TrendingUp, Award, Calendar } from 'lucide-react';
import Tooltip from '@/components/Tooltip';

const Statistics: React.FC = () => {
  const stats = {
    totalTime: '24h 35m',
    currentStreak: 12,
    longestStreak: 15,
    lessonsCompleted: 45,
    practiceQuestions: 230,
    speakingExercises: 67,
  };

  const weeklyActivity = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 60 },
    { day: 'Wed', minutes: 30 },
    { day: 'Thu', minutes: 90 },
    { day: 'Fri', minutes: 45 },
    { day: 'Sat', minutes: 0 },
    { day: 'Sun', minutes: 75 },
  ];

  const skillBreakdown = [
    { skill: 'Reading', percentage: 75, burmese: 'ဖတ်ခြင်း' },
    { skill: 'Listening', percentage: 65, burmese: 'နားထောင်ခြင်း' },
    { skill: 'Speaking', percentage: 55, burmese: 'ပြောဆိုခြင်း' },
    { skill: 'Writing', percentage: 85, burmese: 'ရေးသားခြင်း' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Statistics & Progress</h1>
          <p className="text-gray-600 burmese-text">စာရင်းအင်းများနှင့် တိုးတက်မှု</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<Clock className="w-8 h-8" />}
            title="Total Time"
            value={stats.totalTime}
            burmeseTitle="စုစုပေါင်း အချိန်"
            color="bg-blue-500"
          />
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Current Streak"
            value={`${stats.currentStreak} days`}
            burmeseTitle="လက်ရှိ အဆက်မပြတ်"
            color="bg-green-500"
          />
          <StatCard
            icon={<Award className="w-8 h-8" />}
            title="Lessons Completed"
            value={stats.lessonsCompleted.toString()}
            burmeseTitle="ပြီးဆုံးသော သင်ခန်းစာများ"
            color="bg-yellow-500"
          />
          <StatCard
            icon={<Calendar className="w-8 h-8" />}
            title="Longest Streak"
            value={`${stats.longestStreak} days`}
            burmeseTitle="အရှည်ဆုံး အဆက်မပြတ်"
            color="bg-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Activity</h2>
            <div className="flex items-end justify-between h-48 space-x-2">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-[#1E3A8A] rounded-t transition-all duration-300 hover:bg-[#1e40af]"
                    style={{ height: `${(day.minutes / 90) * 100}%` }}
                  />
                  <span className="text-xs text-gray-600 mt-2">{day.day}</span>
                  <span className="text-xs text-gray-400 burmese-text">{day.minutes}m</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skill Breakdown</h2>
            <div className="space-y-4">
              {skillBreakdown.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-medium text-gray-700">{skill.skill}</span>
                      <span className="text-sm text-gray-500 burmese-text ml-2">{skill.burmese}</span>
                    </div>
                    <span className="font-medium text-gray-700">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#1E3A8A] to-[#FFD700] h-3 rounded-full transition-all duration-300"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
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

export default Statistics;
