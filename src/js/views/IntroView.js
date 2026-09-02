import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderIntroView() {
  return `
    ${renderHeader('intro')}

    <main class="flex-grow overflow-x-hidden">
      <!-- 1. Hero Section: Multi-Actor Civic Innovation Ecosystem -->
      <section id="hero-section" class="relative py-12 md:py-16 lg:py-20 px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <!-- LEFT / MAIN CONTENT AREA (Multi-Actor Ecosystem Narrative) -->
          <div class="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            <!-- Eyebrow Tag -->
            <div class="animate-fade-in-up stagger-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/60 shadow-2xs mb-5">
              <span class="w-2 h-2 rounded-full bg-brand-teal animate-node-glow"></span>
              <span class="font-label-sm text-brand-violet uppercase tracking-widest text-[11px] font-bold">
                CIVIC INNOVATION ECOSYSTEM
              </span>
            </div>

            <!-- Main Editorial Headline: 2 Strong Lines -->
            <h1 class="hero-title-responsive font-display-lg text-brand-indigo mb-5 font-black tracking-tight max-w-2xl">
              <span class="overflow-mask block">
                <span class="reveal-mask-item stagger-2 block">FROM REAL PROBLEMS.</span>
              </span>
              <span class="overflow-mask block mt-1">
                <span class="reveal-mask-item stagger-3 text-gradient-shimmer block">TO REAL SOLUTIONS.</span>
              </span>
            </h1>

            <!-- Ecosystem Supporting Text (Serving Citizens, Communities, Experts, Students & Innovators) -->
            <p class="animate-fade-in-up stagger-4 font-body-lg text-on-surface-variant max-w-xl mb-8 text-base md:text-lg leading-relaxed">
              <strong class="text-brand-indigo font-semibold">Citizens</strong> share what they experience. 
              <strong class="text-brand-indigo font-semibold">Communities</strong> reveal patterns. 
              <strong class="text-brand-indigo font-semibold">Experts</strong> validate challenges. 
              <strong class="text-brand-indigo font-semibold">Students & innovators</strong> build solutions.
            </p>

            <!-- Dual Ecosystem Primary Actions (Both Sides Represented) -->
            <div class="animate-fade-in-up stagger-5 flex flex-wrap items-center gap-4 w-full mb-6">
              <!-- Primary CTA: Share a Problem (Citizens, Communities, Local Bodies) -->
              <button data-route="citizen-onboarding" class="bg-brand-indigo text-white px-7 py-3.5 rounded-full font-label-md text-sm font-bold hover:bg-brand-violet transition-all duration-300 shadow-md flex items-center gap-2 group/primary hover:-translate-y-0.5 active:translate-y-0">
                <span>Share a Problem</span>
                <span class="material-symbols-outlined text-lg group-hover/primary:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
              </button>

              <!-- Secondary CTA: Explore Challenges (Students, Innovators, Researchers) -->
              <button data-route="explore-challenges" class="bg-white border border-outline-variant text-brand-indigo px-6 py-3.5 rounded-full font-label-md text-sm font-bold hover:border-brand-violet hover:text-brand-violet hover:bg-brand-indigo/5 transition-all duration-300 shadow-2xs flex items-center gap-2 group/secondary hover:-translate-y-0.5 active:translate-y-0">
                <span>Explore Challenges</span>
                <span class="material-symbols-outlined text-lg group-hover/secondary:translate-x-1.5 transition-transform duration-200">east</span>
              </button>
            </div>

            <!-- Integrated Search Bar -->
            <div class="animate-fade-in-up stagger-5 w-full max-w-xl relative mb-5 group">
              <div class="relative flex items-center bg-white border border-outline-variant/80 rounded-full p-1 shadow-2xs hover:border-brand-violet/60 focus-within:border-brand-violet focus-within:ring-2 focus-within:ring-brand-violet/15 transition-all duration-300">
                <span class="material-symbols-outlined pl-4 text-outline text-lg group-focus-within:text-brand-violet transition-colors">search</span>
                <input 
                  type="text" 
                  class="w-full bg-transparent border-none py-2 pl-3 pr-4 font-body-md text-on-surface focus:outline-none placeholder:text-outline text-xs" 
                  placeholder="Search challenges, places or domains..."
                />
                <button data-route="explore-challenges" class="bg-surface-container-high text-brand-indigo px-4 py-2 rounded-full font-label-md text-xs font-semibold hover:bg-brand-indigo hover:text-white transition-all duration-200 shrink-0">
                  Search
                </button>
              </div>
            </div>

            <!-- Quick Filter Links -->
            <div class="animate-fade-in-up stagger-6 flex flex-wrap gap-2 items-center text-xs font-label-md text-on-surface-variant mb-6">
              <span class="font-bold text-brand-indigo mr-1">Domains:</span>
              <button data-route="explore-challenges" class="px-3.5 py-1.5 border border-outline-variant/60 rounded-full bg-white text-on-surface-variant hover:bg-surface-container-low hover:border-brand-violet hover:text-brand-indigo hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">Water</button>
              <button data-route="explore-challenges" class="px-3.5 py-1.5 border border-outline-variant/60 rounded-full bg-white text-on-surface-variant hover:bg-surface-container-low hover:border-brand-violet hover:text-brand-indigo hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">Healthcare</button>
              <button data-route="explore-challenges" class="px-3.5 py-1.5 border border-outline-variant/60 rounded-full bg-white text-on-surface-variant hover:bg-surface-container-low hover:border-brand-violet hover:text-brand-indigo hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">Agriculture</button>
              <button data-route="explore-challenges" class="px-3.5 py-1.5 border border-outline-variant/60 rounded-full bg-white text-on-surface-variant hover:bg-surface-container-low hover:border-brand-violet hover:text-brand-indigo hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">Education</button>
              <button data-route="explore-challenges" class="px-3 py-1.5 font-bold text-brand-violet hover:text-brand-indigo transition-colors flex items-center gap-1 group/more">
                <span>More</span>
                <span class="material-symbols-outlined text-xs group-hover/more:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <!-- Ecosystem Micro-Statement -->
            <div class="animate-fade-in-up stagger-6 flex items-center gap-2 text-[11px] font-medium text-outline pt-2 border-t border-outline-variant/40 w-full max-w-xl">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              <span>One platform. Different perspectives. Shared progress.</span>
            </div>

          </div>

          <!-- RIGHT / BACKGROUND AREA: Complete 6-Stage Ecosystem Network Visual -->
          <div class="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] rounded-3xl bg-surface-container-low/60 border border-outline-variant/50 overflow-hidden flex items-center justify-center shadow-xs group">
            
            <!-- Dynamic Background Dotted Grid -->
            <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #352c85 1.5px, transparent 0); background-size: 24px 24px;"></div>
            
            <!-- Interactive Parallax SVG Ecosystem Canvas -->
            <div id="hero-signal-network" class="relative w-full h-full p-4 flex items-center justify-center transition-transform duration-500 ease-out">
              <svg class="w-full h-full text-brand-indigo" viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Ecosystem Stage Flow Path Lines -->
                <path d="M 60,110 L 150,170 L 260,130 L 360,220 L 440,160 L 410,320" stroke="#352C85" stroke-opacity="0.2" stroke-width="1.5" />
                <path d="M 60,110 L 150,170 L 260,130 L 360,220 L 440,160" stroke="#5B3FD6" stroke-opacity="0.35" stroke-width="1.5" class="animate-dash-flow" />

                <!-- Converging Secondary Observation Streams -->
                <path d="M 50,220 L 150,170 M 90,320 L 260,130 M 200,340 L 360,220" stroke="#159B8C" stroke-opacity="0.25" stroke-dasharray="4 4" />

                <!-- Stage 1: OBSERVE Node (Citizens / Communities) -->
                <circle cx="60" cy="110" r="7" fill="#352C85" class="animate-node-glow" />

                <!-- Stage 2: SIGNAL Node -->
                <circle cx="150" cy="170" r="8" fill="#5B3FD6" class="animate-node-glow" />

                <!-- Stage 3: PATTERN Node -->
                <circle cx="260" cy="130" r="10" fill="#352C85" class="animate-node-glow" />

                <!-- Stage 4: VALIDATE Node (Mentors / Experts) -->
                <circle cx="360" cy="220" r="9" fill="#159B8C" class="animate-node-glow" />

                <!-- Stage 5: CHALLENGE Node -->
                <circle cx="440" cy="160" r="11" fill="#5B3FD6" class="animate-soft-pulse" />

                <!-- Stage 6: SOLVE Node (Students / Innovators) -->
                <circle cx="410" cy="320" r="12" fill="#159B8C" class="animate-soft-pulse" />

                <!-- Pulsing Visual Map Rings -->
                <g class="animate-bounce" style="animation-duration: 4s;">
                  <circle cx="260" cy="130" r="18" fill="#5B3FD6" fill-opacity="0.12" />
                </g>
                <g class="animate-bounce" style="animation-duration: 5s; animation-delay: 1s;">
                  <circle cx="410" cy="320" r="22" fill="#159B8C" fill-opacity="0.15" />
                </g>
              </svg>

              <!-- 6 Complete Stage Labels representing the full ecosystem -->
              <div class="absolute top-10 left-5 bg-white/90 backdrop-blur-xs border border-outline-variant/60 px-2.5 py-1 rounded-full shadow-2xs text-[9px] font-bold text-brand-indigo tracking-wider uppercase flex items-center gap-1 animate-float-network">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-violet"></span>
                <span>01. OBSERVE</span>
              </div>

              <div class="absolute top-36 left-24 bg-white/90 backdrop-blur-xs border border-outline-variant/60 px-2.5 py-1 rounded-full shadow-2xs text-[9px] font-bold text-brand-teal tracking-wider uppercase flex items-center gap-1 animate-float-network" style="animation-delay: -1.5s;">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span>02. SIGNAL</span>
              </div>

              <div class="absolute top-16 right-36 bg-white/90 backdrop-blur-xs border border-outline-variant/60 px-2.5 py-1 rounded-full shadow-2xs text-[9px] font-bold text-brand-indigo tracking-wider uppercase flex items-center gap-1 animate-float-network" style="animation-delay: -3s;">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-indigo"></span>
                <span>03. PATTERN</span>
              </div>

              <div class="absolute bottom-32 left-44 bg-white/90 backdrop-blur-xs border border-outline-variant/60 px-2.5 py-1 rounded-full shadow-2xs text-[9px] font-bold text-brand-teal tracking-wider uppercase flex items-center gap-1 animate-float-network" style="animation-delay: -4.5s;">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                <span>04. VALIDATE</span>
              </div>

              <div class="absolute top-28 right-6 bg-brand-indigo text-white px-3 py-1 rounded-full shadow-xs text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 animate-float-network" style="animation-delay: -6s;">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                <span>05. CHALLENGE</span>
              </div>

              <div class="absolute bottom-8 right-10 bg-brand-teal text-white px-3 py-1 rounded-full shadow-xs text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 animate-float-network" style="animation-delay: -7.5s;">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>06. SOLVE & IMPACT</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- 2. Featured Community Brief Section -->
      <section class="reveal-on-scroll py-12 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div class="bg-white rounded-3xl border border-outline-variant/80 p-8 lg:p-10 shadow-xs hover:border-brand-violet/60 hover:shadow-lg transition-all duration-300">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Left Brief Info -->
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30">
                <span class="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                <span class="font-label-sm text-brand-teal font-bold uppercase tracking-widest text-[11px]">VALIDATED COMMUNITY BRIEF</span>
              </div>

              <h2 class="font-headline-md text-brand-indigo text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                Rural Water Quality & Public Health Risk
              </h2>

              <p class="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-xl">
                47 community reports across 12 hamlets revealed a recurring water quality concern affecting over 3,000 residents in the eastern district.
              </p>

              <!-- Metric Pills -->
              <div class="flex flex-wrap items-center gap-4 py-2 text-xs font-semibold text-brand-indigo">
                <div class="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/40">
                  <span class="material-symbols-outlined text-brand-teal text-base">assignment</span>
                  <span>47 Reports</span>
                </div>
                <div class="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/40">
                  <span class="material-symbols-outlined text-brand-teal text-base">location_on</span>
                  <span>12 Villages</span>
                </div>
                <div class="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/40">
                  <span class="material-symbols-outlined text-brand-teal text-base">groups</span>
                  <span>2 Teams Exploring</span>
                </div>
              </div>

              <div class="pt-2">
                <button data-route="explore-challenges" class="inline-flex items-center gap-2 font-label-md text-brand-violet text-sm font-bold hover:text-brand-indigo transition-colors border-b-2 border-brand-violet hover:border-brand-indigo pb-0.5 group/cta">
                  <span>Explore Full Challenge Brief</span>
                  <span class="material-symbols-outlined text-base group-hover/cta:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
                </button>
              </div>
            </div>

            <!-- Right Geographic Signal Cluster Box -->
            <div class="lg:col-span-5 relative h-72 w-full rounded-2xl bg-surface-container-low border border-outline-variant/50 overflow-hidden flex items-center justify-center p-6 group/visual">
              <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #352c85 1.5px, transparent 0); background-size: 20px 20px;"></div>
              
              <div class="relative w-full h-full flex items-center justify-center">
                <svg class="w-full h-full text-brand-indigo" viewBox="0 0 300 200" fill="none">
                  <path d="M 50,140 Q 120,40 180,100 T 260,60" stroke="#352C85" stroke-opacity="0.3" stroke-width="1.5" class="animate-dash-flow" />
                  <path d="M 60,60 Q 150,150 240,140" stroke="#5B3FD6" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 4" />

                  <circle cx="180" cy="100" r="14" fill="#352C85" fill-opacity="0.15" />
                  <circle cx="180" cy="100" r="7" fill="#5B3FD6" class="animate-node-glow" />
                  <circle cx="50" cy="140" r="5" fill="#159B8C" />
                  <circle cx="260" cy="60" r="5" fill="#159B8C" />
                  <circle cx="60" cy="60" r="4" fill="#352C85" />
                  <circle cx="240" cy="140" r="4" fill="#352C85" />
                </svg>

                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xs border border-outline-variant/60 rounded-xl p-3 shadow-sm text-center">
                  <span class="material-symbols-outlined text-brand-violet text-xl block mb-0.5">hub</span>
                  <span class="text-[11px] font-bold text-brand-indigo uppercase tracking-wider block">GUMLA DISTRICT CLUSTER</span>
                  <span class="text-[9px] font-semibold text-on-surface-variant block">Pattern ID: PAT-2026-08</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- 3. Problem Explorer (Domain Cards) -->
      <section class="reveal-on-scroll py-14 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div class="flex justify-between items-end mb-10">
          <div>
            <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">PROBLEM EXPLORER</span>
            <h3 class="font-headline-md text-brand-indigo text-2xl md:text-3xl font-extrabold">Find Your Next Problem to Solve</h3>
          </div>

          <button data-route="explore-challenges" class="hidden md:flex items-center gap-2 font-label-md text-sm font-bold text-brand-violet hover:text-brand-indigo transition-colors group/all">
            <span>View All Domains</span>
            <span class="material-symbols-outlined text-base group-hover/all:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Healthcare Card -->
          <div data-route="explore-challenges" class="domain-card domain-card-health flex flex-col bg-white p-7 rounded-2xl border border-outline-variant/70 shadow-2xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <div class="flex justify-between items-start mb-6">
              <div class="w-12 h-12 rounded-2xl bg-surface-container-low text-brand-indigo flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                <span class="material-symbols-outlined text-2xl">local_hospital</span>
              </div>
              <span class="text-[10px] font-bold text-brand-violet uppercase tracking-wider bg-surface-container-low px-2.5 py-1 rounded-full border border-outline-variant/40">14 Challenges</span>
            </div>
            
            <h4 class="font-headline-sm text-brand-indigo font-bold text-xl mb-3 group-hover:text-brand-violet transition-colors">Healthcare Accessibility</h4>
            <p class="font-body-sm text-on-surface-variant text-xs mb-6 leading-relaxed flex-grow">Addressing last-mile delivery of medical supplies and remote diagnostic challenges in tribal blocks.</p>
            
            <div class="pt-4 border-t border-outline-variant/40 flex items-center justify-between text-xs font-bold text-brand-indigo mt-auto">
              <span>Explore Domain</span>
              <span class="material-symbols-outlined text-base text-brand-violet group-hover:translate-x-1.5 transition-transform">east</span>
            </div>
          </div>

          <!-- Agriculture Card -->
          <div data-route="explore-challenges" class="domain-card domain-card-agri flex flex-col bg-white p-7 rounded-2xl border-2 border-brand-violet/40 shadow-2xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group relative">
            <span class="absolute top-4 right-4 bg-brand-violet text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">Featured</span>
            <div class="flex justify-between items-start mb-6">
              <div class="w-12 h-12 rounded-2xl bg-surface-container-low text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                <span class="material-symbols-outlined text-2xl">agriculture</span>
              </div>
            </div>
            
            <h4 class="font-headline-sm text-brand-indigo font-bold text-xl mb-3 group-hover:text-brand-violet transition-colors">Climate-Resilient Agriculture</h4>
            <p class="font-body-sm text-on-surface-variant text-xs mb-6 leading-relaxed flex-grow">Solutions for unpredictable monsoon cycles, soil degradation, and market linkage for smallholder farmers.</p>
            
            <div class="pt-4 border-t border-outline-variant/40 flex items-center justify-between text-xs font-bold text-brand-indigo mt-auto">
              <span>8 Challenges</span>
              <span class="material-symbols-outlined text-base text-brand-violet group-hover:translate-x-1.5 transition-transform">east</span>
            </div>
          </div>

          <!-- Education Card -->
          <div data-route="explore-challenges" class="domain-card domain-card-edu flex flex-col bg-white p-7 rounded-2xl border border-outline-variant/70 shadow-2xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <div class="flex justify-between items-start mb-6">
              <div class="w-12 h-12 rounded-2xl bg-surface-container-low text-brand-indigo flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                <span class="material-symbols-outlined text-2xl">school</span>
              </div>
              <span class="text-[10px] font-bold text-brand-violet uppercase tracking-wider bg-surface-container-low px-2.5 py-1 rounded-full border border-outline-variant/40">22 Challenges</span>
            </div>
            
            <h4 class="font-headline-sm text-brand-indigo font-bold text-xl mb-3 group-hover:text-brand-violet transition-colors">Digital Education Equity</h4>
            <p class="font-body-sm text-on-surface-variant text-xs mb-6 leading-relaxed flex-grow">Bridging the digital divide with low-bandwidth learning tools and vernacular language resources.</p>
            
            <div class="pt-4 border-t border-outline-variant/40 flex items-center justify-between text-xs font-bold text-brand-indigo mt-auto">
              <span>Explore Domain</span>
              <span class="material-symbols-outlined text-base text-brand-violet group-hover:translate-x-1.5 transition-transform">east</span>
            </div>
          </div>

        </div>
      </section>

      <!-- 4. How SamadhanSetu Works: 6-Stage Ecosystem Journey -->
      <section id="how-it-works" class="reveal-on-scroll py-16 bg-white border-t border-outline-variant/60">
        <div class="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          
          <div class="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span class="text-xs font-bold text-brand-violet uppercase tracking-widest">ECOSYSTEM JOURNEY</span>
            <h3 class="font-headline-md text-brand-indigo text-2xl md:text-3xl font-extrabold">How SamadhanSetu Works</h3>
            <p class="text-xs text-on-surface-variant">Connecting citizen observations directly into validated real-world innovation challenges.</p>
          </div>

          <!-- Connected Journey 6 Stages -->
          <div class="relative">
            <div class="hidden lg:block absolute top-7 left-10 right-10 h-1 bg-outline-variant/40 rounded-full overflow-hidden">
              <div class="h-full w-full bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-teal animate-dash-flow"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              
              <!-- Stage 01: OBSERVE -->
              <div class="bg-surface-container-low lg:bg-white p-5 rounded-2xl border border-outline-variant/40 lg:border-none flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div class="w-12 h-12 rounded-full bg-surface-container text-brand-indigo flex items-center justify-center font-label-md text-xs font-bold mb-3 ring-8 ring-white shadow-2xs group-hover:bg-brand-indigo group-hover:text-white transition-colors">01</div>
                <h4 class="font-label-md text-brand-indigo font-bold text-xs mb-1 uppercase tracking-wider">OBSERVE</h4>
                <p class="font-body-sm text-on-surface-variant text-[11px] leading-relaxed">Citizens share what they experience in daily life.</p>
              </div>

              <!-- Stage 02: SIGNAL -->
              <div class="bg-surface-container-low lg:bg-white p-5 rounded-2xl border border-outline-variant/40 lg:border-none flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div class="w-12 h-12 rounded-full bg-surface-container text-brand-indigo flex items-center justify-center font-label-md text-xs font-bold mb-3 ring-8 ring-white shadow-2xs group-hover:bg-brand-indigo group-hover:text-white transition-colors">02</div>
                <h4 class="font-label-md text-brand-indigo font-bold text-xs mb-1 uppercase tracking-wider">SIGNAL</h4>
                <p class="font-body-sm text-on-surface-variant text-[11px] leading-relaxed">AI structures and contextualizes raw reports.</p>
              </div>

              <!-- Stage 03: PATTERN -->
              <div class="bg-surface-container-low lg:bg-white p-5 rounded-2xl border border-outline-variant/40 lg:border-none flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div class="w-12 h-12 rounded-full bg-surface-container text-brand-indigo flex items-center justify-center font-label-md text-xs font-bold mb-3 ring-8 ring-white shadow-2xs group-hover:bg-brand-indigo group-hover:text-white transition-colors">03</div>
                <h4 class="font-label-md text-brand-indigo font-bold text-xs mb-1 uppercase tracking-wider">PATTERN</h4>
                <p class="font-body-sm text-on-surface-variant text-[11px] leading-relaxed">Similar signals reveal broader community trends.</p>
              </div>

              <!-- Stage 04: VALIDATE -->
              <div class="bg-surface-container-low lg:bg-white p-5 rounded-2xl border border-outline-variant/40 lg:border-none flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div class="w-12 h-12 rounded-full bg-surface-container text-brand-teal flex items-center justify-center font-label-md text-xs font-bold mb-3 ring-8 ring-white shadow-2xs group-hover:bg-brand-teal group-hover:text-white transition-colors">04</div>
                <h4 class="font-label-md text-brand-teal font-bold text-xs mb-1 uppercase tracking-wider">VALIDATE</h4>
                <p class="font-body-sm text-on-surface-variant text-[11px] leading-relaxed">Mentors & experts confirm problem severity.</p>
              </div>

              <!-- Stage 05: CHALLENGE -->
              <div class="bg-surface-container-low lg:bg-white p-5 rounded-2xl border border-outline-variant/40 lg:border-none flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div class="w-12 h-12 rounded-full bg-brand-violet text-white flex items-center justify-center font-label-md text-xs font-bold mb-3 ring-8 ring-white shadow-xs animate-soft-pulse">05</div>
                <h4 class="font-label-md text-brand-violet font-bold text-xs mb-1 uppercase tracking-wider">CHALLENGE</h4>
                <p class="font-body-sm text-on-surface-variant text-[11px] leading-relaxed font-semibold">Formulated into open research briefs.</p>
              </div>

              <!-- Stage 06: SOLVE & IMPACT -->
              <div class="bg-surface-container-low lg:bg-white p-5 rounded-2xl border border-outline-variant/40 lg:border-none flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div class="w-12 h-12 rounded-full bg-surface-container text-brand-teal flex items-center justify-center font-label-md text-xs font-bold mb-3 ring-8 ring-white shadow-2xs group-hover:bg-brand-teal group-hover:text-white transition-colors">06</div>
                <h4 class="font-label-md text-brand-teal font-bold text-xs mb-1 uppercase tracking-wider">SOLVE</h4>
                <p class="font-body-sm text-on-surface-variant text-[11px] leading-relaxed">Students & innovators build real solutions.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- 5. Community CTA -->
      <section class="reveal-on-scroll py-16 bg-surface-container-low border-t border-outline-variant/60 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
          <svg class="w-full h-full text-brand-indigo" viewBox="0 0 600 250" fill="none">
            <circle cx="300" cy="125" r="30" fill="#5B3FD6" fill-opacity="0.2" class="animate-ping" style="animation-duration: 4s;" />
            <line x1="300" y1="125" x2="180" y2="70" stroke="#352C85" stroke-dasharray="4 4" />
            <line x1="300" y1="125" x2="420" y2="80" stroke="#352C85" stroke-dasharray="4 4" />
            <line x1="300" y1="125" x2="220" y2="180" stroke="#159B8C" stroke-dasharray="4 4" />
            <line x1="300" y1="125" x2="390" y2="175" stroke="#159B8C" stroke-dasharray="4 4" />
          </svg>
        </div>

        <div class="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center space-y-4">
          <span class="text-xs font-bold text-brand-teal uppercase tracking-widest">HAVE YOU NOTICED A PROBLEM?</span>
          <h3 class="font-headline-md text-brand-indigo text-2xl md:text-3xl font-extrabold max-w-xl">
            Not every problem starts as a formal complaint.
          </h3>
          <p class="font-body-lg text-on-surface-variant text-sm md:text-base max-w-xl leading-relaxed">
            Sometimes it starts with someone noticing something that should be better. Add your perspective to help build solutions.
          </p>
          <div class="pt-4">
            <button data-route="citizen-onboarding" class="bg-brand-indigo text-white px-8 py-4 rounded-full font-label-md text-sm font-bold hover:bg-brand-violet hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center gap-2.5 group/cta">
              <span>Share a Problem</span>
              <span class="material-symbols-outlined text-lg group-hover/cta:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  `;
}
