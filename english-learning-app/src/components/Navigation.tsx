import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Mic, BarChart3, User, Menu, X } from 'lucide-react';
import Tooltip from './Tooltip';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/learn', label: 'Learn', icon: BookOpen },
    { path: '/practice', label: 'Practice', icon: BookOpen },
    { path: '/speak', label: 'Speak', icon: Mic },
    { path: '/statistics', label: 'Statistics', icon: BarChart3 },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#1E3A8A] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#FFD700]">English Learning</span>
              <span className="text-sm text-gray-300 burmese-text">အင်္ဂလိပ်စာ လေ့လာရေး</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Tooltip key={item.path} burmeseText={getBurmeseTranslationForNav(item.label)}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-[#FFD700] text-[#1E3A8A]'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </Tooltip>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E3A8A] border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-[#FFD700] text-[#1E3A8A]'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <div className="flex-1">
                    <span className="font-medium block">{item.label}</span>
                    <span className="text-xs text-gray-300 burmese-text block">
                      {getBurmeseTranslationForNav(item.label)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper function for navigation translations
const getBurmeseTranslationForNav = (text: string): string => {
  const translations: Record<string, string> = {
    'Home': 'ပင်မစာမျက်နှာ',
    'Learn': 'လေ့လာရန်',
    'Practice': 'လေ့ကျင့်ရန်',
    'Speak': 'ပြောဆိုရန်',
    'Statistics': 'စာရင်းအင်းများ',
    'Profile': 'ပရိုဖိုင်',
  };
  return translations[text] || text;
};

export default Navigation;
