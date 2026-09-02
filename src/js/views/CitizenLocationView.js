import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';

/**
 * Location Confirmation View - Compact 2-Column Desktop Viewport Optimization
 * Max width 960px, zero excessive vertical scrolling, responsive 2-column layout.
 */
export function renderCitizenLocationView() {
  const currentLocation = AppState.reportDraft.location || { label: 'Gumla District, Jharkhand', method: 'manual' };

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-4 sm:pt-6 pb-12 px-6 md:px-margin-desktop max-w-[960px] mx-auto w-full flex flex-col items-center justify-center">
      
      <!-- Top Bar: Back Link -->
      <div class="w-full mb-4">
        <button data-route="citizen-report-evidence" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs sm:text-sm font-semibold transition-colors group cursor-pointer">
          <span class="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      <!-- Main Compact Card -->
      <div class="w-full bg-white border border-outline-variant/70 rounded-3xl p-6 sm:p-7 shadow-2xs space-y-5">
        
        <!-- Header -->
        <div class="text-center space-y-1">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-[10px] font-bold bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/40 inline-block">
            STEP 4 OF 5: LOCATION CONFIRMATION
          </span>

          <h1 class="font-display-lg text-brand-indigo text-2xl sm:text-3xl font-extrabold tracking-tight">
            Where is this happening?
          </h1>

          <p class="text-xs sm:text-sm text-on-surface-variant max-w-lg mx-auto">
            Sharing a location helps identify if similar problems are occurring in nearby villages or blocks.
          </p>
        </div>

        <!-- Highlighted Selected Location Row -->
        <div class="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/60 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0 shadow-2xs">
              <span class="material-symbols-outlined text-xl">location_on</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-brand-teal uppercase tracking-widest block">SELECTED LOCATION</span>
              <div id="confirmed-location-label" class="font-headline-sm text-brand-indigo font-bold text-base sm:text-lg">${currentLocation.label}</div>
              <span class="text-[11px] text-on-surface-variant">Approximate location • ${currentLocation.method === 'gps' ? 'GPS Device Location' : 'Manual / Search Entry'}</span>
            </div>
          </div>
        </div>

        <!-- 2-Column Desktop Grid Layout (Collapses on Mobile) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-3">
          
          <!-- LEFT COLUMN: GPS & Search -->
          <div class="space-y-4">
            
            <!-- GPS Button -->
            <button id="gps-location-btn" class="w-full p-4 rounded-2xl border border-outline-variant/70 bg-white hover:border-brand-indigo hover:bg-surface-container-low transition-all text-left flex items-center justify-between group cursor-pointer shadow-2xs">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-brand-violet text-2xl group-hover:scale-110 transition-transform">my_location</span>
                <div>
                  <div class="font-bold text-brand-indigo text-xs sm:text-sm">Use my current location</div>
                  <div class="text-[11px] text-on-surface-variant">Detect automatically using device GPS</div>
                </div>
              </div>
              <span class="material-symbols-outlined text-outline group-hover:text-brand-indigo text-base">chevron_right</span>
            </button>

            <!-- Search Field & Suggestions -->
            <div class="p-4 rounded-2xl border border-outline-variant/70 bg-white space-y-3 shadow-2xs">
              <label class="block text-[10px] font-bold text-brand-indigo uppercase tracking-wider">Search for a village, town or place</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-base">search</span>
                <input type="text" id="location-search-input" class="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl py-2 pl-9 pr-3 text-xs text-on-surface focus:outline-none focus:border-brand-violet" placeholder="Search village, town or area...">
              </div>

              <!-- Compact Suggestion Chips -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span class="text-[11px] text-on-surface-variant font-semibold self-center">Suggestions:</span>
                <button data-quick-loc="Gumla Sector 4, Jharkhand" class="quick-loc-btn text-[11px] px-2.5 py-1 bg-surface-container-low rounded-full border border-outline-variant text-brand-indigo font-medium hover:border-brand-violet cursor-pointer">Gumla Sector 4</button>
                <button data-quick-loc="Simdega Block 2, Jharkhand" class="quick-loc-btn text-[11px] px-2.5 py-1 bg-surface-container-low rounded-full border border-outline-variant text-brand-indigo font-medium hover:border-brand-violet cursor-pointer">Simdega Block 2</button>
                <button data-quick-loc="Ranchi Rural, Jharkhand" class="quick-loc-btn text-[11px] px-2.5 py-1 bg-surface-container-low rounded-full border border-outline-variant text-brand-indigo font-medium hover:border-brand-violet cursor-pointer">Ranchi Rural</button>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Manual Entry -->
          <div class="space-y-4">
            
            <div class="p-4 rounded-2xl border border-outline-variant/70 bg-white space-y-2 shadow-2xs h-full flex flex-col justify-between">
              <div class="space-y-2">
                <label class="block text-[10px] font-bold text-brand-indigo uppercase tracking-wider">Enter Location Manually</label>
                <p class="text-[11px] text-on-surface-variant">Type your exact hamlet, village name, block, or district if not auto-detected.</p>
                <input type="text" id="manual-location-input" class="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl py-2.5 px-3.5 text-xs text-on-surface focus:outline-none focus:border-brand-violet mt-2" placeholder="Village / Town / District name" value="${currentLocation.label}">
              </div>

              <div class="p-3 bg-brand-teal/10 rounded-xl border border-brand-teal/20 text-[11px] text-brand-indigo flex items-center gap-2 mt-4">
                <span class="material-symbols-outlined text-brand-teal text-base shrink-0">shield</span>
                <span>Your exact coordinates are stored securely to protect community privacy.</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Bottom Full-Width Continue Button -->
        <div class="pt-2">
          <button id="location-continue-btn" class="w-full bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-bold text-sm hover:bg-brand-violet transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer">
            <span>Continue to Final Review</span>
            <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

      </div>

    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
