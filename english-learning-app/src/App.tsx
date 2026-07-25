import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Learn from '@/pages/Learn';
import Practice from '@/pages/Practice';
import Speak from '@/pages/Speak';
import Statistics from '@/pages/Statistics';
import Profile from '@/pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9FAFB]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/speak" element={<Speak />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-[#1E3A8A] text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg mb-2">English Learning App for Burmese Students</p>
            <p className="text-sm text-gray-300 burmese-text">မြန်မာကျောင်းသားများအတွက် အင်္ဂလိပ်စာ သင်ကြားရေး အပလီကေးရှင်း</p>
            <p className="text-xs text-gray-400 mt-4">
              © 2024 English Learning App. Built with ❤️ for Myanmar students.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
