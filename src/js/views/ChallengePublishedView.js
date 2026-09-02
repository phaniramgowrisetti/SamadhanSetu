import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * PAGE 5 — PUBLISH STUDENT CHALLENGE
 * Form screen to create & publish student innovation challenges.
 */
export function renderChallengePublishedView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('challenge-published')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="challenge-formation" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Mentor Assignment
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                CREATE STUDENT CHALLENGE
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Mentor: Dr. Anjali Kumar</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Create Student Innovation Challenge
            </h1>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-bold shrink-0">
            Draft Mode
          </div>
        </div>

        <!-- FORM & PREVIEW (8 COLS / 4 COLS) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT FORM (8 COLS) -->
          <div class="lg:col-span-8 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/70 shadow-2xs">
            
            <div class="space-y-4">
              <div class="space-y-1">
                <label class="font-bold text-brand-indigo text-xs block">Challenge Title</label>
                <input type="text" value="Safe Water for Gumla: Low-Cost Fluoride Removal Challenge" class="w-full p-3 bg-white rounded-xl border border-outline-variant/70 text-xs font-bold text-brand-indigo focus:outline-none focus:border-brand-violet" />
              </div>

              <div class="space-y-1">
                <label class="font-bold text-brand-indigo text-xs block">Community Problem Context (Auto-derived)</label>
                <textarea rows="3" readonly class="w-full p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs text-on-surface-variant leading-relaxed">Derived from validated Gumla community observations (REQ-2026-084): Fluoride contamination in local village borewells requires decentralized, affordable water purification systems.</textarea>
              </div>

              <div class="space-y-1">
                <label class="font-bold text-brand-indigo text-xs block">Challenge Statement (What should students solve?)</label>
                <textarea rows="3" class="w-full p-3 bg-white rounded-xl border border-outline-variant/70 text-xs text-brand-indigo focus:outline-none focus:border-brand-violet">Design a low-cost, scalable fluoride filtration unit utilizing locally available materials capable of purifying 500L/day per village unit.</textarea>
              </div>

              <div class="space-y-1">
                <label class="font-bold text-brand-indigo text-xs block">Expected Outcome</label>
                <input type="text" value="Develop an affordable, scalable water purification prototype suitable for rural community deployment." class="w-full p-3 bg-white rounded-xl border border-outline-variant/70 text-xs text-brand-indigo focus:outline-none focus:border-brand-violet" />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="font-bold text-brand-indigo text-xs block">Submission Deadline</label>
                  <input type="date" value="2026-10-15" class="w-full p-2.5 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo" />
                </div>
                <div class="space-y-1">
                  <label class="font-bold text-brand-indigo text-xs block">Team Size</label>
                  <select class="w-full p-2.5 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo">
                    <option>3 – 5 Students</option>
                    <option>2 – 4 Students</option>
                    <option>Individual or Pair</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1">
                <label class="font-bold text-brand-indigo text-xs block">Evaluation Criteria</label>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="text-xs font-semibold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-full border border-brand-violet/20">Innovation (25%)</span>
                  <span class="text-xs font-semibold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-full border border-brand-violet/20">Technical Feasibility (25%)</span>
                  <span class="text-xs font-semibold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-full border border-brand-violet/20">Community Impact (25%)</span>
                  <span class="text-xs font-semibold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-full border border-brand-violet/20">Scalability (25%)</span>
                </div>
              </div>

              <div class="pt-4 flex justify-end">
                <button data-route="published-challenges" class="bg-brand-indigo text-white px-8 py-3.5 rounded-full font-label-md text-sm font-bold hover:bg-brand-violet transition-all shadow-xs flex items-center gap-2 cursor-pointer">
                  <span>Publish Challenge</span>
                  <span class="material-symbols-outlined text-base">rocket_launch</span>
                </button>
              </div>
            </div>

          </div>

          <!-- RIGHT PREVIEW (4 COLS) -->
          <div class="lg:col-span-4 space-y-6 sticky top-28">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                STUDENT CARD PREVIEW
              </h3>

              <div class="p-4 rounded-xl border border-brand-violet/30 bg-brand-violet/5 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-brand-violet bg-white px-2 py-0.5 rounded-full border border-brand-violet/20">OPEN FOR PROPOSALS</span>
                  <span class="text-[10px] text-on-surface-variant font-mono">Deadline: Oct 15</span>
                </div>
                <h4 class="font-bold text-brand-indigo text-sm">Safe Water for Gumla: Low-Cost Fluoride Removal Challenge</h4>
                <p class="text-xs text-on-surface-variant line-clamp-3">Design a low-cost, scalable fluoride filtration unit utilizing locally available materials capable of purifying 500L/day per village unit.</p>
                <div class="text-[11px] font-semibold text-brand-indigo pt-1">Mentor: Dr. Anjali Kumar (Dept. of Environmental Engineering)</div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <footer class="bg-white border-t border-outline-variant/60 py-8 px-6 md:px-margin-desktop text-xs text-on-surface-variant">
        <div class="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="font-extrabold text-brand-indigo text-base tracking-tight">SamadhanSetu</div>
          <div>© 2026 SamadhanSetu. Civic Innovation Ecosystem.</div>
          <div class="flex items-center gap-4 font-semibold text-brand-indigo">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </footer>

    </div>
  `;
}
