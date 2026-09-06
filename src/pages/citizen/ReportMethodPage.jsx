import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';
import { HelpHint } from '../../components/common/HelpHint.jsx';

export const ReportMethodPage = () => {
  const navigate = useNavigate();
  const { setReportDraft } = useApp();

  const handleSelect = (method) => {
    setReportDraft(prev => ({ ...prev, method }));
    if (method === 'voice') {
      navigate('/citizen/report-voice');
    } else {
      navigate('/citizen/report-text');
    }
  };

  return (
    <div className="pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      {/* Back Link */}
      <div className="w-full max-w-2xl mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-2xl text-center space-y-6">
        <span className="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-[#F1F0FA] px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block">
          STEP 1 OF 5: TELL US YOUR PROBLEM
        </span>

        <h1 className="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold">
          Tell Us Your Problem
        </h1>

        <p className="font-body-lg text-on-surface-variant text-base">
          Choose whichever way feels easiest and most comfortable for you.
        </p>

        {/* 2 Large Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-left">
          
          {/* Option 1: Speak (Primary & Recommended) */}
          <div 
            onClick={() => handleSelect('voice')}
            className="group cursor-pointer p-8 rounded-2xl bg-white border-2 border-brand-indigo hover:bg-surface-container-low hover:shadow-xl transition-all flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 bg-brand-teal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Primary & Recommended
            </div>
            
            <div className="w-20 h-20 rounded-full bg-brand-indigo text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform mt-2">
              <span className="material-symbols-outlined text-4xl">mic</span>
            </div>

            <h2 className="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Speak</h2>
            <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
              Tell us about the problem by speaking naturally in your own language.
            </p>

            <div className="mt-auto w-full bg-brand-indigo text-white py-3 rounded-full font-label-md font-semibold text-sm group-hover:bg-brand-violet transition-colors flex items-center justify-center gap-2 shadow-sm">
              <span>Start Speaking</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>

          {/* Option 2: Write (Alternative Option) */}
          <div 
            onClick={() => handleSelect('text')}
            className="group cursor-pointer p-8 rounded-2xl bg-white border border-outline-variant hover:border-brand-indigo hover:shadow-lg transition-all flex flex-col items-center text-center relative"
          >
            <div className="absolute top-3 right-3 bg-surface-container-low text-on-surface-variant text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-outline-variant/40">
              Alternative Option
            </div>

            <div className="w-20 h-20 rounded-full bg-surface-container-high text-brand-indigo flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform mt-2">
              <span className="material-symbols-outlined text-4xl">edit_note</span>
            </div>

            <h2 className="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Write</h2>
            <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
              Type out your problem details in simple sentences.
            </p>

            <div className="mt-auto w-full bg-white border border-brand-indigo text-brand-indigo py-3 rounded-full font-label-md font-semibold text-sm group-hover:bg-brand-indigo group-hover:text-white transition-colors flex items-center justify-center gap-2">
              <span>Type Details</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>

        </div>

        <HelpHint title="Voice Reporting Guidance" text="You can speak in Hindi, Nagpuri, Santhali, Mundari, English, or any local dialect. Our AI engine automatically transcribes and structures your voice." />
      </div>
    </div>
  );
};
