import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderCitizenSubmittedView() {
  const lastSignal = AppState.communitySignals[0] || {
    id: 'SS-2026-00421',
    location: 'Gumla District, Jharkhand'
  };

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Success Card Container -->
      <div class="w-full max-w-2xl bg-white border border-outline-variant rounded-2xl p-10 shadow-sm text-center">
        
        <div class="w-20 h-20 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center mx-auto mb-6 shadow-xs">
          <span class="material-symbols-outlined text-5xl">task_alt</span>
        </div>

        <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold block mb-2">
          REPORT SHARED SUCCESSFULLY
        </span>

        <h1 class="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold mb-3">
          Thank you for sharing what you noticed.
        </h1>

        <p class="font-body-lg text-brand-violet text-lg font-bold mb-4">
          Your experience has been added as a community signal.
        </p>

        <p class="font-body-md text-on-surface-variant text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          If similar experiences are reported by others, they can help reveal a larger problem worth understanding and solving.
        </p>

        <!-- Phase 5 AI Understanding Highlight Box -->
        <div class="bg-brand-indigo/5 p-6 rounded-2xl border border-brand-indigo/20 mb-8 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div class="font-bold text-brand-indigo text-sm mb-1 flex items-center gap-1.5">
              <span class="material-symbols-outlined text-brand-violet text-base">smart_toy</span>
              SamadhanSetu AI Synthesis Ready
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              SamadhanSetu has organized the information you shared into structured domain insights. You can check whether we understood it correctly.
            </p>
          </div>
          <button data-route="citizen-ai-understanding" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shrink-0">
            See what we understood →
          </button>
        </div>

        <!-- Visual Signal Journey Map -->
        <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 mb-8">
          <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-4">THE ECOSYSTEM JOURNEY</span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            
            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-indigo text-xl mb-1">visibility</span>
              <span class="text-[11px] font-bold text-brand-indigo uppercase">YOUR OBSERVATION</span>
              <span class="text-[9px] text-brand-teal font-bold mt-1">✓ Complete</span>
            </div>

            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-violet text-xl mb-1">cell_tower</span>
              <span class="text-[11px] font-bold text-brand-indigo uppercase">COMMUNITY SIGNAL</span>
              <span class="text-[9px] text-brand-violet font-bold mt-1">● Active</span>
            </div>

            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center opacity-70">
              <span class="material-symbols-outlined text-brand-indigo text-xl mb-1">hub</span>
              <span class="text-[11px] font-bold text-brand-indigo uppercase">SHARED PATTERN</span>
              <span class="text-[9px] text-on-surface-variant mt-1">AI Synthesis</span>
            </div>

            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center opacity-70">
              <span class="material-symbols-outlined text-brand-teal text-xl mb-1">lightbulb</span>
              <span class="text-[11px] font-bold text-brand-indigo uppercase">SOLVER CHALLENGE</span>
              <span class="text-[9px] text-on-surface-variant mt-1">Student Teams</span>
            </div>

          </div>
        </div>

        <!-- Signal Reference ID -->
        <div class="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/40 text-xs font-semibold text-brand-indigo mb-8">
          <span>Signal Reference ID:</span>
          <span class="font-mono font-bold text-brand-violet">${lastSignal.id}</span>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button id="share-another-btn" class="border border-outline-variant text-brand-indigo px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:border-brand-violet hover:text-brand-violet transition-all bg-white cursor-pointer">
            Share another problem →
          </button>
          
          <button data-route="my-problems" class="bg-brand-indigo text-white px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm cursor-pointer">
            View my reports
          </button>
        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
