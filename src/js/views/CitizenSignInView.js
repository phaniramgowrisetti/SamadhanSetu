import { renderFooter } from '../components/Footer.js';
import { AppState } from '../app.js';

/**
 * CitizenSignInView - Dedicated Authentication Screen for Existing Citizens
 * Includes Mobile Number input -> OTP Verification -> Citizen Dashboard redirection.
 */
export function renderCitizenSignInView() {
  return `
    <div class="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F3FB] text-on-surface">
      
      <!-- Minimal Dedicated Header (Logo | Back to Citizen Access) -->
      <header class="w-full pt-5 pb-2 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-transparent relative z-20">
        <div class="flex items-center gap-4 sm:gap-6">
          <!-- Official SamadhanSetu Logo Asset (Transparent Container) -->
          <a data-route="intro" class="cursor-pointer group bg-transparent p-0 border-none shadow-none">
            <img 
              src="/assests/logo.png" 
              alt="SamadhanSetu — Civic Innovation Platform" 
              class="w-[130px] sm:w-[145px] md:w-[160px] h-auto max-w-full object-contain block bg-transparent transition-transform duration-300 ease-out group-hover:scale-[1.02]" 
              onerror="this.onerror=null; this.src='/logo.png';"
            />
          </a>

          <!-- Vertical Divider & Back Link -->
          <div class="h-5 w-px bg-outline-variant/60 hidden sm:block"></div>

          <button data-route="citizen-access" class="inline-flex items-center gap-1.5 text-brand-indigo hover:text-brand-violet font-label-md text-xs sm:text-sm font-semibold transition-colors group">
            <span class="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span>Back to Citizen Access</span>
          </button>
        </div>
      </header>

      <!-- Main Sign-In Container -->
      <main class="flex-grow flex flex-col justify-center py-6 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
        
        <div class="w-full max-w-md mx-auto bg-white border border-outline-variant/70 rounded-3xl p-8 shadow-sm">
          
          <!-- Header Copy -->
          <div class="text-center mb-6">
            <span class="text-[11px] font-bold text-brand-teal uppercase tracking-widest block mb-1">
              WELCOME BACK
            </span>
            <h1 class="font-display-lg text-brand-indigo text-2xl font-extrabold mb-2">
              Sign in to continue
            </h1>
            <p class="font-body-md text-on-surface-variant text-xs leading-relaxed">
              Access your community reports, follow their progress, and stay connected to the challenges you have shared.
            </p>
          </div>

          <!-- Alert for Errors -->
          <div id="signin-error" class="hidden p-3 rounded-xl bg-error-container text-on-error-container text-xs font-semibold mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">error</span>
            <span id="signin-error-text">Please enter a valid 10-digit mobile number.</span>
          </div>

          <!-- STEP 1: Mobile Number Form -->
          <form id="citizen-signin-mobile-form" class="space-y-5">
            <div>
              <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider mb-2">
                Mobile Number
              </label>
              <div class="flex items-center border border-outline-variant rounded-2xl overflow-hidden focus-within:border-brand-violet focus-within:ring-2 focus-within:ring-brand-violet/20 bg-white">
                <span class="px-4 py-3.5 bg-surface-container-low text-brand-indigo font-bold text-sm border-r border-outline-variant/60">
                  +91
                </span>
                <input 
                  type="tel" 
                  id="citizen-mobile-input" 
                  maxlength="10" 
                  class="w-full px-4 py-3.5 text-sm text-on-surface font-semibold focus:outline-none placeholder:text-on-surface-variant/50 placeholder:font-normal" 
                  placeholder="Enter your 10-digit mobile number" 
                  value="9431188221"
                  required
                />
              </div>
              <p class="text-[11px] text-on-surface-variant/70 mt-1.5">
                We will send a 4-digit verification code to this number.
              </p>
            </div>

            <button 
              type="submit" 
              id="citizen-send-otp-btn" 
              class="w-full bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Continue</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          <!-- STEP 2: OTP Verification Form (Initially Hidden) -->
          <form id="citizen-signin-otp-form" class="hidden space-y-5">
            <div class="p-3 bg-brand-teal/10 rounded-2xl border border-brand-teal/20 text-xs text-brand-indigo flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase font-bold text-brand-teal block">OTP SENT TO</span>
                <span id="display-mobile-number" class="font-bold font-mono text-sm">+91 94311 88221</span>
              </div>
              <button type="button" id="edit-mobile-btn" class="text-xs text-brand-violet font-bold hover:underline">
                Change
              </button>
            </div>

            <div>
              <label class="block text-xs font-bold text-brand-indigo uppercase tracking-wider mb-2 text-center">
                Enter 4-Digit OTP Code
              </label>
              <div class="flex justify-center gap-3" id="otp-inputs-container">
                <input type="text" maxlength="1" class="otp-box w-12 h-12 text-center text-xl font-bold font-mono border border-outline-variant rounded-xl focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 bg-white" value="4" />
                <input type="text" maxlength="1" class="otp-box w-12 h-12 text-center text-xl font-bold font-mono border border-outline-variant rounded-xl focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 bg-white" value="8" />
                <input type="text" maxlength="1" class="otp-box w-12 h-12 text-center text-xl font-bold font-mono border border-outline-variant rounded-xl focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 bg-white" value="2" />
                <input type="text" maxlength="1" class="otp-box w-12 h-12 text-center text-xl font-bold font-mono border border-outline-variant rounded-xl focus:outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 bg-white" value="1" />
              </div>
            </div>

            <button 
              type="submit" 
              id="citizen-verify-otp-btn" 
              class="w-full bg-brand-indigo text-white py-3.5 rounded-full font-label-md font-semibold text-sm hover:bg-brand-violet transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Verify & Sign In</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">check_circle</span>
            </button>

            <div class="text-center text-xs text-on-surface-variant">
              Didn't receive the code? 
              <button type="button" id="resend-otp-btn" class="text-brand-violet font-semibold hover:underline cursor-pointer">
                Resend OTP
              </button>
            </div>
          </form>

        </div>

      </main>

      ${renderFooter()}
    </div>
  `;
}
