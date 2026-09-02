/**
 * SamadhanSetu - Core Application Engine & State Store
 */
import { demoCommunitySignals } from './data/demoCommunitySignals.js';
import { demoChallenges } from './data/demoChallenges.js';
import { PatternDetectionService } from './services/PatternDetectionService.js';

export const AppState = {
  currentRoute: 'landing',
  isAuthenticated: false,
  userRole: null, // 'citizen' | 'student' | 'mentor' | 'partner'
  selectedLanguage: 'en', // 'en' | 'hi' | 'te'
  helpModalOpen: false,
  activeAIUnderstanding: null,
  activePatternDetail: null,
  activeTrackedProblemId: 'SS-2026-00401',

  // Phase 7 Validation State
  activeValidationPattern: null,
  activeChallengeDraft: null,
  publishedChallengeSuccess: null,

  userProfile: {
    name: 'Ramesh Sharma',
    location: 'Gumla District, Jharkhand',
    department: 'Community Member',
    roleTitle: 'Verified Citizen',
    phone: '+91 94311 88221',
    reportedCount: 3,
    resolvedCount: 1
  },

  notifications: [
    {
      id: 'notif_1',
      title: 'Report Under Review',
      message: 'Your report (SS-2026-00401) on Water Hand Pump Discoloration is being analyzed.',
      time: '10 mins ago',
      unread: true,
      route: 'track-problems'
    },
    {
      id: 'notif_2',
      title: 'Community Pattern Clustered',
      message: '3 similar observations were clustered across Gumla and Latehar.',
      time: '2 hours ago',
      unread: true,
      route: 'community-patterns'
    },
    {
      id: 'notif_3',
      title: 'Challenge Created',
      message: 'An innovation challenge was formed for rural drinking water quality.',
      time: '1 day ago',
      unread: false,
      route: 'explore-challenges'
    }
  ],
  
  // Active report draft for Citizen flow (Phases 3 - 6)
  reportDraft: {
    method: null,
    description: '',
    voiceRecorded: false,
    voiceDuration: '00:18',
    evidence: [],
    location: {
      method: 'manual',
      label: 'Gumla District, Jharkhand',
      latitude: 23.0423,
      longitude: 84.5412
    },
    consentGiven: false,
    submitted: false,
    reportId: null
  },

  // Database of Submitted Community Signals
  communitySignals: [
    {
      id: 'SS-2026-00401',
      title: 'Water Hand Pump Discoloration & Chemical Odor',
      description: 'The groundwater from our village hand pump has turned rusty brown after monsoon rains.',
      method: 'voice',
      voiceDuration: '00:24',
      primaryDomain: 'Water Quality & Sanitation',
      relatedDomains: ['Community Health'],
      location: 'Gumla Sector 4, Jharkhand',
      date: '2026-08-28',
      status: 'Confirmed community signal',
      evidenceCount: 2,
      evidence: [
        { name: 'pump_water.jpg', type: 'image', caption: 'Brown discolored water sample' }
      ],
      understanding: {
        primaryDomain: 'Water Quality & Sanitation',
        relatedDomains: ['Community Health'],
        issueSummary: 'Groundwater discoloration and potential public health risk.',
        affectedGroups: ['Children', 'Families'],
        possibleImpacts: ['Drinking water contamination', 'Waterborne illness risk'],
        extractedLocation: 'Gumla Sector 4, Jharkhand',
        confirmedByCitizen: true
      }
    }
  ],

  // Pattern detection results (Phase 6)
  communityPatterns: [],

  // Published Challenges Array (Phase 7 & 9)
  challenges: [...demoChallenges],

  // Run Pattern Detection Engine across User Signals + Demo Signals
  runPatternDetection() {
    const combinedSignals = [...this.communitySignals, ...demoCommunitySignals];
    this.communityPatterns = PatternDetectionService.detectPatterns(combinedSignals);
    return this.communityPatterns;
  },

  // Helper: Open Pattern for Validation
  openPatternForValidation(patternId) {
    if (!this.communityPatterns.length) this.runPatternDetection();
    this.activeValidationPattern = this.communityPatterns.find(p => p.id === patternId) || this.communityPatterns[0];
    return this.activeValidationPattern;
  },

  // Helper: Create Challenge Draft pre-filled from Pattern
  createChallengeDraft(pattern) {
    const pat = pattern || this.activeValidationPattern || this.communityPatterns[0];
    this.activeChallengeDraft = {
      id: 'CH-2026-00' + (this.challenges.length + 1),
      title: pat.title || 'Rural Water Quality & Public Health Risk',
      problemStatement: `Communities across ${pat.locations?.join(', ') || 'multiple districts'} are reporting recurring concerns about ${pat.primaryDomain?.toLowerCase() || 'drinking water conditions'} and potential health impacts.`,
      whoIsAffected: `${pat.affectedGroups?.join(' and ') || 'Families and children'} in affected rural hamlets.`,
      whyItMatters: `Multiple independent observations (${pat.signalCount || 4} signals across ${pat.locations?.length || 3} districts) suggest this represents a broader community challenge rather than an isolated incident.`,
      primaryDomain: pat.primaryDomain || 'Water Quality & Sanitation',
      relatedDomains: pat.relatedDomains || ['Healthcare & Public Health'],
      affectedGroups: pat.affectedGroups || ['Families', 'Children'],
      locations: pat.locations || ['Gumla', 'Latehar', 'Simdega'],
      signalCount: pat.signalCount || 4,
      sourcePatternId: pat.id || 'PATTERN-001',
      focusAreas: ['Water quality monitoring', 'Early detection systems', 'Community alert tools', 'Safe water access'],
      validatorNotes: '',
      status: 'Draft',
      createdAt: new Date().toISOString()
    };
    return this.activeChallengeDraft;
  },

  // Helper: Publish Challenge
  publishChallenge(draft) {
    const challengeObj = {
      ...draft,
      status: 'Open',
      publishedAt: new Date().toISOString()
    };

    // Unshift to challenges database
    this.challenges.unshift(challengeObj);

    // Update source pattern status to 'Validated' / 'Challenge created'
    if (this.activeValidationPattern) {
      this.activeValidationPattern.status = 'Validated';
      this.activeValidationPattern.createdChallengeId = challengeObj.id;
    }

    this.publishedChallengeSuccess = challengeObj;
    return challengeObj;
  }
};

// Event Bus for Navigation & State Updates
class Router {
  constructor() {
    this.routes = {};
    this.historyStack = [];

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', (e) => {
        if (e.state && e.state.route) {
          this.navigate(e.state.route, {}, true);
        } else if (window.location.hash) {
          const hashRoute = window.location.hash.replace('#', '');
          if (hashRoute && this.routes[hashRoute]) {
            this.navigate(hashRoute, {}, true);
          }
        }
      });
    }
  }

  register(route, renderFn) {
    this.routes[route] = renderFn;
  }

  navigate(route, params = {}, isPopState = false) {
    if (this.routes[route]) {
      if (!isPopState) {
        if (AppState.currentRoute && AppState.currentRoute !== route) {
          this.historyStack.push(AppState.currentRoute);
        }
        if (typeof window !== 'undefined' && window.history && window.history.pushState) {
          window.history.pushState({ route }, '', `#${route}`);
        }
      }

      AppState.currentRoute = route;
      const appContainer = document.getElementById('app-root');
      if (appContainer) {
        appContainer.innerHTML = this.routes[route](params);
        window.scrollTo(0, 0);
        this.bindEvents(route);
      }
    } else {
      console.warn(`Route ${route} not found. Defaulting to landing.`);
      this.navigate('landing');
    }
  }

  goBack(fallbackRoute = 'citizen-onboarding') {
    if (this.historyStack.length > 0) {
      const prevRoute = this.historyStack.pop();
      this.navigate(prevRoute, {}, true);
    } else {
      this.navigate(fallbackRoute);
    }
  }

  bindEvents(route) {
    document.querySelectorAll('[data-route]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const targetRoute = el.getAttribute('data-route');
        if (targetRoute === 'back') {
          this.goBack();
        } else if (targetRoute === 'citizen-report-method' || targetRoute === 'citizen-home') {
          startNewReport();
        } else if (targetRoute) {
          this.navigate(targetRoute);
        }
      });
    });
  }
}

export const router = new Router();

// Helper Functions
export function setRole(role) {
  AppState.userRole = role;
}

export function setLanguage(lang) {
  AppState.selectedLanguage = lang;
}

export function setHelpModal(isOpen) {
  AppState.helpModalOpen = isOpen;
}

export function resetReportDraft() {
  AppState.reportDraft = {
    method: null,
    description: '',
    voiceRecorded: false,
    voiceDuration: '00:18',
    evidence: [],
    location: {
      method: 'manual',
      label: 'Gumla District, Jharkhand',
      latitude: 23.0423,
      longitude: 84.5412
    },
    consentGiven: false,
    submitted: false,
    reportId: null
  };
}

export function startNewReport() {
  resetReportDraft();
  router.navigate('citizen-report-method');
}
