import { AppState } from '../app.js';

export function renderLanguageSelector() {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'te', label: 'తెలుగు' }
  ];

  const activeLang = languages.find(l => l.code === AppState.selectedLanguage) || languages[0];

  return `
    <div class="relative inline-block text-left">
      <button id="lang-selector-btn" class="flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-1.5 rounded-full text-xs font-semibold text-brand-indigo hover:border-brand-violet transition-all shadow-xs">
        <span class="material-symbols-outlined text-base">language</span>
        <span>${activeLang.label}</span>
        <span class="material-symbols-outlined text-xs">arrow_drop_down</span>
      </button>

      <div id="lang-dropdown" class="hidden absolute right-0 mt-2 w-32 bg-white rounded-xl border border-outline-variant shadow-lg z-50 overflow-hidden">
        ${languages.map(lang => `
          <button data-lang="${lang.code}" class="w-full text-left px-4 py-2.5 text-xs font-semibold ${lang.code === AppState.selectedLanguage ? 'bg-brand-indigo text-white font-bold' : 'text-on-surface hover:bg-surface-container-low'} transition-colors">
            ${lang.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}
