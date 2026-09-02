import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderChallengePublishedView() {
  const published = AppState.publishedChallengeSuccess || AppState.challenges[0] || {
    id: 'CH-2026-001',
    title: 'Rural Water Quality & Public Health Risk'
  };

  return `
    ${renderHeader('mentor-dashboard')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Success Card Container -->
      <div class="w-full max-w-2xl bg-white border border-outline-variant rounded-2xl p-10 shadow-sm text-center">
        
        <div class="w-20 h-20 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center mx-auto mb-6 shadow-xs">
          <span class="material-symbols-outlined text-5xl">task_alt</span>
        </div>

        <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold block mb-2">
          CHALLENGE PUBLISHED TO ECOSYSTEM
        </span>

        <h1 class="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold mb-3">
          A community pattern is now a challenge.
        </h1>

        <p class="font-body-lg text-brand-violet text-lg font-bold mb-4">
          ${published.title}
        </p>

        <p class="font-body-md text-on-surface-variant text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          What began as individual observations from citizens has been validated and opened for exploration by students, innovators, and problem solvers.
        </p>

        <!-- Ecosystem Journey Map -->
        <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 mb-8">
          <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-4">THE FULL ECOSYSTEM TRANSFORMATION</span>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            
            <div class="p-2 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-indigo text-lg mb-1">visibility</span>
              <span class="text-[9px] font-bold text-brand-indigo uppercase">OBSERVATION</span>
              <span class="text-[8px] text-brand-teal font-bold mt-1">✓ Complete</span>
            </div>

            <div class="p-2 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-teal text-lg mb-1">verified</span>
              <span class="text-[9px] font-bold text-brand-indigo uppercase">CONFIRMED</span>
              <span class="text-[8px] text-brand-teal font-bold mt-1">✓ Complete</span>
            </div>

            <div class="p-2 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-violet text-lg mb-1">hub</span>
              <span class="text-[9px] font-bold text-brand-indigo uppercase">PATTERN</span>
              <span class="text-[8px] text-brand-teal font-bold mt-1">✓ Detected</span>
            </div>

            <div class="p-2 bg-white rounded-xl border border-outline-variant/30 flex flex-col items-center">
              <span class="material-symbols-outlined text-brand-teal text-lg mb-1">fact_check</span>
              <span class="text-[9px] font-bold text-brand-indigo uppercase">VALIDATED</span>
              <span class="text-[8px] text-brand-teal font-bold mt-1">✓ Mentor Verified</span>
            </div>

            <div class="p-2 bg-brand-teal text-white rounded-xl flex flex-col items-center shadow-xs">
              <span class="material-symbols-outlined text-lg mb-1">lightbulb</span>
              <span class="text-[9px] font-bold uppercase">OPEN CHALLENGE</span>
              <span class="text-[8px] font-bold mt-1">● Active</span>
            </div>

          </div>
        </div>

        <div class="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/40 text-xs font-semibold text-brand-indigo mb-8">
          <span>Challenge Reference ID:</span>
          <span class="font-mono font-bold text-brand-violet">${published.id}</span>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button data-route="explore-challenges" class="bg-brand-indigo text-white px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm">
            View Challenge →
          </button>
          
          <button data-route="validation-queue" class="border border-outline-variant text-brand-indigo px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:border-brand-violet hover:text-brand-violet transition-all bg-white">
            View Validation Queue →
          </button>
        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
