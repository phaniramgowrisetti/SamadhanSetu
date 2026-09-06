import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const CitizenEvidencePage = () => {
  const navigate = useNavigate();
  const { setReportDraft } = useApp();
  const [evidenceFiles, setEvidenceFiles] = useState([
    { name: 'pump_water_sample.jpg', type: 'image', size: '1.2 MB' }
  ]);

  const handleAddDemoFile = () => {
    setEvidenceFiles(prev => [...prev, { name: `photo_${prev.length + 1}.jpg`, type: 'image', size: '2.4 MB' }]);
  };

  const handleProceed = () => {
    setReportDraft(prev => ({ ...prev, evidence: evidenceFiles }));
    navigate('/citizen/report-location');
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
          STEP 3 OF 5: ADD EVIDENCE & PHOTOS
        </span>

        <h1 className="font-display-lg text-brand-indigo text-3xl font-extrabold">Attach Photos or Files</h1>
        <p className="text-sm text-[#4A4D73]">Optional. Visual evidence helps AI and community reviewers validate your report faster.</p>

        <div className="bg-white border border-outline-variant/80 rounded-3xl p-8 shadow-lg space-y-6">
          <div 
            onClick={handleAddDemoFile}
            className="border-2 border-dashed border-outline-variant hover:border-brand-violet rounded-2xl p-8 text-center cursor-pointer bg-[#F8F8F6] hover:bg-[#F1F0FA] transition-colors"
          >
            <span className="material-symbols-outlined text-4xl text-brand-indigo mb-2">add_a_photo</span>
            <h4 className="font-bold text-sm text-[#1A1A1A]">Click to add photo or document</h4>
            <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, MP4, PDF up to 25MB</p>
          </div>

          <div className="space-y-2 text-left">
            <h5 className="font-bold text-xs text-brand-indigo uppercase tracking-wider">Attached Files ({evidenceFiles.length})</h5>
            {evidenceFiles.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#F8F8F6] border border-outline-variant/40 text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-violet text-base">image</span>
                  <span className="font-semibold text-[#1A1A1A]">{file.name}</span>
                </div>
                <span className="text-slate-400 text-[11px]">{file.size}</span>
              </div>
            ))}
          </div>

          <button onClick={handleProceed} className="w-full py-3.5 rounded-full bg-brand-indigo text-white text-sm font-bold hover:bg-brand-violet transition-all shadow-md">
            Next: Select Location →
          </button>
        </div>
      </div>
    </div>
  );
};
