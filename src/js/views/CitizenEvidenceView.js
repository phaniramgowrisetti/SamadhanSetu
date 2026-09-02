import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderHelpHint } from '../components/HelpHint.js';
import { AppState } from '../app.js';

export function renderCitizenEvidenceView() {
  const evidenceList = AppState.reportDraft.evidence || [];
  const backRoute = (AppState.reportDraft.method === 'voice' || AppState.reportDraft.voiceRecorded) ? 'citizen-report-voice' : 'citizen-report-text';

  return `
    ${renderHeader('citizen-onboarding')}

    <main class="flex-grow pt-8 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <!-- Back Link -->
      <div class="w-full max-w-2xl mb-6">
        <button data-route="${backRoute}" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-sm font-semibold transition-colors group cursor-pointer">
          <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span> Back
        </button>
      </div>

      <!-- Main Container -->
      <div class="w-full max-w-2xl bg-white border border-outline-variant rounded-2xl p-8 shadow-sm">
        
        <div class="text-center mb-6">
          <span class="font-label-sm text-brand-violet uppercase tracking-widest text-xs font-bold bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/40 inline-block mb-3">
            STEP 3 OF 5: EVIDENCE & PHOTOS (OPTIONAL)
          </span>

          <h1 class="font-display-lg text-brand-indigo text-3xl font-extrabold mb-2">
            Do you have anything that could help explain the problem?
          </h1>

          <p class="font-body-lg text-on-surface-variant text-base">
            You can add photos, videos or other evidence if you have it. This is optional.
          </p>
        </div>

        <!-- Hidden Native File Input -->
        <input type="file" id="evidence-file-input" class="hidden" accept="image/*,video/*,.pdf,.doc,.docx" multiple>

        <!-- 3 Large Easy Upload Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          
          <button id="upload-photo-btn" class="upload-trigger p-6 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-brand-indigo hover:bg-white hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div class="w-14 h-14 rounded-full bg-white text-brand-indigo flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
              <span class="material-symbols-outlined text-3xl">photo_camera</span>
            </div>
            <span class="font-headline-sm text-brand-indigo font-bold text-sm mb-1">Take / Add Photos</span>
            <span class="text-[11px] text-on-surface-variant leading-tight">Help others visualize what you noticed</span>
          </button>

          <button id="upload-video-btn" class="upload-trigger p-6 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-brand-indigo hover:bg-white hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div class="w-14 h-14 rounded-full bg-white text-brand-violet flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
              <span class="material-symbols-outlined text-3xl">videocam</span>
            </div>
            <span class="font-headline-sm text-brand-indigo font-bold text-sm mb-1">Add a Video</span>
            <span class="text-[11px] text-on-surface-variant leading-tight">Short clip to provide context</span>
          </button>

          <button id="upload-file-btn" class="upload-trigger p-6 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-brand-indigo hover:bg-white hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div class="w-14 h-14 rounded-full bg-white text-brand-teal flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
              <span class="material-symbols-outlined text-3xl">attach_file</span>
            </div>
            <span class="font-headline-sm text-brand-indigo font-bold text-sm mb-1">Add File / Doc</span>
            <span class="text-[11px] text-on-surface-variant leading-tight">Upload document or report</span>
          </button>

        </div>

        <!-- Evidence List Preview Area -->
        <div id="evidence-preview-area" class="mb-8 space-y-4">
          ${evidenceList.length > 0 ? evidenceList.map((item, idx) => `
            <div class="p-4 rounded-xl border border-outline-variant/60 bg-surface-container-low flex items-start gap-4 justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-white border border-outline-variant flex items-center justify-center text-brand-indigo shrink-0 overflow-hidden">
                  ${item.previewUrl ? `<img src="${item.previewUrl}" class="w-full h-full object-cover">` : `<span class="material-symbols-outlined text-2xl">${item.type === 'video' ? 'movie' : 'description'}</span>`}
                </div>
                <div>
                  <div class="font-bold text-brand-indigo text-sm truncate max-w-xs">${item.name}</div>
                  <input type="text" data-evidence-caption-idx="${idx}" class="mt-1 w-full bg-white border border-outline-variant/40 rounded-lg px-2.5 py-1 text-xs text-on-surface focus:outline-none focus:border-brand-violet" placeholder="Optional: What does this show?" value="${item.caption || ''}">
                </div>
              </div>
              <button data-remove-evidence="${idx}" class="text-outline hover:text-error transition-colors p-1">
                <span class="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          `).join('') : `
            <div class="text-center p-6 border border-dashed border-outline-variant rounded-xl text-xs text-on-surface-variant">
              No files added yet. Adding photos is completely optional.
            </div>
          `}
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <button data-route="citizen-report-location" class="w-full sm:flex-1 bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-sm flex items-center justify-center gap-2">
            <span>Continue to Location</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          
          <button data-route="citizen-report-location" class="w-full sm:w-auto text-on-surface-variant font-semibold text-sm py-3.5 px-6 hover:text-brand-indigo transition-colors text-center">
            Skip for now →
          </button>
        </div>

      </div>
    </main>

    ${renderHelpHint()}
    ${renderFooter()}
  `;
}
