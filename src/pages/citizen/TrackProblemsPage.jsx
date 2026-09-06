import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const TrackProblemsPage = () => {
  const navigate = useNavigate();
  const { communitySignals } = useApp();

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-3 py-1 rounded-md">LIVE CITIZEN TRACKER</span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Track Reported Problems</h1>
        <p className="text-sm text-[#4A4D73]">Follow your reported signals from initial observation to university challenge and deployed student project.</p>
      </div>

      <div className="space-y-4">
        {communitySignals.map(sig => (
          <div key={sig.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
              <div>
                <span className="text-[11px] font-mono text-slate-400 font-bold">{sig.id}</span>
                <h3 className="text-base font-bold text-brand-indigo">{sig.title}</h3>
              </div>
              <span className="text-xs font-bold bg-[#E8F5F3] text-[#159B8C] px-3 py-1 rounded-full border border-[#159B8C]/30 w-fit">
                {sig.status}
              </span>
            </div>

            <p className="text-xs text-[#4A4D73] leading-relaxed">{sig.description}</p>

            {/* Stepper Pipeline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="font-bold block">✓ 1. Reported</span>
                <span className="text-[10px] text-emerald-600">{sig.date}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200">
                <span className="font-bold block">2. Clustered</span>
                <span className="text-[10px] text-indigo-600">Pattern #PAT-001</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F8F8F6] text-slate-500 border border-outline-variant/40">
                <span className="font-bold block">3. University Accepted</span>
                <span className="text-[10px] text-slate-400">Ranchi University</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F8F8F6] text-slate-500 border border-outline-variant/40">
                <span className="font-bold block">4. Deployed</span>
                <span className="text-[10px] text-slate-400">AquaGuard Pilot</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
