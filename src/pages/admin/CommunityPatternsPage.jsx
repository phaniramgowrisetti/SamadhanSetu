import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const CommunityPatternsPage = () => {
  const navigate = useNavigate();
  const { communityPatterns, runPatternDetection } = useApp();

  const patterns = communityPatterns.length ? communityPatterns : runPatternDetection();

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-3 py-1 rounded-md">PHASE 6 PATTERN ENGINE</span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Clustered Community Patterns</h1>
        <p className="text-sm text-[#4A4D73]">AI-grouped observations across contiguous rural hamlets and districts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patterns.map(pat => (
          <div key={pat.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-slate-400">{pat.id}</span>
              <span className="text-xs font-bold bg-[#F1F0FA] text-brand-indigo px-3 py-1 rounded-full">{pat.signalCount} Connected Signals</span>
            </div>

            <h3 className="text-xl font-bold text-brand-indigo">{pat.title}</h3>
            <p className="text-xs text-[#4A4D73] leading-relaxed">{pat.summary || 'Multiple independent signals reporting similar concerns across hamlets.'}</p>

            <div className="pt-2 flex items-center justify-between border-t text-xs">
              <span className="text-slate-500 font-medium">Locations: {pat.locations?.join(', ')}</span>
              <button 
                onClick={() => navigate('/admin/validation-queue')} 
                className="text-brand-violet font-bold hover:underline"
              >
                Review Pattern →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
