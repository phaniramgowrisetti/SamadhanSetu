import { renderHeader } from '../components/Header.js';

/**
 * PAGE 15 — COMPLETED / DEPLOYED SOLUTION DETAIL
 * Deployed innovation solution details, community impact metrics & sustainability plan.
 */
export function renderCompletedSolutionView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('completed-solution')}

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
              <span class="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                DEPLOYED SOLUTION
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Ranchi University</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Safe Water Solution for Gumla
            </h1>
            <p class="text-xs text-on-surface-variant">Original Problem: <strong class="text-brand-indigo">Fluoride Contamination in Local Borewells (REQ-2026-084)</strong></p>
          </div>

          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-bold shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Deployed & Impact Active
          </div>
        </div>

        <!-- IMPACT SUMMARY METRICS -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase block">PEOPLE BENEFITED</span>
            <div class="text-2xl font-extrabold text-brand-indigo font-mono">15,000+</div>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase block">LOCATIONS SERVED</span>
            <div class="text-2xl font-extrabold text-brand-teal font-mono">5 Villages</div>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase block">FLUORIDE LEVEL BEFORE</span>
            <div class="text-2xl font-extrabold text-red-600 font-mono">4.2 mg/L</div>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase block">FLUORIDE LEVEL AFTER</span>
            <div class="text-2xl font-extrabold text-emerald-600 font-mono">0.6 mg/L</div>
          </div>
        </div>

        <!-- DETAILS & COMMUNITY FEEDBACK -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-8 space-y-6">
            
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Solution Architecture & Field Implementation</h2>
              <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Ranchi University's Team AquaInnovate deployed 5 dual-stage bio-char & activated alumina filtration units across Gumla district borewells. Integrated IoT nodes send daily fluoride concentration data to the university research portal.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Community Feedback & Sustainability Plan</h2>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Village panchayat members have been trained in monthly filter medium backwashing. Maintenance funds are co-sponsored by local District Mineral Foundation Trust (DMFT).
              </p>
            </div>

          </div>

          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3 text-xs">
              <span class="text-[10px] font-bold text-brand-indigo uppercase block">PROJECT CREDITS</span>
              <div>
                <span class="text-on-surface-variant block text-[11px]">FACULTY MENTOR</span>
                <span class="font-bold text-brand-indigo">Dr. Anjali Kumar</span>
              </div>
              <div>
                <span class="text-on-surface-variant block text-[11px]">STUDENT INNOVATION TEAM</span>
                <span class="font-bold text-brand-indigo">Team AquaInnovate</span>
              </div>
              <div>
                <span class="text-on-surface-variant block text-[11px]">DEPLOYMENT DATE</span>
                <span class="font-bold text-brand-indigo">August 2026</span>
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
