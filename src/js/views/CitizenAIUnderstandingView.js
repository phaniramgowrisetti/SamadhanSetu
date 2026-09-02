import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';
import { SignalUnderstandingService } from '../services/SignalUnderstandingService.js';

export function renderCitizenAIUnderstandingView() {
  const currentSignal = AppState.communitySignals[0] || {
    id: 'SS-2026-00421',
    description: 'The water from our village hand pump has turned rusty brown after monsoon rains.',
    location: 'Gumla District, Jharkhand'
  };

  // Run mock AI service
  const understanding = SignalUnderstandingService.understandSignal(currentSignal, AppState.selectedLanguage);
  
  // Attach candidate understanding to active draft/signal for confirmation screen
  AppState.activeAIUnderstanding = understanding;

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Back Link -->
      <div class="w-full max-w-2xl mb-6">
        <button data-route="citizen-report-submitted" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      <!-- Container -->
      <div class="w-full max-w-2xl bg-white border border-outline-variant rounded-2xl p-8 shadow-sm">
        
        <div class="text-center mb-8">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-3">
            AI OBSERVATION SYNTHESIS
          </span>

          <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-2">
            Let's understand what you shared.
          </h1>

          <p class="font-body-lg text-on-surface-variant text-base">
            We are organizing the important details from your report into a clear community signal.
          </p>
        </div>

        <!-- Original Observation Display -->
        <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 mb-8 space-y-2">
          <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider block">WHAT YOU SHARED</span>
          <p class="font-body-md text-on-surface text-base italic leading-relaxed">
            "${currentSignal.description}"
          </p>
          <div class="text-xs text-on-surface-variant pt-2 flex items-center gap-2 font-medium">
            <span>📍 ${currentSignal.location?.label || currentSignal.location}</span>
          </div>
        </div>

        <!-- AI Sequential Processing Visualizer -->
        <div id="ai-processing-sequence" class="space-y-4 mb-8">
          
          <div class="p-4 rounded-xl bg-white border border-outline-variant flex items-center justify-between shadow-xs animate-in fade-in duration-300">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-xl">water_drop</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-brand-teal uppercase tracking-wider block">STEP 1: CONCERN IDENTIFIED</span>
                <span class="font-headline-sm text-brand-indigo font-bold text-sm">${understanding.primaryDomain}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-brand-teal text-lg">check_circle</span>
          </div>

          <div class="p-4 rounded-xl bg-white border border-outline-variant flex items-center justify-between shadow-xs animate-in fade-in duration-500">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-violet/10 text-brand-violet flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-xl">location_on</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-brand-violet uppercase tracking-wider block">STEP 2: LOCATION MAPPED</span>
                <span class="font-headline-sm text-brand-indigo font-bold text-sm">${understanding.extractedLocation}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-brand-teal text-lg">check_circle</span>
          </div>

          <div class="p-4 rounded-xl bg-white border border-outline-variant flex items-center justify-between shadow-xs animate-in fade-in duration-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-indigo/10 text-brand-indigo flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-xl">groups</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-wider block">STEP 3: POTENTIALLY AFFECTED</span>
                <span class="font-headline-sm text-brand-indigo font-bold text-sm">${understanding.affectedGroups.join(', ')}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-brand-teal text-lg">check_circle</span>
          </div>

          <div class="p-4 rounded-xl bg-white border border-outline-variant flex items-center justify-between shadow-xs animate-in fade-in duration-1000">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-xl">health_and_safety</span>
              </div>
              <div>
                <span class="text-[10px] font-bold text-brand-teal uppercase tracking-wider block">STEP 4: POSSIBLE IMPACT</span>
                <span class="font-headline-sm text-brand-indigo font-bold text-sm">${understanding.possibleImpacts.join(', ')}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-brand-teal text-lg">check_circle</span>
          </div>

        </div>

        <!-- Human Summary Callout -->
        <div class="p-4 bg-brand-indigo/5 rounded-xl border border-brand-indigo/20 text-xs text-brand-indigo mb-8 flex items-start gap-3">
          <span class="material-symbols-outlined text-brand-violet text-xl shrink-0 mt-0.5">smart_toy</span>
          <p>We noticed that your report relates to <strong>${understanding.primaryDomain}</strong> affecting <strong>${understanding.affectedGroups.join(', ')}</strong> in <strong>${understanding.extractedLocation}</strong>.</p>
        </div>

        <!-- Action Buttons -->
        <button data-route="citizen-ai-confirmation" class="w-full bg-brand-indigo text-white py-4 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2">
          <span>Review and confirm →</span>
        </button>

      </div>
    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
