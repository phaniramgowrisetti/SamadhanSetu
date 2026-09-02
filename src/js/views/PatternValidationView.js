import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * PAGE 3 — COMMUNITY PROBLEM REQUEST REVIEW
 * Detailed opportunity review page for university decision-making.
 */
export function renderPatternValidationView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-[#FAFAF8] text-on-surface">
      
      ${renderHeader('pattern-validation')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="validation-queue" class="inline-flex items-center gap-1.5 text-[#24285B] hover:text-[#3F3A8A] font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Opportunities
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                UNIVERSITY REQUEST REVIEW
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• ID: REQ-2026-084</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Unsafe Drinking Water in Gumla
            </h1>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold shrink-0">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Awaiting University Review
          </div>
        </div>

        <!-- MAIN LAYOUT (8 COLS / 4 COLS) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT CONTENT (8 COLS) -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- SECTION 1 — PROBLEM OVERVIEW -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold uppercase tracking-wider">
                SECTION 1 — PROBLEM OVERVIEW
              </h2>

              <p class="text-sm text-on-surface-variant leading-relaxed">
                High levels of fluoride detected in local borewells leading to health concerns. Community reports frequent illness and the urgent need for a sustainable, low-maintenance purification solution suitable for rural deployment.
              </p>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">DOMAIN</span>
                  <span class="font-bold text-brand-indigo">Water & Sanitation</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">PRIORITY</span>
                  <span class="font-bold text-red-700">High Priority</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">DISTRICT</span>
                  <span class="font-bold text-brand-indigo">Gumla, Jharkhand</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">AI VALIDATION</span>
                  <span class="font-bold text-brand-teal">94% Confidence</span>
                </div>
              </div>
            </div>

            <!-- SECTION 2 — COMMUNITY EVIDENCE -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold uppercase tracking-wider">
                SECTION 2 — COMMUNITY EVIDENCE
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 font-semibold text-brand-indigo flex items-center gap-2">
                  <span class="material-symbols-outlined text-brand-violet text-lg">groups</span>
                  12 Validated Citizen Observations
                </div>
                <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 font-semibold text-brand-indigo flex items-center gap-2">
                  <span class="material-symbols-outlined text-brand-teal text-lg">location_on</span>
                  5 Affected Villages in Gumla
                </div>
              </div>

              <!-- Community Observation Excerpt -->
              <div class="p-4 bg-surface-container-low/70 rounded-xl border-l-4 border-brand-violet text-xs text-on-surface-variant italic space-y-1">
                <p>“Water from the primary village borewell turns yellow within an hour and causes severe stomach distress among children.”</p>
                <div class="text-[10px] font-bold text-brand-indigo not-italic">— Verified Community Observation, Gumla Block</div>
              </div>
            </div>

            <!-- SECTION 3 — WHY YOUR UNIVERSITY? -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold uppercase tracking-wider">
                SECTION 3 — WHY YOUR UNIVERSITY?
              </h2>

              <p class="text-xs text-on-surface-variant leading-relaxed">
                This opportunity was matched because Ranchi University possesses verified academic expertise and lab infrastructure in:
              </p>

              <div class="flex flex-wrap gap-2">
                <span class="text-xs font-bold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-lg border border-brand-violet/20">Environmental Engineering</span>
                <span class="text-xs font-bold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-lg border border-brand-violet/20">Public Health</span>
                <span class="text-xs font-bold bg-brand-violet/10 text-brand-violet px-3 py-1 rounded-lg border border-brand-violet/20">Material Science</span>
              </div>
            </div>

            <!-- SECTION 4 — EVALUATION FORM -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold uppercase tracking-wider">
                SECTION 4 — INSTITUTIONAL EVALUATION
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="space-y-1">
                  <label class="font-bold text-brand-indigo block">Institutional Feasibility</label>
                  <select class="w-full p-2.5 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo">
                    <option>High Feasibility</option>
                    <option>Moderate Feasibility</option>
                    <option>Low Feasibility</option>
                  </select>
                </div>

                <div class="space-y-1">
                  <label class="font-bold text-brand-indigo block">Suggested Department</label>
                  <select class="w-full p-2.5 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo">
                    <option>Environmental Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Chemistry & Material Science</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1">
                <label class="font-bold text-brand-indigo text-xs block">Internal Evaluation Notes</label>
                <textarea rows="3" placeholder="Enter evaluation notes, lab requirements, or faculty comments..." class="w-full p-3 bg-white rounded-xl border border-outline-variant/70 text-xs text-brand-indigo focus:outline-none"></textarea>
              </div>
            </div>

          </div>

          <!-- RIGHT DECISION PANEL (4 COLS) -->
          <div class="lg:col-span-4 space-y-6 sticky top-28">
            
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-5">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                DECISION PANEL
              </h3>

              <div class="space-y-3">
                <!-- Accept Button -->
                <button data-route="challenge-formation" class="w-full bg-brand-indigo text-white px-6 py-3.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer">
                  <span class="material-symbols-outlined text-base">check_circle</span>
                  <span>ACCEPT OPPORTUNITY</span>
                </button>

                <!-- Decline Drawer / Reason selection -->
                <div class="space-y-2 pt-2 border-t border-outline-variant/40">
                  <label class="text-[11px] font-bold text-on-surface-variant block">If declining, select reason:</label>
                  <select class="w-full p-2 bg-white rounded-xl border border-outline-variant/70 text-xs text-on-surface-variant">
                    <option>Select Decline Reason...</option>
                    <option>Expertise unavailable</option>
                    <option>Current capacity limitations</option>
                    <option>Outside institutional focus</option>
                    <option>Insufficient feasibility</option>
                    <option>Other</option>
                  </select>
                  <button data-route="validation-queue" class="w-full border border-red-300 text-red-700 hover:bg-red-50 px-4 py-2 rounded-full font-label-md text-xs font-bold transition-all cursor-pointer">
                    Decline Opportunity
                  </button>
                </div>
              </div>

              <p class="text-[11px] text-on-surface-variant leading-snug">
                Accepting this opportunity moves the project to <strong class="text-brand-indigo">Mentor Assignment</strong> and allows Ranchi University to publish a student innovation challenge.
              </p>
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
