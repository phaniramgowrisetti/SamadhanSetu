/**
 * Footer Component - Public Footer
 * Updated with official SamadhanSetu logo asset (135px/110px width, object-contain, transparent container).
 */
export function renderFooter() {
  return `
    <footer class="bg-surface-container-low border-t border-outline-variant/60 py-10 px-6 md:px-margin-desktop mt-auto reveal-on-scroll">
      <div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div class="space-y-2 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2 bg-transparent p-0 border-none shadow-none">
            <img 
              src="/assests/logo.png" 
              alt="SamadhanSetu" 
              class="w-[110px] md:w-[135px] h-auto max-w-full object-contain block bg-transparent transition-transform duration-300 hover:scale-[1.02]" 
              onerror="this.onerror=null; this.src='/logo.png';"
            />
          </div>
          <p class="text-xs text-on-surface-variant max-w-md leading-relaxed">
            © 2026 SamadhanSetu. Building resilient societal infrastructure through community innovation and empathy.
          </p>
        </div>

        <nav class="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-on-surface-variant">
          <a data-route="intro" class="hover:text-brand-violet hover:underline transition-colors duration-200 cursor-pointer">About Us</a>
          <a data-route="how-it-works" class="hover:text-brand-violet hover:underline transition-colors duration-200 cursor-pointer">How it works</a>
          <a data-route="explore-challenges" class="hover:text-brand-violet hover:underline transition-colors duration-200 cursor-pointer">Explore Challenges</a>
          <a class="hover:text-brand-violet hover:underline transition-colors duration-200 cursor-pointer" href="#">Privacy Policy</a>
          <a class="hover:text-brand-violet hover:underline transition-colors duration-200 cursor-pointer" href="#">Terms of Service</a>
        </nav>

      </div>
    </footer>
  `;
}
