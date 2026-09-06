import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const MentorDashboardPage = () => {
  const navigate = useNavigate();
  const { challenges, communityPatterns, runPatternDetection } = useApp();

  const patterns = communityPatterns.length ? communityPatterns : runPatternDetection();

  return (
    <div className="pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1280px] mx-auto w-full space-y-10">
      
      {/* COMMAND CENTER HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/60 pb-8">
        <div className="space-y-2 max-w-2xl">
          <span className="font-label-sm text-brand-violet uppercase tracking-widest text-[11px] font-bold block">
            UNIVERSITY WORKSPACE • Ranchi University
          </span>

          <h1 className="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
            Good morning, Innovation Team
          </h1>

          <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
            Manage incoming community challenges, guide institutional decisions, and track innovation projects from validation to deployment.
          </p>
        </div>

        {/* Pulse Panel */}
        <div className="bg-white p-4 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-2 min-w-[240px] shrink-0">
          <div className="flex items-center justify-between border-b border-outline-variant/40 pb-1.5">
            <span className="text-[10px] font-extrabold text-brand-indigo uppercase tracking-widest">INNOVATION PULSE</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-on-surface-variant">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet"></span>
              <strong className="text-brand-indigo font-mono">3</strong> New requests
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <strong className="text-brand-indigo font-mono">2</strong> Pending
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              <strong className="text-brand-indigo font-mono">12</strong> Active
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <strong className="text-brand-indigo font-mono">4</strong> Deployed
            </div>
          </div>
        </div>
      </div>

      {/* METRIC STRIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Incoming Problems</span>
            <span className="w-8 h-8 rounded-xl bg-[#F1F0FA] text-brand-indigo flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">inbox</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-brand-indigo font-mono">3</span>
            <span className="text-xs text-emerald-600 font-semibold">+2 this week</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Published Challenges</span>
            <span className="w-8 h-8 rounded-xl bg-[#E8F5F3] text-[#159B8C] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">campaign</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-brand-indigo font-mono">{challenges.length}</span>
            <span className="text-xs text-slate-500 font-semibold">Active student challenges</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Student Teams</span>
            <span className="w-8 h-8 rounded-xl bg-[#FFF8E6] text-amber-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">groups</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-brand-indigo font-mono">8</span>
            <span className="text-xs text-emerald-600 font-semibold">Active in incubator</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Deployed Pilots</span>
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">rocket_launch</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-brand-indigo font-mono">4</span>
            <span className="text-xs text-slate-500 font-semibold">Live in 12 villages</span>
          </div>
        </div>
      </div>

      {/* TWO COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Priority Action Items */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-bold text-lg text-brand-indigo">Priority Opportunities</h3>
            <button onClick={() => navigate('/university/validation-queue')} className="text-xs font-bold text-brand-violet hover:underline">
              View All (3) →
            </button>
          </div>

          <div className="space-y-4">
            {patterns.slice(0, 2).map(pat => (
              <div key={pat.id} className="bg-white rounded-2xl border border-outline-variant/60 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-indigo uppercase tracking-wider bg-[#F1F0FA] px-3 py-1 rounded-full">
                    {pat.primaryDomain}
                  </span>
                  <span className="text-slate-400 font-mono">{pat.id}</span>
                </div>

                <h4 className="text-lg font-bold text-[#1A1A1A]">{pat.title}</h4>
                <p className="text-xs text-[#4A4D73] leading-relaxed">{pat.summary || 'Clustered community signals from rural hamlets.'}</p>

                <div className="flex items-center justify-between pt-2 border-t text-xs">
                  <span className="text-slate-500">{pat.signalCount} signals • {pat.locations?.join(', ')}</span>
                  <button 
                    onClick={() => navigate('/university/validation-queue')}
                    className="px-4 py-2 rounded-xl bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors"
                  >
                    Evaluate Opportunity →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Navigation & Team Hub */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-outline-variant/60 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-brand-indigo border-b pb-2">Institutional Actions</h3>
            <div className="space-y-2 text-xs font-semibold">
              <button onClick={() => navigate('/university/validation-queue')} className="w-full text-left p-3 rounded-xl bg-[#F8F8F6] hover:bg-[#F1F0FA] text-[#1A1A1A] flex items-center justify-between">
                <span>Evaluate Opportunities</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button onClick={() => navigate('/university/projects')} className="w-full text-left p-3 rounded-xl bg-[#F8F8F6] hover:bg-[#F1F0FA] text-[#1A1A1A] flex items-center justify-between">
                <span>Track Active Projects</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button onClick={() => navigate('/university/collaborations')} className="w-full text-left p-3 rounded-xl bg-[#F8F8F6] hover:bg-[#F1F0FA] text-[#1A1A1A] flex items-center justify-between">
                <span>Inter-University Mesh</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button onClick={() => navigate('/university/profile')} className="w-full text-left p-3 rounded-xl bg-[#F8F8F6] hover:bg-[#F1F0FA] text-[#1A1A1A] flex items-center justify-between">
                <span>University Profile & Faculty</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
