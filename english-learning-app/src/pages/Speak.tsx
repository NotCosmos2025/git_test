import React, { useState } from 'react';
import { Mic, Play, Square, Volume2 } from 'lucide-react';
import TooltipButton from '@/components/TooltipButton';

const Speak: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  const exercise = {
    sentence: "The weather is beautiful today.",
    burmeseTranslation: "ယနေ့တွင် ရာသီဥတု လှပပါသည်။",
    phonetic: "/ðə ˈwɛðər ɪz ˈbjuːtɪfəl təˈdeɪ/",
  };

  const handleRecord = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setHasRecorded(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Speaking Practice</h1>
          <p className="text-gray-600 burmese-text">စကားပြော လေ့ကျင့်ရန်</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Exercise Card */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Exercise 1 of 10</span>
              <span className="text-xs bg-[#FFD700] text-[#1E3A8A] px-3 py-1 rounded-full burmese-text">
                အသံထွက် လေ့ကျင့်ခန်း
              </span>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-2xl text-gray-800 font-medium mb-2">{exercise.sentence}</p>
              <p className="text-sm text-gray-500 italic mb-2">{exercise.phonetic}</p>
              <p className="text-gray-600 burmese-text">{exercise.burmeseTranslation}</p>
            </div>

            <div className="flex justify-center mb-6">
              <TooltipButton text="Listen to Native Speaker" variant="outline" icon={<Volume2 className="w-5 h-5 mr-2" />} />
            </div>
          </div>

          {/* Recording Section */}
          <div className="text-center">
            {!isRecording && !hasRecorded && (
              <>
                <button
                  onClick={handleRecord}
                  className="w-24 h-24 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:scale-105"
                >
                  <Mic className="w-12 h-12" />
                </button>
                <p className="text-gray-600">Hold to Record</p>
                <p className="text-sm text-gray-500 burmese-text">သံသွင်းရန် ဖိထားပါ</p>
              </>
            )}

            {isRecording && (
              <>
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Square className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-600">Recording...</p>
                <p className="text-sm text-gray-500 burmese-text">သံသွင်းနေသည်...</p>
              </>
            )}

            {hasRecorded && (
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg flex items-center hover:bg-[#1e40af] transition-colors">
                    <Play className="w-5 h-5 mr-2" />
                    Playback
                  </button>
                  <button
                    onClick={() => setHasRecorded(false)}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg flex items-center hover:bg-gray-300 transition-colors"
                  >
                    Try Again
                  </button>
                </div>

                {/* Feedback */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-3xl font-bold text-green-600">85%</span>
                    <span className="ml-2 text-green-600">Accuracy</span>
                  </div>
                  <p className="text-gray-700 text-center">Good job! Work on the 'th' sound.</p>
                  <p className="text-sm text-gray-500 burmese-text text-center">
                    ကောင်းမွန်ပါတယ်! 'th' အသံကို ပိုမိုလေ့ကျင့်ပါ။
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speak;
