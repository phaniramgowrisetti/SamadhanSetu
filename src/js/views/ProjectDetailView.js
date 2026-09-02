import { renderHeader } from '../components/Header.js';

/**
 * PAGE 10 — PROJECT OVERVIEW
 * Active project dashboard with milestone progress & lifecycle status.
 */
export function renderProjectDetailView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('project-detail')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="university-projects" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Projects Portfolio
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
                ACTIVE PROJECT
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• ID: PRJ-2026-012</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Safe Water for Gumla
            </h1>
            <p class="text-xs text-on-surface-variant">Primary Mentor: <strong class="text-brand-indigo">Dr. Anjali Kumar</strong> • Team: <strong class="text-brand-indigo">Team AquaInnovate</strong></p>
          </div>

          <div class="flex items-center gap-3">
            <button data-route="completed-solution" class="bg-brand-teal text-white px-5 py-2 rounded-full font-label-md text-xs font-bold hover:bg-emerald-700 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5">
              <span>View Deployed Solution</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>

        <!-- HORIZONTAL LIFECYCLE BAR -->
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-brand-indigo uppercase tracking-wider block">PROJECT LIFECYCLE</span>
            <span class="text-xs font-bold text-brand-violet">Overall Progress: 45%</span>
          </div>

          <div class="overflow-x-auto pb-1">
            <div class="min-w-[800px] flex items-center justify-between text-xs font-bold relative">
              <div class="flex items-center gap-1.5 text-brand-teal">
                <span class="material-symbols-outlined text-base">check_circle</span>
                Problem Accepted
              </div>
              <span class="text-brand-teal">──</span>
              <div class="flex items-center gap-1.5 text-brand-teal">
                <span class="material-symbols-outlined text-base">check_circle</span>
                Mentor Assigned
              </div>
              <span class="text-brand-teal">──</span>
              <div class="flex items-center gap-1.5 text-brand-teal">
                <span class="material-symbols-outlined text-base">check_circle</span>
                Challenge Published
              </div>
              <span class="text-brand-teal">──</span>
              <div class="flex items-center gap-1.5 text-brand-teal">
                <span class="material-symbols-outlined text-base">check_circle</span>
                Team Formed
              </div>
              <span class="text-brand-indigo">──</span>
              <div class="flex items-center gap-1.5 text-brand-indigo bg-brand-indigo/10 px-3 py-1 rounded-full border border-brand-indigo/20">
                <span class="w-2 h-2 rounded-full bg-brand-indigo animate-pulse"></span>
                Research & Design (Active)
              </div>
              <span class="text-on-surface-variant/40">──</span>
              <div class="text-on-surface-variant/50">Prototype</div>
              <span class="text-on-surface-variant/40">──</span>
              <div class="text-on-surface-variant/50">Testing</div>
              <span class="text-on-surface-variant/40">──</span>
              <div class="text-on-surface-variant/50">Deployment</div>
            </div>
          </div>
        </div>

        <!-- TWO COLUMN LAYOUT -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT CONTENT (8 COLS) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- PROJECT MILESTONES -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Project Milestones</h2>

              <div class="space-y-3">
                
                <div data-route="milestone-detail" class="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-all">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-emerald-600">check_circle</span>
                    <div>
                      <div class="font-bold text-brand-indigo text-xs sm:text-sm">1. Research & Problem Study</div>
                      <div class="text-[11px] text-on-surface-variant">Completed Sep 20 • Lead: Priya Singh</div>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded-full">Completed</span>
                </div>

                <div data-route="milestone-detail" class="p-4 bg-surface-container-low rounded-xl border border-brand-indigo/40 flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-all">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-brand-violet animate-pulse">hourglass_top</span>
                    <div>
                      <div class="font-bold text-brand-indigo text-xs sm:text-sm">2. Solution Design & Material Selection</div>
                      <div class="text-[11px] text-on-surface-variant">Completed Sep 28 • Lead: Dr. Anjali Kumar</div>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-brand-violet bg-brand-violet/10 px-2.5 py-1 rounded-full">Completed</span>
                </div>

                <div data-route="milestone-detail" class="p-4 bg-white rounded-xl border-2 border-brand-indigo flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-violet/5 transition-all">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-brand-indigo">build</span>
                    <div>
                      <div class="font-bold text-brand-indigo text-xs sm:text-sm">3. Prototype Development</div>
                      <div class="text-[11px] text-on-surface-variant">Target: Oct 20 • Lead: Ravi Kumar (IoT)</div>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-brand-indigo bg-brand-indigo/10 px-2.5 py-1 rounded-full">In Progress (60%)</span>
                </div>

                <div data-route="milestone-detail" class="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/30 flex items-center justify-between gap-4 text-on-surface-variant/70 cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined">science</span>
                    <div>
                      <div class="font-bold text-xs sm:text-sm">4. Field Testing in Gumla</div>
                      <div class="text-[11px]">Target: Nov 10 • Upcoming</div>
                    </div>
                  </div>
                  <span class="text-xs font-semibold bg-surface-container-low px-2.5 py-1 rounded-full">Upcoming</span>
                </div>

              </div>
            </div>

            <!-- ACTIVITY TIMELINE -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Activity Timeline</h2>

              <div class="space-y-3 text-xs border-l-2 border-outline-variant/60 pl-4">
                <div class="space-y-0.5">
                  <div class="font-bold text-brand-indigo">Prototype milestone reached 60% completion</div>
                  <div class="text-[11px] text-on-surface-variant">Oct 3, 2026 • Reported by Ravi Kumar</div>
                </div>
                <div class="space-y-0.5 pt-2">
                  <div class="font-bold text-brand-indigo">Team AquaInnovate formed & project launched</div>
                  <div class="text-[11px] text-on-surface-variant">Sep 18, 2026 • Approved by Ranchi University</div>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT DETAILS (4 COLS) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4 text-xs">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                PROJECT DETAILS
              </h3>

              <div class="space-y-2">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">COMMUNITY PROBLEM</span>
                  <span class="font-bold text-brand-indigo">Fluoride Contamination in Gumla Borewells</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">DISTRICT</span>
                  <span class="font-bold text-brand-indigo">Gumla, Jharkhand</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">PRIMARY MENTOR</span>
                  <span class="font-bold text-brand-indigo">Dr. Anjali Kumar (Environmental Eng.)</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">STUDENT MEMBERS</span>
                  <span class="font-bold text-brand-indigo">Ravi Kumar, Priya Singh, Aman Verma</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <footer class="bg-white border-t border-outline-variant/60 py-8 px-6 md:px-margin-desktop text-xs text-on-surface-variant">
        <div class="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="font-extrabold text-brand-indigo text-base tracking-tight">SamadhanSetu</div>
          <div>© 2026 SamadhanSetu. Civic Innovation Ecosystem.</div>
        </div>
      </footer>

    </div>
  `;
}
