import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CitizenAIConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-12 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col items-center justify-center space-y-6">
      <div className="w-full max-w-2xl text-center space-y-3">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-4 py-1.5 rounded-full border border-outline-variant/40">
          CONFIRM AI UNDERSTANDING
        </span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Does this accurately capture your problem?</h1>
        <p className="text-sm text-[#4A4D73]">Confirming helps the system cluster your report with nearby signals.</p>
      </div>

      <div className="w-full max-w-2xl bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-xl space-y-6 text-left">
        <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-outline-variant/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-brand-indigo">Water Quality & Sanitation</span>
            <span className="text-xs font-bold text-brand-violet bg-[#F1F0FA] px-3 py-1 rounded-full">Community Health</span>
          </div>
          <p className="text-xs text-[#1A1A1A] leading-relaxed">
            "Groundwater discoloration and metallic odor from hand pump following monsoon rains in Gumla Sector 4, posing drinking water concerns for families."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/citizen/signal-confirmed')}
            className="flex-1 py-3.5 rounded-full bg-brand-indigo text-white text-xs font-bold hover:bg-brand-violet transition-all shadow-md text-center"
          >
            ✓ Yes, That's Accurate
          </button>
          <button 
            onClick={() => navigate('/citizen/report-method')}
            className="flex-1 py-3.5 rounded-full bg-white border border-outline-variant text-[#1A1A1A] text-xs font-bold hover:bg-[#F8F8F6] transition-all text-center"
          >
            Edit / Correct Details
          </button>
        </div>
      </div>
    </div>
  );
};
