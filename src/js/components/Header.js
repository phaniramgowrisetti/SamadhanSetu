import { AppState } from '../app.js';

/**
 * Header Component - Dynamic Public & Authenticated Citizen Navigation
 * Automatically toggles between Guest Navbar and Authenticated Citizen Navbar.
 */
export function renderHeader(activeRoute = 'intro') {
  const isMentor = AppState.userRole === 'mentor' || activeRoute === 'mentor-dashboard' || activeRoute === 'university-dashboard' || activeRoute === 'university-hub' || activeRoute === 'validation-queue' || activeRoute === 'pattern-validation' || activeRoute === 'challenge-formation' || activeRoute === 'challenge-published';
  const isAuthenticated = AppState.isAuthenticated || (AppState.userRole === 'citizen' && activeRoute !== 'intro' && activeRoute !== 'landing') || isMentor;
  const user = AppState.userProfile || { name: 'Citizen User' };
  const unreadCount = AppState.notifications ? AppState.notifications.filter(n => n.unread).length : 2;

  return `
    <header class="bg-[#FAFAF8] sticky top-0 w-full z-50 border-b border-outline-variant/50">
      <div class="flex justify-between items-center h-16 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        
        <!-- Left: Official SamadhanSetu Logo & Subtle Divider -->
        <div class="flex items-center gap-4">
          <a class="flex items-center cursor-pointer group py-1 bg-transparent p-0 border-none shadow-none" data-route="${isMentor ? 'mentor-dashboard' : isAuthenticated ? 'citizen-home' : 'intro'}">
            <img 
              src="/assests/logo.png" 
              alt="SamadhanSetu — Civic Innovation Platform" 
              class="w-[125px] sm:w-[140px] h-auto max-w-full object-contain block bg-transparent" 
              onerror="this.onerror=null; this.src='/logo.png';"
            />
          </a>
          ${isMentor ? `
            <div class="h-4 w-px bg-outline-variant/50 hidden sm:block"></div>
          ` : ''}
        </div>

        ${isMentor ? `
          <!-- Center Navigation (Clean Editorial Typography & Refined Underline) -->
          <nav class="hidden md:flex items-center gap-8">
            <a data-route="mentor-dashboard" class="cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 py-1 relative ${activeRoute === 'mentor-dashboard' || activeRoute === 'university-dashboard' || activeRoute === 'university-hub' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}">
              Dashboard
            </a>
            <a data-route="validation-queue" class="cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 py-1 relative ${activeRoute === 'validation-queue' || activeRoute === 'pattern-validation' || activeRoute === 'published-challenges' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}">
              Opportunities
            </a>
            <a data-route="university-profile" class="cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 py-1 relative ${activeRoute === 'university-profile' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}">
              My University
            </a>
            <a data-route="university-projects" class="cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 py-1 relative ${activeRoute === 'university-projects' || activeRoute === 'project-detail' || activeRoute === 'completed-solution' || activeRoute === 'team-formation' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}">
              Projects
            </a>
            <a data-route="university-collaborations" class="cursor-pointer font-label-md text-sm font-semibold transition-colors duration-200 py-1 relative ${activeRoute === 'university-collaborations' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}">
              Collaborations
            </a>
          </nav>

          <!-- Right Action Controls (Refined & Lightweight) -->
          <div class="hidden md:flex items-center gap-4 relative">
            <!-- Notification Bell Icon (Subtle soft lavender background square) -->
            <div class="relative">
              <button id="nav-notification-btn" class="w-9 h-9 rounded-lg bg-[#F1F0FA] hover:bg-[#E5E3F5] border border-outline-variant/40 text-[#24285B] flex items-center justify-center transition-colors relative cursor-pointer" title="Notifications">
                <span class="material-symbols-outlined text-lg">notifications</span>
                <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#3F3A8A]"></span>
              </button>

              <!-- Notifications Dropdown Panel -->
              <div id="nav-notification-dropdown" class="hidden absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl border border-outline-variant/70 shadow-xl p-4 z-50 space-y-3">
                <div class="flex items-center justify-between border-b border-outline-variant/40 pb-2">
                  <span class="font-bold text-[#24285B] text-xs uppercase tracking-wider">Notifications</span>
                  <button data-route="validation-queue" class="text-xs font-bold text-[#3F3A8A] hover:underline">View All</button>
                </div>
                <div class="space-y-2 max-h-64 overflow-y-auto">
                  <div data-route="validation-queue" class="p-2.5 rounded-xl bg-[#F1F0FA] border border-[#3F3A8A]/20 cursor-pointer hover:bg-white transition-all space-y-0.5">
                    <div class="flex items-center justify-between text-xs font-bold text-[#24285B]">
                      <span>New Matched Problem Request</span>
                      <span class="text-[10px] text-on-surface-variant font-normal">10m ago</span>
                    </div>
                    <p class="text-[11px] text-on-surface-variant leading-snug">Water Hand Pump Discoloration in Gumla has been matched to your research department.</p>
                  </div>
                  <div data-route="explore-challenges" class="p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-white transition-all space-y-0.5">
                    <div class="flex items-center justify-between text-xs font-bold text-[#24285B]">
                      <span>Student Proposal Submitted</span>
                      <span class="text-[10px] text-on-surface-variant font-normal">2h ago</span>
                    </div>
                    <p class="text-[11px] text-on-surface-variant leading-snug">Team AquaInnovate submitted a proposal for Canal Siltation Challenge.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- University Profile Avatar & Dropdown Trigger -->
            <div class="relative">
              <button id="nav-profile-btn" class="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl bg-[#F1F0FA] hover:bg-[#E5E3F5] border border-outline-variant/40 transition-all cursor-pointer">
                <div class="w-7 h-7 rounded-lg bg-[#24285B] text-white flex items-center justify-center font-bold text-xs">
                  U
                </div>
                <span class="font-semibold text-xs text-[#24285B] max-w-[130px] truncate">Ranchi University</span>
                <span class="material-symbols-outlined text-base text-on-surface-variant">expand_more</span>
              </button>

              <!-- Profile Dropdown Menu -->
              <div id="nav-profile-dropdown" class="hidden absolute right-0 mt-3 w-56 bg-white rounded-2xl border border-outline-variant/70 shadow-xl p-2 z-50 space-y-1">
                <div class="p-3 border-b border-outline-variant/40">
                  <div class="font-bold text-brand-indigo text-sm">Ranchi University</div>
                  <div class="text-[11px] text-on-surface-variant">University Partner Portal</div>
                </div>

                <a data-route="university-profile" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-on-surface-variant hover:text-brand-violet hover:bg-surface-container-low rounded-xl cursor-pointer">
                  <span class="material-symbols-outlined text-base">school</span> University Profile
                </a>

                <a data-route="university-profile" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-on-surface-variant hover:text-brand-violet hover:bg-surface-container-low rounded-xl cursor-pointer">
                  <span class="material-symbols-outlined text-base">settings</span> Institution Settings
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
        ` : isAuthenticated ? `
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
