import { AppState } from '../app.js';

/**
 * Header Component - Dynamic Public & Authenticated Citizen Navigation
 * Automatically toggles between Guest Navbar and Authenticated Citizen Navbar.
 */
export function renderHeader(activeRoute = 'intro') {
  const isAuthenticated = AppState.isAuthenticated || (AppState.userRole === 'citizen' && activeRoute !== 'intro' && activeRoute !== 'landing');
  const user = AppState.userProfile || { name: 'Citizen User' };
  const unreadCount = AppState.notifications ? AppState.notifications.filter(n => n.unread).length : 2;

  return `
    <header class="bg-white/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/60 shadow-2xs">
      <div class="flex justify-between items-center h-20 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        
        <!-- Left: Official SamadhanSetu Logo Asset -->
        <a class="flex items-center gap-3 cursor-pointer group py-1 bg-transparent p-0 border-none shadow-none" data-route="${isAuthenticated ? 'citizen-home' : 'intro'}">
          <img 
            src="/assests/logo.png" 
            alt="SamadhanSetu — Civic Innovation Platform" 
            class="w-[130px] sm:w-[145px] md:w-[160px] h-auto max-w-full object-contain block bg-transparent transition-transform duration-300 ease-out group-hover:scale-[1.03]" 
            onerror="this.onerror=null; this.src='/logo.png';"
          />
        </a>

        ${isAuthenticated ? `
          <!-- Center Navigation (AUTHENTICATED CITIZEN) -->
          <nav class="hidden md:flex items-center gap-8">
            <a data-route="citizen-home" class="nav-link-indicator cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 ${activeRoute === 'citizen-home' || activeRoute === 'citizen-onboarding' ? 'active text-brand-violet font-bold border-b-2 border-brand-violet pb-0.5' : 'text-on-surface-variant hover:text-brand-indigo'}">
              Home
            </a>
            <a data-route="my-problems" class="nav-link-indicator cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 ${activeRoute === 'my-problems' || activeRoute === 'my-reports' ? 'active text-brand-violet font-bold border-b-2 border-brand-violet pb-0.5' : 'text-on-surface-variant hover:text-brand-indigo'}">
              My Problems
            </a>
            <a data-route="track-problems" class="nav-link-indicator cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 ${activeRoute === 'track-problems' ? 'active text-brand-violet font-bold border-b-2 border-brand-violet pb-0.5' : 'text-on-surface-variant hover:text-brand-indigo'}">
              Track
            </a>
          </nav>

          <!-- Right Action Controls (AUTHENTICATED CITIZEN) -->
          <div class="hidden md:flex items-center gap-4 relative">
            
            <!-- Notification Bell Icon with Unread Badge -->
            <div class="relative">
              <button id="nav-notification-btn" class="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container text-brand-indigo flex items-center justify-center transition-colors relative cursor-pointer" title="Notifications">
                <span class="material-symbols-outlined text-xl">notifications</span>
                ${unreadCount > 0 ? `
                  <span class="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-brand-violet animate-ping"></span>
                  <span class="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-brand-violet text-[9px] font-bold text-white flex items-center justify-center">${unreadCount}</span>
                ` : ''}
              </button>

              <!-- Notifications Dropdown Panel -->
              <div id="nav-notification-dropdown" class="hidden absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl border border-outline-variant/70 shadow-xl p-4 z-50 space-y-3">
                <div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
                  <span class="font-bold text-brand-indigo text-xs uppercase tracking-wider">Notifications</span>
                  <button data-route="track-problems" class="text-xs font-bold text-brand-violet hover:underline">View All</button>
                </div>
                <div class="space-y-2 max-h-64 overflow-y-auto">
                  ${(AppState.notifications || []).map(n => `
                    <div data-route="${n.route}" class="p-2.5 rounded-xl ${n.unread ? 'bg-brand-violet/5 border border-brand-violet/20' : 'bg-surface-container-low'} cursor-pointer hover:bg-white transition-all space-y-0.5">
                      <div class="flex items-center justify-between text-xs font-bold text-brand-indigo">
                        <span>${n.title}</span>
                        <span class="text-[10px] text-on-surface-variant font-normal">${n.time}</span>
                      </div>
                      <p class="text-[11px] text-on-surface-variant leading-snug">${n.message}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- User Profile Avatar & Dropdown Trigger -->
            <div class="relative">
              <button id="nav-profile-btn" class="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 transition-all cursor-pointer">
                <div class="w-8 h-8 rounded-full bg-brand-indigo text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                  ${user.name.charAt(0)}
                </div>
                <span class="font-semibold text-xs text-brand-indigo max-w-[120px] truncate">${user.name}</span>
                <span class="material-symbols-outlined text-base text-on-surface-variant">expand_more</span>
              </button>

              <!-- Profile Dropdown Menu -->
              <div id="nav-profile-dropdown" class="hidden absolute right-0 mt-3 w-56 bg-white rounded-2xl border border-outline-variant/70 shadow-xl p-2 z-50 space-y-1">
                <div class="p-3 border-b border-outline-variant/40">
                  <div class="font-bold text-brand-indigo text-sm">${user.name}</div>
                  <div class="text-[11px] text-on-surface-variant">${user.phone || 'Verified Citizen'}</div>
                </div>

                <a data-route="citizen-profile" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-on-surface-variant hover:text-brand-violet hover:bg-surface-container-low rounded-xl cursor-pointer">
                  <span class="material-symbols-outlined text-base">person</span> My Profile
                </a>

                <a data-route="citizen-profile" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-on-surface-variant hover:text-brand-violet hover:bg-surface-container-low rounded-xl cursor-pointer">
                  <span class="material-symbols-outlined text-base">settings</span> Account Settings
                </a>

                <a id="nav-help-btn" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-on-surface-variant hover:text-brand-violet hover:bg-surface-container-low rounded-xl cursor-pointer">
                  <span class="material-symbols-outlined text-base">help</span> Help & Support
                </a>

                <div class="border-t border-outline-variant/40 pt-1">
                  <button id="nav-signout-btn" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-error hover:bg-error/10 rounded-xl cursor-pointer">
                    <span class="material-symbols-outlined text-base">logout</span> Sign Out
                  </button>
                </div>
              </div>
            </div>

          </div>
        ` : `
          <!-- Center Navigation (PUBLIC GUEST) -->
          <nav class="hidden md:flex items-center gap-8">
            <a data-route="intro" class="nav-link-indicator cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 ${activeRoute === 'intro' ? 'active text-brand-violet font-bold' : 'text-on-surface-variant hover:text-brand-indigo'}">
              Home
            </a>
            <a data-route="how-it-works" class="nav-link-indicator cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 ${activeRoute === 'how-it-works' ? 'active text-brand-violet font-bold' : 'text-on-surface-variant hover:text-brand-indigo'}">
              How it works
            </a>
            <a data-route="explore-challenges" class="nav-link-indicator cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 ${activeRoute === 'explore-challenges' ? 'active text-brand-violet font-bold' : 'text-on-surface-variant hover:text-brand-indigo'}">
              Explore Challenges
            </a>
          </nav>

          <!-- Right Action Buttons (PUBLIC GUEST) -->
          <div class="hidden md:flex items-center gap-4">
            <a data-route="role-selection" class="bg-brand-indigo text-white px-6 py-2.5 rounded-full font-label-md text-sm font-semibold hover:bg-brand-violet transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 flex items-center gap-1.5 group/btn">
              <span>Get Started</span>
              <span class="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform duration-200">arrow_forward</span>
            </a>
            <a data-route="auth" class="border border-outline-variant text-brand-indigo px-5 py-2.5 rounded-full font-label-md text-sm font-semibold hover:border-brand-violet hover:text-brand-violet hover:bg-brand-indigo/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 bg-white">
              Sign In
            </a>
          </div>
        `}

        <!-- Mobile Menu Trigger -->
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-toggle" class="text-brand-indigo p-2 rounded-lg hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-outline-variant px-6 py-4 space-y-3">
        ${isAuthenticated ? `
          <a data-route="citizen-home" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">Home</a>
          <a data-route="my-problems" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">My Problems</a>
          <a data-route="track-problems" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">Track</a>
          <a data-route="citizen-profile" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">My Profile</a>
          <button id="mobile-signout-btn" class="w-full text-left text-error font-bold py-2">Sign Out</button>
        ` : `
          <a data-route="intro" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">Home</a>
          <a data-route="how-it-works" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">How it works</a>
          <a data-route="explore-challenges" class="block text-on-surface-variant hover:text-brand-violet font-semibold py-2">Explore Challenges</a>
          <a data-route="role-selection" class="block bg-brand-indigo text-white text-center py-2.5 rounded-full font-semibold">Get Started</a>
          <a data-route="auth" class="block text-center border border-outline-variant text-brand-indigo py-2 rounded-full font-semibold">Sign In</a>
        `}
      </div>
    </header>
  `;
}
