import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderValidationQueueView() {
  const patterns = AppState.runPatternDetection();

  return `
    ${renderHeader('mentor-dashboard')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <!-- Back Link -->
      <div class="mb-6">
        <button data-route="mentor-dashboard" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Mentor Dashboard
        </button>
      </div>

      <!-- Hero Header -->
      <div class="max-w-3xl mb-12">
        <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-3">
          VALIDATION QUEUE
        </span>

        <h1 class="font-display-lg text-brand-indigo text-4xl font-extrabold mb-3">
          Patterns waiting to be understood.
        </h1>

        <p class="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed">
          Community observations can reveal possible shared problems. Review the evidence to decide whether a pattern is ready to become a challenge.
        </p>
      </div>

      <!-- Editorial Vertical Pattern Queue -->
      <div class="max-w-4xl space-y-6">
        ${patterns.map((pat, idx) => `
          <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm hover:border-brand-indigo transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div class="flex items-start gap-6">
              <div class="font-display-lg text-brand-indigo/30 text-4xl font-extrabold font-mono shrink-0">
                0${idx + 1}
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <span class="px-3 py-1 rounded-full ${pat.status === 'Validated' ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-violet/10 text-brand-violet'} text-[10px] font-bold uppercase tracking-wider">
                    ${pat.status === 'Validated' ? '✓ Validated Challenge Created' : 'NEEDS HUMAN VALIDATION'}
                  </span>
                  <span class="text-xs font-bold text-brand-indigo font-mono">${pat.signalCount} Related Signals</span>
                </div>

                <h3 class="font-headline-md text-brand-indigo text-2xl font-bold">${pat.title}</h3>
                <p class="font-body-md text-on-surface-variant text-sm max-w-xl leading-relaxed">${pat.summary}</p>
                
                <div class="flex items-center gap-4 text-xs font-semibold text-brand-indigo pt-1">
                  <span>📍 Across ${pat.locations.join(' · ')}</span>
                  <span>•</span>
                  <span>👥 Impact: ${pat.affectedGroups.join(', ')}</span>
                </div>
              </div>
            </div>

            <button data-validate-pattern="${pat.id}" class="w-full md:w-auto bg-brand-indigo text-white px-6 py-3 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-sm">
              <span>${pat.status === 'Validated' ? 'View Validation Detail' : 'Review Pattern →'}</span>
            </button>

          </div>
        `).join('')}
      </div>

    </main>

    ${renderFooter()}
  `;
}
