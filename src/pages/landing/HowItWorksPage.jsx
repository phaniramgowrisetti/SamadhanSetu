import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HowItWorksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-3 py-1 rounded-md">CIVIC INNOVATION ARCHITECTURE</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-indigo">How SamadhanSetu Works</h1>
        <p className="text-sm text-[#4A4D73]">A closed-loop system connecting ground observations directly into institutional research and engineering deployment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white border border-outline-variant/60 rounded-2xl p-6 space-y-3">
          <span className="w-8 h-8 rounded-lg bg-[#24285B] text-white font-extrabold text-sm flex items-center justify-center">1</span>
          <h3 className="font-bold text-base text-brand-indigo">Ground Signal Capture</h3>
          <p className="text-xs text-[#4A4D73] leading-relaxed">Citizens report localized issues via voice or text. Structured AI extracts domain, location, and severity.</p>
        </div>

        <div className="bg-white border border-outline-variant/60 rounded-2xl p-6 space-y-3">
          <span className="w-8 h-8 rounded-lg bg-brand-violet text-white font-extrabold text-sm flex items-center justify-center">2</span>
          <h3 className="font-bold text-base text-brand-indigo">Pattern Detection & Validation</h3>
          <p className="text-xs text-[#4A4D73] leading-relaxed">Multiple signals across hamlets are clustered into community patterns. Validators route confirmed patterns to universities.</p>
        </div>

        <div className="bg-white border border-outline-variant/60 rounded-2xl p-6 space-y-3">
          <span className="w-8 h-8 rounded-lg bg-[#159B8C] text-white font-extrabold text-sm flex items-center justify-center">3</span>
          <h3 className="font-bold text-base text-brand-indigo">Challenge & Student Deployment</h3>
          <p className="text-xs text-[#4A4D73] leading-relaxed">Universities accept problems, publish student challenges, incubate selected proposals, and deploy solutions back into communities.</p>
        </div>
      </div>

      <div className="text-center">
        <button onClick={() => navigate('/citizen/report-method')} className="px-8 py-3 rounded-full bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors">
          Start By Sharing a Problem →
        </button>
      </div>
    </div>
  );
};
