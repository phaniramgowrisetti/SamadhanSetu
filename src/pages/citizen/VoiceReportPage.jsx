import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const VoiceReportPage = () => {
  const navigate = useNavigate();
  const { setReportDraft } = useApp();
  const [isRecording, setIsRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [timer, setTimer] = useState('00:24');

  const handleToggleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setRecorded(true);
      }, 3000);
    } else {
      setIsRecording(false);
      setRecorded(true);
    }
  };

  const handleProceed = () => {
    setReportDraft(prev => ({
      ...prev,
      method: 'voice',
      voiceRecorded: true,
      voiceDuration: timer,
      description: 'The groundwater from our village hand pump in Gumla has turned rusty brown with a metallic smell after monsoon rains. Families are worried about drinking water safety.'
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

      <div className="w-full max-w-2xl text-center space-y-6">
        <span className="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-[#F1F0FA] px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block">
          STEP 2 OF 5: VOICE RECORDING
        </span>

        <h1 className="font-display-lg text-brand-indigo text-3xl font-extrabold">Speak Your Problem</h1>
        <p className="text-sm text-[#4A4D73]">Tap the microphone button and describe what you observed in your community.</p>

        <div className="bg-white border border-outline-variant/80 rounded-3xl p-10 shadow-lg flex flex-col items-center space-y-6 my-6">
          <button 
            onClick={handleToggleRecord}
            className={`w-28 h-28 rounded-full flex items-center justify-center transition-all shadow-xl cursor-pointer ${
              isRecording ? 'bg-red-500 animate-pulse text-white ring-8 ring-red-200' : recorded ? 'bg-emerald-600 text-white' : 'bg-brand-indigo text-white hover:scale-105'
            }`}
          >
            <span className="material-symbols-outlined text-5xl">{isRecording ? 'graphic_eq' : recorded ? 'check_circle' : 'mic'}</span>
          </button>

          <div className="space-y-1">
            <span className="text-xl font-bold font-mono text-brand-indigo">{isRecording ? 'Recording... 00:03' : recorded ? `Recorded (${timer})` : 'Ready to record'}</span>
            <p className="text-xs text-slate-500">{isRecording ? 'Speak clearly into your microphone' : recorded ? 'Tap to re-record or proceed below' : 'Tap to start recording'}</p>
          </div>

          {recorded && (
            <div className="w-full bg-[#F8F8F6] p-4 rounded-xl text-left border border-outline-variant/40 space-y-2">
              <span className="text-[11px] font-bold text-brand-violet uppercase tracking-wider">AI Live Audio Preview</span>
              <p className="text-xs text-[#1A1A1A] italic">"Hand pump water turned rusty brown after monsoon rains with chemical odor in Gumla Sector 4..."</p>
            </div>
          )}
        </div>

        {recorded && (
          <button onClick={handleProceed} className="w-full max-w-md py-3.5 rounded-full bg-brand-indigo text-white text-sm font-bold hover:bg-brand-violet transition-all shadow-md">
            Next: Add Photos & Evidence →
          </button>
        )}
      </div>
    </div>
  );
};
