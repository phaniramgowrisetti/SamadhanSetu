import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderChallengeFormationView() {
  const draft = AppState.activeChallengeDraft || AppState.createChallengeDraft(AppState.activeValidationPattern);

  return `
    ${renderHeader('mentor-dashboard')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <!-- Back Link -->
      <div class="mb-6">
        <button data-route="pattern-validation" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Evidence Validation
        </button>
      </div>

      <!-- Main Container -->
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Header -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-3">
          <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-1">
            CHALLENGE DRAFTING
          </span>

          <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold">Shape the challenge.</h1>
          <p class="font-body-lg text-on-surface-variant text-base">
            SamadhanSetu has prepared a starting point based on community observations. Refine it before opening it to innovators.
          </p>
        </div>

        <!-- Pre-filled Editable Form -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6">
          
          <!-- Field 1: Title -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider">CHALLENGE TITLE</label>
            <input type="text" id="draft-title-input" class="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl px-4 py-3 text-base font-bold text-brand-indigo focus:outline-none focus:border-brand-violet" value="${draft.title}">
          </div>

          <!-- Field 2: Problem Statement -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider">THE PROBLEM STATEMENT</label>
            <textarea id="draft-problem-input" class="w-full h-28 p-4 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm text-on-surface leading-relaxed focus:outline-none focus:border-brand-violet">${draft.problemStatement}</textarea>
          </div>

          <!-- Field 3: Who is Affected -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider">WHO IS AFFECTED?</label>
            <input type="text" id="draft-affected-input" class="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-violet" value="${draft.whoIsAffected}">
          </div>

          <!-- Field 4: Why It Matters -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider">WHY IT MATTERS</label>
            <textarea id="draft-why-input" class="w-full h-20 p-4 rounded-xl border border-outline-variant/60 bg-surface-container-low text-sm text-on-surface leading-relaxed focus:outline-none focus:border-brand-violet">${draft.whyItMatters}</textarea>
          </div>

          <!-- Scope for Innovators (Focus Areas) -->
          <div class="space-y-3 pt-2">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider">WHAT COULD INNOVATORS HELP EXPLORE?</label>
            <div id="focus-areas-container" class="flex flex-wrap gap-2">
              ${draft.focusAreas.map((area, idx) => `
                <span class="px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-xs font-semibold text-brand-indigo flex items-center gap-1.5">
                  ${area}
                  <button data-remove-focus-idx="${idx}" class="hover:text-error text-xs">✕</button>
                </span>
              `).join('')}
            </div>

            <div class="flex items-center gap-2 pt-2">
              <input type="text" id="new-focus-input" class="bg-surface-container-low border border-outline-variant/60 rounded-full px-4 py-1.5 text-xs text-on-surface focus:outline-none" placeholder="Add focus area (e.g. IoT Sensor)">
              <button id="add-focus-btn" class="bg-brand-indigo text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-brand-violet">+ Add</button>
            </div>
          </div>

          <!-- Challenge Readiness Checklist -->
          <div class="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/60 space-y-2 text-xs font-semibold text-brand-indigo">
            <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-2">CHALLENGE READINESS CHECKLIST</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div class="flex items-center gap-2 text-brand-teal"><span class="material-symbols-outlined text-base">check_circle</span> Community observations collected</div>
              <div class="flex items-center gap-2 text-brand-teal"><span class="material-symbols-outlined text-base">check_circle</span> Signals understood by AI</div>
              <div class="flex items-center gap-2 text-brand-teal"><span class="material-symbols-outlined text-base">check_circle</span> Shared pattern detected</div>
              <div class="flex items-center gap-2 text-brand-teal"><span class="material-symbols-outlined text-base">check_circle</span> Human mentor review completed</div>
            </div>
          </div>

          <!-- Action CTAs -->
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button id="publish-challenge-btn" class="w-full sm:flex-1 bg-brand-indigo text-white py-4 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2">
              <span>Publish Challenge →</span>
            </button>
            
            <button data-route="mentor-dashboard" class="w-full sm:w-auto border border-outline-variant text-on-surface-variant px-8 py-4 rounded-full font-label-md font-semibold text-sm hover:border-brand-indigo bg-white">
              Save as draft
            </button>
          </div>

        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
