import React from 'react';
import { User, Mail, Calendar, Award } from 'lucide-react';
import TooltipButton from '@/components/TooltipButton';

const Profile: React.FC = () => {
  const userProfile = {
    name: 'Kyaw Kyaw',
    email: 'kyawkyaw@example.com',
    memberSince: 'January 2024',
    level: 'A2 Elementary',
    totalXP: 1250,
    achievements: 12,
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Profile</h1>
          <p className="text-gray-600 burmese-text">ပရိုဖိုင်</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] text-white p-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-[#1E3A8A]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{userProfile.name}</h2>
                <p className="text-gray-200 mt-1">{userProfile.level}</p>
                <p className="text-sm text-gray-300 burmese-text mt-1">အဆင့် - A2 အလယ်အလတ်</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 text-[#1E3A8A]" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{userProfile.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-6 h-6 text-[#1E3A8A]" />
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">{userProfile.memberSince}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Award className="w-6 h-6 text-[#1E3A8A]" />
                <div>
                  <p className="text-sm text-gray-500">Total XP</p>
                  <p className="font-medium">{userProfile.totalXP}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Award className="w-6 h-6 text-[#1E3A8A]" />
                <div>
                  <p className="text-sm text-gray-500">Achievements</p>
                  <p className="font-medium">{userProfile.achievements}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <TooltipButton text="Edit Profile" variant="primary" />
              <TooltipButton text="Settings" variant="outline" />
              <TooltipButton text="Export Progress" variant="outline" />
              <TooltipButton text="Logout" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
