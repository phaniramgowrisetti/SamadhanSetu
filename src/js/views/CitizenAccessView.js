import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * CitizenAccessView - Gateway for Citizen Pathway
 * Gives citizens two clear entry points: Sign In (Existing) or Create Account (New).
 */
export function renderCitizenAccessView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      <!-- Minimal Dedicated Header (Logo | Back to Role Selection, No landing navbar, No step indicators) -->
      <header class="w-full pt-5 pb-2 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-transparent relative z-20">
        <div class="flex items-center gap-4 sm:gap-6">
          <!-- Official SamadhanSetu Logo Asset (Transparent Container) -->
          <a data-route="intro" class="cursor-pointer group bg-transparent p-0 border-none shadow-none">
            <img 
              src="/assests/logo.png" 
              alt="SamadhanSetu — Civic Innovation Platform" 
              class="w-[130px] sm:w-[145px] md:w-[160px] h-auto max-w-full object-contain block bg-transparent transition-transform duration-300 ease-out group-hover:scale-[1.02]" 
              onerror="this.onerror=null; this.src='/logo.png';"
            />
          </a>

          <!-- Vertical Divider & Back to Role Selection -->
          <div class="h-5 w-px bg-outline-variant/60 hidden sm:block"></div>

          <button data-route="role-selection" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs sm:text-sm font-semibold transition-colors group">
            <span class="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span>Back to role selection</span>
          </button>
        </div>
      </header>

      <!-- Main Gateway Content -->
      <main class="flex-grow flex flex-col justify-center py-6 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        
        <!-- Background Civic Signal Subtle Metaphor -->
        <div class="absolute inset-0 pointer-events-none opacity-10 overflow-hidden -z-10 flex items-center justify-center">
          <svg class="w-full h-full text-brand-indigo max-w-4xl" viewBox="0 0 800 400" fill="none">
            <circle cx="200" cy="200" r="120" stroke="#159B8C" stroke-dasharray="6 6" stroke-width="1.5" />
            <circle cx="600" cy="200" r="120" stroke="#5B3FD6" stroke-dasharray="6 6" stroke-width="1.5" />
            <path d="M 200 200 L 600 200" stroke="#352C85" stroke-dasharray="4 4" stroke-width="1.5" />
          </svg>
        </div>

        <!-- Hero Header -->
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span class="font-label-sm text-brand-teal uppercase tracking-widest text-xs font-bold block">
            CITIZEN ACCESS
          </span>

          <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
            Your community. Your voice. Your impact.
          </h1>

          <p class="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Join SamadhanSetu to share problems you notice around you, follow their progress, and help turn community challenges into real solutions.
          </p>
        </div>

        <!-- Choice Cards Grid: Existing Citizen (Sign In) vs New Citizen (Create Account) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full mb-10">
          
          <!-- Card A: Sign In (Existing Citizen) -->
          <div data-citizen-action="signin" class="group cursor-pointer p-8 rounded-3xl bg-white border border-outline-variant/70 shadow-2xs hover:border-brand-violet hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-[11px] font-bold tracking-widest uppercase text-brand-teal">ALREADY HAVE AN ACCOUNT?</span>
                <div class="w-12 h-12 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white transition-all shrink-0">
                  <span class="material-symbols-outlined text-2xl">login</span>
                </div>
              </div>

              <h2 class="font-headline-md text-brand-indigo text-2xl font-extrabold mb-2 group-hover:text-brand-violet transition-colors">
                Sign In
              </h2>

              <p class="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                Access your existing citizen profile, view your active community signals, and track solution progress.
              </p>
            </div>

            <div class="pt-4 border-t border-outline-variant/40 flex items-center justify-between">
              <span class="font-label-md text-sm font-bold text-brand-indigo group-hover:text-brand-violet flex items-center gap-1.5">
                Sign In to Dashboard
                <span class="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
              </span>
            </div>
          </div>

          <!-- Card B: Create Account (New Citizen) -->
          <div data-citizen-action="signup" class="group cursor-pointer p-8 rounded-3xl bg-white border border-outline-variant/70 shadow-2xs hover:border-brand-violet hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div class="flex items-start justify-between mb-4">
                <span class="text-[11px] font-bold tracking-widest uppercase text-brand-violet">NEW TO SAMADHANSETU?</span>
                <div class="w-12 h-12 rounded-2xl bg-brand-violet/10 text-brand-violet flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-violet group-hover:text-white transition-all shrink-0">
                  <span class="material-symbols-outlined text-2xl">person_add</span>
                </div>
              </div>

              <h2 class="font-headline-md text-brand-indigo text-2xl font-extrabold mb-2 group-hover:text-brand-violet transition-colors">
                Create Account
              </h2>

              <p class="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                Get started in minutes to report local issues around your neighborhood and contribute to community solutions.
              </p>
            </div>

            <div class="pt-4 border-t border-outline-variant/40 flex items-center justify-between">
              <span class="font-label-md text-sm font-bold text-brand-violet flex items-center gap-1.5">
                Create New Account
                <span class="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
              </span>
            </div>
          </div>

        </div>

      </main>

      ${renderFooter()}
    </div>
  `;
}
