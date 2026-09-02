import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

/**
 * PAGE 6 — PUBLISHED STUDENT CHALLENGES
 * Lists challenges accepted & published by Ranchi University.
 */
export function renderPublishedChallengesView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('published-challenges')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                INSTITUTIONAL CHALLENGES
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Ranchi University</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Published Student Challenges
            </h1>
          </div>

          <button data-route="challenge-published" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-2xs">
            <span class="material-symbols-outlined text-base">add</span>
            <span>Create New Challenge</span>
          </button>
        </div>

        <!-- TABS -->
        <div class="flex items-center gap-2 border-b border-outline-variant/60 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">DRAFT (1)</button>
          <button class="px-4 py-2 text-brand-indigo border-b-2 border-brand-indigo font-bold shrink-0 cursor-pointer">OPEN (4)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">PROPOSALS RECEIVED (2)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">TEAM FORMING (1)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">ACTIVE (12)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">COMPLETED (4)</button>
        </div>

        <!-- CHALLENGE CARDS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- CARD 1 -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-indigo transition-all space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
                  Status: Open for Proposals
                </span>
                <span class="text-xs text-on-surface-variant font-mono">8 Days Remaining</span>
              </div>

              <h3 class="font-headline-sm text-brand-indigo text-lg font-bold">Safe Water for Gumla: Low-Cost Fluoride Removal</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Design a low-cost, scalable fluoride filtration unit utilizing locally available materials capable of purifying 500L/day per village unit.
              </p>

              <div class="grid grid-cols-2 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">FACULTY MENTOR</span>
                  <span class="font-bold text-brand-indigo">Dr. Anjali Kumar</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">SUBMITTED PROPOSALS</span>
                  <span class="font-bold text-brand-violet">12 Student Proposals</span>
                </div>
              </div>
            </div>

            <div class="pt-2 flex justify-end">
              <button data-route="student-proposals" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                <span>Review Proposals (12)</span>
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- CARD 2 -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-indigo transition-all space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  Status: Proposals Received
                </span>
                <span class="text-xs text-on-surface-variant font-mono">Deadline Passed</span>
              </div>

              <h3 class="font-headline-sm text-brand-indigo text-lg font-bold">Smart Irrigation for Gumla Farmers</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Solar-powered soil moisture sensing and automated drip irrigation controller for drought-prone agricultural patches.
              </p>

              <div class="grid grid-cols-2 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">FACULTY MENTOR</span>
                  <span class="font-bold text-brand-indigo">Prof. Rajesh Sharma</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">SUBMITTED PROPOSALS</span>
                  <span class="font-bold text-brand-violet">7 Student Proposals</span>
                </div>
              </div>
            </div>

            <div class="pt-2 flex justify-end">
              <button data-route="student-proposals" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                <span>Review Proposals (7)</span>
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </button>
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
