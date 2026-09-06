import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const ValidationQueuePage = () => {
  const navigate = useNavigate();
  const { communityPatterns, runPatternDetection, openPatternForValidation, createChallengeDraft } = useApp();
  const [activeTab, setActiveTab] = useState('NEW REQUESTS');

  const patterns = communityPatterns.length ? communityPatterns : runPatternDetection();

  const handleEvaluate = (pattern) => {
    openPatternForValidation(pattern.id);
    createChallengeDraft(pattern);
    navigate('/university/challenge-formation');
  };

  return (
    <div className="pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-outline-variant/60 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#3F3A8A] uppercase tracking-widest bg-[#F1F0FA] border border-[#3F3A8A]/20 px-3 py-1 rounded-full">
            MATCHED OPPORTUNITIES
          </span>
          <span className="text-xs font-semibold text-slate-600">• Ranchi University</span>
        </div>

        <h1 className="font-display-lg text-[#24285B] text-3xl sm:text-4xl font-extrabold tracking-tight">
          Community Problems for Your Institution
        </h1>

        <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-3xl">
          Review validated community problems matched to your university's expertise and determine whether your institution can take responsibility for developing a solution.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-outline-variant/60 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
        {['NEW REQUESTS (3)', 'UNDER EVALUATION (5)', 'READY FOR DECISION (2)', 'ACCEPTED (12)', 'DECLINED (1)'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.split(' ')[0])}
            className={`px-4 py-2 shrink-0 cursor-pointer ${activeTab === tab.split(' ')[0] ? 'text-brand-indigo border-b-2 border-brand-indigo font-bold' : 'text-on-surface-variant hover:text-brand-indigo font-semibold'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards List */}
      <div className="space-y-6">
        {patterns.map(pat => (
          <div key={pat.id} className="bg-white rounded-2xl border border-outline-variant/60 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#24285B] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  HIGH MATCH ({pat.matchScore || 94}%)
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">{pat.id}</span>
              </div>
              <span className="text-xs text-slate-500 font-semibold">Matched: 2 hours ago</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-[#1A1A1A]">{pat.title}</h2>
              <p className="text-sm text-[#4A4D73] leading-relaxed">{pat.summary || 'Recurring drinking water quality observations across rural clusters.'}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Primary Domain</span>
                <span className="font-bold text-[#1A1A1A]">{pat.primaryDomain}</span>
              </div>
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Signal Density</span>
                <span className="font-bold text-[#1A1A1A]">{pat.signalCount} signals / 3 districts</span>
              </div>
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Affected Groups</span>
                <span className="font-bold text-[#1A1A1A]">{pat.affectedGroups?.join(', ')}</span>
              </div>
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Recommended Dept</span>
                <span className="font-bold text-[#1A1A1A]">Environmental / Civil Engineering</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4">
              <span className="text-xs text-slate-500 font-medium">Validated by Ranchi District Nodal Committee</span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button onClick={() => handleEvaluate(pat)} className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors">
                  Evaluate & Form Challenge →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
