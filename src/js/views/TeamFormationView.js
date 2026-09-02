import { renderHeader } from '../components/Header.js';

/**
 * PAGE 9 — INNOVATION TEAM FORMATION
 * Assign mentor & student team members, set milestones, and launch active project.
 */
export function renderTeamFormationView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('team-formation')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="proposal-detail" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Proposal Detail
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                TEAM FORMATION
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Ranchi University</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Form Innovation Team
            </h1>
            <p class="text-xs text-on-surface-variant">Challenge: <strong class="text-brand-indigo">Safe Water for Gumla</strong> • Proposal: <strong class="text-brand-indigo">Community Water Purification System</strong></p>
          </div>
        </div>

        <!-- FORM CONTAINER (8 COLS / 4 COLS) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-8 space-y-6">
            
            <!-- PRIMARY MENTOR -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3">
              <h2 class="font-headline-md text-brand-indigo text-sm font-bold uppercase tracking-wider">PRIMARY FACULTY MENTOR</h2>
              
              <div class="flex items-center gap-4 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40">
                <div class="w-10 h-10 rounded-full bg-brand-indigo text-white font-bold flex items-center justify-center text-xs">
                  AK
                </div>
                <div>
                  <div class="font-bold text-brand-indigo text-sm">Dr. Anjali Kumar</div>
                  <div class="text-xs text-on-surface-variant">Department of Environmental Engineering</div>
                </div>
              </div>
            </div>

            <!-- STUDENT TEAM MEMBERS -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <div class="flex items-center justify-between">
                <h2 class="font-headline-md text-brand-indigo text-sm font-bold uppercase tracking-wider">STUDENT TEAM MEMBERS</h2>
                <button class="text-xs font-bold text-brand-violet hover:underline flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">add</span> Add Student
                </button>
              </div>

              <div class="space-y-3">
                <div class="p-3.5 bg-white rounded-xl border border-outline-variant/70 flex items-center justify-between gap-3 text-xs">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-brand-violet/10 text-brand-violet font-bold flex items-center justify-center text-xs">RK</div>
                    <div>
                      <div class="font-bold text-brand-indigo">Ravi Kumar</div>
                      <div class="text-on-surface-variant text-[11px]">Electronics Engineering • IoT Systems</div>
                    </div>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full bg-brand-violet/10 text-brand-violet font-bold text-[10px]">Team Lead</span>
                </div>

                <div class="p-3.5 bg-white rounded-xl border border-outline-variant/70 flex items-center justify-between gap-3 text-xs">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal font-bold flex items-center justify-center text-xs">PS</div>
                    <div>
                      <div class="font-bold text-brand-indigo">Priya Singh</div>
                      <div class="text-on-surface-variant text-[11px]">Environmental Engineering • Water Treatment</div>
                    </div>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full bg-surface-container-low text-brand-indigo font-semibold text-[10px]">Filter Lead</span>
                </div>

                <div class="p-3.5 bg-white rounded-xl border border-outline-variant/70 flex items-center justify-between gap-3 text-xs">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-brand-indigo/10 text-brand-indigo font-bold flex items-center justify-center text-xs">AV</div>
                    <div>
                      <div class="font-bold text-brand-indigo">Aman Verma</div>
                      <div class="text-on-surface-variant text-[11px]">Computer Science • Data & Telemetry</div>
                    </div>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full bg-surface-container-low text-brand-indigo font-semibold text-[10px]">Data Lead</span>
                </div>
              </div>
            </div>

            <!-- PROJECT SETUP -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-sm font-bold uppercase tracking-wider">PROJECT PARAMETERS</h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="space-y-1">
                  <label class="font-bold text-brand-indigo block">Official Project Name</label>
                  <input type="text" value="Safe Water for Gumla: Community Purification System" class="w-full p-2.5 bg-white rounded-xl border border-outline-variant/70 font-semibold text-brand-indigo" />
                </div>
                <div class="space-y-1">
                  <label class="font-bold text-brand-indigo block">Target Completion Date</label>
                  <input type="date" value="2026-12-15" class="w-full p-2.5 bg-white rounded-xl border border-outline-variant/70 font-semibold text-brand-indigo" />
                </div>
              </div>

              <div class="pt-3 flex justify-end">
                <button data-route="project-detail" class="bg-brand-indigo text-white px-8 py-3 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shadow-xs flex items-center gap-2 cursor-pointer">
                  <span>Create Innovation Project →</span>
                  <span class="material-symbols-outlined text-base">rocket_launch</span>
                </button>
              </div>
            </div>

          </div>

          <!-- RIGHT SUMMARY PANEL (4 COLS) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3 text-xs text-on-surface-variant">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                FINAL APPROVAL
              </h3>
              <p>Creating the project converts this challenge into an <strong class="text-brand-indigo">Active Innovation Project</strong> with milestone tracking.</p>
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
