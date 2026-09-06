import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow overflow-x-hidden">
      {/* 1. Hero Section: Multi-Actor Civic Innovation Ecosystem */}
      <section id="hero-section" className="relative py-12 md:py-16 lg:py-20 px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT / MAIN CONTENT AREA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/60 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-node-glow"></span>
              <span className="font-label-sm text-brand-violet uppercase tracking-widest text-[11px] font-bold">
                CIVIC INNOVATION ECOSYSTEM
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="hero-title-responsive font-display-lg text-brand-indigo mb-5 font-black tracking-tight max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
              <span className="block">FROM REAL PROBLEMS.</span>
              <span className="text-gradient-shimmer block mt-1">TO REAL SOLUTIONS.</span>
            </h1>

            {/* Ecosystem Supporting Text */}
            <p className="font-body-lg text-on-surface-variant max-w-xl mb-8 text-base md:text-lg leading-relaxed">
              <strong className="text-brand-indigo font-semibold">Citizens</strong> share what they experience. 
              <strong className="text-brand-indigo font-semibold"> Communities</strong> reveal patterns. 
              <strong className="text-brand-indigo font-semibold"> Experts</strong> validate challenges. 
              <strong className="text-brand-indigo font-semibold"> Students & innovators</strong> build solutions.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full mb-6">
              <button 
                onClick={() => navigate('/citizen/report-method')} 
                className="bg-brand-indigo text-white px-7 py-3.5 rounded-full font-label-md text-sm font-bold hover:bg-brand-violet transition-all duration-300 shadow-md flex items-center gap-2 group/primary hover:-translate-y-0.5"
              >
                <span>Share a Problem</span>
                <span className="material-symbols-outlined text-lg group-hover/primary:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
              </button>

              <button 
                onClick={() => navigate('/student/challenges')} 
                className="bg-white border border-outline-variant text-brand-indigo px-6 py-3.5 rounded-full font-label-md text-sm font-bold hover:border-brand-violet hover:text-brand-violet hover:bg-brand-indigo/5 transition-all duration-300 shadow-2xs flex items-center gap-2 group/secondary hover:-translate-y-0.5"
              >
                <span>Explore Challenges</span>
                <span className="material-symbols-outlined text-lg group-hover/secondary:translate-x-1.5 transition-transform duration-200">east</span>
              </button>
            </div>

            {/* Integrated Search Bar */}
            <div className="w-full max-w-xl relative mb-5 group">
              <div className="relative flex items-center bg-white border border-outline-variant/80 rounded-full p-1 shadow-2xs hover:border-brand-violet/60 focus-within:border-brand-violet focus-within:ring-2 focus-within:ring-brand-violet/15 transition-all duration-300">
                <span className="material-symbols-outlined text-on-surface-variant/60 ml-4 text-xl">search</span>
                <input 
                  type="text" 
                  placeholder="Search by topic, area, or domain (e.g. Water Quality, Solar, Traffic)..." 
                  className="w-full bg-transparent border-none py-2.5 px-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none font-body-md"
                />
                <button 
                  onClick={() => navigate('/student/challenges')} 
                  className="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-sm text-xs font-bold hover:bg-brand-violet transition-colors flex-shrink-0"
                >
                  Search
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT / VISUAL ECOSYSTEM MAP */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-full max-w-md bg-white border border-outline-variant/60 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-xs font-bold text-brand-indigo uppercase tracking-wider">Live Platform Activity</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Engine
                </span>
              </div>

              {/* 4 Ecosystem Nodes */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F8F6] border border-outline-variant/40 flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-indigo text-lg">record_voice_over</span>
                  <div>
                    <h5 className="font-bold text-[#1A1A1A]">1. Citizen Signal</h5>
                    <p className="text-[#4A4D73] text-[11px]">Water hand pump discoloration reported in Gumla Sector 4.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F1F0FA] border border-[#352C85]/20 flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-violet text-lg">hub</span>
                  <div>
                    <h5 className="font-bold text-brand-indigo">2. AI Pattern Cluster</h5>
                    <p className="text-[#4A4D73] text-[11px]">4 observations grouped into 1 regional water quality problem.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#E8F5F3] border border-[#159B8C]/20 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#159B8C] text-lg">school</span>
                  <div>
                    <h5 className="font-bold text-[#00423B]">3. University Challenge</h5>
                    <p className="text-[#4A4D73] text-[11px]">Ranchi University accepted challenge & published for students.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF8E6] border border-amber-300 flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-600 text-lg">groups</span>
                  <div>
                    <h5 className="font-bold text-amber-900">4. Student Solution Project</h5>
                    <p className="text-[#4A4D73] text-[11px]">AquaGuard Lab deployed solar optical sensors in pilot phase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Role Selection Gateway Banner */}
      <section className="py-12 bg-[#F1F0FA] border-y border-outline-variant/60">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center space-y-6">
          <h2 className="font-display-lg text-brand-indigo text-2xl md:text-3xl font-extrabold">Select Your Role in the Innovation Ecosystem</h2>
          <p className="text-sm text-[#4A4D73] max-w-xl mx-auto">Whether you are a citizen reporting local issues, an admin validating patterns, a university mentor guiding projects, or a student team building solutions.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button onClick={() => navigate('/citizen/report-method')} className="px-6 py-3 rounded-xl bg-white border border-outline-variant shadow-sm text-brand-indigo text-xs font-bold hover:bg-brand-indigo hover:text-white transition-colors">Citizen Portal</button>
            <button onClick={() => navigate('/admin/community-patterns')} className="px-6 py-3 rounded-xl bg-white border border-outline-variant shadow-sm text-brand-indigo text-xs font-bold hover:bg-brand-indigo hover:text-white transition-colors">Admin Validation</button>
            <button onClick={() => navigate('/university/dashboard')} className="px-6 py-3 rounded-xl bg-white border border-outline-variant shadow-sm text-brand-indigo text-xs font-bold hover:bg-brand-indigo hover:text-white transition-colors">University Portal</button>
            <button onClick={() => navigate('/student/challenges')} className="px-6 py-3 rounded-xl bg-white border border-outline-variant shadow-sm text-brand-indigo text-xs font-bold hover:bg-brand-indigo hover:text-white transition-colors">Student Portal</button>
          </div>
        </div>
      </section>
    </div>
  );
};
