import { renderHeader } from '../components/Header.js';

/**
 * PAGE 14 — PROJECTS
 * Portfolio view of all university innovation projects.
 */
export function renderProjectsView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('university-projects')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 border border-brand-indigo/20 px-3 py-1 rounded-full">
                PROJECT PORTFOLIO
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• Ranchi University</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              University Innovation Projects
            </h1>
            <p class="text-xs text-on-surface-variant">Track all student innovation projects from research phase through field deployment.</p>
          </div>
        </div>

        <!-- TABS -->
        <div class="flex items-center gap-2 border-b border-outline-variant/60 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
          <button class="px-4 py-2 text-brand-indigo border-b-2 border-brand-indigo font-bold shrink-0 cursor-pointer">ALL (16)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">RESEARCH (3)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">DEVELOPMENT (5)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">TESTING (4)</button>
          <button class="px-4 py-2 text-on-surface-variant hover:text-brand-indigo font-semibold shrink-0 cursor-pointer">DEPLOYED (4)</button>
        </div>

        <!-- PROJECT CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- PROJECT 1 -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-indigo transition-all space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  Phase: Research & Design
                </span>
                <span class="text-xs font-mono font-bold text-brand-indigo">25% Progress</span>
              </div>

              <h3 class="font-headline-sm text-brand-indigo text-xl font-bold">Safe Water for Gumla</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">Community: Gumla Fluoride Removal System</p>

              <div class="grid grid-cols-2 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 text-xs">
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold block">MENTOR</span>
                  <span class="font-bold text-brand-indigo">Dr. Anjali Kumar</span>
                </div>
                <div>
                  <span class="text-[10px] text-on-surface-variant font-bold block">TEAM SIZE</span>
                  <span class="font-bold text-brand-indigo">3 Students</span>
                </div>
              </div>
            </div>

            <div class="pt-2 flex justify-end">
              <button data-route="project-detail" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-violet transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                <span>View Project</span>
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- PROJECT 2 (DEPLOYED) -->
          <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-teal transition-all space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
                  Status: Deployed & Active
                </span>
                <span class="text-xs font-mono font-bold text-brand-teal">100% Progress</span>
              </div>

              <h3 class="font-headline-sm text-brand-indigo text-xl font-bold">Solar Micro-grid Prototype for Khunti</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">Community Solar Micro-grid deployment serving 2 villages.</p>
            </div>

            <div class="pt-2 flex justify-end">
              <button data-route="completed-solution" class="border border-outline-variant text-brand-indigo px-5 py-2.5 rounded-full font-label-md text-xs font-bold hover:bg-brand-teal/10 transition-all flex items-center gap-1.5 cursor-pointer">
                <span>View Deployed Solution</span>
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
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
