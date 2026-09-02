import { renderHeader } from '../components/Header.js';

/**
 * PAGE 11 — PROJECT MILESTONE DETAIL
 * Detailed progress inspection for milestone tasks & mentor feedback.
 */
export function renderMilestoneDetailView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('milestone-detail')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="project-detail" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Project Overview
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 border border-brand-indigo/20 px-3 py-1 rounded-full">
                MILESTONE 3 OF 5
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Project: Safe Water for Gumla</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Prototype Development
            </h1>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-bold shrink-0">
            Status: In Progress (60%)
          </div>
        </div>

        <!-- CONTENT (8 COLS / 4 COLS) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-8 space-y-6">
            
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Milestone Tasks & Completion State</h2>

              <div class="space-y-3 text-xs">
                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-emerald-600 text-base">check_box</span>
                    <span class="font-bold text-brand-indigo">1. Dual-column filter frame assembly</span>
                  </div>
                  <span class="text-on-surface-variant">Owner: Priya Singh • Completed</span>
                </div>

                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-emerald-600 text-base">check_box</span>
                    <span class="font-bold text-brand-indigo">2. ESP32 TDS sensor calibration</span>
                  </div>
                  <span class="text-on-surface-variant">Owner: Ravi Kumar • Completed</span>
                </div>

                <div class="p-3 bg-white rounded-xl border border-brand-indigo flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-brand-violet text-base">check_box_outline_blank</span>
                    <span class="font-bold text-brand-indigo">3. Solar panel battery management Integration</span>
                  </div>
                  <span class="text-brand-violet font-bold">Owner: Aman Verma • In Progress</span>
                </div>
              </div>
            </div>

            <!-- MENTOR FEEDBACK & APPROVAL -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Faculty Mentor Actions</h2>

              <div class="p-4 bg-brand-violet/5 rounded-xl border border-brand-violet/20 text-xs text-on-surface-variant space-y-2">
                <div class="font-bold text-brand-indigo">Dr. Anjali Kumar (Mentor Feedback):</div>
                <p class="italic">“Sensor telemetry looks clean. Ensure filter column seals are pressure tested before field transport to Gumla.”</p>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button data-route="project-detail" class="bg-brand-teal text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-emerald-700 transition-all cursor-pointer">
                  Approve Milestone Progress
                </button>
                <button data-route="project-detail" class="border border-outline-variant text-brand-indigo px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-surface-container-low transition-all cursor-pointer">
                  Request Revision
                </button>
              </div>
            </div>

          </div>

          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3 text-xs">
              <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider block">TARGET DEADLINE</span>
              <div class="font-bold text-brand-indigo text-sm">October 20, 2026</div>
              <p class="text-on-surface-variant text-[11px]">Milestone leads to Field Testing in Gumla villages.</p>
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
