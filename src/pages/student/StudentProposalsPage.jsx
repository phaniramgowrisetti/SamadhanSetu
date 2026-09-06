import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const StudentProposalsPage = () => {
  const navigate = useNavigate();
  const { proposals, submitProposal, teams, challenges } = useApp();

  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [approach, setApproach] = useState('');
  const [budget, setBudget] = useState('₹45,000');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitProposal({
      title,
      abstract,
      approach,
      expectedBudget: budget,
      teamId: teams[0]?.id || 'TEAM-2026-001',
      teamName: teams[0]?.name || 'AquaGuard Innovation Lab',
      challengeId: challenges[0]?.id || 'CH-2026-001',
      challengeTitle: challenges[0]?.title || 'Rural Water Quality Monitoring & Rapid Contamination Detection',
      timelineMonths: 4
    });
    setShowForm(false);
  };

  return (
    <div className="py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-indigo">Solution Proposals</h1>
          <p className="text-sm text-[#4A4D73]">Technical solution proposals submitted for university review and incubation selection.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="px-5 py-2.5 rounded-full bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors">
          {showForm ? 'Cancel Proposal' : '+ Submit New Proposal'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-5 text-left max-w-2xl mx-auto">
          <h3 className="text-xl font-extrabold text-brand-indigo">Submit Solution Proposal</h3>

          <div>
            <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Proposal Title</label>
            <input 
              type="text" 
              placeholder="e.g. Low-Cost Solar Optical Sensor & Community SMS Alert Mesh"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A]"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Abstract Summary</label>
            <textarea 
              rows="3" 
              placeholder="Deploying solar optical sensors on village hand pumps..."
              value={abstract} 
              onChange={(e) => setAbstract(e.target.value)} 
              className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A]"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Technical Approach & Implementation Plan</label>
            <textarea 
              rows="4" 
              placeholder="Hardware specs, sensor calibration, LoRaWAN mesh protocol, alert triggers..."
              value={approach} 
              onChange={(e) => setApproach(e.target.value)} 
              className="w-full border border-outline-variant/60 rounded-xl p-3 text-sm text-[#1A1A1A]"
              required 
            />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-full bg-brand-indigo text-white text-xs font-bold hover:bg-brand-violet transition-colors">
            Submit Proposal to Mentors →
          </button>
        </form>
      )}

      <div className="space-y-4">
        {proposals.map(p => (
          <div key={p.id} className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">{p.id} • {p.teamName}</span>
                <h3 className="text-lg font-bold text-brand-indigo">{p.title}</h3>
              </div>
              <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">{p.status}</span>
            </div>

            <p className="text-xs text-[#4A4D73] leading-relaxed">{p.abstract}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-[#F8F8F6] p-3.5 rounded-xl">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Target Challenge</span>
                <span className="font-bold text-[#1A1A1A]">{p.challengeTitle}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Estimated Budget</span>
                <span className="font-bold text-[#1A1A1A]">{p.expectedBudget}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Assigned Mentor</span>
                <span className="font-bold text-brand-violet">{p.mentorAssigned || 'Under Review'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
