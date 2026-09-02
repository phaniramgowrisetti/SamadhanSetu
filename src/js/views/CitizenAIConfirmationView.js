import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';

export function renderCitizenAIConfirmationView() {
  const understanding = AppState.activeAIUnderstanding || {
    primaryDomain: 'Water Quality & Sanitation',
    relatedDomains: ['Community Health'],
    issueSummary: 'Groundwater discoloration and potential public health risk.',
    affectedGroups: ['Children and Local Families'],
    possibleImpacts: ['Drinking water contamination', 'Waterborne illness risk'],
    extractedLocation: 'Gumla District, Jharkhand'
  };

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Back Link -->
      <div class="w-full max-w-2xl mb-6">
        <button data-route="citizen-ai-understanding" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      <!-- Main Container -->
      <div class="w-full max-w-2xl bg-white border border-outline-variant rounded-2xl p-8 shadow-sm">
        
        <div class="text-center mb-8">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-3">
            CITIZEN CONFIRMATION
          </span>

          <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-2">
            Did we understand this correctly?
          </h1>

          <p class="font-body-lg text-on-surface-variant text-base">
            Please check the information below. You can correct anything that doesn't look right.
          </p>
        </div>

        <!-- Editable Breakdown Sections -->
        <div class="space-y-4 mb-8">
          
          <!-- Section 1: Problem -->
          <div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-indigo text-2xl mt-0.5">water_drop</span>
              <div>
                <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider block">PROBLEM CATEGORY</span>
                <input type="text" id="edit-domain-input" class="font-headline-sm text-brand-indigo font-bold text-base bg-transparent border-b border-transparent focus:border-brand-violet focus:outline-none" value="${understanding.primaryDomain}">
                <p class="text-xs text-on-surface-variant mt-1">${understanding.issueSummary}</p>
              </div>
            </div>
            <button class="toggle-edit-btn text-xs font-bold text-brand-violet hover:underline shrink-0">Edit</button>
          </div>

          <!-- Section 2: Possible Impact -->
          <div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-violet text-2xl mt-0.5">health_and_safety</span>
              <div>
                <span class="text-[10px] font-bold text-brand-violet uppercase tracking-wider block">POSSIBLE IMPACT</span>
                <input type="text" id="edit-impact-input" class="font-headline-sm text-brand-indigo font-bold text-base bg-transparent border-b border-transparent focus:border-brand-violet focus:outline-none" value="${understanding.possibleImpacts.join(', ')}">
              </div>
            </div>
            <button class="toggle-edit-btn text-xs font-bold text-brand-violet hover:underline shrink-0">Edit</button>
          </div>

          <!-- Section 3: Affected People -->
          <div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-teal text-2xl mt-0.5">groups</span>
              <div>
                <span class="text-[10px] font-bold text-brand-teal uppercase tracking-wider block">WHO MAY BE AFFECTED?</span>
                <input type="text" id="edit-groups-input" class="font-headline-sm text-brand-indigo font-bold text-base bg-transparent border-b border-transparent focus:border-brand-violet focus:outline-none" value="${understanding.affectedGroups.join(', ')}">
              </div>
            </div>
            <button class="toggle-edit-btn text-xs font-bold text-brand-violet hover:underline shrink-0">Edit</button>
          </div>

          <!-- Section 4: Location -->
          <div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-indigo text-2xl mt-0.5">location_on</span>
              <div>
                <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider block">LOCATION</span>
                <input type="text" id="edit-location-input" class="font-headline-sm text-brand-indigo font-bold text-base bg-transparent border-b border-transparent focus:border-brand-violet focus:outline-none" value="${understanding.extractedLocation}">
              </div>
            </div>
            <button class="toggle-edit-btn text-xs font-bold text-brand-violet hover:underline shrink-0">Edit</button>
          </div>

        </div>

        <!-- AI Transparency Explanation -->
        <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 mb-8 text-xs text-on-surface-variant leading-relaxed">
          <div class="font-bold text-brand-indigo mb-1 flex items-center gap-1.5">
            <span class="material-symbols-outlined text-base text-brand-violet">info</span> Why are we asking?
          </div>
          SamadhanSetu uses your description to organize community observations. Checking this helps us avoid misunderstanding what you experienced.
        </div>

        <!-- Actions -->
        <div class="space-y-3">
          <button id="confirm-understanding-btn" class="w-full bg-brand-indigo text-white py-4 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2">
            <span>Yes, this looks correct →</span>
          </button>
        </div>

      </div>
    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
