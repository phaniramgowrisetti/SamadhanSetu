import { AppState } from '../app.js';

export function renderHelpHint() {
  return `
    <div class="fixed bottom-6 right-6 z-50">
      <button id="help-hint-btn" class="flex items-center gap-2 bg-brand-indigo text-white px-4 py-2.5 rounded-full font-label-md text-xs font-semibold shadow-lg hover:bg-brand-violet transition-all active:scale-95">
        <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">?</span>
        <span>Need help?</span>
      </button>

      <!-- Help Drawer / Modal -->
      <div id="help-modal" class="${AppState.helpModalOpen ? '' : 'hidden'} fixed inset-0 bg-brand-indigo/30 backdrop-blur-xs flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full border border-outline-variant shadow-2xl relative animate-in fade-in zoom-in duration-200">
          <button id="close-help-btn" class="absolute top-4 right-4 text-outline hover:text-brand-indigo text-2xl">
            <span class="material-symbols-outlined">close</span>
          </button>

          <div class="w-12 h-12 rounded-xl bg-surface-container-low text-brand-violet flex items-center justify-center mb-4">
            <span class="material-symbols-outlined text-3xl">help_center</span>
          </div>

          <h3 class="font-headline-md text-brand-indigo text-xl font-bold mb-4">How to report a problem</h3>

          <div class="space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-teal text-xl shrink-0 mt-0.5">check_circle</span>
              <p>You can simply describe what you noticed in your village or neighborhood.</p>
            </div>

            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-teal text-xl shrink-0 mt-0.5">check_circle</span>
              <p>You can speak or write in your own natural words in Hindi, English, or Telugu.</p>
            </div>

            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-brand-teal text-xl shrink-0 mt-0.5">check_circle</span>
              <p>You do <strong>not</strong> need to know which government department is responsible. SamadhanSetu's AI will organize it automatically.</p>
            </div>
          </div>

          <button id="got-it-help-btn" class="w-full bg-brand-indigo text-white py-3 rounded-full font-label-md text-sm font-semibold hover:bg-brand-violet transition-all mt-6">
            Got it, thank you
          </button>
        </div>
      </div>
    </div>
  `;
}
