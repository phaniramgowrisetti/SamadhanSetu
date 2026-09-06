import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#111116] text-[#A6A4B5] pt-16 pb-12 border-t border-outline-variant/20 mt-auto">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Platform Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-brand-violet"></span>
              <span className="font-display-lg text-white font-extrabold text-xl tracking-tight">SAMADHANSETU</span>
            </div>
            <p className="font-body-sm text-sm text-[#A6A4B5] max-w-sm leading-relaxed">
              Bridging grassroot community signals directly into institutional innovation challenges, mentor guidance, and student engineering solutions.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-[11px] font-semibold bg-white/10 text-white px-2.5 py-1 rounded-md">Government Civic Protocol</span>
              <span className="text-[11px] font-semibold bg-brand-teal/20 text-[#68D9C8] px-2.5 py-1 rounded-md">Open Innovation Mesh</span>
            </div>
          </div>

          {/* Col 2: Citizen & Community */}
          <div className="space-y-3">
            <h4 className="font-label-md text-xs font-bold uppercase tracking-wider text-white">Citizen & Community</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => navigate('/citizen/report-method')} className="hover:text-white transition-colors">Report a Local Issue</button></li>
              <li><button onClick={() => navigate('/citizen/track-problems')} className="hover:text-white transition-colors">Track Problem Status</button></li>
              <li><button onClick={() => navigate('/citizen/my-reports')} className="hover:text-white transition-colors">My Submitted Signals</button></li>
              <li><button onClick={() => navigate('/how-it-works')} className="hover:text-white transition-colors">AI Synthesis Workflow</button></li>
            </ul>
          </div>

          {/* Col 3: University & Mentors */}
          <div className="space-y-3">
            <h4 className="font-label-md text-xs font-bold uppercase tracking-wider text-white">University Hub</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => navigate('/university/dashboard')} className="hover:text-white transition-colors">Mentor Command Center</button></li>
              <li><button onClick={() => navigate('/university/validation-queue')} className="hover:text-white transition-colors">Opportunity Queue</button></li>
              <li><button onClick={() => navigate('/university/projects')} className="hover:text-white transition-colors">Incubated Projects</button></li>
              <li><button onClick={() => navigate('/university/collaborations')} className="hover:text-white transition-colors">Institutional Mesh</button></li>
            </ul>
          </div>

          {/* Col 4: Student Developers */}
          <div className="space-y-3">
            <h4 className="font-label-md text-xs font-bold uppercase tracking-wider text-white">Student Portal</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => navigate('/student/challenges')} className="hover:text-white transition-colors">Discover Challenges</button></li>
              <li><button onClick={() => navigate('/student/teams')} className="hover:text-white transition-colors">Team Formation</button></li>
              <li><button onClick={() => navigate('/student/proposals')} className="hover:text-white transition-colors">Solution Proposals</button></li>
              <li><button onClick={() => navigate('/student/impact')} className="hover:text-white transition-colors">Community Impact</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#787583]">
          <p>© 2026 SamadhanSetu National Civic Innovation Architecture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Protocol</a>
            <a href="#" className="hover:text-white transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
