import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';

export function renderVoiceReportView() {
  const isRecorded = AppState.reportDraft.voiceRecorded;

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
      <div class="w-full max-w-xl bg-white border border-outline-variant rounded-2xl p-8 shadow-sm text-center">
        
        <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-4">
          STEP 2 OF 5: SPEAK YOUR PROBLEM
        </span>

        <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-2">
          Tell us what happened.
        </h1>

        <p class="font-body-lg text-on-surface-variant text-base mb-8">
          Speak naturally in the language you are comfortable with.
        </p>

        <!-- Dynamic Recording Container -->
        <div id="voice-recording-area" class="my-8 flex flex-col items-center justify-center py-6">
          ${isRecorded ? renderRecordedState() : renderIdleState()}
        </div>

        <!-- Language Switch Helper -->
        <div class="pt-6 border-t border-outline-variant/40 flex justify-between items-center text-xs text-on-surface-variant">
          <span>Language: <strong>${AppState.selectedLanguage.toUpperCase()}</strong></span>
          <button data-route="citizen-report-text" class="text-brand-violet font-semibold hover:underline flex items-center gap-1">
            Prefer writing instead? <span class="material-symbols-outlined text-sm">edit_note</span>
          </button>
        </div>

      </div>
    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}

function renderIdleState() {
  return `
    <div class="relative mb-6">
      <button id="mic-trigger-btn" class="w-32 h-32 rounded-full bg-brand-indigo text-white flex flex-col items-center justify-center shadow-xl hover:bg-brand-violet hover:scale-105 transition-all cursor-pointer active:scale-95">
        <span class="material-symbols-outlined text-5xl">mic</span>
        <span class="text-xs font-semibold mt-1">Tap & Speak</span>
      </button>
    </div>

    <p class="font-body-md text-on-surface-variant text-sm font-medium">
      Tap the microphone and describe the problem in your own words.
    </p>
  `;
}

function renderRecordedState() {
  return `
    <div class="w-full bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 mb-6 space-y-4">
      <div class="flex items-center justify-center gap-3 text-brand-teal font-bold text-sm">
        <span class="w-3 h-3 rounded-full bg-brand-teal animate-pulse"></span>
        <span>Your message has been recorded</span>
      </div>

      <!-- Waveform Mock Visualizer -->
      <div class="flex items-center justify-center gap-1.5 h-12 py-2">
        <span class="w-1.5 h-6 bg-brand-violet/40 rounded-full"></span>
        <span class="w-1.5 h-10 bg-brand-violet/70 rounded-full"></span>
        <span class="w-1.5 h-8 bg-brand-violet rounded-full"></span>
        <span class="w-1.5 h-12 bg-brand-violet rounded-full"></span>
        <span class="w-1.5 h-7 bg-brand-violet/80 rounded-full"></span>
        <span class="w-1.5 h-11 bg-brand-violet rounded-full"></span>
        <span class="w-1.5 h-5 bg-brand-violet/50 rounded-full"></span>
        <span class="w-1.5 h-9 bg-brand-violet/90 rounded-full"></span>
      </div>

      <div class="text-xs text-on-surface-variant font-semibold">Duration: 00:18</div>

      <!-- Play / Re-record buttons -->
      <div class="flex justify-center gap-4 pt-2">
        <button id="listen-again-btn" class="px-4 py-2 rounded-full border border-outline-variant bg-white text-brand-indigo font-label-md text-xs font-bold flex items-center gap-1.5 hover:border-brand-violet">
          <span class="material-symbols-outlined text-sm">play_arrow</span> Listen Again
        </button>
        <button id="record-again-btn" class="px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface-variant font-label-md text-xs font-semibold flex items-center gap-1.5 hover:text-error">
          <span class="material-symbols-outlined text-sm">refresh</span> Record Again
        </button>
      </div>
    </div>

    <button id="voice-continue-btn" class="w-full bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm flex items-center justify-center gap-2">
      <span>Continue to Evidence & Photos</span>
      <span class="material-symbols-outlined text-base">arrow_forward</span>
    </button>
  `;
}
