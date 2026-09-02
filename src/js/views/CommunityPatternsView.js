import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderCommunityPatternsView() {
  // Run pattern detection engine
  const patterns = AppState.runPatternDetection();

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      
      <!-- Hero Header -->
      <div class="max-w-3xl mb-12">
        <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-3">
          CROSS-REPORT PATTERN DISCOVERY
        </span>

        <h1 class="font-display-lg text-brand-indigo text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          What communities are telling us.
        </h1>

        <p class="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed">
          Individual observations can reveal larger patterns when similar experiences begin appearing across neighboring communities and districts.
        </p>
      </div>

      <!-- Storytelling Transformation Section -->
      <section class="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant shadow-sm mb-16">
        <div class="text-xs font-bold text-brand-violet uppercase tracking-widest text-center mb-8">
          HOW INDIVIDUAL VOICES CONNECT
        </div>

        <!-- 4 Quote Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
            <span class="text-xs text-brand-indigo font-semibold block">Gumla, Jharkhand</span>
            <p class="text-xs text-on-surface italic">"The water from our handpump has become yellow."</p>
          </div>

          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
            <span class="text-xs text-brand-indigo font-semibold block">Latehar, Jharkhand</span>
            <p class="text-xs text-on-surface italic">"Children have stomach problems after drinking water."</p>
          </div>

          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
            <span class="text-xs text-brand-indigo font-semibold block">Simdega, Jharkhand</span>
            <p class="text-xs text-on-surface italic">"The drinking water smells strange during summer."</p>
          </div>

          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
            <span class="text-xs text-brand-indigo font-semibold block">Gumla, Jharkhand</span>
            <p class="text-xs text-on-surface italic">"We have to walk far for safe drinking water."</p>
          </div>
        </div>

        <!-- Connection Arrow -->
        <div class="flex flex-col items-center my-6">
          <div class="w-10 h-10 rounded-full bg-brand-indigo text-white flex items-center justify-center shadow-xs">
            <span class="material-symbols-outlined text-xl">hub</span>
          </div>
          <span class="text-[10px] font-bold text-brand-indigo uppercase tracking-widest mt-2">SAMADHANSETU CONNECTS THE SIGNALS</span>
        </div>

        <!-- Emerging Pattern Card -->
        <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-brand-teal/10 border-2 border-brand-teal text-center space-y-2">
          <span class="px-3 py-1 rounded-full bg-brand-teal text-white text-[10px] font-bold uppercase tracking-wider">EMERGING COMMUNITY PATTERN</span>
          <h3 class="font-headline-md text-brand-indigo text-2xl font-bold">Water Quality & Public Health Concern</h3>
          <p class="text-xs text-on-surface-variant max-w-lg mx-auto">
            4 related community observations across Gumla, Latehar, and Simdega districts indicating recurring drinking water discolouration and health impacts.
          </p>
        </div>
      </section>

      <!-- Editorial Vertical Pattern List -->
      <section class="max-w-4xl mx-auto space-y-8">
        <h2 class="font-headline-sm text-brand-indigo text-2xl font-bold mb-6">Detected Patterns & Signals</h2>

        ${patterns.map((pat, idx) => `
          <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm hover:border-brand-violet transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div class="flex items-start gap-6">
              <div class="font-display-lg text-brand-indigo/30 text-4xl font-extrabold font-mono shrink-0">
                0${idx + 1}
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <span class="px-3 py-1 rounded-full ${pat.signalCount >= 3 ? 'bg-brand-teal text-white' : pat.signalCount === 2 ? 'bg-brand-violet text-white' : 'bg-surface-container-low text-brand-indigo'} text-[10px] font-bold uppercase tracking-wider">
                    ${pat.status}
                  </span>
                  <span class="text-xs font-bold text-brand-violet font-mono">${pat.signalCount} Related Signal${pat.signalCount > 1 ? 's' : ''}</span>
                </div>

                <h3 class="font-headline-md text-brand-indigo text-2xl font-bold">${pat.title}</h3>
                <p class="font-body-md text-on-surface-variant text-sm max-w-xl leading-relaxed">${pat.summary}</p>
                
                <div class="flex items-center gap-4 text-xs font-semibold text-brand-indigo pt-2">
                  <span>📍 Districts: <strong>${pat.locations.join(' · ')}</strong></span>
                  <span>•</span>
                  <span>👥 Affected: <strong>${pat.affectedGroups.join(', ')}</strong></span>
                </div>
              </div>
            </div>

            <button data-inspect-pattern="${pat.id}" class="w-full md:w-auto bg-surface-container-low text-brand-indigo px-6 py-3 rounded-full font-label-md text-xs font-bold border border-outline-variant hover:bg-brand-indigo hover:text-white transition-all shrink-0 flex items-center justify-center gap-1.5">
              <span>Explore pattern</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </button>

          </div>
        `).join('')}

      </section>

    </main>

    ${renderFooter()}
  `;
}
