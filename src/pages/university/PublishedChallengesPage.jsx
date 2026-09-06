import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const PublishedChallengesPage = () => {
  const navigate = useNavigate();
  const { challenges } = useApp();

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-indigo">Published Challenges</h1>
          <p className="text-sm text-[#4A4D73]">Challenges actively published for student teams by Ranchi University.</p>
        </div>
        <button onClick={() => navigate('/university/validation-queue')} className="px-5 py-2.5 rounded-full bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet">
          + Create From Opportunity
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map(ch => (
          <div key={ch.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400">{ch.id}</span>
              <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">{ch.status || 'Open'}</span>
            </div>

            <h3 className="text-lg font-bold text-brand-indigo">{ch.title}</h3>
            <p className="text-xs text-[#4A4D73] leading-relaxed">{ch.problemStatement}</p>

            <div className="flex items-center justify-between pt-2 border-t text-xs">
              <span className="text-slate-500 font-medium">Domain: {ch.primaryDomain}</span>
              <button onClick={() => navigate(`/student/challenges`)} className="text-brand-violet font-bold hover:underline">
                View Student View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectsPage = () => {
  const navigate = useNavigate();
  const { projects } = useApp();

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Incubated Innovation Projects</h1>
        <p className="text-sm text-[#4A4D73]">Student-led engineering projects active in pilot deployment.</p>
      </div>

      <div className="space-y-4">
        {projects.map(proj => (
          <div key={proj.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">{proj.id}</span>
                <h3 className="text-lg font-bold text-brand-indigo">{proj.title}</h3>
              </div>
              <span className="text-xs font-bold bg-indigo-50 text-brand-indigo px-3 py-1 rounded-full border border-indigo-200">{proj.status}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Team</span>
                <span className="font-bold text-[#1A1A1A]">{proj.teamName}</span>
              </div>
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Mentor</span>
                <span className="font-bold text-[#1A1A1A]">{proj.mentor}</span>
              </div>
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Progress</span>
                <span className="font-bold text-brand-indigo">{proj.progress}% Complete</span>
              </div>
              <div className="bg-[#F8F8F6] p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] uppercase">Covered Villages</span>
                <span className="font-bold text-emerald-700">{proj.impactMetrics?.villagesCovered} Villages</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CollaborationsPage = () => {
  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Inter-University Mesh</h1>
        <p className="text-sm text-[#4A4D73]">Joint research & innovation collaborations across Jharkhand universities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-3">
          <span className="text-xs font-bold text-brand-violet uppercase">Joint Research Mesh</span>
          <h3 className="text-lg font-bold text-brand-indigo">Ranchi University × BIT Mesra</h3>
          <p className="text-xs text-[#4A4D73]">Collaborative deployment of optical water sensor gateways and rural telemetry networks.</p>
        </div>
        <div className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-3">
          <span className="text-xs font-bold text-brand-violet uppercase">Regional Water Testing Mesh</span>
          <h3 className="text-lg font-bold text-brand-indigo">Ranchi University × NIT Jamshedpur</h3>
          <p className="text-xs text-[#4A4D73]">Chemical spectrometry validation for groundwater contamination alerts.</p>
        </div>
      </div>
    </div>
  );
};

export const UniversityProfilePage = () => {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto space-y-6">
      <div className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6">
        <div className="flex items-center gap-4 border-b pb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#24285B] text-white flex items-center justify-center font-bold text-xl">RU</div>
          <div>
            <h1 className="text-2xl font-extrabold text-brand-indigo">Ranchi University</h1>
            <p className="text-xs font-semibold text-slate-500">Institutional Innovation Command Center • Nodal University</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="bg-[#F8F8F6] p-3.5 rounded-xl">
            <span className="text-slate-400 block text-[10px] uppercase">Active Mentors</span>
            <span className="font-bold text-[#1A1A1A]">24 Faculty Members</span>
          </div>
          <div className="bg-[#F8F8F6] p-3.5 rounded-xl">
            <span className="text-slate-400 block text-[10px] uppercase">Affiliated Colleges</span>
            <span className="font-bold text-[#1A1A1A]">14 Engineering & Tech Colleges</span>
          </div>
          <div className="bg-[#F8F8F6] p-3.5 rounded-xl">
            <span className="text-slate-400 block text-[10px] uppercase">Active Challenges</span>
            <span className="font-bold text-[#1A1A1A]">12 Published</span>
          </div>
          <div className="bg-[#F8F8F6] p-3.5 rounded-xl">
            <span className="text-slate-400 block text-[10px] uppercase">Deployed Solutions</span>
            <span className="font-bold text-emerald-700">4 Active Pilots</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CompletedSolutionPage = () => {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xl">
        <span className="material-symbols-outlined text-4xl">workspace_premium</span>
      </div>
      <h1 className="text-3xl font-extrabold text-brand-indigo">Completed Solution Profile</h1>
      <p className="text-sm text-[#4A4D73]">AquaGuard Solar Water Quality Mesh successfully deployed in 12 villages across Gumla District.</p>
    </div>
  );
};
