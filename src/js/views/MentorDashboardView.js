import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderMentorDashboardView() {
  const patterns = AppState.runPatternDetection();
  const emergingCount = patterns.filter(p => p.status === 'Emerging pattern' || p.status === 'Similar signals detected').length;
  const openChallengesCount = AppState.challenges.length;

  return `
    ${renderHeader('mentor-dashboard')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <!-- Validator Context Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-outline-variant">
        <div>
          <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">UNIVERSITY & MENTOR PORTAL</span>
          <h1 class="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold">Community problems waiting for perspective.</h1>
          <p class="font-body-md text-on-surface-variant text-base mt-1">Welcome, ${AppState.userProfile.name} • ${AppState.userProfile.location}</p>
        </div>

        <button data-route="validation-queue" class="bg-brand-indigo text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-brand-violet transition-all shadow-sm flex items-center gap-2">
          <span class="material-symbols-outlined text-base">fact_check</span> Review Patterns Queue
        </button>
      </div>

      <!-- 2 Main Portal Workspaces -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        <!-- Workspace 1: Validation Queue Card -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-indigo transition-all">
          <div class="space-y-3">
            <div class="w-14 h-14 rounded-2xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">fact_check</span>
            </div>
            <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block">HUMAN VALIDATION WORKFLOW</span>
            <h2 class="font-headline-md text-brand-indigo text-2xl font-bold">Patterns Waiting for Review</h2>
            <p class="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Review clustered community observations to determine whether recurring issues represent meaningful challenges worth opening for student innovation teams.
            </p>
            <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 inline-flex items-center gap-2 text-xs font-bold text-brand-indigo">
              <span class="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
              <span>${emergingCount} Emerging Patterns Awaiting Review</span>
            </div>
          </div>

          <button data-route="validation-queue" class="w-full bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm flex items-center justify-center gap-2">
            <span>Review Patterns Queue →</span>
          </button>
        </div>

        <!-- Workspace 2: Published Challenges Portal -->
        <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-violet transition-all">
          <div class="space-y-3">
            <div class="w-14 h-14 rounded-2xl bg-brand-violet/10 text-brand-violet flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">lightbulb</span>
            </div>
            <span class="text-xs font-bold text-brand-violet uppercase tracking-widest block">SOLVER ECOSYSTEM</span>
            <h2 class="font-headline-md text-brand-indigo text-2xl font-bold">Published Student Challenges</h2>
            <p class="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Explore open challenges derived from validated community patterns that are currently accessible to university students and research teams.
            </p>
            <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 inline-flex items-center gap-2 text-xs font-bold text-brand-violet">
              <span class="w-2.5 h-2.5 rounded-full bg-brand-violet"></span>
              <span>${openChallengesCount} Challenges Currently Open</span>
            </div>
          </div>

          <button data-route="explore-challenges" class="w-full border border-outline-variant text-brand-indigo py-3.5 rounded-full font-label-md font-semibold text-sm hover:border-brand-violet hover:text-brand-violet transition-all bg-white flex items-center justify-center gap-2">
            <span>View Open Challenges →</span>
          </button>
        </div>

      </div>

      <!-- Quick Guidance Box -->
      <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/60 text-xs text-on-surface-variant leading-relaxed">
        <div class="font-bold text-brand-indigo mb-1 flex items-center gap-1">
          <span class="material-symbols-outlined text-base text-brand-teal">shield</span> Academic Validation Responsibility
        </div>
        SamadhanSetu pre-fills challenge statements from community signals so validators refine rather than write from scratch. Your evaluation ensures student teams focus on well-supported real-world problems.
      </div>
    </main>

    ${renderFooter()}
  `;
}
