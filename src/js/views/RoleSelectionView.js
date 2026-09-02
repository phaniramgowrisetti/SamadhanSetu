export function renderRoleSelectionView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface overflow-x-hidden">
      
      <!-- Minimal Transparent Header (Compact Header, No white box strip, No step indicator) -->
      <header class="w-full pt-4 pb-2 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-transparent relative z-20">
        <div class="flex items-center gap-4 sm:gap-6">
          <!-- Official SamadhanSetu Logo Asset (Transparent Container) -->
          <a data-route="intro" class="cursor-pointer group bg-transparent p-0 border-none shadow-none">
            <img 
              src="/assests/logo.png" 
              alt="SamadhanSetu — Civic Innovation Platform" 
              class="w-[125px] sm:w-[140px] md:w-[155px] h-auto max-w-full object-contain block bg-transparent transition-transform duration-300 ease-out group-hover:scale-[1.02]" 
              onerror="this.onerror=null; this.src='/logo.png';"
            />
          </a>

          <!-- Vertical Divider & Back to Home Link -->
          <div class="h-5 w-px bg-outline-variant/60 hidden sm:block"></div>

          <button data-route="intro" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs sm:text-sm font-semibold transition-colors group">
            <span class="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      <!-- Main Content (Designed to fit 100vh Desktop Viewport without scrolling) -->
      <main class="flex-grow flex flex-col justify-center py-2 sm:py-4 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        
        <!-- Subtle Ecosystem Network Metaphor Background (Faint connecting flow) -->
        <div class="absolute inset-0 pointer-events-none opacity-10 overflow-hidden -z-10 flex items-center justify-center">
          <svg class="w-full h-full text-brand-indigo max-w-5xl" viewBox="0 0 800 450" fill="none">
            <!-- Quadrant Nodes Connection Stream -->
            <path d="M 200 120 Q 400 225 600 120" stroke="#159B8C" stroke-dasharray="4 4" stroke-width="1.5" />
            <path d="M 200 330 Q 400 225 600 330" stroke="#5B3FD6" stroke-dasharray="4 4" stroke-width="1.5" />
            <path d="M 200 120 L 200 330" stroke="#352C85" stroke-dasharray="4 4" stroke-width="1.5" />
            <path d="M 600 120 L 600 330" stroke="#159B8C" stroke-dasharray="4 4" stroke-width="1.5" />
            
            <circle cx="200" cy="120" r="6" fill="#159B8C" />
            <circle cx="600" cy="120" r="6" fill="#5B3FD6" />
            <circle cx="200" cy="330" r="6" fill="#352C85" />
            <circle cx="600" cy="330" r="6" fill="#159B8C" />
          </svg>
        </div>

        <!-- Compact Hero Header -->
        <div class="text-center max-w-2xl mx-auto mb-4 sm:mb-6 space-y-1">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-[11px] font-bold block">
            JOIN THE ECOSYSTEM
          </span>

          <h1 class="font-display-lg text-brand-indigo text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Find your place in the journey.
          </h1>

          <p class="font-body-md text-on-surface-variant text-xs sm:text-sm font-medium leading-relaxed max-w-lg mx-auto">
            Choose how you want to contribute to solving real-world problems.
          </p>
        </div>

        <!-- Role Selection 2 x 2 Compact Grid (All 4 visible on initial desktop load) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto w-full mb-4">
          
          <!-- Actor 1: Citizen / Community -->
          <div data-select-role="citizen" data-route="/join/citizen" class="role-card group cursor-pointer p-5 sm:p-6 rounded-2xl bg-white border border-outline-variant/70 shadow-2xs hover:border-brand-teal hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[190px]">
            <div>
              <div class="flex items-start justify-between mb-3">
                <div>
                  <span class="text-[10px] font-bold tracking-widest uppercase text-brand-teal block">COMMUNITY</span>
                  <span class="text-[11px] font-semibold text-brand-indigo block">I SEE A PROBLEM</span>
                  <h2 class="font-headline-sm text-brand-indigo text-lg sm:text-xl font-extrabold group-hover:text-brand-teal transition-colors mt-0.5">
                    Citizen / Community
                  </h2>
                </div>
                <div class="w-11 h-11 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white transition-all duration-200 shrink-0">
                  <span class="material-symbols-outlined text-2xl">groups</span>
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-xs sm:text-sm leading-snug mb-3">
                Share challenges and observations happening around your community.
              </p>
            </div>
            <div class="flex items-center text-brand-teal font-label-md font-bold text-xs sm:text-sm pt-3 border-t border-outline-variant/30 group-hover:text-brand-indigo">
              <span>Start here</span>
              <span class="material-symbols-outlined text-base ml-1.5 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
            </div>
          </div>

          <!-- Actor 2: Student / Innovator -->
          <div data-select-role="student" data-route="/join/student" class="role-card group cursor-pointer p-5 sm:p-6 rounded-2xl bg-white border border-outline-variant/70 shadow-2xs hover:border-brand-violet hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[190px]">
            <div>
              <div class="flex items-start justify-between mb-3">
                <div>
                  <span class="text-[10px] font-bold tracking-widest uppercase text-brand-violet block">INNOVATION</span>
                  <span class="text-[11px] font-semibold text-brand-indigo block">I WANT TO SOLVE</span>
                  <h2 class="font-headline-sm text-brand-indigo text-lg sm:text-xl font-extrabold group-hover:text-brand-violet transition-colors mt-0.5">
                    Student / Innovator
                  </h2>
                </div>
                <div class="w-11 h-11 rounded-xl bg-brand-violet/10 text-brand-violet flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-violet group-hover:text-white transition-all duration-200 shrink-0">
                  <span class="material-symbols-outlined text-2xl">lightbulb</span>
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-xs sm:text-sm leading-snug mb-3">
                Explore real challenges and turn signals into working prototypes.
              </p>
            </div>
            <div class="flex items-center text-brand-violet font-label-md font-bold text-xs sm:text-sm pt-3 border-t border-outline-variant/30">
              <span>Start building</span>
              <span class="material-symbols-outlined text-base ml-1.5 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
            </div>
          </div>

          <!-- Actor 3: University / Mentor -->
          <div data-select-role="mentor" data-route="/join/mentor" class="role-card group cursor-pointer p-5 sm:p-6 rounded-2xl bg-white border border-outline-variant/70 shadow-2xs hover:border-brand-indigo hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[190px]">
            <div>
              <div class="flex items-start justify-between mb-3">
                <div>
                  <span class="text-[10px] font-bold tracking-widest uppercase text-brand-indigo block">GUIDANCE</span>
                  <span class="text-[11px] font-semibold text-brand-indigo block">I CAN GUIDE</span>
                  <h2 class="font-headline-sm text-brand-indigo text-lg sm:text-xl font-extrabold group-hover:text-brand-violet transition-colors mt-0.5">
                    University / Mentor
                  </h2>
                </div>
                <div class="w-11 h-11 rounded-xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-indigo group-hover:text-white transition-all duration-200 shrink-0">
                  <span class="material-symbols-outlined text-2xl">school</span>
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-xs sm:text-sm leading-snug mb-3">
                Support innovators through research, expertise, and mentorship.
              </p>
            </div>
            <div class="flex items-center text-brand-indigo font-label-md font-bold text-xs sm:text-sm pt-3 border-t border-outline-variant/30 group-hover:text-brand-violet">
              <span>Join the journey</span>
              <span class="material-symbols-outlined text-base ml-1.5 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
            </div>
          </div>

          <!-- Actor 4: Industry / Organization -->
          <div data-select-role="partner" data-route="/join/partner" class="role-card group cursor-pointer p-5 sm:p-6 rounded-2xl bg-white border border-outline-variant/70 shadow-2xs hover:border-brand-teal hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[190px]">
            <div>
              <div class="flex items-start justify-between mb-3">
                <div>
                  <span class="text-[10px] font-bold tracking-widest uppercase text-brand-teal block">SCALE / SUPPORT</span>
                  <span class="text-[11px] font-semibold text-brand-indigo block">I CAN HELP SCALE</span>
                  <h2 class="font-headline-sm text-brand-indigo text-lg sm:text-xl font-extrabold group-hover:text-brand-teal transition-colors mt-0.5">
                    Industry / Organization
                  </h2>
                </div>
                <div class="w-11 h-11 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white transition-all duration-200 shrink-0">
                  <span class="material-symbols-outlined text-2xl">handshake</span>
                </div>
              </div>
              <p class="font-body-md text-on-surface-variant text-xs sm:text-sm leading-snug mb-3">
                Bring resources, funding, technology, or scaling support.
              </p>
            </div>
            <div class="flex items-center text-brand-teal font-label-md font-bold text-xs sm:text-sm pt-3 border-t border-outline-variant/30 group-hover:text-brand-indigo">
              <span>Explore partnership</span>
              <span class="material-symbols-outlined text-base ml-1.5 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
            </div>
          </div>

        </div>

        <!-- Compact Bottom Statement -->
        <div class="text-center pt-1">
          <p class="font-body-md text-on-surface-variant text-xs font-medium">
            Four connected roles. One shared ecosystem.
            <a data-route="auth" class="text-brand-violet font-semibold hover:underline inline-flex items-center cursor-pointer ml-1.5">
              Sign In <span class="material-symbols-outlined text-xs ml-0.5">arrow_forward</span>
            </a>
          </p>
        </div>

      </main>
    </div>
  `;
}
