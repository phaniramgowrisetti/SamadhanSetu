import { renderHeader } from '../components/Header.js';

/**
 * PAGE 12 — PROJECT TEAM & COLLABORATION
 * Manages institutional, faculty, industry, and community stakeholders.
 */
export function renderCollaborationsView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('university-collaborations')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                ECOSYSTEM NETWORK
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Ranchi University</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Project Collaborations
            </h1>
            <p class="text-xs text-on-surface-variant">External experts, government stakeholders, and research partners supporting university projects.</p>
          </div>

          <button class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 shrink-0">
            <span class="material-symbols-outlined text-base">person_add</span>
            <span>Invite Collaborator</span>
          </button>
        </div>

        <!-- COLLABORATION CARDS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- CARD 1 -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
            <div class="w-10 h-10 rounded-full bg-brand-indigo/10 text-brand-indigo font-bold flex items-center justify-center text-sm">
              AK
            </div>
            <div>
              <h3 class="font-bold text-brand-indigo text-base">Dr. Anjali Kumar</h3>
              <p class="text-xs text-on-surface-variant font-medium">Faculty Mentor • Dept. of Environmental Engineering</p>
            </div>
            <span class="text-[10px] font-bold text-brand-violet bg-brand-violet/10 px-2.5 py-1 rounded-full inline-block">Internal Mentor</span>
          </div>

          <!-- CARD 2 -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
            <div class="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal font-bold flex items-center justify-center text-sm">
              WR
            </div>
            <div>
              <h3 class="font-bold text-brand-indigo text-base">Water Research Lab</h3>
              <p class="text-xs text-on-surface-variant font-medium">Institutional Research Partner</p>
            </div>
            <span class="text-[10px] font-bold text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-full inline-block">Research Lab</span>
          </div>

          <!-- CARD 3 -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
            <div class="w-10 h-10 rounded-full bg-amber-500/10 text-amber-800 font-bold flex items-center justify-center text-sm">
              PH
            </div>
            <div>
              <h3 class="font-bold text-brand-indigo text-base">Public Health Dept., Gumla</h3>
              <p class="text-xs text-on-surface-variant font-medium">Community & Government Stakeholder</p>
            </div>
            <span class="text-[10px] font-bold text-amber-800 bg-amber-500/10 px-2.5 py-1 rounded-full inline-block">Govt Partner</span>
          </div>

        </div>

      </main>

      <footer class="bg-white border-t border-outline-variant/60 py-8 px-6 md:px-margin-desktop text-xs text-on-surface-variant">
        <div class="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="font-extrabold text-brand-indigo text-base tracking-tight">SamadhanSetu</div>
          <div>© 2026 SamadhanSetu. Civic Innovation Ecosystem.</div>
        </div>
      </footer>

    </div>
  `;
}
