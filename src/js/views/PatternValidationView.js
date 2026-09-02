import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderPatternValidationView() {
  const pattern = AppState.activeValidationPattern || AppState.communityPatterns[0] || {
    id: 'PATTERN-001',
    title: 'Water Quality & Public Health Concern',
    primaryDomain: 'Water Quality & Sanitation',
    relatedDomains: ['Healthcare & Public Health'],
    signalCount: 4,
    locations: ['Gumla', 'Latehar', 'Simdega'],
    affectedGroups: ['Children', 'Families'],
    summary: 'Multiple community observations indicate recurring concerns related to drinking water quality, discolouration, and potential health impacts.',
    status: 'Emerging pattern',
    signals: [
      { location: 'Gumla, Jharkhand', description: 'The water from our handpump has become yellow and leaves rust stain.' },
      { location: 'Latehar, Jharkhand', description: 'Many children have stomach problems after drinking village water.' },
      { location: 'Simdega, Jharkhand', description: 'The drinking water smells strange during summer.' },
      { location: 'Gumla, Jharkhand', description: 'We have to walk far because the nearby open water well is not safe.' }
    ]
  };

  return `
    ${renderHeader('mentor-dashboard')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <!-- Back Link -->
      <div class="mb-6">
        <button data-route="validation-queue" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Validation Queue
        </button>
      </div>

      <!-- Main Container -->
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Header -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-3">
          <div class="flex items-center gap-3">
            <span class="px-3.5 py-1.5 rounded-full bg-brand-violet text-white text-xs font-bold uppercase tracking-wider">
              EMERGING PATTERN VALIDATION
            </span>
            <span class="text-xs font-bold text-brand-indigo font-mono">${pattern.signalCount} Related Signals</span>
          </div>

          <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold">${pattern.title}</h1>
          <p class="font-body-lg text-on-surface-variant text-base">${pattern.summary}</p>
        </div>

        <!-- Section 1: What People Reported (Anonymized Signals) -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-4">
          <h2 class="font-headline-sm text-brand-indigo text-xl font-bold border-b border-outline-variant/40 pb-3">
            SECTION 1: What People Reported
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            ${pattern.signals ? pattern.signals.map(sig => `
              <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
                <span class="text-xs font-bold text-brand-teal uppercase flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  ${sig.location?.label || sig.location}
                </span>
                <p class="text-xs text-on-surface italic leading-relaxed">"${sig.description}"</p>
              </div>
            `).join('') : ''}
          </div>

          <div class="p-3 bg-surface-container-low rounded-xl text-xs text-on-surface-variant flex items-center gap-2">
            <span class="material-symbols-outlined text-brand-teal text-base">shield</span>
            <span>Citizen privacy guaranteed. Zero names, phone numbers, or exact addresses exposed.</span>
          </div>
        </div>

        <!-- Section 2: What SamadhanSetu Detected -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-4">
          <h2 class="font-headline-sm text-brand-indigo text-xl font-bold border-b border-outline-variant/40 pb-3">
            SECTION 2: What SamadhanSetu Detected
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-brand-indigo">
            <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
              <span class="text-[10px] font-bold text-brand-teal uppercase block">PRIMARY CONCERN</span>
              <div class="font-bold text-sm text-brand-indigo">${pattern.primaryDomain}</div>
            </div>
            <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
              <span class="text-[10px] font-bold text-brand-violet uppercase block">POTENTIALLY AFFECTED</span>
              <div class="font-bold text-sm text-brand-indigo">${pattern.affectedGroups?.join(', ')}</div>
            </div>
            <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
              <span class="text-[10px] font-bold text-brand-teal uppercase block">GEOGRAPHIC PATTERN</span>
              <div class="font-bold text-sm text-brand-indigo">${pattern.locations?.join(' · ')}</div>
            </div>
          </div>
        </div>

        <!-- Section 3: Validation Questions & Actions -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6">
          <h2 class="font-headline-sm text-brand-indigo text-xl font-bold border-b border-outline-variant/40 pb-3">
            SECTION 3: Validator Evaluation
          </h2>

          <!-- Question 1 -->
          <div class="space-y-2">
            <label class="block text-sm font-bold text-brand-indigo">1. Does this appear to describe a meaningful shared problem?</label>
            <div class="flex flex-wrap gap-3">
              <button class="val-q1-btn px-4 py-2 rounded-full border border-brand-indigo bg-brand-indigo text-white text-xs font-bold">Yes</button>
              <button class="val-q1-btn px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface-variant text-xs font-semibold hover:border-brand-indigo">Not yet</button>
              <button class="val-q1-btn px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface-variant text-xs font-semibold hover:border-brand-indigo">Needs more information</button>
            </div>
          </div>

          <!-- Question 2: Optional Validator Notes -->
          <div class="space-y-2">
            <label class="block text-sm font-bold text-brand-indigo">2. Add Validator Context or Technical Notes (Optional)</label>
            <textarea id="validator-notes-input" class="w-full h-24 p-3 rounded-xl border border-outline-variant bg-surface-container-low text-xs text-on-surface focus:outline-none focus:border-brand-violet" placeholder="e.g. Reports suggest groundwater fluoride contamination during monsoon runoff..."></textarea>
          </div>

          <!-- Primary Action to Shape Challenge -->
          <div class="pt-4 border-t border-outline-variant/40">
            <button id="start-challenge-formation-btn" class="w-full bg-brand-indigo text-white py-4 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2">
              <span>Yes, create a challenge →</span>
            </button>
          </div>

        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
