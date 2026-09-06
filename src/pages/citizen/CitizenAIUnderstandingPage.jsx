import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const CitizenAIUnderstandingPage = () => {
  const navigate = useNavigate();
  const { reportDraft } = useApp();

  return (
    <div className="pt-12 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#F1F0FA] text-brand-indigo flex items-center justify-center animate-bounce">
        <span className="material-symbols-outlined text-3xl">psychology</span>
      </div>

      <div className="space-y-2 max-w-lg">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-wider bg-[#F1F0FA] px-3 py-1 rounded-full">AI SYNTHESIS ENGINE</span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Structuring Your Observation</h1>
        <p className="text-sm text-[#4A4D73]">Extracting primary domain, affected populations, and regional geo-cluster coordinates...</p>
      </div>

      <div className="w-full max-w-lg bg-white border border-outline-variant/60 rounded-2xl p-6 shadow-lg space-y-4 text-left">
        <div className="flex items-center justify-between border-b pb-3 text-xs">
          <span className="font-bold text-brand-indigo">Report Ref: {reportDraft.reportId || 'SS-2026-00401'}</span>
          <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">96% AI Confidence</span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-lg bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Primary Domain</span>
            <span className="font-bold text-[#1A1A1A]">Water Quality & Sanitation</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Extracted Location</span>
            <span className="font-bold text-[#1A1A1A]">Gumla Sector 4, Jharkhand</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Extracted Impact</span>
            <span className="font-bold text-[#1A1A1A]">Drinking water contamination & public health risk</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/citizen/ai-confirmation')}
          className="w-full py-3 rounded-full bg-brand-indigo text-white text-xs font-bold hover:bg-brand-violet transition-colors"
        >
          Review AI Breakdown →
        </button>
      </div>
    </div>
  );
};
