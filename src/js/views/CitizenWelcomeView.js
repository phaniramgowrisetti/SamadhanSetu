import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * Citizen Home Dashboard - Authenticated Citizen Starting Point
 * Welcome back greeting, + Report a Problem CTA, My Recent Problems list, and Latest Updates feed.
 */
export function renderCitizenWelcomeView() {
  const user = AppState.userProfile || { name: 'Ramesh Sharma' };
  const userSignals = AppState.communitySignals || [];
  const latestSignal = userSignals[0];

  const recentProblems = [
    {
      id: 'SS-2026-00401',
      title: 'Water Hand Pump Discoloration & Chemical Odor',
      status: 'Under Review',
      statusBadge: 'bg-brand-violet/10 text-brand-violet border-brand-violet/20',
      location: 'Gumla Sector 4, Jharkhand',
      date: '2026-08-28'
    },
    {
      id: 'SS-2026-00219',
      title: 'Monsoon Siltation in Agriculture Sub-Canal',
      status: 'In Progress',
      statusBadge: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
      location: 'Latehar Hamlets, Jharkhand',
      date: '2026-06-14'
    }
  ];

  return `
    ${renderHeader('citizen-home')}

    <main class="flex-grow pt-6 sm:pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1200px] mx-auto w-full space-y-8">
      
      <!-- HERO WELCOME DASHBOARD HEADER -->
      <section class="bg-gradient-to-r from-brand-indigo via-[#4532B0] to-brand-violet text-white p-7 sm:p-9 rounded-3xl shadow-md space-y-5 relative overflow-hidden">
        <!-- Subtle Background Ambient Light Glow -->
        <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="space-y-2 relative z-10 max-w-2xl">
          <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block font-mono">
            CITIZEN DASHBOARD
          </span>
          
          <h1 class="font-display-lg text-white text-3xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, ${user.name} 👋
          </h1>

          <p class="text-sm sm:text-base text-white/90 font-medium pt-1">
            What's happening around you? Report an issue affecting your village, town, city, or community.
          </p>
        </div>

        <!-- Primary Action CTA -->
        <div class="pt-2 relative z-10">
          <button data-route="citizen-report-method" class="bg-white text-brand-indigo px-7 py-3.5 rounded-full font-label-md text-sm font-extrabold hover:bg-surface-container-low transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-95">
            <span class="material-symbols-outlined text-lg text-brand-violet">add</span>
            <span>+ Report a Problem</span>
            <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </section>

      <!-- TWO-COLUMN DASHBOARD GRID (MY RECENT PROBLEMS + LATEST UPDATES) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- LEFT COLUMN: MY RECENT PROBLEMS (8 Cols) -->
        <div class="lg:col-span-8 space-y-4">
          <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
            <h2 class="font-headline-sm text-brand-indigo text-lg font-extrabold flex items-center gap-2">
              <span>MY RECENT PROBLEMS</span>
              <span class="px-2.5 py-0.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold font-mono">
                ${recentProblems.length}
              </span>
            </h2>
            
            <button data-route="my-problems" class="text-xs font-bold text-brand-violet hover:underline flex items-center gap-1 cursor-pointer">
              <span>View all →</span>
            </button>
          </div>

          <div class="space-y-4">
            ${recentProblems.map(prob => `
              <div class="bg-white p-5 sm:p-6 rounded-3xl border border-outline-variant/70 shadow-2xs hover:border-brand-violet/60 transition-all space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-brand-teal">${prob.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${prob.statusBadge}">
                    ${prob.status}
                  </span>
                </div>

                <h3 class="font-headline-sm text-brand-indigo text-base sm:text-lg font-bold">${prob.title}</h3>
                
                <div class="flex items-center justify-between text-xs text-on-surface-variant pt-1 border-t border-outline-variant/30 font-medium">
                  <span>📍 ${prob.location}</span>
                  <button data-route="track-problems" class="text-brand-violet font-bold hover:underline flex items-center gap-1 cursor-pointer">
                    <span>Track Status</span>
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- RIGHT COLUMN: LATEST UPDATES (4 Cols) -->
        <div class="lg:col-span-4 space-y-4">
          <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
            <h2 class="font-headline-sm text-brand-indigo text-lg font-extrabold">LATEST UPDATES</h2>
            <button data-route="track-problems" class="text-xs font-bold text-brand-violet hover:underline">Track</button>
          </div>

          <div class="bg-white p-5 rounded-3xl border border-outline-variant/70 shadow-2xs space-y-4">
            
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                <div class="flex items-center justify-between font-bold text-brand-indigo">
                  <span>Report Under Review</span>
                  <span class="text-[10px] text-on-surface-variant font-normal">10m ago</span>
                </div>
                <p class="text-[11px] text-on-surface-variant leading-relaxed">
                  Your observation (SS-2026-00401) is being analyzed for rural water quality patterns.
                </p>
              </div>

              <div class="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                <div class="flex items-center justify-between font-bold text-brand-indigo">
                  <span>Community Cluster</span>
                  <span class="text-[10px] text-on-surface-variant font-normal">2h ago</span>
                </div>
                <p class="text-[11px] text-on-surface-variant leading-relaxed">
                  Connected with 3 similar reports across Gumla and Latehar hamlets.
                </p>
              </div>

              <div class="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                <div class="flex items-center justify-between font-bold text-brand-indigo">
                  <span>Challenge Formed</span>
                  <span class="text-[10px] text-on-surface-variant font-normal">1d ago</span>
                </div>
                <p class="text-[11px] text-on-surface-variant leading-relaxed">
                  University mentors formed a student challenge for canal siltation solutions.
                </p>
              </div>
            </div>

            <div class="pt-2 text-center border-t border-outline-variant/30">
              <button data-route="community-patterns" class="text-xs font-bold text-brand-violet hover:underline inline-flex items-center gap-1 cursor-pointer">
                <span>Explore Community Patterns</span>
                <span class="material-symbols-outlined text-sm">hub</span>
              </button>
            </div>

          </div>
        </div>

      </div>

    </main>

    ${renderFooter()}
  `;
}
