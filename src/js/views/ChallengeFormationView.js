import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * PAGE 4 — ACCEPTED OPPORTUNITY / MENTOR ASSIGNMENT
 * Faculty mentor selection & assignment screen for accepted civic opportunities.
 */
export function renderChallengeFormationView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('challenge-formation')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Back Navigation -->
        <div>
          <button data-route="validation-queue" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs font-bold transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span> Back to Opportunities
          </button>
        </div>

        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
                ACCEPTED OPPORTUNITY
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Ranchi University</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Safe Water for Gumla
            </h1>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold shrink-0">
            <span class="w-2 h-2 rounded-full bg-brand-teal"></span>
            Accepted by Ranchi University
          </div>
        </div>

        <!-- PROGRESSION INDICATOR STACK -->
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-3">
          <span class="text-[11px] font-bold text-brand-indigo uppercase tracking-wider block">WORKFLOW STAGE</span>
          
          <div class="flex items-center justify-between text-xs font-bold overflow-x-auto pb-1">
            <div class="flex items-center gap-1.5 text-brand-teal shrink-0">
              <span class="material-symbols-outlined text-base">check_circle</span>
              <span>1. Accepted</span>
            </div>
            <span class="text-on-surface-variant shrink-0">•</span>
            <div class="flex items-center gap-1.5 text-brand-indigo bg-brand-indigo/10 px-3 py-1 rounded-full border border-brand-indigo/20 shrink-0">
              <span class="w-2 h-2 rounded-full bg-brand-indigo animate-pulse"></span>
              <span>2. Mentor Assignment</span>
            </div>
            <span class="text-on-surface-variant shrink-0">•</span>
            <div class="text-on-surface-variant/60 shrink-0">3. Challenge Publication</div>
            <span class="text-on-surface-variant shrink-0">•</span>
            <div class="text-on-surface-variant/60 shrink-0">4. Proposal Review</div>
            <span class="text-on-surface-variant shrink-0">•</span>
            <div class="text-on-surface-variant/60 shrink-0">5. Team Formation</div>
            <span class="text-on-surface-variant shrink-0">•</span>
            <div class="text-on-surface-variant/60 shrink-0">6. Active Project</div>
          </div>
        </div>

        <!-- MENTOR ASSIGNMENT SECTION -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT FORM (8 COLS) -->
          <div class="lg:col-span-8 space-y-6">
            
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Select Responsible Faculty Mentor</h2>
              <p class="text-xs text-on-surface-variant">Suggested Department: <strong class="text-brand-indigo">Environmental Engineering</strong></p>

              <!-- Faculty Search -->
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-base">search</span>
                <input type="text" placeholder="Search faculty members by name, department, or research area..." class="w-full pl-9 pr-4 py-2.5 bg-white rounded-xl border border-outline-variant/70 text-xs text-brand-indigo focus:outline-none focus:border-brand-violet" />
              </div>

              <!-- FACULTY DIRECTORY CARDS -->
              <div class="space-y-4 pt-2">
                
                <!-- FACULTY 1 (RECOMMENDED) -->
                <div class="p-5 rounded-2xl border-2 border-brand-indigo bg-brand-violet/5 space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-full bg-brand-indigo text-white font-bold flex items-center justify-center text-base shadow-xs">
                        AK
                      </div>
                      <div>
                        <div class="font-bold text-brand-indigo text-base flex items-center gap-2">
                          Dr. Anjali Kumar
                          <span class="text-[10px] font-bold text-brand-violet bg-brand-violet/10 border border-brand-violet/20 px-2 py-0.5 rounded-full">Recommended</span>
                        </div>
                        <div class="text-xs text-on-surface-variant font-medium">Department of Environmental Engineering</div>
                      </div>
                    </div>

                    <button data-route="challenge-published" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5">
                      <span>Assign Mentor & Next</span>
                      <span class="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>

                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-white rounded-xl border border-outline-variant/40 text-xs">
                    <div>
                      <span class="text-[10px] text-on-surface-variant font-bold uppercase block">EXPERTISE</span>
                      <span class="font-bold text-brand-indigo">Water Treatment, Rural Infrastructure</span>
                    </div>
                    <div>
                      <span class="text-[10px] text-on-surface-variant font-bold uppercase block">CURRENT LOAD</span>
                      <span class="font-bold text-brand-indigo">2 Active Projects</span>
                    </div>
                    <div>
                      <span class="text-[10px] text-on-surface-variant font-bold uppercase block">AVAILABILITY</span>
                      <span class="font-bold text-brand-teal">Available</span>
                    </div>
                  </div>
                </div>

                <!-- FACULTY 2 -->
                <div class="p-5 rounded-2xl border border-outline-variant/70 bg-white space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-full bg-surface-container-low text-brand-indigo border border-outline-variant font-bold flex items-center justify-center text-base">
                        RS
                      </div>
                      <div>
                        <div class="font-bold text-brand-indigo text-base">Prof. Rajesh Sharma</div>
                        <div class="text-xs text-on-surface-variant font-medium">Department of Chemical & Material Sciences</div>
                      </div>
                    </div>

                    <button data-route="challenge-published" class="border border-outline-variant text-brand-indigo px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:border-brand-violet hover:bg-brand-violet/5 transition-all cursor-pointer shrink-0">
                      Assign Mentor
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- RIGHT SUMMARY PANEL (4 COLS) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider border-b border-outline-variant/40 pb-2">
                NEXT STEP
              </h3>

              <p class="text-xs text-on-surface-variant leading-relaxed">
                Assigning a faculty mentor transfers technical leadership of <strong class="text-brand-indigo">Safe Water for Gumla</strong> to the assigned department.
              </p>

              <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs space-y-1">
                <span class="font-bold text-brand-indigo">Challenge Publication</span>
                <p class="text-[11px] text-on-surface-variant">After mentor assignment, the problem can be formatted into an open student innovation challenge.</p>
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
