import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * Citizen Profile View - User Settings, Preferred Language & Contribution Summary
 */
export function renderCitizenProfileView() {
  const user = AppState.userProfile || { name: 'Ramesh Sharma', location: 'Gumla District, Jharkhand', phone: '+91 94311 88221' };

  return `
    ${renderHeader('citizen-profile')}

    <main class="flex-grow pt-6 sm:pt-8 pb-20 px-6 md:px-margin-desktop max-w-[900px] mx-auto w-full space-y-6">
      
      <!-- Profile Banner Card -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/70 shadow-2xs space-y-6">
        
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-outline-variant/40">
          <div class="w-16 h-16 rounded-full bg-brand-indigo text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0">
            ${user.name.charAt(0)}
          </div>

          <div class="space-y-1 flex-grow">
            <div class="flex items-center gap-2">
              <h1 class="font-display-lg text-brand-indigo text-2xl font-extrabold">${user.name}</h1>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">Verified Citizen</span>
            </div>
            <p class="text-xs text-on-surface-variant">📍 ${user.location} • 📱 ${user.phone || '+91 94311 88221'}</p>
          </div>

          <button id="signout-profile-btn" class="border border-error text-error hover:bg-error/10 px-4 py-2 rounded-full font-label-md text-xs font-bold transition-all cursor-pointer shrink-0">
            Sign Out
          </button>
        </div>

        <!-- Contribution Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50 text-center space-y-1">
            <span class="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">PROBLEMS REPORTED</span>
            <span class="font-display-lg text-brand-indigo text-2xl font-black">${user.reportedCount || 3}</span>
          </div>

          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50 text-center space-y-1">
            <span class="text-[10px] font-bold text-brand-violet uppercase tracking-widest block">PATTERNS CLUSTERED</span>
            <span class="font-display-lg text-brand-violet text-2xl font-black">2</span>
          </div>

          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50 text-center space-y-1 col-span-2 sm:col-span-1">
            <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block">SOLUTIONS DEPLOYED</span>
            <span class="font-display-lg text-emerald-700 text-2xl font-black">${user.resolvedCount || 1}</span>
          </div>
        </div>

        <!-- Account Settings & Preferences -->
        <div class="space-y-4 pt-2">
          <h3 class="font-headline-sm text-brand-indigo text-base font-bold">Preferences & Settings</h3>
          
          <div class="space-y-3 text-xs">
            <div class="p-4 rounded-2xl border border-outline-variant/50 bg-white flex items-center justify-between">
              <div>
                <span class="font-bold text-brand-indigo block">Preferred Language</span>
                <span class="text-on-surface-variant text-[11px]">Select your primary language for voice and text prompts</span>
              </div>
              <select class="bg-surface-container-low border border-outline-variant rounded-xl px-3 py-1.5 font-semibold text-brand-indigo focus:outline-none">
                <option value="en" selected>English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="te">తెలుగు (Telugu)</option>
              </select>
            </div>

            <div class="p-4 rounded-2xl border border-outline-variant/50 bg-white flex items-center justify-between">
              <div>
                <span class="font-bold text-brand-indigo block">Notification Alerts</span>
                <span class="text-on-surface-variant text-[11px]">Receive updates when your reported problems change status</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 rounded text-brand-indigo focus:ring-brand-violet cursor-pointer">
            </div>
          </div>
        </div>

      </div>

    </main>

    ${renderFooter()}
  `;
}
