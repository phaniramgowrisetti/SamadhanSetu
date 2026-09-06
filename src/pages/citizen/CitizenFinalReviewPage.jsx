import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const CitizenFinalReviewPage = () => {
  const navigate = useNavigate();
  const { reportDraft, setReportDraft, setCommunitySignals } = useApp();
  const [consent, setConsent] = useState(true);

  const handleSubmit = () => {
    const reportId = `SS-2026-00${Math.floor(400 + Math.random() * 900)}`;
    const newSignal = {
      id: reportId,
      title: 'Water Hand Pump Discoloration & Odor',
      description: reportDraft.description || 'Groundwater discoloration reported in village.',
      method: reportDraft.method || 'voice',
      location: reportDraft.location?.label || 'Gumla Sector 4, Jharkhand',
      date: new Date().toISOString().split('T')[0],
      status: 'Submitted for AI Analysis',
      evidenceCount: reportDraft.evidence?.length || 1,
      understanding: {
        primaryDomain: 'Water Quality & Sanitation',
        relatedDomains: ['Community Health'],
        issueSummary: reportDraft.description || 'Discolored water sample from hand pump.',
        affectedGroups: ['Families', 'Children'],
        possibleImpacts: ['Drinking water contamination'],
        extractedLocation: reportDraft.location?.label || 'Gumla Sector 4, Jharkhand',
        confirmedByCitizen: true
      }
    };

    setCommunitySignals(prev => [newSignal, ...prev]);
    setReportDraft(prev => ({ ...prev, submitted: true, reportId }));
    navigate('/citizen/ai-understanding');
  };

  return (
    <div className="pt-12 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold">
          <span className="material-symbols-outlined text-lg">arrow_back</span> Back
        </button>
      </div>

      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <span className="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-[#F1F0FA] px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block">
            STEP 5 OF 5: FINAL REVIEW & CONSENT
          </span>
          <h1 className="font-display-lg text-brand-indigo text-3xl font-extrabold">Review Your Submission</h1>
          <p className="text-sm text-[#4A4D73]">Check details before submitting to the AI understanding engine.</p>
        </div>

        <div className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6 text-left">
          <div className="space-y-3 border-b pb-4">
            <h4 className="text-xs font-bold text-brand-violet uppercase tracking-wider">Method & Description</h4>
            <div className="p-3 bg-[#F8F8F6] rounded-xl text-xs space-y-1">
              <span className="font-bold text-[#1A1A1A]">Method: {reportDraft.method === 'voice' ? 'Voice Recording (00:24)' : 'Written Text'}</span>
              <p className="text-[#4A4D73] leading-relaxed">{reportDraft.description || 'Groundwater discoloration reported.'}</p>
            </div>
          </div>

          <div className="space-y-3 border-b pb-4">
            <h4 className="text-xs font-bold text-brand-violet uppercase tracking-wider">Location & Evidence</h4>
            <div className="p-3 bg-[#F8F8F6] rounded-xl text-xs space-y-1">
              <p className="font-bold text-[#1A1A1A]">Location: {reportDraft.location?.label || 'Gumla Sector 4, Jharkhand'}</p>
              <p className="text-[#4A4D73]">Evidence: {reportDraft.evidence?.length || 1} file(s) attached</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-4 h-4 text-brand-indigo rounded focus:ring-brand-violet"
            />
            <label htmlFor="consent" className="text-[#1A1A1A]">I consent to anonymized signal clustering for community problem formation.</label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!consent}
            className="w-full py-3.5 rounded-full bg-brand-indigo text-white text-sm font-bold hover:bg-brand-violet transition-all shadow-md disabled:opacity-50"
          >
            Submit Signal for AI Analysis →
          </button>
        </div>
      </div>
    </div>
  );
};
