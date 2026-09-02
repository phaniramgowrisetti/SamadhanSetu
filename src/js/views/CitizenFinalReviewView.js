import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';

/**
 * Final Review View - Compact 2-Column Desktop Viewport Optimization
 * Max width 960px, fits within standard 1366x768 / 1440x900 viewports without long scrolling.
 */
export function renderCitizenFinalReviewView() {
  const draft = AppState.reportDraft;
  const isVoice = draft.method === 'voice' || draft.voiceRecorded;
  const evidenceList = draft.evidence || [];
  const locationLabel = draft.location?.label || 'Gumla District, Jharkhand';

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-4 sm:pt-6 pb-12 px-6 md:px-margin-desktop max-w-[960px] mx-auto w-full flex flex-col items-center justify-center">
      
      <!-- Top Bar: Back Link -->
      <div class="w-full mb-4">
        <button data-route="citizen-report-location" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs sm:text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Location
        </button>
      </div>

      <!-- Main Compact Review Container -->
      <div class="w-full bg-white border border-outline-variant/70 rounded-3xl p-6 sm:p-7 shadow-2xs space-y-5">
        
        <!-- Header -->
        <div class="text-center space-y-1">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-[10px] font-bold bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/40 inline-block">
            STEP 5 OF 5: FINAL REVIEW
          </span>

          <h1 class="font-display-lg text-brand-indigo text-2xl sm:text-3xl font-extrabold tracking-tight">
            Let's make sure we understood you.
          </h1>

          <p class="text-xs sm:text-sm text-on-surface-variant max-w-lg mx-auto">
            You can review your report details before sharing it with the community.
          </p>
        </div>

        <!-- 2-Column Desktop Grid Layout (Collapses on Mobile) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
          
          <!-- LEFT COLUMN: What You Told Us & Evidence -->
          <div class="space-y-4">
            
            <!-- 1. WHAT YOU TOLD US -->
            <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/60 space-y-2.5 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider">1. WHAT YOU TOLD US</span>
                <button data-route="${isVoice ? 'citizen-report-voice' : 'citizen-report-text'}" class="text-xs font-bold text-brand-violet hover:underline flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-xs">edit</span> Edit
                </button>
              </div>
              
              <div class="p-3 bg-white rounded-xl border border-outline-variant/30 text-xs text-on-surface">
                ${isVoice ? `
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-brand-violet text-xl">graphic_eq</span>
                    <div>
                      <div class="font-bold text-brand-indigo text-xs sm:text-sm">Voice Note Recorded (0:18)</div>
                      <div class="text-[11px] text-on-surface-variant">Speech ready for AI processing</div>
                    </div>
                  </div>
                ` : `
                  <p class="italic text-on-surface-variant text-xs line-clamp-3">"${draft.description || 'The water from our hand pump has turned rusty brown after the monsoon rains...'}"</p>
                `}
              </div>
            </div>

            <!-- 2. EVIDENCE -->
            <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/60 space-y-2.5 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider">2. EVIDENCE</span>
                <button data-route="citizen-report-evidence" class="text-xs font-bold text-brand-violet hover:underline flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-xs">add_photo_alternate</span> Add / Change
                </button>
              </div>

              <div class="p-3 bg-white rounded-xl border border-outline-variant/30 text-xs text-on-surface">
                ${evidenceList.length > 0 ? `
                  <div class="space-y-1.5">
                    ${evidenceList.map(item => `
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-brand-teal text-base">attachment</span>
                        <span class="font-semibold text-xs text-brand-indigo truncate max-w-xs">${item.name}</span>
                        ${item.caption ? `<span class="text-[11px] text-on-surface-variant italic">— ${item.caption}</span>` : ''}
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <span class="text-xs text-on-surface-variant italic">No photos or files added (Optional).</span>
                `}
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Location & Important Information -->
          <div class="space-y-4">
            
            <!-- 3. LOCATION -->
            <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/60 space-y-2.5 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider">3. LOCATION</span>
                <button data-route="citizen-report-location" class="text-xs font-bold text-brand-violet hover:underline flex items-center gap-1 cursor-pointer">
                  <span class="material-symbols-outlined text-xs">edit_location</span> Change
                </button>
              </div>

              <div class="p-3 bg-white rounded-xl border border-outline-variant/30 text-xs font-bold text-brand-indigo flex items-center gap-2">
                <span class="material-symbols-outlined text-brand-teal text-base">location_on</span>
                <span>📍 ${locationLabel}</span>
              </div>
            </div>

            <!-- 4. IMPORTANT INFORMATION -->
            <div class="p-4 bg-brand-teal/10 rounded-2xl border border-brand-teal/20 text-xs text-brand-indigo leading-relaxed flex items-start gap-2.5 shadow-2xs">
              <span class="material-symbols-outlined text-brand-teal text-lg shrink-0 mt-0.5">info</span>
              <div>
                <span class="font-bold block text-[10px] text-brand-teal uppercase tracking-widest mb-0.5">IMPORTANT INFORMATION</span>
                <p class="text-[11px]">Your report may help identify whether other communities in your region are experiencing something similar. No formal department selection is required.</p>
              </div>
            </div>

          </div>

        </div>

        <!-- BOTTOM SECTION: Consent Checkbox & Action Area -->
        <div class="pt-2 space-y-4 border-t border-outline-variant/40">
          
          <div class="p-3.5 bg-surface-container-low rounded-2xl border border-outline-variant/50">
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="consent-checkbox" class="mt-0.5 w-4 h-4 rounded text-brand-indigo focus:ring-brand-violet cursor-pointer" ${draft.consentGiven ? 'checked' : ''}>
              <span class="text-xs text-on-surface-variant font-medium leading-snug">
                I understand that my report will be added to SamadhanSetu to help identify and understand community problems.
              </span>
            </label>
          </div>

          <!-- Submit Button -->
          <button id="final-submit-btn" class="w-full bg-brand-indigo text-white py-4 rounded-full font-label-md font-bold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" ${!draft.consentGiven ? 'disabled' : ''}>
            <span>Submit Report →</span>
          </button>

        </div>

      </div>

    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
