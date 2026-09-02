import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderReportReviewView() {
  const draft = AppState.reportDraft;
  const isVoice = draft.method === 'voice' || draft.voiceRecorded;

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Container -->
      <div class="w-full max-w-xl bg-white border border-outline-variant rounded-2xl p-8 shadow-sm text-center">
        
        <div class="w-16 h-16 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-4xl">check_circle</span>
        </div>

        <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold block mb-2">
          DRAFT CREATED
        </span>

        <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-3">
          Your problem description is ready.
        </h1>

        <p class="font-body-lg text-on-surface-variant text-base mb-8">
          We have recorded what you shared. You can review your input below.
        </p>

        <!-- Draft Summary Card -->
        <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 text-left mb-8 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-brand-indigo uppercase tracking-wider">Captured Signal</span>
            <span class="text-xs font-semibold bg-brand-indigo/10 text-brand-indigo px-3 py-1 rounded-full flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">${isVoice ? 'mic' : 'edit_note'}</span>
              ${isVoice ? 'Voice Input' : 'Text Input'}
            </span>
          </div>

          <div class="p-4 bg-white rounded-xl border border-outline-variant/30 text-sm text-on-surface">
            ${isVoice ? `
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-brand-violet text-2xl">graphic_eq</span>
                <div>
                  <div class="font-bold text-brand-indigo text-sm">Voice Note Recorded (0:18)</div>
                  <div class="text-xs text-on-surface-variant">Language: ${AppState.selectedLanguage.toUpperCase()} • Speech synthesis pending AI structuring</div>
                </div>
              </div>
            ` : `
              <p class="italic text-on-surface-variant">"${draft.description || 'The water from our hand pump has turned rusty brown after the monsoon rains...'}"</p>
            `}
          </div>

          <div class="text-xs text-on-surface-variant flex items-center gap-1">
            <span class="material-symbols-outlined text-sm text-brand-teal">location_on</span>
            <span>Location: <strong>${draft.location}</strong></span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-3">
          <button id="review-continue-btn" class="w-full bg-brand-indigo text-white py-4 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2">
            <span>Continue reporting</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          
          <button data-route="citizen-onboarding" class="w-full border border-outline-variant text-on-surface-variant py-3.5 rounded-full font-label-md font-semibold text-sm hover:border-brand-indigo transition-colors">
            Save and finish later
          </button>
        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
