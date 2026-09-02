import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderHowItWorksView() {
  return `
    ${renderHeader('how-it-works')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <!-- HERO -->
      <section class="max-w-3xl mx-auto text-center mb-16">
        <span class="text-brand-violet font-label-sm text-xs font-bold tracking-widest uppercase mb-3 block">FROM A SINGLE VOICE TO REAL IMPACT</span>
        <h1 class="font-display-lg text-brand-indigo text-4xl md:text-5xl font-extrabold mb-4">A problem can become a possibility.</h1>
        <p class="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
          SamadhanSetu turns everyday problems noticed by communities into structured challenges that students and innovators can work together to solve.
        </p>
        <button data-route="role-selection" class="bg-brand-indigo text-white px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm">
          Get Started
        </button>
      </section>

      <!-- VISUAL JOURNEY STAGES -->
      <section class="relative max-w-4xl mx-auto space-y-12">
        
        <!-- Stage 1: Community -->
        <div class="flex flex-col md:flex-row items-start gap-6 bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative">
          <div class="w-12 h-12 rounded-xl bg-surface-container-low text-brand-indigo font-display-lg font-bold text-xl flex items-center justify-center shrink-0 border border-outline-variant/40">
            01
          </div>
          <div class="flex-grow">
            <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">COMMUNITY STAGE</span>
            <h3 class="font-headline-md text-brand-indigo text-2xl font-bold mb-2">People notice and share real problems</h3>
            <p class="font-body-md text-on-surface-variant text-base mb-4 leading-relaxed">
              Citizens, farmers, teachers, and local leaders observe challenges in water quality, agriculture, energy, or healthcare in their immediate surroundings.
            </p>
            <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm italic text-brand-indigo">
              "The groundwater from our village hand pump has turned rusty brown after the monsoon rains."
            </div>
          </div>
        </div>

        <!-- Connector Arrow -->
        <div class="flex justify-center -my-6 relative z-10">
          <div class="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-brand-violet shadow-xs">
            <span class="material-symbols-outlined text-xl">arrow_downward</span>
          </div>
        </div>

        <!-- Stage 2: SamadhanSetu AI Synthesis -->
        <div class="flex flex-col md:flex-row items-start gap-6 bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative">
          <div class="w-12 h-12 rounded-xl bg-surface-container-low text-brand-violet font-display-lg font-bold text-xl flex items-center justify-center shrink-0 border border-outline-variant/40">
            02
          </div>
          <div class="flex-grow">
            <span class="text-xs font-bold text-brand-violet uppercase tracking-widest block mb-1">SAMADHANSETU ENGINE</span>
            <h3 class="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Observations are organized into meaningful challenges</h3>
            <p class="font-body-md text-on-surface-variant text-base mb-4 leading-relaxed">
              AI synthesis groups duplicate reports across neighboring villages, verifies ground signals, and structures them into actionable, researchable challenge statements.
            </p>
            <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm text-brand-indigo font-medium flex items-center justify-between">
              <span class="flex items-center gap-2"><span class="material-symbols-outlined text-brand-teal text-lg">verified</span> 47 reports clustered into 1 Validated Challenge</span>
              <span class="text-xs font-bold bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full">Ready for Innovators</span>
            </div>
          </div>
        </div>

        <!-- Connector Arrow -->
        <div class="flex justify-center -my-6 relative z-10">
          <div class="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-brand-violet shadow-xs">
            <span class="material-symbols-outlined text-xl">arrow_downward</span>
          </div>
        </div>

        <!-- Stage 3: Innovators -->
        <div class="flex flex-col md:flex-row items-start gap-6 bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative">
          <div class="w-12 h-12 rounded-xl bg-surface-container-low text-brand-teal font-display-lg font-bold text-xl flex items-center justify-center shrink-0 border border-outline-variant/40">
            03
          </div>
          <div class="flex-grow">
            <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">INNOVATOR EXPLORATION</span>
            <h3 class="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Students and innovators explore and develop solutions</h3>
            <p class="font-body-md text-on-surface-variant text-base mb-4 leading-relaxed">
              University students, engineering teams, and mentors analyze the validated briefs, conduct field research, and design low-cost hardware or software solutions.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-xs font-semibold text-brand-indigo">Research & Hardware</span>
              <span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-xs font-semibold text-brand-indigo">IoT & Sensors</span>
              <span class="px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-xs font-semibold text-brand-indigo">University Mentorship</span>
            </div>
          </div>
        </div>

        <!-- Connector Arrow -->
        <div class="flex justify-center -my-6 relative z-10">
          <div class="w-10 h-10 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-brand-violet shadow-xs">
            <span class="material-symbols-outlined text-xl">arrow_downward</span>
          </div>
        </div>

        <!-- Stage 4: Impact -->
        <div class="flex flex-col md:flex-row items-start gap-6 bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative border-l-4 border-l-brand-teal">
          <div class="w-12 h-12 rounded-xl bg-brand-teal text-white font-display-lg font-bold text-xl flex items-center justify-center shrink-0">
            04
          </div>
          <div class="flex-grow">
            <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">REAL-WORLD IMPACT</span>
            <h3 class="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Useful solutions are shared, supported, and implemented</h3>
            <p class="font-body-md text-on-surface-variant text-base leading-relaxed">
              Successful prototypes move back into the community with support from partner organizations, government incubation grants, and local administration.
            </p>
          </div>
        </div>

      </section>

      <!-- Bottom Callout -->
      <section class="max-w-4xl mx-auto mt-16 bg-surface-container-low rounded-2xl p-10 text-center border border-outline-variant">
        <h2 class="font-headline-md text-brand-indigo text-2xl font-bold mb-3">Ready to contribute to real-world solutions?</h2>
        <p class="font-body-md text-on-surface-variant text-sm max-w-xl mx-auto mb-6">
          Whether you want to voice a problem from your community or build a technological solution, SamadhanSetu welcomes your participation.
        </p>
        <button data-route="role-selection" class="bg-brand-indigo text-white px-8 py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm">
          Choose Your Pathway
        </button>
      </section>
    </main>

    ${renderFooter()}
  `;
}
