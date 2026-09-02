import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

export function renderCitizenPlaceholderView() {
  return `
    ${renderHeader('citizen-onboarding')}
    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div class="max-w-2xl mx-auto bg-white p-10 rounded-2xl border border-outline-variant text-center shadow-sm">
        <div class="w-16 h-16 rounded-2xl bg-surface-container-low text-brand-indigo flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-4xl">groups</span>
        </div>
        <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-2">CITIZEN PORTAL</span>
        <h1 class="font-display-lg text-brand-indigo text-3xl font-bold mb-4">Welcome, ${AppState.userProfile.name}</h1>
        <p class="font-body-md text-on-surface-variant text-base mb-8 leading-relaxed">
          Your account as a <strong>Citizen / Community Member</strong> is active. Phase 3 & 4 (Citizen Onboarding & Problem Reporting) will unlock in subsequent phases!
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button data-route="role-selection" class="border border-outline-variant text-brand-indigo px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:border-brand-violet">
            Switch Role
          </button>
          <button data-route="intro" class="bg-brand-indigo text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-brand-violet">
            Return Home
          </button>
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;
}

export function renderStudentExplorerView() {
  return `
    ${renderHeader('explore-challenges')}
    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div class="mb-8">
        <span class="text-xs font-bold text-brand-violet uppercase tracking-widest block mb-1">INNOVATION EXPLORER</span>
        <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-2">Validated Community Challenges</h1>
        <p class="font-body-md text-on-surface-variant text-base">Browse real challenges compiled from verified community signals.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        ${AppState.challenges.map(chal => `
          <div class="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm hover:border-brand-violet transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant text-xs font-bold text-brand-teal uppercase">${chal.domain}</span>
                <span class="text-xs text-on-surface-variant font-semibold">${chal.difficulty}</span>
              </div>
              <h3 class="font-headline-md text-brand-indigo text-xl font-bold mb-3">${chal.title}</h3>
              <p class="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">${chal.description}</p>
            </div>
            <div class="pt-4 border-t border-outline-variant/40 flex justify-between items-center text-xs font-semibold text-brand-indigo">
              <span>📍 ${chal.location}</span>
              <span>🔗 ${chal.signalsLinked} Signals Linked</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="text-center">
        <p class="text-xs text-on-surface-variant mb-4">Phase 9 (Student Challenge Exploration) will implement full interactive filter suite & submission team builder.</p>
        <button data-route="intro" class="bg-brand-indigo text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-brand-violet">Return to Home</button>
      </div>
    </main>
    ${renderFooter()}
  `;
}

export function renderMentorPlaceholderView() {
  return `
    ${renderHeader()}
    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div class="max-w-2xl mx-auto bg-white p-10 rounded-2xl border border-outline-variant text-center shadow-sm">
        <div class="w-16 h-16 rounded-2xl bg-surface-container-low text-brand-indigo flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-4xl">school</span>
        </div>
        <span class="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-2">MENTOR & ACADEMIC PORTAL</span>
        <h1 class="font-display-lg text-brand-indigo text-3xl font-bold mb-4">Welcome, ${AppState.userProfile.name}</h1>
        <p class="font-body-md text-on-surface-variant text-base mb-8 leading-relaxed">
          Your account as a <strong>University / Mentor</strong> is active. You can guide student innovation teams and validate research briefs.
        </p>
        <button data-route="intro" class="bg-brand-indigo text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-brand-violet">
          Return Home
        </button>
      </div>
    </main>
    ${renderFooter()}
  `;
}

export function renderPartnerPlaceholderView() {
  return `
    ${renderHeader()}
    <main class="flex-grow pt-12 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div class="max-w-2xl mx-auto bg-white p-10 rounded-2xl border border-outline-variant text-center shadow-sm">
        <div class="w-16 h-16 rounded-2xl bg-surface-container-low text-brand-violet flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-4xl">handshake</span>
        </div>
        <span class="text-xs font-bold text-brand-violet uppercase tracking-widest block mb-2">PARTNER & ORGANIZATIONAL PORTAL</span>
        <h1 class="font-display-lg text-brand-indigo text-3xl font-bold mb-4">Welcome, ${AppState.userProfile.name}</h1>
        <p class="font-body-md text-on-surface-variant text-base mb-8 leading-relaxed">
          Your account as a <strong>Partner / Organization</strong> is active. Partner resource grants and implementation funding tracking will unlock in future phases!
        </p>
        <button data-route="intro" class="bg-brand-indigo text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-brand-violet">
          Return Home
        </button>
      </div>
    </main>
    ${renderFooter()}
  `;
}
