import { renderHeader } from '../components/Header.js';

/**
 * PAGE 7 — STUDENT PROPOSAL REVIEW
 * List of submitted student solution proposals for evaluation by university/mentor.
 */
export function renderStudentProposalsView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('student-proposals')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="published-challenges" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Published Challenges
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                PROPOSAL EVALUATION
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Mentor: Dr. Anjali Kumar</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Student Proposals
            </h1>
            <p class="text-xs sm:text-sm text-on-surface-variant">Challenge: <strong class="text-brand-indigo">Safe Water for Gumla</strong></p>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-bold shrink-0">
            12 Proposals Submitted
          </div>
        </div>

        <!-- TWO COLUMN LAYOUT (8 COLS / 4 COLS) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT PROPOSAL LIST (8 COLS) -->
          <div class="lg:col-span-8 space-y-4">
            
            <!-- PROPOSAL 1 (RECOMMENDED / SHORTLISTED) -->
            <div class="bg-white p-6 rounded-2xl border-2 border-brand-indigo shadow-2xs space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    Shortlisted
                  </span>
                  <span class="text-xs font-mono text-on-surface-variant">Submitted Oct 2</span>
                </div>
                <span class="text-xs font-bold text-brand-violet">Score: 43 / 50</span>
              </div>

              <div class="space-y-1.5">
                <h3 class="font-headline-sm text-brand-indigo text-xl font-bold">Community Water Purification System</h3>
                <p class="text-xs text-on-surface-variant">Proposed Team: <strong class="text-brand-indigo">Team AquaInnovate</strong> (Dept. of Environmental & Electronics Engineering)</p>
                <p class="text-xs text-on-surface-variant leading-relaxed">
                  Low-cost bio-char and activated alumina dual-column filtration with solar IoT water quality telemetry.
                </p>
              </div>

              <div class="grid grid-cols-3 gap-2 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold block">FEASIBILITY</span>
                  <span class="font-bold text-brand-indigo">High (8.5/10)</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold block">EST. IMPACT</span>
                  <span class="font-bold text-brand-teal">5 Villages</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold block">PROTOTYPE COST</span>
                  <span class="font-bold text-brand-indigo">₹18,500</span>
                </div>
              </div>

              <div class="pt-2 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <button class="text-xs font-semibold text-brand-violet hover:underline">Shortlist</button>
                  <span class="text-on-surface-variant">•</span>
                  <button class="text-xs font-semibold text-red-600 hover:underline">Reject</button>
                </div>
                
                <button data-route="proposal-detail" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                  <span>View Full Proposal</span>
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

            <!-- PROPOSAL 2 -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 px-3 py-1 rounded-full">
                  Under Review
                </span>
                <span class="text-xs font-mono text-on-surface-variant">Submitted Oct 1</span>
              </div>

              <div class="space-y-1.5">
                <h3 class="font-headline-sm text-brand-indigo text-xl font-bold">Nano-Membrane Solar Purification Unit</h3>
                <p class="text-xs text-on-surface-variant">Proposed Team: <strong class="text-brand-indigo">Team HydroPure</strong> (Dept. of Chemistry)</p>
              </div>

              <div class="pt-2 flex justify-end">
                <button data-route="proposal-detail" class="border border-outline-variant text-brand-indigo px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:border-brand-violet hover:bg-brand-violet/5 transition-all cursor-pointer">
                  View Proposal
                </button>
              </div>
            </div>

          </div>

          <!-- RIGHT SUMMARY SIDEBAR (4 COLS) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                PROPOSAL PIPELINE
              </h3>

              <div class="space-y-3 text-xs">
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Total Submitted</span>
                  <span class="font-mono text-sm">12</span>
                </div>
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Under Review</span>
                  <span class="font-mono text-sm text-amber-700">5</span>
                </div>
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Shortlisted</span>
                  <span class="font-mono text-sm text-brand-violet">3</span>
                </div>
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Selected for Project</span>
                  <span class="font-mono text-sm text-brand-teal">1</span>
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
