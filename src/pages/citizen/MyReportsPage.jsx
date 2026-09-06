import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const MyReportsPage = () => {
  const navigate = useNavigate();
  const { communitySignals } = useApp();

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-indigo">My Reported Signals</h1>
          <p className="text-sm text-[#4A4D73]">All community observations you have submitted to SamadhanSetu.</p>
        </div>
        <button onClick={() => navigate('/citizen/report-method')} className="px-5 py-2.5 rounded-full bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors">
          + Share New Problem
        </button>
      </div>

      <div className="space-y-4">
        {communitySignals.map(sig => (
          <div key={sig.id} className="bg-white border border-outline-variant/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-slate-400">{sig.id} • {sig.date}</span>
              <h3 className="text-base font-bold text-brand-indigo">{sig.title}</h3>
              <p className="text-xs text-[#4A4D73]">{sig.location}</p>
            </div>
            <button onClick={() => navigate('/citizen/track-problems')} className="px-4 py-2 rounded-xl bg-[#F1F0FA] text-brand-indigo text-xs font-bold hover:bg-[#E5E3F5]">
              Track Pipeline →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CitizenProfilePage = () => {
  const { userProfile } = useApp();

  return (
    <div className="py-12 px-6 max-w-2xl mx-auto space-y-6">
      <div className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6 text-left">
        <div className="flex items-center gap-4 border-b pb-6">
          <div className="w-16 h-16 rounded-full bg-[#24285B] text-white font-extrabold text-xl flex items-center justify-center">
            {userProfile.name[0]}
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-brand-indigo">{userProfile.name}</h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">{userProfile.roleTitle}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Location</span>
            <span className="font-bold text-[#1A1A1A]">{userProfile.location}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Phone</span>
            <span className="font-bold text-[#1A1A1A]">{userProfile.phone}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Signals Reported</span>
            <span className="font-bold text-[#1A1A1A]">{userProfile.reportedCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F8F8F6]">
            <span className="text-slate-400 block text-[10px] uppercase">Solutions Deployed</span>
            <span className="font-bold text-[#1A1A1A]">{userProfile.resolvedCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
