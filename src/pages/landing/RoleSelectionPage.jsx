import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const RoleSelectionPage = () => {
  const navigate = useNavigate();
  const { setUserRole } = useApp();

  const handleSelectRole = (role, path) => {
    setUserRole(role);
    navigate(path);
  };

  return (
    <div className="py-16 px-6 md:px-margin-desktop max-w-container-max mx-auto space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-brand-violet uppercase tracking-widest bg-[#F1F0FA] px-3 py-1 rounded-md">Join SamadhanSetu</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-indigo">Choose Your Role</h1>
        <p className="text-sm text-[#4A4D73]">SamadhanSetu connects citizens, institutional mentors, and student innovators in one continuous civic ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Role 1: Citizen */}
        <div className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F1F0FA] text-brand-indigo flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">record_voice_over</span>
            </div>
            <h3 className="font-bold text-lg text-brand-indigo">Citizen</h3>
            <p className="text-xs text-[#4A4D73] leading-relaxed">Report groundwater issues, sanitation needs, roads, and civic problems in voice or text.</p>
          </div>
          <button 
            onClick={() => handleSelectRole('citizen', '/citizen/report-method')}
            className="w-full py-2.5 rounded-xl bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors"
          >
            Enter Citizen Portal →
          </button>
        </div>

        {/* Role 2: Student */}
        <div className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E8F5F3] text-[#159B8C] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="font-bold text-lg text-brand-indigo">Student Innovator</h3>
            <p className="text-xs text-[#4A4D73] leading-relaxed">Browse validated university challenges, form teams, submit proposals, and build projects.</p>
          </div>
          <button 
            onClick={() => handleSelectRole('student', '/student/challenges')}
            className="w-full py-2.5 rounded-xl bg-[#159B8C] text-white text-xs font-bold hover:bg-teal-700 transition-colors"
          >
            Enter Student Portal →
          </button>
        </div>

        {/* Role 3: University / Mentor */}
        <div className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FFF8E6] text-amber-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <h3 className="font-bold text-lg text-brand-indigo">University / Mentor</h3>
            <p className="text-xs text-[#4A4D73] leading-relaxed">Review community problem clusters, assign faculty mentors, and publish challenges.</p>
          </div>
          <button 
            onClick={() => handleSelectRole('mentor', '/university/dashboard')}
            className="w-full py-2.5 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
          >
            Enter University Hub →
          </button>
        </div>

        {/* Role 4: Admin / Validator */}
        <div className="bg-white border border-outline-variant/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F8F8F6] text-[#1A1A1A] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <h3 className="font-bold text-lg text-brand-indigo">System Validator</h3>
            <p className="text-xs text-[#4A4D73] leading-relaxed">Cluster raw citizen signals into community patterns and route them for validation.</p>
          </div>
          <button 
            onClick={() => handleSelectRole('admin', '/admin/community-patterns')}
            className="w-full py-2.5 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Enter Admin Queue →
          </button>
        </div>
      </div>
    </div>
  );
};
