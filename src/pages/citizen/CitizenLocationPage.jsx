import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const CitizenLocationPage = () => {
  const navigate = useNavigate();
  const { setReportDraft } = useApp();
  const [locationLabel, setLocationLabel] = useState('Gumla Sector 4, Jharkhand');

  const handleProceed = () => {
    setReportDraft(prev => ({
      ...prev,
      location: {
        method: 'manual',
        label: locationLabel,
        latitude: 23.0423,
        longitude: 84.5412
      }
    }));
    navigate('/citizen/report-final-review');
  };

  return (
    <div className="pt-12 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold">
          <span className="material-symbols-outlined text-lg">arrow_back</span> Back
        </button>
      </div>

      <div className="w-full max-w-2xl text-center space-y-6">
        <span className="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-[#F1F0FA] px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block">
          STEP 4 OF 5: LOCATION CONFIRMATION
        </span>

        <h1 className="font-display-lg text-brand-indigo text-3xl font-extrabold">Where did this happen?</h1>
        <p className="text-sm text-[#4A4D73]">Accurate location helps group your report with nearby observations.</p>

        <div className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6 text-left">
          <div>
            <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Village / District / Landmark</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-lg">location_on</span>
              <input
                type="text"
                value={locationLabel}
                onChange={(e) => setLocationLabel(e.target.value)}
                className="w-full border border-outline-variant/60 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
                required
              />
            </div>
          </div>

          <div className="bg-[#F8F8F6] p-4 rounded-xl border border-outline-variant/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-teal text-base">my_location</span>
              <span className="font-semibold text-[#1A1A1A]">GPS Coordinates: 23.0423° N, 84.5412° E</span>
            </div>
            <span className="text-emerald-600 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded">High Accuracy</span>
          </div>

          <button onClick={handleProceed} className="w-full py-3.5 rounded-full bg-brand-indigo text-white text-sm font-bold hover:bg-brand-violet transition-all shadow-md">
            Next: Final Review →
          </button>
        </div>
      </div>
    </div>
  );
};
