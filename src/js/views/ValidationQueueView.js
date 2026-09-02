import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * PAGE 2 — OPPORTUNITIES
 * Matched community problems for Ranchi University.
 */
export function renderValidationQueueView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-[#FAFAF8] text-on-surface">
      
      ${renderHeader('validation-queue')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-[#3F3A8A] uppercase tracking-widest bg-[#F1F0FA] border border-[#3F3A8A]/20 px-3 py-1 rounded-full">
              MATCHED OPPORTUNITIES
            </span>
            <span class="text-xs font-semibold text-slate-600">• Ranchi University</span>
          </div>

          <h1 class="font-display-lg text-[#24285B] text-3xl sm:text-4xl font-extrabold tracking-tight">
            Community Problems for Your Institution
          </h1>

          <p class="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-3xl">
            Review validated community problems matched to your university's expertise and determine whether your institution can take responsibility for developing a solution.
          </p>
        </div>

        <!-- Filter Controls & Tabs -->
        <div class="space-y-4">
          <!-- Tabs -->
          <div class="flex items-center gap-2 border-b border-outline-variant/60 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
            <button class="px-4 py-2 text-brand-indigo border-b-2 border-brand-indigo font-bold shrink-0 cursor-pointer">
              NEW REQUESTS (3)
            </button>
            <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">
              UNDER EVALUATION (5)
            </button>
            <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">
              READY FOR DECISION (2)
            </button>
            <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">
              ACCEPTED (12)
            </button>
            <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">
              DECLINED (1)
            </button>
          </div>

          <!-- Search & Dropdown Filters -->
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <div class="relative w-full sm:flex-1">
              <span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-base">search</span>
              <input type="text" placeholder="Search opportunities by title, domain, or district..." class="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-outline-variant/70 text-xs text-brand-indigo focus:outline-none focus:border-brand-violet" />
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto">
              <select class="px-3 py-2 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo focus:outline-none">
                <option>Domain: All</option>
                <option>Water & Sanitation</option>
                <option>Agriculture</option>
                <option>Energy</option>
              </select>

              <select class="px-3 py-2 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo focus:outline-none">
                <option>District: All</option>
                <option>Gumla</option>
                <option>Ranchi</option>
                <option>Khunti</option>
              </select>

              <select class="px-3 py-2 bg-white rounded-xl border border-outline-variant/70 text-xs font-semibold text-brand-indigo focus:outline-none">
                <option>Priority: All</option>
                <option>High</option>
                <option>Medium</option>
              </select>
            </div>
          </div>
        </div>

        <!-- TWO COLUMN LAYOUT -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT COLUMN — OPPORTUNITY CARDS (8 COLS) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- CARD 1 -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-indigo transition-all space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 px-3 py-1 rounded-full">
                    Water & Sanitation
                  </span>
                  <span class="text-[10px] font-bold text-red-700 bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 rounded-full">
                    High Priority
                  </span>
                </div>
                <span class="text-xs text-on-surface-variant font-mono">ID: REQ-2026-084</span>
              </div>

              <div class="space-y-2">
                <h3 class="font-headline-sm text-brand-indigo text-xl font-bold">Unsafe Drinking Water in Gumla</h3>
                <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  High levels of fluoride detected in local borewells leading to health concerns. Community reports frequent illness and the need for a sustainable purification solution.
                </p>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">OBSERVATIONS</span>
                  <span class="font-bold text-brand-indigo">12 Validated Reports</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">LOCATIONS</span>
                  <span class="font-bold text-brand-indigo">5 Affected Villages</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">DISTRICT</span>
                  <span class="font-bold text-brand-indigo">Gumla, Jharkhand</span>
                </div>
              </div>

              <div class="space-y-2">
                <span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">REQUIRED EXPERTISE</span>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs font-medium bg-white text-brand-indigo px-2.5 py-1 rounded-lg border border-outline-variant/50">Environmental Engineering</span>
                  <span class="text-xs font-medium bg-white text-brand-indigo px-2.5 py-1 rounded-lg border border-outline-variant/50">Public Health</span>
                  <span class="text-xs font-medium bg-white text-brand-indigo px-2.5 py-1 rounded-lg border border-outline-variant/50">Material Science</span>
                </div>
              </div>

              <div class="p-3 bg-brand-violet/5 rounded-xl border border-brand-violet/20 text-xs text-on-surface-variant">
                <span class="font-bold text-brand-indigo">Why Ranchi University was matched:</span>
                Matched due to existing Water Research Lab infrastructure and Department of Environmental Engineering faculty specializations.
              </div>

              <div class="pt-2 flex justify-end">
                <button data-validate-pattern="pat-1" data-route="pattern-validation" class="bg-brand-indigo text-white px-6 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                  <span>Review Opportunity</span>
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

            <!-- CARD 2 -->
            <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-indigo transition-all space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    Agriculture
                  </span>
                  <span class="text-[10px] font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    Medium Priority
                  </span>
                </div>
                <span class="text-xs text-on-surface-variant font-mono">ID: REQ-2026-092</span>
              </div>

              <div class="space-y-2">
                <h3 class="font-headline-sm text-brand-indigo text-xl font-bold">Crop Disease Affecting Farmers</h3>
                <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Repeated reports from farming communities indicate crop damage affecting agricultural productivity and local livelihoods.
                </p>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">OBSERVATIONS</span>
                  <span class="font-bold text-brand-indigo">8 Validated Reports</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">LOCATIONS</span>
                  <span class="font-bold text-brand-indigo">3 Affected Villages</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold uppercase block">DISTRICT</span>
                  <span class="font-bold text-brand-indigo">Ranchi, Jharkhand</span>
                </div>
              </div>

              <div class="space-y-2">
                <span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">REQUIRED EXPERTISE</span>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs font-medium bg-white text-brand-indigo px-2.5 py-1 rounded-lg border border-outline-variant/50">Agricultural Science</span>
                  <span class="text-xs font-medium bg-white text-brand-indigo px-2.5 py-1 rounded-lg border border-outline-variant/50">Plant Pathology</span>
                </div>
              </div>

              <div class="p-3 bg-brand-violet/5 rounded-xl border border-brand-violet/20 text-xs text-on-surface-variant">
                <span class="font-bold text-brand-indigo">Why Ranchi University was matched:</span>
                Matched due to Department of Agriculture research history in disease detection models.
              </div>

              <div class="pt-2 flex justify-end">
                <button data-validate-pattern="pat-2" data-route="pattern-validation" class="bg-brand-indigo text-white px-6 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                  <span>Review Opportunity</span>
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>

          <!-- RIGHT SIDEBAR (4 COLS) -->
          <div class="lg:col-span-4 space-y-6">
            
            <!-- WHY THESE OPPORTUNITIES? -->
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider">
                WHY THESE OPPORTUNITIES?
              </h3>
              
              <div class="space-y-3 text-xs text-on-surface-variant">
                <div class="space-y-1">
                  <div class="font-bold text-brand-indigo flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-base text-brand-violet">verified</span>
                    Validated Community Need
                  </div>
                  <p class="text-[11px] leading-relaxed">Cross-verified by civic AI and regional field observations.</p>
                </div>

                <div class="space-y-1">
                  <div class="font-bold text-brand-indigo flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-base text-brand-teal">account_balance</span>
                    Institutional Match
                  </div>
                  <p class="text-[11px] leading-relaxed">Directly aligns with Ranchi University's faculty expertise and labs.</p>
                </div>

                <div class="space-y-1">
                  <div class="font-bold text-brand-indigo flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-base text-emerald-600">lightbulb</span>
                    Potential for Innovation
                  </div>
                  <p class="text-[11px] leading-relaxed">Suitable for multidisciplinary student innovation teams.</p>
                </div>
              </div>
            </div>

            <!-- OPPORTUNITY PIPELINE -->
            <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
              <h3 class="font-headline-sm text-brand-indigo text-sm font-bold uppercase tracking-wider">
                OPPORTUNITY PIPELINE
              </h3>

              <div class="space-y-3 text-xs">
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>New Requests</span>
                  <span class="px-2 py-0.5 rounded-full bg-brand-violet text-white text-[11px]">3</span>
                </div>
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Under Evaluation</span>
                  <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 text-[11px]">5</span>
                </div>
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Ready for Decision</span>
                  <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-800 text-[11px]">2</span>
                </div>
                <div class="flex items-center justify-between p-2.5 bg-surface-container-low rounded-xl font-bold text-brand-indigo">
                  <span>Accepted Opportunities</span>
                  <span class="px-2 py-0.5 rounded-full bg-brand-teal text-white text-[11px]">12</span>
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
