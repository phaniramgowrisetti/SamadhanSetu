import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const DiscoverChallengesPage = () => {
  const navigate = useNavigate();
  const { challenges } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');

  const domains = ['All', 'Water Quality & Sanitation', 'Renewable Energy', 'Civic Infrastructure', 'Healthcare'];

  const filtered = challenges.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.problemStatement.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDomain = selectedDomain === 'All' || c.primaryDomain === selectedDomain;
    return matchSearch && matchDomain;
  });

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F3] border border-[#159B8C]/30 text-[#159B8C] text-xs font-bold uppercase tracking-wider">
          <span className="material-symbols-outlined text-base">school</span> STUDENT INNOVATION PORTAL
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-indigo">Discover Institutional Challenges</h1>
        <p className="text-sm text-[#4A4D73] max-w-2xl">
          Browse validated community challenges accepted and published by Ranchi University. Form teams, submit technical proposals, and build real-world solutions.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-outline-variant/60 shadow-xs">
        <div className="relative w-full sm:w-96">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-base">search</span>
          <input
            type="text"
            placeholder="Search challenges by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#F8F8F6] border border-outline-variant/60 rounded-xl text-xs text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {domains.map(d => (
            <button
              key={d}
              onClick={() => setSelectedDomain(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 cursor-pointer transition-colors ${selectedDomain === d ? 'bg-[#24285B] text-white' : 'bg-[#F8F8F6] text-[#4A4D73] hover:bg-[#F1F0FA]'}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(ch => (
          <div key={ch.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-slate-400">{ch.id}</span>
                <span className="bg-[#E8F5F3] text-[#159B8C] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-[#159B8C]/30">
                  {ch.primaryDomain}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1A1A1A] leading-snug">{ch.title}</h3>
              <p className="text-xs text-[#4A4D73] line-clamp-3 leading-relaxed">{ch.problemStatement}</p>

              <div className="space-y-1 pt-2 border-t text-[11px] text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-brand-indigo">location_on</span>
                  <span>{ch.locations?.join(', ') || 'Gumla, Latehar'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-brand-indigo">account_balance</span>
                  <span>Ranchi University • Mentor Assigned</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Status: Open</span>
              <button 
                onClick={() => navigate(`/student/challenges/${ch.id}`)}
                className="px-4 py-2 rounded-xl bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors flex items-center gap-1"
              >
                <span>View Challenge</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChallengeDetailPage = () => {
  const navigate = useNavigate();
  const { challenges } = useApp();

  const ch = challenges[0] || {
    id: 'CH-2026-001',
    title: 'Rural Water Quality Monitoring & Rapid Contamination Detection',
    problemStatement: 'Groundwater from community hand pumps across Gumla and Latehar has shown recurring brown discoloration and metallic odor following monsoon rains.',
    whoIsAffected: 'Families, school children, and agricultural workers in rural hamlets.',
    whyItMatters: 'Groundwater contamination poses immediate health risks and requires early optical telemetry detection.',
    primaryDomain: 'Water Quality & Sanitation',
    locations: ['Gumla Sector 4', 'Latehar Block B'],
    focusAreas: ['Optical sensors', 'Solar power telemetry', 'LoRaWAN SMS mesh', 'Water quality alerts']
  };

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto space-y-8">
      <button onClick={() => navigate('/student/challenges')} className="inline-flex items-center gap-1 text-xs font-bold text-brand-indigo hover:text-brand-violet">
        <span className="material-symbols-outlined text-base">arrow_back</span> Back to Discover Challenges
      </button>

      <div className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6 text-left">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-slate-400">{ch.id} • Ranchi University</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-indigo mt-1">{ch.title}</h1>
          </div>
          <span className="text-xs font-bold bg-[#E8F5F3] text-[#159B8C] px-3.5 py-1.5 rounded-full border border-[#159B8C]/30 w-fit">
            {ch.primaryDomain}
          </span>
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <h4 className="font-bold text-sm text-brand-indigo mb-1">Problem Statement</h4>
            <p className="text-[#4A4D73] leading-relaxed text-sm">{ch.problemStatement}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#F8F8F6] p-4 rounded-xl">
              <h5 className="font-bold text-brand-violet uppercase tracking-wider mb-1">Who Is Affected</h5>
              <p className="text-[#1A1A1A]">{ch.whoIsAffected}</p>
            </div>
            <div className="bg-[#F8F8F6] p-4 rounded-xl">
              <h5 className="font-bold text-brand-violet uppercase tracking-wider mb-1">Why It Matters</h5>
              <p className="text-[#1A1A1A]">{ch.whyItMatters}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-brand-indigo mb-2">Technical Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {ch.focusAreas?.map((fa, i) => (
                <span key={i} className="bg-[#F1F0FA] text-brand-indigo font-semibold px-3 py-1 rounded-lg border border-[#352C85]/20">
                  {fa}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
          <button 
            onClick={() => navigate('/student/teams')} 
            className="flex-1 py-3.5 rounded-full bg-[#159B8C] text-white text-xs font-bold hover:bg-teal-700 transition-colors text-center"
          >
            Form or Join a Student Team →
          </button>
          <button 
            onClick={() => navigate('/student/proposals')} 
            className="flex-1 py-3.5 rounded-full bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors text-center"
          >
            Submit Solution Proposal →
          </button>
        </div>
      </div>
    </div>
  );
};
