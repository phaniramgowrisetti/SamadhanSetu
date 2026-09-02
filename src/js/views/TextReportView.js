import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';

export function renderTextReportView() {
  const currentDescription = AppState.reportDraft.description || '';

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Back Link -->
      <div class="w-full max-w-xl mb-6">
        <button data-route="citizen-report-method" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      <!-- Container -->
      <div class="w-full max-w-xl bg-white border border-outline-variant rounded-2xl p-8 shadow-sm">
        
        <div class="text-center mb-6">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-3">
            STEP 2 OF 5: WRITE YOUR PROBLEM
          </span>

          <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-2">
            What is happening?
          </h1>

          <p class="font-body-lg text-on-surface-variant text-base">
            Tell us about the problem in your own words.
          </p>
        </div>

        <!-- Large Comfortable Text Area -->
        <div class="mb-6">
          <textarea id="text-report-input" class="w-full h-44 p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest focus:border-brand-violet focus:ring-4 focus:ring-brand-violet/10 transition-all font-body-md text-on-surface text-base leading-relaxed resize-none" placeholder="For example:&#10;'The main water hand pump near our community center has turned brown and smells rusty after heavy rains...'">${currentDescription}</textarea>
        </div>

        <!-- Equal Voice Alternative Banner -->
        <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between mb-8">
          <span class="text-xs font-semibold text-on-surface-variant">Prefer speaking instead?</span>
          <button data-route="citizen-report-voice" class="bg-white border border-outline-variant text-brand-indigo px-4 py-2 rounded-full font-label-md text-xs font-bold hover:border-brand-violet hover:text-brand-violet transition-all flex items-center gap-1.5 shadow-xs">
            <span class="material-symbols-outlined text-base">mic</span> Record your problem
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
          <button data-route="citizen-report-method" class="w-1/3 border border-outline-variant text-on-surface-variant py-3.5 rounded-full font-label-md font-semibold text-sm hover:border-brand-indigo transition-colors text-center">
            Back
          </button>
          <button id="text-continue-btn" class="w-2/3 bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm flex items-center justify-center gap-2">
            <span>Continue to Evidence & Photos</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

      </div>
    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
