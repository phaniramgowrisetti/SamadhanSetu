import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderCommunitySignalConfirmedView() {
  const confirmedSignal = AppState.communitySignals[0] || {
    id: 'SS-2026-00421',
    status: 'Confirmed community signal'
  };

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Success Card Container -->
      <div class="w-full max-w-2xl bg-white border border-outline-variant rounded-2xl p-10 shadow-sm text-center">
        
        <div class="w-20 h-20 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center mx-auto mb-6 shadow-xs">
          <span class="material-symbols-outlined text-5xl">verified</span>
        </div>

        <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold block mb-2">
          SIGNAL CONFIRMED BY CITIZEN
        </span>

        <h1 class="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold mb-3">
          Your observation is now part of the bigger picture.
        </h1>

        <p class="font-body-lg text-brand-violet text-lg font-bold mb-4">
          SamadhanSetu will compare this signal with other community observations to look for similar patterns.
        </p>

        <p class="font-body-md text-on-surface-variant text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Your report can now help us identify whether similar experiences are happening elsewhere in your region.
        </p>

        <!-- Ecosystem Journey Map -->
        <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 mb-8">
          <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-4">NEXT STAGE: CROSS-REPORT CLUSTERING</span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            
            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-indigo text-xl mb-1">visibility</span>
              <span class="text-[10px] font-bold text-brand-indigo uppercase">YOUR OBSERVATION</span>
              <span class="text-[9px] text-brand-teal font-bold mt-1">✓ Complete</span>
            </div>

            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-teal text-xl mb-1">verified</span>
              <span class="text-[10px] font-bold text-brand-indigo uppercase">STRUCTURED SIGNAL</span>
              <span class="text-[9px] text-brand-teal font-bold mt-1">✓ Confirmed</span>
            </div>

            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-violet text-xl mb-1">hub</span>
              <span class="text-[10px] font-bold text-brand-indigo uppercase">COMPARED WITH REPORTS</span>
              <span class="text-[9px] text-brand-violet font-bold mt-1">● In Progress</span>
            </div>

            <div class="p-3 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center opacity-70">
              <span class="material-symbols-outlined text-brand-teal text-xl mb-1">lightbulb</span>
              <span class="text-[10px] font-bold text-brand-indigo uppercase">SHARED CHALLENGE</span>
              <span class="text-[9px] text-on-surface-variant mt-1">Phase 6+</span>
            </div>

          </div>
        </div>

        <div class="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/40 text-xs font-semibold text-brand-indigo mb-8">
          <span>Signal Reference ID:</span>
          <span class="font-mono font-bold text-brand-violet">${confirmedSignal.id}</span>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button data-route="my-reports" class="bg-brand-indigo text-white px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm">
            View My Reports →
          </button>

          <button id="confirmed-share-another-btn" class="border border-outline-variant text-brand-indigo px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:border-brand-violet hover:text-brand-violet transition-all bg-white">
            Share Another Problem →
          </button>
        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
