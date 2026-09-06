import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const TextReportPage = () => {
  const navigate = useNavigate();
  const { reportDraft, setReportDraft } = useApp();
  const [text, setText] = useState(reportDraft.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setReportDraft(prev => ({
      ...prev,
      method: 'text',
      description: text
    }));
    navigate('/citizen/report-evidence');
  };

  return (
    <div className="pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold">
          <span className="material-symbols-outlined text-lg">arrow_back</span> Back
        </button>
      </div>

      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <span className="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-[#F1F0FA] px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block">
            STEP 2 OF 5: WRITE PROBLEM DETAILS
          </span>
          <h1 className="font-display-lg text-brand-indigo text-3xl font-extrabold">Describe the Problem</h1>
          <p className="text-sm text-[#4A4D73]">Write what you saw, where it is located, and how long it has been happening.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6">
          <div>
            <label className="block text-xs font-bold text-[#1A1A1A] mb-2">Problem Description</label>
            <textarea
              rows="6"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g. The hand pump water near the primary school in Gumla Sector 4 has turned brown and smells metallic since Monday..."
              className="w-full border border-outline-variant/60 rounded-xl p-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
              required
            />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-full bg-brand-indigo text-white text-sm font-bold hover:bg-brand-violet transition-all shadow-md">
            Next: Add Photos & Evidence →
          </button>
        </form>
      </div>
    </div>
  );
};
