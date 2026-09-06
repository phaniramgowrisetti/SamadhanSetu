import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const ChallengeFormationPage = () => {
  const navigate = useNavigate();
  const { activeChallengeDraft, setActiveChallengeDraft, publishChallenge } = useApp();

  const draft = activeChallengeDraft || {
    id: 'CH-2026-001',
    title: 'Rural Water Quality Monitoring & Rapid Contamination Detection',
    problemStatement: 'Communities across Gumla and Latehar are reporting recurring concerns about groundwater quality after monsoon rains.',
    whoIsAffected: 'Rural hamlets, families, and school children.',
    whyItMatters: 'Groundwater discoloration poses health risks.',
    primaryDomain: 'Water Quality & Sanitation',
    locations: ['Gumla Sector 4', 'Latehar Block B']
  };

  const [form, setForm] = useState(draft);

  const handlePublish = (e) => {
    e.preventDefault();
    publishChallenge(form);
    navigate('/university/challenge-published');
  };

  return (
    <div className="pt-8 pb-20 px-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2 border-b pb-4">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-3 py-1 rounded-full">
          CHALLENGE CREATION STUDIO
        </span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Formulate Student Challenge</h1>
        <p className="text-sm text-[#4A4D73]">Convert community problem pattern into an actionable student hackathon challenge.</p>
      </div>

      <form onSubmit={handlePublish} className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6 text-left">
        <div>
          <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Challenge Title</label>
          <input 
            type="text" 
            value={form.title} 
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm font-bold text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Problem Statement</label>
          <textarea 
            rows="3" 
            value={form.problemStatement} 
            onChange={(e) => setForm({ ...form, problemStatement: e.target.value })}
            className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-bold text-[#1A1A1A] mb-1">Primary Domain</label>
            <input 
              type="text" 
              value={form.primaryDomain} 
              onChange={(e) => setForm({ ...form, primaryDomain: e.target.value })}
              className="w-full border border-outline-variant/60 rounded-xl p-2.5 text-xs text-[#1A1A1A]"
            />
          </div>
          <div>
            <label className="block font-bold text-[#1A1A1A] mb-1">Assigned Faculty Mentor</label>
            <input 
              type="text" 
              defaultValue="Dr. Alok Kumar (HOD Environmental Sciences)" 
              className="w-full border border-outline-variant/60 rounded-xl p-2.5 text-xs text-[#1A1A1A]"
            />
          </div>
        </div>

        <button type="submit" className="w-full py-3.5 rounded-full bg-[#24285B] text-white text-sm font-bold hover:bg-brand-violet transition-all shadow-md">
          Publish Challenge to Student Portal →
        </button>
      </form>
    </div>
  );
};

export const ChallengePublishedPage = () => {
  const navigate = useNavigate();
  const { publishedChallengeSuccess } = useApp();

  const challenge = publishedChallengeSuccess || {
    id: 'CH-2026-001',
    title: 'Rural Water Quality Monitoring & Rapid Contamination Detection'
  };

  return (
    <div className="pt-12 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-brand-violet text-white flex items-center justify-center shadow-xl">
        <span className="material-symbols-outlined text-4xl">campaign</span>
      </div>

      <div className="space-y-2 max-w-lg">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-3 py-1 rounded-full border border-[#352C85]/20">
          CHALLENGE LIVE IN STUDENT PORTAL
        </span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Challenge Successfully Published!</h1>
        <p className="text-sm text-[#4A4D73]">Students across affiliated colleges can now discover this challenge, form teams, and submit solution proposals.</p>
      </div>

      <div className="w-full max-w-md bg-white border border-outline-variant/60 rounded-2xl p-6 shadow-md space-y-4 text-left">
        <div className="p-3 rounded-xl bg-[#F8F8F6] text-xs space-y-1">
          <span className="font-mono text-slate-400 font-bold">{challenge.id}</span>
          <h4 className="font-bold text-brand-indigo text-sm">{challenge.title}</h4>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={() => navigate('/student/challenges')} className="w-full py-3 rounded-full bg-[#159B8C] text-white text-xs font-bold hover:bg-teal-700 transition-colors">
            View in Student Portal →
          </button>
          <button onClick={() => navigate('/university/dashboard')} className="w-full py-3 rounded-full bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors">
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
