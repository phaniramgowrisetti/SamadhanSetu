import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CommunitySignalConfirmedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-12 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl">
        <span className="material-symbols-outlined text-4xl">check_circle</span>
      </div>

      <div className="space-y-2 max-w-lg">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          SIGNAL CONFIRMED & CLUSTERED
        </span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Your Report is Live in the Engine!</h1>
        <p className="text-sm text-[#4A4D73]">Your observation has been registered as an active community signal. It is now eligible for pattern clustering with nearby reports.</p>
      </div>

      <div className="w-full max-w-md bg-white border border-outline-variant/60 rounded-2xl p-6 shadow-md space-y-4 text-left">
        <h4 className="text-xs font-bold text-brand-indigo uppercase tracking-wider">Next Steps in the Pipeline</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-600 font-semibold">
            <span className="material-symbols-outlined text-base">check</span> 1. Signal Confirmed
          </div>
          <div className="flex items-center gap-2 text-brand-indigo font-semibold">
            <span className="material-symbols-outlined text-base">hub</span> 2. Clustering into Community Pattern
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="material-symbols-outlined text-base">school</span> 3. University Review & Challenge Formation
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <button onClick={() => navigate('/citizen/track-problems')} className="w-full py-3 rounded-full bg-brand-indigo text-white text-xs font-bold hover:bg-brand-violet transition-colors">
            Track Report Status →
          </button>
          <button onClick={() => navigate('/citizen/my-reports')} className="w-full py-3 rounded-full bg-white border border-outline-variant text-[#1A1A1A] text-xs font-bold hover:bg-[#F8F8F6] transition-colors">
            View My Reports
          </button>
        </div>
      </div>
    </div>
  );
};
