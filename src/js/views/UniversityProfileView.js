import { renderHeader } from '../components/Header.js';

/**
 * PAGE 13 — MY UNIVERSITY
 * Institutional profile, academic departments, faculty directory & innovation capacity.
 */
export function renderUniversityProfileView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      ${renderHeader('university-profile')}

      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1240px] mx-auto w-full space-y-8">
        
        <!-- Header -->
        <div class="space-y-2 border-b border-outline-variant/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-brand-violet uppercase tracking-widest bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
                INSTITUTION PROFILE
              </span>
              <span class="text-xs text-on-surface-variant font-semibold">• NAAC A+ Accredited</span>
            </div>
            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ranchi University
            </h1>
            <p class="text-xs text-on-surface-variant">Ranchi, Jharkhand • Premier Partner University in SamadhanSetu Civic Innovation Network</p>
          </div>
        </div>

        <!-- INNOVATION CAPACITY METRICS -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase">ACTIVE PROJECTS</span>
            <div class="text-2xl font-extrabold text-brand-indigo font-mono">12</div>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase">STUDENTS PARTICIPATING</span>
            <div class="text-2xl font-extrabold text-brand-violet font-mono">48</div>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase">FACULTY MENTORS</span>
            <div class="text-2xl font-extrabold text-brand-indigo font-mono">16</div>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-1">
            <span class="text-[10px] font-bold text-on-surface-variant uppercase">SOLUTIONS DEPLOYED</span>
            <div class="text-2xl font-extrabold text-brand-teal font-mono">4</div>
          </div>
        </div>

        <!-- ACADEMIC EXPERTISE & DEPARTMENTS -->
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs space-y-4">
          <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Academic Expertise & Departments</h2>

          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/60 font-bold text-brand-indigo text-xs">Environmental Engineering</span>
            <span class="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/60 font-bold text-brand-indigo text-xs">Agriculture & Plant Pathology</span>
            <span class="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/60 font-bold text-brand-indigo text-xs">Public Health & Rural Sanitation</span>
            <span class="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/60 font-bold text-brand-indigo text-xs">Computer Science & IoT</span>
            <span class="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/60 font-bold text-brand-indigo text-xs">Chemical & Material Science</span>
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
