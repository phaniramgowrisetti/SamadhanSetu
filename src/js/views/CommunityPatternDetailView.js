import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderCommunityPatternDetailView() {
  const pattern = AppState.activePatternDetail || AppState.communityPatterns[0] || {
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
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <!-- Back Navigation -->
      <div class="mb-8">
        <button data-route="community-patterns" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Community Patterns
        </button>
      </div>

      <!-- Main Container -->
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Header Card -->
        <div class="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant shadow-sm space-y-4">
          <div class="flex flex-wrap items-center gap-3">
            <span class="px-3.5 py-1.5 rounded-full bg-brand-teal text-white text-xs font-bold uppercase tracking-wider">
              ${pattern.status}
            </span>
            <span class="text-xs font-bold text-brand-violet font-mono">${pattern.signalCount} Related Signals Linked</span>
          </div>

          <h1 class="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold leading-tight">
            ${pattern.title}
          </h1>

          <p class="font-body-lg text-on-surface-variant text-base leading-relaxed">
            ${pattern.summary}
          </p>

          <!-- Pattern Status Lifecycle Banner -->
          <div class="pt-4 border-t border-outline-variant/40">
            <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-widest block mb-3">PATTERN LIFECYCLE STAGE</span>
            <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-[10px] font-bold uppercase">
              <div class="p-2 rounded-lg bg-surface-container-low text-brand-indigo border border-outline-variant/30">
                1. Individual Signal
              </div>
              <div class="p-2 rounded-lg bg-surface-container-low text-brand-indigo border border-outline-variant/30">
                2. Similar Signals
              </div>
              <div class="p-2 rounded-lg bg-brand-teal text-white shadow-xs">
                3. Emerging Pattern
              </div>
              <div class="p-2 rounded-lg bg-surface-container-low text-outline opacity-60">
                4. Needs Validation
              </div>
              <div class="p-2 rounded-lg bg-surface-container-low text-outline opacity-60">
                5. Validated Challenge
              </div>
            </div>
          </div>
        </div>

        <!-- Vertical Storytelling Timeline of Connected Signals -->
        <div class="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant shadow-sm space-y-6">
          <div class="text-xs font-bold text-brand-teal uppercase tracking-widest mb-6">
            CONNECTED COMMUNITY OBSERVATIONS
          </div>

          <div class="space-y-6 relative">
            ${pattern.signals ? pattern.signals.map((sig, idx) => `
              <div class="flex items-start gap-4 p-5 rounded-xl bg-surface-container-low border border-outline-variant/40 relative">
                <div class="w-8 h-8 rounded-full bg-brand-indigo text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ${idx + 1}
                </div>
                <div class="space-y-1">
                  <div class="text-xs font-bold text-brand-indigo flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-sm text-brand-teal">location_on</span>
                    ${sig.location?.label || sig.location || 'Jharkhand'}
                  </div>
                  <p class="text-sm text-on-surface italic leading-relaxed">"${sig.description}"</p>
                </div>
              </div>
              ${idx < pattern.signals.length - 1 ? `
                <div class="flex justify-center -my-3">
                  <span class="material-symbols-outlined text-brand-violet text-lg">arrow_downward</span>
                </div>
              ` : ''}
            `).join('') : ''}
          </div>

          <!-- What Connects Them Summary -->
          <div class="mt-8 p-6 rounded-2xl bg-brand-indigo/5 border border-brand-indigo/20 space-y-2">
            <span class="text-[10px] font-bold text-brand-violet uppercase tracking-widest block">WHAT MAY BE CONNECTING THEM?</span>
            <div class="font-headline-sm text-brand-indigo font-bold text-lg">${pattern.primaryDomain}</div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              These reports describe different individual experiences, but together they point toward a recurring community issue affecting ${pattern.affectedGroups.join(' and ')} across ${pattern.locations.join(', ')}.
            </p>
          </div>

          <!-- Privacy Guarantee Box -->
          <div class="p-4 rounded-xl bg-surface-container-low text-xs text-on-surface-variant flex items-center gap-2 border border-outline-variant/30">
            <span class="material-symbols-outlined text-brand-teal text-base">shield</span>
            <span>All signal descriptions are completely anonymized. Private names and exact addresses are never shared.</span>
          </div>
        </div>

      </div>
    </main>

    ${renderFooter()}
  `;
}
