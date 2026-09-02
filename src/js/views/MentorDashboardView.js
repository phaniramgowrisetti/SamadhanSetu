import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * PAGE 1 — UNIVERSITY DASHBOARD COMMAND CENTER (VISUAL REDESIGN)
 * Premium, intentional civic innovation command center inside SamadhanSetu.
 * Asymmetric editorial layout with connected activity strip & innovation journey.
 */
export function renderMentorDashboardView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-[#F8F8F6] text-on-surface">
      
      <!-- Top Application Shell Header -->
      ${renderHeader('mentor-dashboard')}

      <!-- Main Command Center Canvas -->
      <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-[1280px] mx-auto w-full space-y-10">
        
        <!-- COMMAND CENTER HEADER (ASYMMETRIC EDITORIAL LAYOUT) -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/60 pb-8">
          
          <!-- Left Editorial Heading -->
          <div class="space-y-2 max-w-2xl">
            <span class="font-label-sm text-brand-violet uppercase tracking-widest text-[11px] font-bold block">
              UNIVERSITY WORKSPACE • Ranchi University
            </span>

            <h1 class="font-display-lg text-brand-indigo text-3xl sm:text-4xl font-extrabold tracking-tight">
              Good morning, Innovation Team
            </h1>

            <p class="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Manage incoming community challenges, guide institutional decisions, and track innovation projects from validation to deployment.
            </p>
          </div>

          <!-- Right Compact Innovation Pulse Panel -->
          <div class="bg-white p-4 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-2 min-w-[240px] shrink-0">
            <div class="flex items-center justify-between border-b border-outline-variant/40 pb-1.5">
              <span class="text-[10px] font-extrabold text-brand-indigo uppercase tracking-widest">INNOVATION PULSE</span>
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
              </span>
            </div>

            <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-on-surface-variant">
              <div class="flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-violet"></span>
                <strong class="text-brand-indigo font-mono">3</strong> New requests
              </div>
              <div class="flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <strong class="text-brand-indigo font-mono">2</strong> Pending
              </div>
              <div class="flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <strong class="text-brand-indigo font-mono">12</strong> Active
              </div>
              <div class="text-[10px] font-semibold text-emerald-700 font-mono self-center">
                ↑ 18% month
              </div>
            </div>
          </div>

        </div>

        <!-- CONNECTED INSTITUTION ACTIVITY STRIP (Replaces 4 isolated cards) -->
        <div class="bg-white rounded-2xl border border-outline-variant/60 shadow-2xs overflow-hidden">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/60">
            
            <!-- 01. NEW REQUESTS -->
            <div data-route="validation-queue" class="p-5 hover:bg-surface-container-low/50 transition-colors cursor-pointer space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">01 / NEW REQUESTS</span>
                <span class="text-[10px] font-semibold text-brand-violet">↑ Needs review</span>
              </div>
              <div class="flex items-baseline gap-3">
                <span class="text-3xl font-extrabold text-brand-indigo font-mono">03</span>
                <span class="text-xs text-on-surface-variant font-medium">Awaiting review</span>
              </div>
            </div>

            <!-- 02. UNDER EVALUATION (VISUALLY EMPHASIZED BOTTLENECK) -->
            <div data-route="validation-queue" class="p-5 bg-brand-violet/5 border-l-4 border-brand-violet hover:bg-brand-violet/10 transition-colors cursor-pointer space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-brand-violet uppercase tracking-wider">02 / UNDER EVALUATION</span>
                <span class="text-[10px] font-bold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded-full">● Active Bottleneck</span>
              </div>
              <div class="flex items-baseline gap-3">
                <span class="text-3xl font-extrabold text-brand-indigo font-mono">05</span>
                <span class="text-xs text-brand-indigo font-bold">Faculty review in progress</span>
              </div>
            </div>

            <!-- 03. ACTIVE PROJECTS -->
            <div data-route="university-projects" class="p-5 hover:bg-surface-container-low/50 transition-colors cursor-pointer space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">03 / ACTIVE PROJECTS</span>
                <span class="text-[10px] font-semibold text-brand-teal">↑ Growing</span>
              </div>
              <div class="flex items-baseline gap-3">
                <span class="text-3xl font-extrabold text-brand-indigo font-mono">12</span>
                <span class="text-xs text-on-surface-variant font-medium">Student innovation teams</span>
              </div>
            </div>

            <!-- 04. SOLUTIONS DEPLOYED -->
            <div data-route="completed-solution" class="p-5 hover:bg-surface-container-low/50 transition-colors cursor-pointer space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">04 / DEPLOYED</span>
                <span class="text-[10px] font-semibold text-emerald-700">✓ Real-world impact</span>
              </div>
              <div class="flex items-baseline gap-3">
                <span class="text-3xl font-extrabold text-brand-indigo font-mono">04</span>
                <span class="text-xs text-on-surface-variant font-medium">Field solutions</span>
              </div>
            </div>

          </div>
        </div>

        <!-- MAIN DASHBOARD CONTENT — ASYMMETRIC GRID (65% / 35%) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT SIDE (65% / lg:col-span-8) — INCOMING PROBLEM REQUESTS QUEUE -->
          <div class="lg:col-span-8 space-y-6">
            
            <div class="flex items-end justify-between border-b border-outline-variant/40 pb-3">
              <div class="space-y-0.5">
                <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Incoming Problem Requests</h2>
                <p class="text-xs text-on-surface-variant">Validated community challenges matched to Ranchi University's capabilities.</p>
              </div>
              <button data-route="validation-queue" class="text-xs font-bold text-brand-violet hover:text-brand-indigo flex items-center gap-1 cursor-pointer">
                View all <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <!-- REFINED PROBLEM QUEUE (INTELLIGENT WORK ITEMS) -->
            <div class="space-y-4">
              
              <!-- ITEM 1 (STRONGER EMPHASIS / PRIMARY ACTIVE ITEM) -->
              <div data-validate-pattern="pat-1" data-route="pattern-validation" class="bg-white p-6 rounded-2xl border-2 border-brand-indigo shadow-2xs hover:shadow-sm transition-all cursor-pointer space-y-4 group">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-bold text-brand-indigo bg-brand-indigo/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      WATER & SANITATION
                    </span>
                    <span class="text-[10px] font-bold text-red-700 bg-red-500/10 px-2 py-0.5 rounded-full uppercase">
                      HIGH PRIORITY
                    </span>
                  </div>
                  <span class="material-symbols-outlined text-brand-indigo group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>

                <div class="space-y-1">
                  <h3 class="font-headline-sm text-brand-indigo text-lg font-bold group-hover:text-brand-violet transition-colors">
                    Unsafe Drinking Water in Gumla
                  </h3>
                  <p class="text-xs text-on-surface-variant leading-relaxed">
                    High fluoride levels detected in local borewells leading to health concerns. Community reports frequent illness and the need for a sustainable purification solution.
                  </p>
                </div>

                <div class="flex items-center justify-between text-xs pt-1 border-t border-outline-variant/40">
                  <div class="flex items-center gap-4 text-on-surface-variant font-medium">
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm text-brand-violet">groups</span> 12 observations</span>
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm text-brand-teal">location_on</span> 5 locations</span>
                  </div>

                  <div class="flex items-center gap-1.5">
                    <span class="text-[11px] font-medium bg-surface-container-low text-brand-indigo px-2 py-0.5 rounded-md">Environmental Eng</span>
                    <span class="text-[11px] font-medium bg-surface-container-low text-brand-indigo px-2 py-0.5 rounded-md">Public Health</span>
                  </div>
                </div>
              </div>

              <!-- ITEM 2 -->
              <div data-validate-pattern="pat-2" data-route="pattern-validation" class="bg-white p-6 rounded-2xl border border-outline-variant/70 shadow-2xs hover:border-brand-indigo hover:shadow-xs transition-all cursor-pointer space-y-4 group">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-bold text-emerald-800 bg-emerald-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      AGRICULTURE
                    </span>
                    <span class="text-[10px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded-full uppercase">
                      MEDIUM PRIORITY
                    </span>
                  </div>
                  <span class="material-symbols-outlined text-on-surface-variant group-hover:text-brand-indigo group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>

                <div class="space-y-1">
                  <h3 class="font-headline-sm text-brand-indigo text-lg font-bold group-hover:text-brand-violet transition-colors">
                    Crop Disease Affecting Farmers
                  </h3>
                  <p class="text-xs text-on-surface-variant leading-relaxed">
                    Repeated reports from farming communities indicate crop damage affecting agricultural productivity and local livelihoods.
                  </p>
                </div>

                <div class="flex items-center justify-between text-xs pt-1 border-t border-outline-variant/40">
                  <div class="flex items-center gap-4 text-on-surface-variant font-medium">
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm text-brand-violet">groups</span> 8 observations</span>
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm text-brand-teal">location_on</span> 3 locations</span>
                  </div>

                  <div class="flex items-center gap-1.5">
                    <span class="text-[11px] font-medium bg-surface-container-low text-brand-indigo px-2 py-0.5 rounded-md">Agricultural Science</span>
                    <span class="text-[11px] font-medium bg-surface-container-low text-brand-indigo px-2 py-0.5 rounded-md">Plant Pathology</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- RIGHT SIDE (35% / lg:col-span-4) — REQUIRES YOUR ATTENTION (VERTICAL DECISION QUEUE) -->
          <div class="lg:col-span-4 space-y-6">
            
            <div class="space-y-1 border-b border-outline-variant/40 pb-3">
              <h2 class="font-headline-md text-brand-indigo text-lg font-bold">Requires Your Attention</h2>
              <p class="text-xs text-on-surface-variant">Items blocking the innovation workflow.</p>
            </div>

            <!-- Vertical Institutional Decision Queue (Subtle left accent lines) -->
            <div class="space-y-3">
              
              <!-- ITEM 1 -->
              <div data-route="validation-queue" class="bg-white p-4 rounded-xl border border-outline-variant/60 border-l-4 border-l-red-500 shadow-2xs hover:bg-surface-container-low/50 transition-all cursor-pointer flex items-center justify-between gap-3 group">
                <div class="space-y-0.5">
                  <div class="font-bold text-brand-indigo text-xs sm:text-sm group-hover:text-brand-violet">3 New Requests</div>
                  <div class="text-[11px] text-on-surface-variant">Awaiting initial review</div>
                </div>
                <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>

              <!-- ITEM 2 -->
              <div data-route="validation-queue" class="bg-white p-4 rounded-xl border border-outline-variant/60 border-l-4 border-l-amber-500 shadow-2xs hover:bg-surface-container-low/50 transition-all cursor-pointer flex items-center justify-between gap-3 group">
                <div class="space-y-0.5">
                  <div class="font-bold text-brand-indigo text-xs sm:text-sm group-hover:text-brand-violet">2 Evaluations</div>
                  <div class="text-[11px] text-on-surface-variant">Faculty decisions pending</div>
                </div>
                <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>

              <!-- ITEM 3 -->
              <div data-route="challenge-formation" class="bg-white p-4 rounded-xl border border-outline-variant/60 border-l-4 border-l-blue-500 shadow-2xs hover:bg-surface-container-low/50 transition-all cursor-pointer flex items-center justify-between gap-3 group">
                <div class="space-y-0.5">
                  <div class="font-bold text-brand-indigo text-xs sm:text-sm group-hover:text-brand-violet">1 Mentor Assignment</div>
                  <div class="text-[11px] text-on-surface-variant">Project requires expert guidance</div>
                </div>
                <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>

              <!-- ITEM 4 -->
              <div data-route="student-proposals" class="bg-white p-4 rounded-xl border border-outline-variant/60 border-l-4 border-l-purple-500 shadow-2xs hover:bg-surface-container-low/50 transition-all cursor-pointer flex items-center justify-between gap-3 group">
                <div class="space-y-0.5">
                  <div class="font-bold text-brand-indigo text-xs sm:text-sm group-hover:text-brand-violet">3 Student Proposals</div>
                  <div class="text-[11px] text-on-surface-variant">Awaiting institutional approval</div>
                </div>
                <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>

            </div>

            <div class="pt-1 text-right">
              <button data-route="validation-queue" class="text-xs font-bold text-brand-violet hover:text-brand-indigo transition-colors inline-flex items-center gap-1 cursor-pointer">
                Review Decision Queue →
              </button>
            </div>

          </div>

        </div>

        <!-- YOUR INNOVATION JOURNEY VISUALIZATION (SIGNATURE ECOSYSTEM STREAM) -->
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-headline-md text-brand-indigo text-base font-bold uppercase tracking-wider">YOUR INNOVATION JOURNEY</h2>
              <p class="text-xs text-on-surface-variant">Ecosystem progression from community signals to real-world deployment.</p>
            </div>
            <span class="text-[10px] font-bold text-brand-teal uppercase bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full">
              Live Ecosystem Pipeline
            </span>
          </div>

          <!-- HORIZONTAL PROGRESSION STREAM -->
          <div class="overflow-x-auto pb-2">
            <div class="min-w-[850px] flex items-center justify-between relative py-4 px-2">
              
              <!-- Background Line -->
              <div class="absolute top-1/2 left-8 right-8 h-0.5 bg-outline-variant/60 -translate-y-1/2 -z-0"></div>

              <!-- STAGE 1: COMMUNITY SIGNALS -->
              <div class="relative z-10 flex flex-col items-center group cursor-pointer" data-route="track-problems">
                <div class="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant text-brand-indigo font-bold text-xs flex items-center justify-center ring-4 ring-white">
                  8
                </div>
                <span class="text-xs font-bold text-brand-indigo mt-2 text-center">Community Signals</span>
                <span class="text-[10px] text-on-surface-variant">Raw Reports</span>
              </div>

              <!-- STAGE 2: VALIDATED PROBLEMS -->
              <div class="relative z-10 flex flex-col items-center group cursor-pointer" data-route="validation-queue">
                <div class="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant text-brand-indigo font-bold text-xs flex items-center justify-center ring-4 ring-white">
                  5
                </div>
                <span class="text-xs font-bold text-brand-indigo mt-2 text-center">Validated</span>
                <span class="text-[10px] text-on-surface-variant">Matched Needs</span>
              </div>

              <!-- STAGE 3: UNIVERSITY REVIEW (ACTIVE HIGHLIGHTED STAGE) -->
              <div class="relative z-10 flex flex-col items-center group cursor-pointer" data-route="validation-queue">
                <div class="w-9 h-9 rounded-full bg-brand-indigo text-white font-bold text-sm flex items-center justify-center ring-4 ring-brand-violet/20 shadow-xs animate-pulse">
                  3
                </div>
                <span class="text-xs font-extrabold text-brand-indigo mt-2 text-center">Under Review</span>
                <span class="text-[10px] font-bold text-brand-violet uppercase">Active Stage</span>
              </div>

              <!-- STAGE 4: STUDENT CHALLENGES -->
              <div class="relative z-10 flex flex-col items-center group cursor-pointer" data-route="published-challenges">
                <div class="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant text-brand-indigo font-bold text-xs flex items-center justify-center ring-4 ring-white">
                  4
                </div>
                <span class="text-xs font-bold text-brand-indigo mt-2 text-center">Challenges</span>
                <span class="text-[10px] text-on-surface-variant">Published</span>
              </div>

              <!-- STAGE 5: ACTIVE PROJECTS -->
              <div class="relative z-10 flex flex-col items-center group cursor-pointer" data-route="university-projects">
                <div class="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant text-brand-indigo font-bold text-xs flex items-center justify-center ring-4 ring-white">
                  12
                </div>
                <span class="text-xs font-bold text-brand-indigo mt-2 text-center">Projects</span>
                <span class="text-[10px] text-on-surface-variant">In Development</span>
              </div>

              <!-- STAGE 6: DEPLOYED SOLUTIONS -->
              <div class="relative z-10 flex flex-col items-center group cursor-pointer" data-route="completed-solution">
                <div class="w-8 h-8 rounded-full bg-brand-teal/15 text-brand-teal border border-brand-teal/30 font-bold text-xs flex items-center justify-center ring-4 ring-white">
                  4
                </div>
                <span class="text-xs font-bold text-brand-teal mt-2 text-center">Deployed</span>
                <span class="text-[10px] font-bold text-brand-teal uppercase">Field Impact</span>
              </div>

            </div>
          </div>
        </div>

        <!-- LOWER SECTION — PROJECT SNAPSHOT (LEFT 65%) & UNIVERSITY CAPABILITY MATCH (RIGHT 35%) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- PROJECT SNAPSHOT (INTELLIGENCE LIST — LEFT 65%) -->
          <div class="lg:col-span-8 bg-white p-6 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-5">
            <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
              <div>
                <h2 class="font-headline-md text-brand-indigo text-base font-bold">Project Snapshot</h2>
                <p class="text-xs text-on-surface-variant">Innovation projects currently progressing through institutional milestones.</p>
              </div>
              <button data-route="university-projects" class="text-xs font-bold text-brand-violet hover:text-brand-indigo flex items-center gap-1 cursor-pointer">
                View All Projects →
              </button>
            </div>

            <!-- REFINED PROJECT INTELLIGENCE LIST -->
            <div class="space-y-4">
              
              <!-- ROW 1 -->
              <div data-route="project-detail" class="p-4 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 hover:bg-white hover:border-brand-indigo transition-all cursor-pointer space-y-2 group">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-brand-indigo text-sm group-hover:text-brand-violet">Safe Water for Gumla</span>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-medium text-amber-800 bg-amber-500/10 px-2.5 py-0.5 rounded-full">Research Phase</span>
                    <span class="font-mono font-bold text-brand-indigo">25%</span>
                    <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
                <div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
                  <div class="h-full bg-brand-violet rounded-full" style="width: 25%;"></div>
                </div>
              </div>

              <!-- ROW 2 -->
              <div data-route="project-detail" class="p-4 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 hover:bg-white hover:border-brand-indigo transition-all cursor-pointer space-y-2 group">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-brand-indigo text-sm group-hover:text-brand-violet">Solar Micro-grid Prototype</span>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-medium text-brand-indigo bg-brand-indigo/10 px-2.5 py-0.5 rounded-full">Development</span>
                    <span class="font-mono font-bold text-brand-indigo">60%</span>
                    <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
                <div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
                  <div class="h-full bg-brand-indigo rounded-full" style="width: 60%;"></div>
                </div>
              </div>

              <!-- ROW 3 -->
              <div data-route="project-detail" class="p-4 rounded-xl bg-surface-container-low/40 border border-outline-variant/40 hover:bg-white hover:border-brand-indigo transition-all cursor-pointer space-y-2 group">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-brand-indigo text-sm group-hover:text-brand-violet">Smart Irrigation IoT</span>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-medium text-brand-teal bg-brand-teal/10 px-2.5 py-0.5 rounded-full">Field Testing</span>
                    <span class="font-mono font-bold text-brand-teal">85%</span>
                    <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
                <div class="w-full h-1.5 bg-outline-variant/40 rounded-full overflow-hidden">
                  <div class="h-full bg-brand-teal rounded-full" style="width: 85%;"></div>
                </div>
              </div>

            </div>
          </div>

          <!-- UNIVERSITY CAPABILITY MATCH (RIGHT 35%) -->
          <div class="lg:col-span-4 bg-white p-6 rounded-2xl border border-outline-variant/60 shadow-2xs space-y-4">
            <div class="border-b border-outline-variant/40 pb-2">
              <h2 class="font-headline-md text-brand-indigo text-xs font-bold uppercase tracking-wider">UNIVERSITY CAPABILITY MATCH</h2>
              <p class="text-[11px] text-on-surface-variant">Community problem alignment with Ranchi University domain strengths.</p>
            </div>

            <div class="space-y-3 text-xs">
              <div class="space-y-1">
                <div class="flex justify-between text-[11px] font-bold">
                  <span class="text-brand-indigo">Agriculture</span>
                  <span class="text-brand-indigo font-mono">82%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div class="h-full bg-brand-indigo rounded-full" style="width: 82%;"></div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-[11px] font-bold">
                  <span class="text-brand-indigo">Water Management</span>
                  <span class="text-brand-indigo font-mono">64%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div class="h-full bg-brand-violet rounded-full" style="width: 64%;"></div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-[11px] font-bold">
                  <span class="text-brand-indigo">Public Health</span>
                  <span class="text-brand-indigo font-mono">42%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div class="h-full bg-brand-teal rounded-full" style="width: 42%;"></div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-[11px] font-bold">
                  <span class="text-brand-indigo">Renewable Energy</span>
                  <span class="text-brand-indigo font-mono">31%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full" style="width: 31%;"></div>
                </div>
              </div>
            </div>

            <div class="pt-2 p-3 bg-brand-violet/5 rounded-xl border border-brand-violet/20 text-[11px] text-on-surface-variant leading-snug">
              <strong class="text-brand-indigo block">AI Insight:</strong>
              Your strongest current capability match is <strong class="text-brand-violet">Agriculture</strong> based on faculty research publications.
            </div>
          </div>

        </div>

      </main>

      <!-- MINIMAL INSTITUTIONAL FOOTER -->
      <footer class="bg-white border-t border-outline-variant/60 py-8 px-6 md:px-margin-desktop text-xs text-on-surface-variant">
        <div class="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="font-extrabold text-brand-indigo text-base tracking-tight">
            SamadhanSetu
          </div>
          <div class="text-center">
            © 2026 SamadhanSetu. Civic Innovation Ecosystem.
          </div>
          <div class="flex items-center gap-4 font-semibold text-brand-indigo">
            <a href="#" class="hover:text-brand-violet transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-brand-violet transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-brand-violet transition-colors">Help Center</a>
            <a href="#" class="hover:text-brand-violet transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>

    </div>
  `;
}
