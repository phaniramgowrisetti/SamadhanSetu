import '../css/design-system.css';
import { router, AppState, setRole, setLanguage, setHelpModal, resetReportDraft, startNewReport } from './app.js';
import { renderIntroView } from './views/IntroView.js';
import { renderRoleSelectionView } from './views/RoleSelectionView.js';
import { renderAuthView } from './views/AuthView.js';
import { renderHowItWorksView } from './views/HowItWorksView.js';
import { 
  renderStudentExplorerView, 
  renderPartnerPlaceholderView 
} from './views/Placeholders.js';

// Phase 3, 4 & 5 Citizen Views
import { renderCitizenWelcomeView } from './views/CitizenWelcomeView.js';
import { renderReportMethodView } from './views/ReportMethodView.js';
import { renderVoiceReportView } from './views/VoiceReportView.js';
import { renderTextReportView } from './views/TextReportView.js';
import { renderReportReviewView } from './views/ReportReviewView.js';
import { renderCitizenEvidenceView } from './views/CitizenEvidenceView.js';
import { renderCitizenLocationView } from './views/CitizenLocationView.js';
import { renderCitizenFinalReviewView } from './views/CitizenFinalReviewView.js';
import { renderCitizenSubmittedView } from './views/CitizenSubmittedView.js';
import { renderMyReportsView } from './views/MyReportsView.js';

// Authenticated Citizen Experience Views
import { renderMyProblemsView } from './views/MyProblemsView.js';
import { renderTrackProblemsView } from './views/TrackProblemsView.js';
import { renderCitizenProfileView } from './views/CitizenProfileView.js';

// Phase 5 AI Understanding Views
import { renderCitizenAIUnderstandingView } from './views/CitizenAIUnderstandingView.js';
import { renderCitizenAIConfirmationView } from './views/CitizenAIConfirmationView.js';
import { renderCommunitySignalConfirmedView } from './views/CommunitySignalConfirmedView.js';

// Phase 6 Pattern Detection Views
import { renderCommunityPatternsView } from './views/CommunityPatternsView.js';
import { renderCommunityPatternDetailView } from './views/CommunityPatternDetailView.js';

// Phase 7 Validation & Challenge Formation Views
import { renderMentorDashboardView } from './views/MentorDashboardView.js';
import { renderValidationQueueView } from './views/ValidationQueueView.js';
import { renderPatternValidationView } from './views/PatternValidationView.js';
import { renderChallengeFormationView } from './views/ChallengeFormationView.js';
import { renderChallengePublishedView } from './views/ChallengePublishedView.js';
import { renderPublishedChallengesView } from './views/PublishedChallengesView.js';
import { renderStudentProposalsView } from './views/StudentProposalsView.js';
import { renderProposalDetailView } from './views/ProposalDetailView.js';
import { renderTeamFormationView } from './views/TeamFormationView.js';
import { renderProjectDetailView } from './views/ProjectDetailView.js';
import { renderMilestoneDetailView } from './views/MilestoneDetailView.js';
import { renderCollaborationsView } from './views/CollaborationsView.js';
import { renderUniversityProfileView } from './views/UniversityProfileView.js';
import { renderProjectsView } from './views/ProjectsView.js';
import { renderCompletedSolutionView } from './views/CompletedSolutionView.js';

import { renderCitizenAccessView } from './views/CitizenAccessView.js';
import { renderCitizenSignInView } from './views/CitizenSignInView.js';
import { renderUniversityAccessView } from './views/UniversityAccessView.js';

// Register Public Routes
router.register('intro', renderIntroView);
router.register('landing', renderIntroView);
router.register('role-selection', renderRoleSelectionView);
router.register('/join', renderRoleSelectionView);
router.register('/join/citizen', renderCitizenAccessView);
router.register('citizen-access', renderCitizenAccessView);
router.register('citizen-signin', renderCitizenSignInView);
router.register('/join/citizen/signin', renderCitizenSignInView);
router.register('/join/student', renderStudentExplorerView);
router.register('/join/mentor', renderUniversityAccessView);
router.register('university-access', renderUniversityAccessView);
router.register('/join/partner', renderPartnerPlaceholderView);
router.register('auth', renderAuthView);
router.register('how-it-works', renderHowItWorksView);
router.register('explore-challenges', renderStudentExplorerView);

// Register Authenticated Citizen Routes
router.register('citizen-home', renderReportMethodView);
router.register('citizen-onboarding', renderReportMethodView);
router.register('my-problems', renderMyProblemsView);
router.register('track-problems', renderTrackProblemsView);
router.register('citizen-profile', renderCitizenProfileView);
router.register('notifications', renderCitizenProfileView);

// Citizen Flow Routes (Phases 3, 4 & 5)
router.register('citizen-report-method', renderReportMethodView);
router.register('citizen-report-voice', renderVoiceReportView);
router.register('citizen-report-text', renderTextReportView);
router.register('citizen-report-review', renderReportReviewView);
router.register('citizen-report-evidence', renderCitizenEvidenceView);
router.register('citizen-report-location', renderCitizenLocationView);
router.register('citizen-report-final-review', renderCitizenFinalReviewView);
router.register('citizen-report-submitted', renderCitizenSubmittedView);
router.register('my-reports', renderMyReportsView);

// Phase 5 AI Synthesis Routes
router.register('citizen-ai-understanding', renderCitizenAIUnderstandingView);
router.register('citizen-ai-confirmation', renderCitizenAIConfirmationView);
router.register('community-signal-confirmed', renderCommunitySignalConfirmedView);

// Phase 6 Pattern Detection Routes
router.register('community-patterns', renderCommunityPatternsView);
router.register('community-pattern-detail', renderCommunityPatternDetailView);

// Phase 7 Validation & Challenge Formation Routes (Complete University Portal)
router.register('mentor-dashboard', renderMentorDashboardView);
router.register('university-dashboard', renderMentorDashboardView);
router.register('university-hub', renderMentorDashboardView);
router.register('validation-queue', renderValidationQueueView);
router.register('pattern-validation', renderPatternValidationView);
router.register('challenge-formation', renderChallengeFormationView);
router.register('challenge-published', renderChallengePublishedView);
router.register('published-challenges', renderPublishedChallengesView);
router.register('student-proposals', renderStudentProposalsView);
router.register('proposal-detail', renderProposalDetailView);
router.register('team-formation', renderTeamFormationView);
router.register('project-detail', renderProjectDetailView);
router.register('milestone-detail', renderMilestoneDetailView);
router.register('university-collaborations', renderCollaborationsView);
router.register('university-profile', renderUniversityProfileView);
router.register('university-projects', renderProjectsView);
router.register('completed-solution', renderCompletedSolutionView);

// Role Dashboards
router.register('partner-dashboard', renderPartnerPlaceholderView);

// Bind View-Specific Interactive Listeners
function setupGlobalInteractiveListeners() {
  const currentRoute = AppState.currentRoute;

  // 1. Mobile Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Language Selector
  const langBtn = document.getElementById('lang-selector-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        router.navigate(currentRoute);
      });
    });

    document.addEventListener('click', () => {
      langDropdown.classList.add('hidden');
    }, { once: true });
  }

  // 3. Authenticated Header Dropdowns (Notifications & Profile)
  const navNotificationBtn = document.getElementById('nav-notification-btn');
  const navNotificationDropdown = document.getElementById('nav-notification-dropdown');
  if (navNotificationBtn && navNotificationDropdown) {
    navNotificationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navNotificationDropdown.classList.toggle('hidden');
      if (navProfileDropdown) navProfileDropdown.classList.add('hidden');
    });
  }

  const navProfileBtn = document.getElementById('nav-profile-btn');
  const navProfileDropdown = document.getElementById('nav-profile-dropdown');
  if (navProfileBtn && navProfileDropdown) {
    navProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navProfileDropdown.classList.toggle('hidden');
      if (navNotificationDropdown) navNotificationDropdown.classList.add('hidden');
    });
  }

  document.addEventListener('click', () => {
    if (navNotificationDropdown) navNotificationDropdown.classList.add('hidden');
    if (navProfileDropdown) navProfileDropdown.classList.add('hidden');
  });

  // Sign Out Handlers
  const handleSignOut = (e) => {
    e?.preventDefault();
    AppState.isAuthenticated = false;
    AppState.userRole = null;
    router.navigate('intro');
  };

  const navSignoutBtn = document.getElementById('nav-signout-btn');
  const signoutProfileBtn = document.getElementById('signout-profile-btn');
  const mobileSignoutBtn = document.getElementById('mobile-signout-btn');

  if (navSignoutBtn) navSignoutBtn.addEventListener('click', handleSignOut);
  if (signoutProfileBtn) signoutProfileBtn.addEventListener('click', handleSignOut);
  if (mobileSignoutBtn) mobileSignoutBtn.addEventListener('click', handleSignOut);

  // 4. Help Modal
  const helpBtn = document.getElementById('help-hint-btn');
  const navHelpBtn = document.getElementById('nav-help-btn');
  const welcomeHelpTrigger = document.getElementById('welcome-help-trigger');
  const closeHelpBtn = document.getElementById('close-help-btn');
  const gotItHelpBtn = document.getElementById('got-it-help-btn');
  const helpModal = document.getElementById('help-modal');

  const openHelp = () => {
    setHelpModal(true);
    if (helpModal) helpModal.classList.remove('hidden');
  };

  const closeHelp = () => {
    setHelpModal(false);
    if (helpModal) helpModal.classList.add('hidden');
  };

  if (helpBtn) helpBtn.addEventListener('click', openHelp);
  if (navHelpBtn) navHelpBtn.addEventListener('click', openHelp);
  if (welcomeHelpTrigger) welcomeHelpTrigger.addEventListener('click', openHelp);
  if (closeHelpBtn) closeHelpBtn.addEventListener('click', closeHelp);
  if (gotItHelpBtn) gotItHelpBtn.addEventListener('click', closeHelp);

  // 5. Role Selection
  if (currentRoute === 'role-selection' || currentRoute === '/join') {
    document.querySelectorAll('[data-select-role]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const role = card.getAttribute('data-select-role');
        setRole(role);
        if (role === 'citizen') {
          if (AppState.isAuthenticated) {
            startNewReport();
          } else {
            router.navigate('/join/citizen');
          }
        } else if (role === 'student') {
          router.navigate('/join/student');
        } else if (role === 'mentor') {
          router.navigate('/join/mentor');
        } else if (role === 'partner') {
          router.navigate('/join/partner');
        } else {
          router.navigate('auth');
        }
      });
    });
  }

  // Citizen Gateway Event Listener
  if (currentRoute === '/join/citizen' || currentRoute === 'citizen-access') {
    document.querySelectorAll('[data-citizen-action]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const action = card.getAttribute('data-citizen-action');
        setRole('citizen');
        if (action === 'signin') {
          router.navigate('citizen-signin');
        } else if (action === 'signup') {
          router.navigate('auth');
        }
      });
    });
  }

  // University / Mentor Gateway Event Listener
  if (currentRoute === '/join/mentor' || currentRoute === 'university-access') {
    document.querySelectorAll('[data-university-action]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const action = card.getAttribute('data-university-action');
        setRole('mentor');
        if (action === 'signin' || action === 'register') {
          router.navigate('auth');
        }
      });
    });
  }

  // Citizen Sign-In Authentication Handler (Mobile -> OTP -> Direct Step 1 Workflow)
  if (currentRoute === 'citizen-signin' || currentRoute === '/join/citizen/signin') {
    const mobileForm = document.getElementById('citizen-signin-mobile-form');
    const otpForm = document.getElementById('citizen-signin-otp-form');
    const mobileInput = document.getElementById('citizen-mobile-input');
    const displayMobile = document.getElementById('display-mobile-number');
    const editMobileBtn = document.getElementById('edit-mobile-btn');
    const signinError = document.getElementById('signin-error');
    const signinErrorText = document.getElementById('signin-error-text');

    if (mobileForm) {
      mobileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mobileVal = mobileInput?.value.trim();
        if (!mobileVal || mobileVal.length < 10) {
          if (signinErrorText) signinErrorText.textContent = 'Please enter a valid 10-digit mobile number.';
          if (signinError) signinError.classList.remove('hidden');
          return;
        }
        if (signinError) signinError.classList.add('hidden');
        if (displayMobile) displayMobile.textContent = `+91 ${mobileVal.slice(0, 5)} ${mobileVal.slice(5)}`;
        AppState.userProfile.phone = `+91 ${mobileVal}`;
        mobileForm.classList.add('hidden');
        if (otpForm) otpForm.classList.remove('hidden');
      });
    }

    if (editMobileBtn) {
      editMobileBtn.addEventListener('click', () => {
        if (otpForm) otpForm.classList.add('hidden');
        if (mobileForm) mobileForm.classList.remove('hidden');
      });
    }

    if (otpForm) {
      otpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // SUCCESSFUL AUTHENTICATION:
        AppState.isAuthenticated = true;
        setRole('citizen');
        // Direct entry to Step 1 of the report workflow
        startNewReport();
      });
    }
  }

  // 6. Auth View Form Submission
  if (currentRoute === 'auth') {
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const fieldFullname = document.getElementById('field-fullname');
    const fieldDistrict = document.getElementById('field-district');
    const authHeading = document.getElementById('auth-heading');
    const authSubtext = document.getElementById('auth-subtext');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const authForm = document.getElementById('auth-form');
    const authError = document.getElementById('auth-error');
    const authErrorText = document.getElementById('auth-error-text');

    let mode = 'signin';

    if (tabSignin && tabSignup) {
      tabSignin.addEventListener('click', () => {
        mode = 'signin';
        tabSignin.className = 'auth-tab flex-1 py-2.5 font-label-md text-sm font-bold text-brand-violet border-b-2 border-brand-violet';
        tabSignup.className = 'auth-tab flex-1 py-2.5 font-label-md text-sm font-semibold text-on-surface-variant hover:text-brand-indigo';
        if (fieldFullname) fieldFullname.classList.add('hidden');
        if (fieldDistrict) fieldDistrict.classList.add('hidden');
        if (authHeading) authHeading.textContent = 'Welcome Back';
        if (authSubtext) authSubtext.textContent = `Enter your details to access your workspace.`;
        if (authSubmitBtn) authSubmitBtn.querySelector('span').textContent = 'Sign In to Continue';
        if (authError) authError.classList.add('hidden');
      });

      tabSignup.addEventListener('click', () => {
        mode = 'signup';
        tabSignup.className = 'auth-tab flex-1 py-2.5 font-label-md text-sm font-bold text-brand-violet border-b-2 border-brand-violet';
        tabSignin.className = 'auth-tab flex-1 py-2.5 font-label-md text-sm font-semibold text-on-surface-variant hover:text-brand-indigo';
        if (fieldFullname) fieldFullname.classList.remove('hidden');
        if (fieldDistrict) fieldDistrict.classList.remove('hidden');
        if (authHeading) authHeading.textContent = 'Create your Account';
        if (authSubtext) authSubtext.textContent = `Get started in minutes on SamadhanSetu.`;
        if (authSubmitBtn) authSubmitBtn.querySelector('span').textContent = 'Create Account & Continue';
        if (authError) authError.classList.add('hidden');
      });
    }

    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('input-email')?.value.trim();
        const password = document.getElementById('input-password')?.value.trim();
        const fullname = document.getElementById('input-fullname')?.value.trim();

        if (!email || !password || (mode === 'signup' && !fullname)) {
          if (authErrorText) authErrorText.textContent = 'Please fill out all required fields.';
          if (authError) authError.classList.remove('hidden');
          return;
        }

        if (fullname) AppState.userProfile.name = fullname;

        const role = AppState.userRole || 'citizen';
        if (role === 'citizen') {
          // SUCCESSFUL AUTHENTICATION:
          AppState.isAuthenticated = true;
          setRole('citizen');
          startNewReport();
        } else if (role === 'student') {
          router.navigate('explore-challenges');
        } else if (role === 'mentor') {
          router.navigate('mentor-dashboard');
        } else if (role === 'partner') {
          router.navigate('partner-dashboard');
        }
      });
    }
  }

  // 7. Phase 3 Method Selection
  if (currentRoute === 'citizen-report-method' || currentRoute === 'citizen-home' || currentRoute === 'citizen-onboarding') {
    document.querySelectorAll('[data-select-method]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const method = card.getAttribute('data-select-method');
        AppState.reportDraft.method = method;
        if (method === 'voice') {
          router.navigate('citizen-report-voice');
        } else {
          router.navigate('citizen-report-text');
        }
      });
    });
  }

  // 8. Phase 3 Voice Reporting
  if (currentRoute === 'citizen-report-voice') {
    const micBtn = document.getElementById('mic-trigger-btn');
    const listenAgainBtn = document.getElementById('listen-again-btn');
    const recordAgainBtn = document.getElementById('record-again-btn');
    const voiceContinueBtn = document.getElementById('voice-continue-btn');

    if (micBtn) {
      micBtn.addEventListener('click', () => {
        AppState.reportDraft.voiceRecorded = true;
        AppState.reportDraft.method = 'voice';
        router.navigate('citizen-report-voice');
      });
    }

    if (recordAgainBtn) {
      recordAgainBtn.addEventListener('click', () => {
        AppState.reportDraft.voiceRecorded = false;
        router.navigate('citizen-report-voice');
      });
    }

    if (listenAgainBtn) {
      listenAgainBtn.addEventListener('click', () => {
        listenAgainBtn.innerHTML = `<span class="material-symbols-outlined text-sm animate-spin">volume_up</span> Playing...`;
        setTimeout(() => {
          listenAgainBtn.innerHTML = `<span class="material-symbols-outlined text-sm">play_arrow</span> Listen Again`;
        }, 1500);
      });
    }

    if (voiceContinueBtn) {
      voiceContinueBtn.addEventListener('click', () => {
        router.navigate('citizen-report-evidence');
      });
    }
  }

  // 9. Phase 3 Text Reporting
  if (currentRoute === 'citizen-report-text') {
    const textInput = document.getElementById('text-report-input');
    const textContinueBtn = document.getElementById('text-continue-btn');

    if (textInput) {
      textInput.addEventListener('input', (e) => {
        AppState.reportDraft.description = e.target.value;
      });
    }

    if (textContinueBtn) {
      textContinueBtn.addEventListener('click', () => {
        const val = textInput?.value.trim();
        if (val) AppState.reportDraft.description = val;
        AppState.reportDraft.method = 'text';
        router.navigate('citizen-report-evidence');
      });
    }
  }

  // 10. Phase 3 Review View
  if (currentRoute === 'citizen-report-review') {
    const reviewContinueBtn = document.getElementById('review-continue-btn');
    if (reviewContinueBtn) {
      reviewContinueBtn.addEventListener('click', () => {
        router.navigate('citizen-report-evidence');
      });
    }
  }

  // 11. Phase 4 Evidence Upload View
  if (currentRoute === 'citizen-report-evidence') {
    const fileInput = document.getElementById('evidence-file-input');
    const uploadPhotoBtn = document.getElementById('upload-photo-btn');
    const uploadVideoBtn = document.getElementById('upload-video-btn');
    const uploadFileBtn = document.getElementById('upload-file-btn');

    const triggerUpload = () => {
      if (fileInput) fileInput.click();
    };

    if (uploadPhotoBtn) uploadPhotoBtn.addEventListener('click', triggerUpload);
    if (uploadVideoBtn) uploadVideoBtn.addEventListener('click', triggerUpload);
    if (uploadFileBtn) uploadFileBtn.addEventListener('click', triggerUpload);

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files || []);
        files.forEach(file => {
          const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
          AppState.reportDraft.evidence.push({
            id: 'ev_' + Date.now() + Math.random(),
            name: file.name,
            type: file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'file',
            previewUrl: previewUrl,
            caption: ''
          });
        });
        router.navigate('citizen-report-evidence');
      });
    }

    document.querySelectorAll('[data-remove-evidence]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-remove-evidence'), 10);
        AppState.reportDraft.evidence.splice(idx, 1);
        router.navigate('citizen-report-evidence');
      });
    });

    document.querySelectorAll('[data-evidence-caption-idx]').forEach(input => {
      input.addEventListener('change', (e) => {
        const idx = parseInt(input.getAttribute('data-evidence-caption-idx'), 10);
        if (AppState.reportDraft.evidence[idx]) {
          AppState.reportDraft.evidence[idx].caption = e.target.value;
        }
      });
    });
  }

  // 12. Phase 4 Location View
  if (currentRoute === 'citizen-report-location') {
    const gpsBtn = document.getElementById('gps-location-btn');
    const toggleManualBtn = document.getElementById('toggle-manual-loc-btn');
    const manualContainer = document.getElementById('manual-location-container');
    const manualInput = document.getElementById('manual-location-input');
    const searchInput = document.getElementById('location-search-input');
    const confirmedLabel = document.getElementById('confirmed-location-label');
    const locationContinueBtn = document.getElementById('location-continue-btn');

    if (toggleManualBtn && manualContainer) {
      toggleManualBtn.addEventListener('click', () => {
        manualContainer.classList.toggle('hidden');
        if (!manualContainer.classList.contains('hidden') && manualInput) {
          manualInput.focus();
        }
      });
    }

    if (gpsBtn) {
      gpsBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              AppState.reportDraft.location = {
                method: 'gps',
                label: 'Gumla District (Device GPS Verified), Jharkhand',
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
              };
              router.navigate('citizen-report-location');
            },
            () => {
              AppState.reportDraft.location = {
                method: 'gps',
                label: 'Gumla District, Jharkhand',
                latitude: 23.0423,
                longitude: 84.5412
              };
              router.navigate('citizen-report-location');
            }
          );
        } else {
          AppState.reportDraft.location.label = 'Gumla District, Jharkhand';
          router.navigate('citizen-report-location');
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (val) {
          AppState.reportDraft.location.label = val;
          AppState.reportDraft.location.method = 'search';
          if (confirmedLabel) confirmedLabel.textContent = `📍 ${val}`;
        }
      });
    }

    document.querySelectorAll('.quick-loc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const loc = btn.getAttribute('data-quick-loc');
        AppState.reportDraft.location = {
          method: 'search',
          label: loc,
          latitude: null,
          longitude: null
        };
        router.navigate('citizen-report-location');
      });
    });

    if (manualInput) {
      manualInput.addEventListener('input', (e) => {
        AppState.reportDraft.location.label = e.target.value || 'Gumla District, Jharkhand';
        AppState.reportDraft.location.method = 'manual';
        if (confirmedLabel) confirmedLabel.textContent = `📍 ${AppState.reportDraft.location.label}`;
      });
    }

    if (locationContinueBtn) {
      locationContinueBtn.addEventListener('click', () => {
        router.navigate('citizen-report-final-review');
      });
    }
  }

  // 13. Phase 4 Final Review & Submission View
  if (currentRoute === 'citizen-report-final-review') {
    const consentCheckbox = document.getElementById('consent-checkbox');
    const finalSubmitBtn = document.getElementById('final-submit-btn');

    if (consentCheckbox) {
      consentCheckbox.addEventListener('change', (e) => {
        AppState.reportDraft.consentGiven = e.target.checked;
        if (finalSubmitBtn) finalSubmitBtn.disabled = !e.target.checked;
      });
    }

    if (finalSubmitBtn) {
      finalSubmitBtn.addEventListener('click', () => {
        if (consentCheckbox && !consentCheckbox.checked) {
          alert('Please acknowledge the consent box before sharing your report.');
          return;
        }

        const reportId = 'SS-2026-00' + Math.floor(100 + Math.random() * 900);
        const draft = AppState.reportDraft;

        const newSignal = {
          id: reportId,
          title: draft.description ? draft.description.substring(0, 50) + '...' : 'Community Voice Signal',
          description: draft.description || 'Voice Note Recorded (' + (draft.voiceDuration || '00:18') + ')',
          method: draft.method || 'voice',
          voiceDuration: draft.voiceDuration,
          location: draft.location?.label || 'Gumla District, Jharkhand',
          date: new Date().toISOString().split('T')[0],
          status: 'Under Review',
          evidenceCount: draft.evidence.length,
          evidence: [...draft.evidence]
        };

        AppState.communitySignals.unshift(newSignal);
        AppState.reportDraft.submitted = true;
        AppState.reportDraft.reportId = reportId;

        router.navigate('citizen-report-submitted');
      });
    }
  }

  // 14. Phase 4 Submitted View
  if (currentRoute === 'citizen-report-submitted') {
    const shareAnotherBtn = document.getElementById('share-another-btn');
    if (shareAnotherBtn) {
      shareAnotherBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startNewReport();
      });
    }
  }

  // 14b. Track Problems View
  if (currentRoute === 'track-problems') {
    const trackNewReportBtn = document.getElementById('track-start-new-report-btn');
    if (trackNewReportBtn) {
      trackNewReportBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startNewReport();
      });
    }
  }

  // 14c. My Problems View & Home View New Report Actions
  if (currentRoute === 'my-problems' || currentRoute === 'citizen-home' || currentRoute === 'citizen-onboarding') {
    document.querySelectorAll('[data-route="citizen-report-method"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        startNewReport();
      });
    });
  }

  // 15. Phase 5 AI Confirmation View Handlers
  if (currentRoute === 'citizen-ai-confirmation') {
    const confirmBtn = document.getElementById('confirm-understanding-btn');
    const domainInput = document.getElementById('edit-domain-input');
    const groupsInput = document.getElementById('edit-groups-input');
    const locationInput = document.getElementById('edit-location-input');
    const impactInput = document.getElementById('edit-impact-input');

    document.querySelectorAll('.toggle-edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parent = e.target.closest('div');
        const input = parent?.querySelector('input');
        if (input) {
          input.focus();
          input.select();
        }
      });
    });

    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        if (AppState.activeAIUnderstanding) {
          if (domainInput) AppState.activeAIUnderstanding.primaryDomain = domainInput.value.trim();
          if (groupsInput) AppState.activeAIUnderstanding.affectedGroups = [groupsInput.value.trim()];
          if (locationInput) AppState.activeAIUnderstanding.extractedLocation = locationInput.value.trim();
          if (impactInput) AppState.activeAIUnderstanding.possibleImpacts = [impactInput.value.trim()];
          AppState.activeAIUnderstanding.confirmedByCitizen = true;
        }

        if (AppState.communitySignals[0]) {
          AppState.communitySignals[0].status = 'Confirmed community signal';
          AppState.communitySignals[0].understanding = AppState.activeAIUnderstanding;
        }

        router.navigate('community-signal-confirmed');
      });
    }
  }

  // 16. Phase 5 Confirmed View Handlers
  if (currentRoute === 'community-signal-confirmed') {
    const shareAnotherBtn = document.getElementById('confirmed-share-another-btn');
    if (shareAnotherBtn) {
      shareAnotherBtn.addEventListener('click', () => {
        resetReportDraft();
        router.navigate('citizen-home');
      });
    }
  }

  // 17. Phase 6 Pattern Selection Handlers
  if (currentRoute === 'community-patterns') {
    document.querySelectorAll('[data-inspect-pattern]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const patternId = btn.getAttribute('data-inspect-pattern');
        const targetPattern = AppState.communityPatterns.find(p => p.id === patternId);
        if (targetPattern) {
          AppState.activePatternDetail = targetPattern;
          router.navigate('community-pattern-detail');
        }
      });
    });
  }

  // 18. Phase 7 Validation Queue Handlers
  if (currentRoute === 'validation-queue') {
    document.querySelectorAll('[data-validate-pattern]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const patternId = btn.getAttribute('data-validate-pattern');
        AppState.openPatternForValidation(patternId);
        router.navigate('pattern-validation');
      });
    });
  }

  // 19. Phase 7 Pattern Validation Handlers
  if (currentRoute === 'pattern-validation') {
    const startFormationBtn = document.getElementById('start-challenge-formation-btn');
    const notesInput = document.getElementById('validator-notes-input');

    document.querySelectorAll('.val-q1-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.val-q1-btn').forEach(b => {
          b.className = 'val-q1-btn px-4 py-2 rounded-full border border-outline-variant bg-white text-on-surface-variant text-xs font-semibold hover:border-brand-indigo';
        });
        btn.className = 'val-q1-btn px-4 py-2 rounded-full border border-brand-indigo bg-brand-indigo text-white text-xs font-bold';
      });
    });

    if (startFormationBtn) {
      startFormationBtn.addEventListener('click', () => {
        const pattern = AppState.activeValidationPattern;
        const draft = AppState.createChallengeDraft(pattern);
        if (notesInput && notesInput.value.trim()) {
          draft.validatorNotes = notesInput.value.trim();
        }
        router.navigate('challenge-formation');
      });
    }
  }

  // 20. Phase 7 Challenge Formation Handlers
  if (currentRoute === 'challenge-formation') {
    const publishBtn = document.getElementById('publish-challenge-btn');
    const addFocusBtn = document.getElementById('add-focus-btn');
    const newFocusInput = document.getElementById('new-focus-input');

    if (addFocusBtn && newFocusInput) {
      addFocusBtn.addEventListener('click', () => {
        const val = newFocusInput.value.trim();
        if (val && AppState.activeChallengeDraft) {
          AppState.activeChallengeDraft.focusAreas.push(val);
          newFocusInput.value = '';
          router.navigate('challenge-formation');
        }
      });
    }

    document.querySelectorAll('[data-remove-focus-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-remove-focus-idx'), 10);
        if (AppState.activeChallengeDraft) {
          AppState.activeChallengeDraft.focusAreas.splice(idx, 1);
          router.navigate('challenge-formation');
        }
      });
    });

    if (publishBtn) {
      publishBtn.addEventListener('click', () => {
        const titleInput = document.getElementById('draft-title-input');
        const problemInput = document.getElementById('draft-problem-input');
        const affectedInput = document.getElementById('draft-affected-input');
        const whyInput = document.getElementById('draft-why-input');

        const draft = AppState.activeChallengeDraft;
        if (draft) {
          if (titleInput) draft.title = titleInput.value.trim();
          if (problemInput) draft.problemStatement = problemInput.value.trim();
          if (affectedInput) draft.whoIsAffected = affectedInput.value.trim();
          if (whyInput) draft.whyItMatters = whyInput.value.trim();

          AppState.publishChallenge(draft);
          router.navigate('challenge-published');
        }
      });
    }
  }
}

// IntersectionObserver Helper for Scroll Reveal Animations
function initScrollObserver() {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window && window.IntersectionObserver) {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
  }
}

// Mouse Movement Parallax for Hero Civic Signal Network
function initHeroInteractions() {
  const heroSection = document.getElementById('hero-section');
  const heroNetwork = document.getElementById('hero-signal-network');
  if (heroSection && heroNetwork) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroNetwork.style.transform = `translate3d(${x * 16}px, ${y * 16}px, 0) rotate(${x * 2}deg)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      heroNetwork.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
    });
  }
}

// Intercept Navigation Hook to Bind Listeners After Route Render
const originalNavigate = router.navigate.bind(router);
router.navigate = function(route, params) {
  originalNavigate(route, params);
  setupGlobalInteractiveListeners();
  initScrollObserver();
  initHeroInteractions();
};

// Initialize Application
function initApp() {
  router.navigate('intro');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
