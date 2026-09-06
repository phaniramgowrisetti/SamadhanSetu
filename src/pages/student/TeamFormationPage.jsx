import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const TeamFormationPage = () => {
  const navigate = useNavigate();
  const { teams, createStudentTeam } = useApp();

  const [teamName, setTeamName] = useState('');
  const [leadName, setLeadName] = useState('Ananya Roy');
  const [university, setUniversity] = useState('Ranchi University - Department of Environmental Engineering');

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudentTeam({
      name: teamName,
      lead: leadName,
      university,
      members: [
        { name: leadName, role: 'Team Lead', email: 'ananya.r@ranchiuniv.ac.in' }
      ],
      challengeId: 'CH-2026-001',
      challengeTitle: 'Rural Water Quality Monitoring & Rapid Contamination Detection'
    });
    navigate('/student/teams');
  };

  return (
    <div className="py-12 px-6 max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-[#159B8C] uppercase tracking-widest bg-[#E8F5F3] px-3 py-1 rounded-full border border-[#159B8C]/30">
          STUDENT TEAM BUILDER
        </span>
        <h1 className="text-3xl font-extrabold text-brand-indigo">Create Student Innovation Team</h1>
        <p className="text-sm text-[#4A4D73]">Form an interdisciplinary student team to submit solution proposals.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-5 text-left">
        <div>
          <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Team Name</label>
          <input 
            type="text"
            placeholder="e.g. AquaGuard Innovation Lab"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Team Lead Name</label>
          <input 
            type="text"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
            className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A1A1A] mb-1">University / Department</label>
          <input 
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
            required
          />
        </div>

        <button type="submit" className="w-full py-3.5 rounded-full bg-[#159B8C] text-white text-xs font-bold hover:bg-teal-700 transition-colors shadow-md">
          Create Team & Invite Members →
        </button>
      </form>
    </div>
  );
};

export const MyTeamsPage = () => {
  const navigate = useNavigate();
  const { teams } = useApp();

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-indigo">My Student Teams</h1>
          <p className="text-sm text-[#4A4D73]">Teams you are leading or participating in for active challenges.</p>
        </div>
        <button onClick={() => navigate('/student/teams/create')} className="px-5 py-2.5 rounded-full bg-[#159B8C] text-white text-xs font-bold hover:bg-teal-700 transition-colors">
          + Create New Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map(t => (
          <div key={t.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">{t.id}</span>
                <h3 className="text-lg font-bold text-brand-indigo">{t.name}</h3>
              </div>
              <span className="text-xs font-bold bg-[#E8F5F3] text-[#159B8C] px-3 py-1 rounded-full border border-[#159B8C]/30">{t.status}</span>
            </div>

            <p className="text-xs text-[#4A4D73]"><strong>University:</strong> {t.university}</p>
            <p className="text-xs text-[#4A4D73]"><strong>Target Challenge:</strong> {t.challengeTitle}</p>

            <div className="space-y-1 pt-2 border-t text-xs">
              <span className="font-bold text-brand-indigo uppercase text-[10px]">Team Members ({t.members?.length || 1})</span>
              {t.members?.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[#F8F8F6]">
                  <span className="font-bold text-[#1A1A1A]">{m.name}</span>
                  <span className="text-slate-400 text-[11px]">{m.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
