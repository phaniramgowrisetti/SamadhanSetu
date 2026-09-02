import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * My Problems View - Authenticated Citizen Problem List with Filters & Search
 */
export function renderMyProblemsView() {
  const userSignals = AppState.communitySignals || [];
  
  const formattedSignals = userSignals.map(s => ({
    id: s.id,
    title: s.title || (s.description ? s.description.substring(0, 50) + '...' : 'Community Voice Signal'),
    category: s.understanding?.primaryDomain || 'Civic Observation',
    location: s.location || 'Gumla District, Jharkhand',
    date: s.date || new Date().toISOString().split('T')[0],
    status: s.status || 'Submitted',
    statusClass: s.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : s.status === 'In Progress' ? 'bg-brand-teal/10 text-brand-teal border-brand-teal/20' : 'bg-brand-violet/10 text-brand-violet border-brand-violet/20',
    lastUpdate: 'Report logged & community signal active'
  }));

  const defaultProblems = [
    {
      id: 'SS-2026-00401',
      title: 'Water Hand Pump Discoloration & Chemical Odor',
      category: 'Water Quality & Sanitation',
      location: 'Gumla Sector 4, Jharkhand',
      date: '2026-08-28',
      status: 'Under Review',
      statusClass: 'bg-brand-violet/10 text-brand-violet border-brand-violet/20',
      lastUpdate: 'AI analysis completed today'
    },
    {
      id: 'SS-2026-00219',
      title: 'Monsoon Siltation in Agriculture Sub-Canal',
      category: 'Agriculture & Irrigation',
      location: 'Latehar Hamlets, Jharkhand',
      date: '2026-06-14',
      status: 'In Progress',
      statusClass: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
      lastUpdate: 'Challenge created for engineering students'
    },
    {
      id: 'SS-2025-00942',
      title: 'Primary Health Center Solar Storage Disruption',
      category: 'Healthcare & Public Health',
      location: 'Simdega Hamlets, Jharkhand',
      date: '2025-11-04',
      status: 'Resolved',
      statusClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      lastUpdate: 'Micro-grid battery replaced & operational'
    }
  ];

  // Merge submitted signals without duplicates
  const mockProblems = [
    ...formattedSignals.filter(s => !defaultProblems.some(d => d.id === s.id)),
    ...defaultProblems
  ];

  return `
    ${renderHeader('my-problems')}

    <main class="flex-grow pt-6 sm:pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1200px] mx-auto w-full space-y-6">
      
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-outline-variant/60">
        <div>
          <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-1">
            CITIZEN WORKSPACE
          </span>
          <h1 class="font-display-lg text-brand-indigo text-2xl sm:text-3xl font-extrabold tracking-tight">
            My Reported Problems
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Manage, review, and follow updates on all problems you have shared.
          </p>
        </div>

        <button data-route="citizen-report-method" class="bg-brand-indigo text-white px-5 py-2.5 rounded-full font-label-md text-xs sm:text-sm font-semibold hover:bg-brand-violet transition-all shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-base">add</span>
          <span>+ Report New Problem</span>
        </button>
      </div>

      <!-- Filters & Search Bar -->
      <div class="bg-white p-4 rounded-2xl border border-outline-variant/70 shadow-2xs flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2">
          <button class="filter-tab px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-indigo text-white shadow-2xs cursor-pointer">
            All (${mockProblems.length})
          </button>
          <button class="filter-tab px-3.5 py-1.5 rounded-full text-xs font-bold bg-surface-container-low text-brand-indigo border border-outline-variant hover:border-brand-violet cursor-pointer">
            Under Review (1)
          </button>
          <button class="filter-tab px-3.5 py-1.5 rounded-full text-xs font-bold bg-surface-container-low text-brand-indigo border border-outline-variant hover:border-brand-violet cursor-pointer">
            In Progress (1)
          </button>
          <button class="filter-tab px-3.5 py-1.5 rounded-full text-xs font-bold bg-surface-container-low text-brand-indigo border border-outline-variant hover:border-brand-violet cursor-pointer">
            Resolved (1)
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full sm:w-64">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-base">search</span>
          <input type="text" class="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl py-1.5 pl-9 pr-3 text-xs text-on-surface focus:outline-none focus:border-brand-violet" placeholder="Search reported problems...">
        </div>

      </div>

      <!-- Problems List -->
      <div class="space-y-4">
        ${mockProblems.map(prob => `
          <div class="bg-white p-6 rounded-3xl border border-outline-variant/70 shadow-2xs hover:border-brand-violet/60 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            
            <div class="space-y-2 max-w-2xl flex-grow">
              <div class="flex flex-wrap items-center gap-2.5">
                <span class="text-xs font-mono font-bold text-brand-teal px-2.5 py-0.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">${prob.id}</span>
                <span class="text-xs font-bold text-brand-indigo bg-surface-container-low px-2.5 py-0.5 rounded-full border border-outline-variant/40">${prob.category}</span>
              </div>

              <h3 class="font-headline-sm text-brand-indigo text-lg sm:text-xl font-bold leading-snug">
                ${prob.title}
              </h3>

              <div class="flex flex-wrap items-center gap-3 text-xs text-on-surface-variant font-medium pt-0.5">
                <span>📍 ${prob.location}</span>
                <span>•</span>
                <span>🗓 Submitted: ${prob.date}</span>
                <span>•</span>
                <span class="text-brand-violet font-semibold">Update: ${prob.lastUpdate}</span>
              </div>
            </div>

            <div class="flex flex-row md:flex-col items-end justify-between md:justify-center gap-3 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/30">
              <span class="px-3 py-1 rounded-full text-xs font-extrabold border ${prob.statusClass}">
                ${prob.status}
              </span>

              <button data-route="track-problems" class="text-xs font-bold text-brand-violet hover:underline flex items-center gap-1 cursor-pointer">
                <span>Track Progress</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

          </div>
        `).join('')}
      </div>

    </main>

    ${renderFooter()}
  `;
}
