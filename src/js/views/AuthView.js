import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState, router } from '../app.js';

export function renderAuthView() {
  const currentRole = AppState.userRole || 'citizen';
  
  const roleTitles = {
    citizen: 'Citizen / Community',
    student: 'Student / Innovator',
    mentor: 'University / Mentor',
    partner: 'Partner / Organization'
  };

  const roleIcons = {
    citizen: 'groups',
    student: 'lightbulb',
    mentor: 'school',
    partner: 'handshake'
  };

  return `
    ${renderHeader('auth')}

    <main class="flex-grow pt-8 pb-20 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Back Link -->
      <div class="w-full max-w-md mb-6">
        <button data-route="role-selection" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Change Role
        </button>
      </div>

      <!-- Auth Card Container -->
      <div class="w-full max-w-md bg-white border border-outline-variant rounded-2xl p-8 shadow-sm">
        
        <!-- Role Context Badge -->
        <div class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 mb-6">
          <div class="w-10 h-10 rounded-lg bg-brand-indigo text-white flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl">${roleIcons[currentRole] || 'person'}</span>
          </div>
          <div>
            <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">SELECTED PATHWAY</span>
            <span class="font-headline-sm text-brand-indigo font-bold text-sm">${roleTitles[currentRole] || 'Citizen / Community'}</span>
          </div>
        </div>

        <!-- Mode Toggle Tabs (Sign In / Create Account) -->
        <div class="flex border-b border-outline-variant/60 mb-6">
          <button id="tab-signin" class="auth-tab flex-1 py-2.5 font-label-md text-sm font-bold text-brand-violet border-b-2 border-brand-violet">
            Sign In
          </button>
          <button id="tab-signup" class="auth-tab flex-1 py-2.5 font-label-md text-sm font-semibold text-on-surface-variant hover:text-brand-indigo">
            Create Account
          </button>
        </div>

        <h2 id="auth-heading" class="font-display-lg text-brand-indigo text-2xl font-extrabold mb-2">Welcome Back</h2>
        <p id="auth-subtext" class="font-body-md text-on-surface-variant text-sm mb-6">
          Enter your details to access your ${roleTitles[currentRole]} workspace.
        </p>

        <!-- Dynamic Validation Error Alert -->
        <div id="auth-error" class="hidden p-3 rounded-lg bg-error-container text-on-error-container text-xs font-semibold mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">error</span>
          <span id="auth-error-text">Please fill in all required fields.</span>
        </div>

        <!-- Form -->
        <form id="auth-form" class="space-y-4" novalidate>
          <div id="field-fullname" class="hidden">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider mb-1.5">Full Name</label>
            <input type="text" id="input-fullname" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20" placeholder="e.g. Anandi Devi">
          </div>

          <div>
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider mb-1.5">Email Address</label>
            <input type="email" id="input-email" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20" placeholder="you@example.org" value="anandi@samadhansetu.org">
          </div>

          <div>
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider mb-1.5">Password</label>
            <input type="password" id="input-password" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20" placeholder="••••••••" value="password123">
          </div>

          <div id="field-district" class="hidden">
            <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider mb-1.5">District / Region</label>
            <input type="text" id="input-district" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20" placeholder="e.g. Gumla District, Jharkhand">
          </div>

          <button type="submit" id="auth-submit-btn" class="w-full bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm mt-4 flex items-center justify-center gap-2">
            <span>Sign In to Continue</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </form>

        <div class="mt-6 text-center text-xs text-on-surface-variant">
          By continuing, you agree to SamadhanSetu's 
          <a class="text-brand-violet font-semibold hover:underline" href="#">Terms of Use</a> and <a class="text-brand-violet font-semibold hover:underline" href="#">Privacy Policy</a>.
        </div>
      </div>
    </main>

    ${renderFooter()}
  `;
}
