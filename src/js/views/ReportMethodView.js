import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';

export function renderReportMethodView() {
  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Back Link -->
      <div class="w-full max-w-2xl mb-8">
        <button data-route="back" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group cursor-pointer">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      <!-- Main Container -->
      <div class="w-full max-w-2xl text-center space-y-6">
        <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block">
          STEP 1 OF 5: TELL US YOUR PROBLEM
        </span>

        <h1 class="font-display-lg text-brand-indigo text-3xl md:text-4xl font-extrabold">
          Tell Us Your Problem
        </h1>

        <p class="font-body-lg text-on-surface-variant text-base">
          Choose whichever way feels easiest and most comfortable for you.
        </p>

        <!-- 2 Large Option Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          
          <!-- Option 1: Speak (Primary & Recommended) -->
          <div data-select-method="voice" class="method-card group cursor-pointer p-8 rounded-2xl bg-white border-2 border-brand-indigo hover:bg-surface-container-low hover:shadow-xl transition-all flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute top-3 right-3 bg-brand-teal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Primary & Recommended
            </div>
            
            <div class="w-20 h-20 rounded-full bg-brand-indigo text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform mt-2">
              <span class="material-symbols-outlined text-4xl">mic</span>
            </div>

            <h2 class="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Speak</h2>
            <p class="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
              Tell us about the problem by speaking naturally in your own language.
            </p>

            <div class="mt-auto w-full bg-brand-indigo text-white py-3 rounded-full font-label-md font-semibold text-sm group-hover:bg-brand-violet transition-colors flex items-center justify-center gap-2 shadow-sm">
              <span>Start Speaking</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>

          <!-- Option 2: Write (Alternative Option) -->
          <div data-select-method="text" class="method-card group cursor-pointer p-8 rounded-2xl bg-white border border-outline-variant hover:border-brand-indigo hover:shadow-lg transition-all flex flex-col items-center text-center relative">
            <div class="absolute top-3 right-3 bg-surface-container-low text-on-surface-variant text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-outline-variant/40">
              Alternative Option
            </div>

            <div class="w-20 h-20 rounded-full bg-surface-container-low text-brand-indigo flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-outline-variant/40 mt-2">
              <span class="material-symbols-outlined text-4xl">edit_note</span>
            </div>

            <h2 class="font-headline-md text-brand-indigo text-2xl font-bold mb-2">Write</h2>
            <p class="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
              Type what you have noticed using simple everyday words.
            </p>

            <div class="mt-auto w-full border border-outline-variant text-brand-indigo py-3 rounded-full font-label-md font-semibold text-sm group-hover:border-brand-indigo hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <span>Start Writing</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>

        </div>
      </div>
    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
