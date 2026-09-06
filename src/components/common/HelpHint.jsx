import React from 'react';
import { useApp } from '../../context/AppContext.jsx';

export const HelpHint = ({ text, title = "Platform Guidance" }) => {
  const { helpModalOpen, setHelpModalOpen } = useApp();

  return (
    <div className="bg-[#F1F0FA] border border-[#352C85]/20 rounded-xl p-4 my-4 flex items-start gap-3 text-xs text-[#24285B]">
      <span className="material-symbols-outlined text-brand-indigo text-lg mt-0.5">info</span>
      <div className="flex-1 space-y-1">
        <h5 className="font-bold uppercase tracking-wider text-[11px] text-brand-indigo">{title}</h5>
        <p className="leading-relaxed text-[#1A1A1A]">{text}</p>
      </div>
      <button 
        onClick={() => setHelpModalOpen(!helpModalOpen)}
        className="text-[11px] font-bold text-brand-violet hover:underline cursor-pointer"
      >
        {helpModalOpen ? 'Hide Tips' : 'Tips'}
      </button>
    </div>
  );
};
