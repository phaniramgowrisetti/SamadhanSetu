import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * Track Problems View - Dedicated Citizen Timeline & Progress Tracker
 * Displays dynamic multi-stage lifecycle tracking from citizen signal to student challenge & resolution.
 */
export function renderTrackProblemsView() {
  const userSignals = AppState.communitySignals || [];
  
  const stages = [
    { num: 1, title: 'Submitted', desc: 'Your report was successfully received and logged.', done: true },
    { num: 2, title: 'AI Understanding', desc: 'Natural language and speech synthesis processed your observation.', done: true },
    { num: 3, title: 'Verified / Categorized', desc: 'Confirmed as valid civic signal in Water Quality & Sanitation.', done: true },
    { num: 4, title: 'Matched with Similar Problems', desc: 'Clustered with 3 nearby observations in Gumla & Latehar.', done: true },
    { num: 5, title: 'Sent for Review / Challenge', desc: 'University mentor validated pattern and formed student challenge.', done: false, active: true },
    { num: 6, title: 'Solution In Progress', desc: 'Student innovation team working on filtration prototype.', done: false },
    { num: 7, title: 'Resolved', desc: 'Solution deployed & verified by community members.', done: false }
  ];

  return `
    ${renderHeader('track-problems')}

    <main class="flex-grow pt-6 sm:pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1100px] mx-auto w-full space-y-8">
      
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-outline-variant/60">
        <div>
          <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-1">
            LIVE PROGRESS TRACKER
          </span>
          <h1 class="font-display-lg text-brand-indigo text-2xl sm:text-3xl font-extrabold tracking-tight">
            What is happening with my problem?
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Transparent lifecycle tracking from citizen signal to student innovation solution.
          </p>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <button id="track-start-new-report-btn" class="bg-brand-indigo text-white px-4 py-2 rounded-full font-label-md text-xs sm:text-sm font-semibold hover:bg-brand-violet transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
            <span class="material-symbols-outlined text-base">add</span>
            <span>+ New Report</span>
          </button>
          <button data-route="my-problems" class="border border-outline-variant text-brand-indigo px-4 py-2 rounded-full font-label-md text-xs font-semibold hover:border-brand-violet hover:bg-brand-indigo/5 transition-all bg-white flex items-center gap-1.5 cursor-pointer">
            <span class="material-symbols-outlined text-base">format_list_bulleted</span>
            <span>View All My Problems</span>
          </button>
        </div>
      </div>

      <!-- Problem Selector Header Card -->
      <div class="bg-white p-6 rounded-3xl border border-outline-variant/70 shadow-2xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-brand-teal px-2.5 py-0.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">SS-2026-00401</span>
            <span class="text-xs font-semibold text-brand-violet bg-brand-violet/10 px-2.5 py-0.5 rounded-full">Stage 5: Review & Challenge</span>
          </div>
          <h2 class="font-headline-sm text-brand-indigo text-xl font-extrabold">Water Hand Pump Discoloration & Chemical Odor</h2>
          <div class="text-xs text-on-surface-variant flex items-center gap-3 pt-0.5">
            <span>📍 Gumla Sector 4, Jharkhand</span>
            <span>•</span>
            <span>🗓 Submitted: 2026-08-28</span>
          </div>
        </div>

        <div class="shrink-0 bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/50 text-center space-y-1">
          <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">CURRENT STATUS</span>
          <span class="font-bold text-brand-indigo text-sm block">Sent for Review & Challenge</span>
          <span class="text-[11px] text-on-surface-variant block">Assigned to CUJ Innovation Lab</span>
        </div>
      </div>

      <!-- 7-Stage Dynamic Timeline -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/70 shadow-2xs space-y-6">
        
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-4">
          <h3 class="font-headline-sm text-brand-indigo text-lg font-bold flex items-center gap-2">
            <span class="material-symbols-outlined text-brand-violet">timeline</span>
            <span>Problem Resolution Timeline</span>
          </h3>
          <span class="text-xs text-on-surface-variant font-medium">Updated 10 mins ago</span>
        </div>

        <div class="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant/60">
          ${stages.map(st => `
            <div class="relative flex items-start gap-4 group">
              <!-- Timeline Dot -->
              <div class="absolute -left-6 sm:-left-8 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${st.done ? 'bg-brand-teal text-white shadow-2xs' : st.active ? 'bg-brand-violet text-white ring-4 ring-brand-violet/20 animate-pulse' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant'} shrink-0">
                ${st.done ? '✓' : st.num}
              </div>

              <!-- Content Box -->
              <div class="p-4 rounded-2xl ${st.active ? 'bg-brand-violet/5 border-2 border-brand-violet/40' : st.done ? 'bg-surface-container-low/70 border border-outline-variant/40' : 'bg-white border border-outline-variant/30 opacity-60'} flex-grow space-y-1">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-brand-indigo text-sm sm:text-base">${st.num}. ${st.title}</span>
                  ${st.done ? '<span class="text-[10px] font-bold text-brand-teal uppercase tracking-wider">Completed</span>' : st.active ? '<span class="text-[10px] font-bold text-brand-violet uppercase tracking-wider animate-pulse">In Progress</span>' : '<span class="text-[10px] text-on-surface-variant">Pending</span>'}
                </div>
                <p class="text-xs text-on-surface-variant leading-relaxed">${st.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

      </div>

    </main>

    ${renderFooter()}
  `;
}
