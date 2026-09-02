import { renderHeader } from '../components/Header.js';

/**
 * PAGE 8 — PROPOSAL DETAIL
 * Full student solution proposal review with evaluation scoring & team selection.
 */
export function renderProposalDetailView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('proposal-detail')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="student-proposals" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Student Proposals
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                PROPOSAL DETAIL
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Team AquaInnovate</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Community Water Purification System
            </h1>
            <p class="text-xs text-on-surface-variant">Challenge: <strong class="text-brand-indigo">Safe Water for Gumla</strong></p>
          </div>

          <div class="flex items-center gap-3">
            <button data-route="team-formation" class="bg-brand-indigo text-white px-6 py-3 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
              <span class="material-symbols-outlined text-base">check_circle</span>
              <span>Select for Project →</span>
            </button>
          </div>
        </div>

        <!-- TWO COLUMN LAYOUT -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT CONTENT (8 COLS) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- SECTION 1 — PROPOSED SOLUTION & CONTEXT -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Solution Concept & Technical Approach</h2>
              <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Dual-column adsorption filter utilizing activated alumina and bio-char derived from agricultural waste. Includes an integrated low-power ESP32 sensor for real-time total dissolved solids (TDS) and fluoride concentration telemetry.
              </p>

              <div class="space-y-2">
                <span class="text-xs font-bold text-brand-indigo block">Key Components:</span>
                <ul class="list-disc list-inside text-xs text-on-surface-variant space-y-1">
                  <li>Dual-stage gravimetric filter unit (500L/day capacity)</li>
                  <li>Local bio-char matrix for heavy metal absorption</li>
                  <li>Solar-powered IoT monitoring node for turbidity & fluoride level alerts</li>
                </ul>
              </div>
            </div>

            <!-- SECTION 2 — PROPOSED STUDENT TEAM MEMBERS -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Proposed Student Team</h2>
              
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-1">
                  <div class="font-bold text-brand-indigo text-xs">Ravi Kumar</div>
                  <div class="text-[11px] text-on-surface-variant">Electronics Engineering</div>
                  <span class="text-[10px] font-bold text-brand-violet bg-brand-violet/10 px-2 py-0.5 rounded-full inline-block">IoT Systems</span>
                </div>
                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-1">
                  <div class="font-bold text-brand-indigo text-xs">Priya Singh</div>
                  <div class="text-[11px] text-on-surface-variant">Environmental Engineering</div>
                  <span class="text-[10px] font-bold text-brand-violet bg-brand-violet/10 px-2 py-0.5 rounded-full inline-block">Water Treatment</span>
                </div>
                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-1">
                  <div class="font-bold text-brand-indigo text-xs">Aman Verma</div>
                  <div class="text-[11px] text-on-surface-variant">Computer Science</div>
                  <span class="text-[10px] font-bold text-brand-violet bg-brand-violet/10 px-2 py-0.5 rounded-full inline-block">Data & Monitoring</span>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT EVALUATION SCORECARD (4 COLS) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                EVALUATION SCORECARD
              </h3>

              <div class="space-y-3 text-xs">
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-on-surface-variant">Innovation & Novelty</span>
                  <span class="font-bold text-brand-indigo">9 / 10</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-on-surface-variant">Technical Feasibility</span>
                  <span class="font-bold text-brand-indigo">8 / 10</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-on-surface-variant">Community Impact</span>
                  <span class="font-bold text-brand-indigo">9 / 10</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-on-surface-variant">Scalability</span>
                  <span class="font-bold text-brand-indigo">8 / 10</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-on-surface-variant">Execution Readiness</span>
                  <span class="font-bold text-brand-indigo">9 / 10</span>
                </div>

                <div class="pt-3 border-t border-outline-variant/40 flex justify-between items-baseline">
                  <span class="font-bold text-brand-indigo">OVERALL SCORE</span>
                  <span class="text-xl font-extrabold text-brand-violet font-mono">43 / 50</span>
                </div>
              </div>

              <div class="pt-2 space-y-2">
                <button data-route="team-formation" class="w-full bg-brand-indigo text-white py-3 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>Select for Project →</span>
                </button>
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
