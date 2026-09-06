import React, { createContext, useContext, useState } from 'react';
import { demoCommunitySignals } from '../js/data/demoCommunitySignals.js';
import { demoChallenges } from '../js/data/demoChallenges.js';
import { demoStudentTeams, demoStudentProposals, demoStudentProjects } from '../data/demoStudentData.js';
import { PatternDetectionService } from '../js/services/PatternDetectionService.js';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'citizen' | 'student' | 'mentor' | 'partner'
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // 'en' | 'hi' | 'te'
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [activeAIUnderstanding, setActiveAIUnderstanding] = useState(null);
  const [activePatternDetail, setActivePatternDetail] = useState(null);
  const [activeTrackedProblemId, setActiveTrackedProblemId] = useState('SS-2026-00401');

  // Phase 7 Validation State
  const [activeValidationPattern, setActiveValidationPattern] = useState(null);
  const [activeChallengeDraft, setActiveChallengeDraft] = useState(null);
  const [publishedChallengeSuccess, setPublishedChallengeSuccess] = useState(null);

  // User Profile
  const [userProfile, setUserProfile] = useState({
    name: 'Ramesh Sharma',
    location: 'Gumla District, Jharkhand',
    department: 'Community Member',
    roleTitle: 'Verified Citizen',
    phone: '+91 94311 88221',
    reportedCount: 3,
    resolvedCount: 1
  });

  // Notifications
  const [notifications, setNotifications] = useState([
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
  ]);

  // Citizen Report Draft
  const [reportDraft, setReportDraft] = useState({
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
  });

  // Community Signals Database
  const [communitySignals, setCommunitySignals] = useState([
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
  ]);

  // Patterns Database
  const [communityPatterns, setCommunityPatterns] = useState([]);

  // Challenges Database
  const [challenges, setChallenges] = useState([...demoChallenges]);

  // Student Datasets
  const [teams, setTeams] = useState([...demoStudentTeams]);
  const [proposals, setProposals] = useState([...demoStudentProposals]);
  const [projects, setProjects] = useState([...demoStudentProjects]);

  // Pattern Detection Engine
  const runPatternDetection = () => {
    const combinedSignals = [...communitySignals, ...demoCommunitySignals];
    const detected = PatternDetectionService.detectPatterns(combinedSignals);
    setCommunityPatterns(detected);
    return detected;
  };

  const openPatternForValidation = (patternId) => {
    let currentPatterns = communityPatterns;
    if (!currentPatterns.length) {
      currentPatterns = runPatternDetection();
    }
    const target = currentPatterns.find(p => p.id === patternId) || currentPatterns[0];
    setActiveValidationPattern(target);
    return target;
  };

  const createChallengeDraft = (pattern) => {
    const pat = pattern || activeValidationPattern || communityPatterns[0] || {};
    const draft = {
      id: 'CH-2026-00' + (challenges.length + 1),
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
    setActiveChallengeDraft(draft);
    return draft;
  };

  const publishChallenge = (draft) => {
    const challengeObj = {
      ...draft,
      status: 'Open',
      publishedAt: new Date().toISOString()
    };
    setChallenges(prev => [challengeObj, ...prev]);

    if (activeValidationPattern) {
      setActiveValidationPattern(prev => prev ? { ...prev, status: 'Validated', createdChallengeId: challengeObj.id } : null);
    }
    setPublishedChallengeSuccess(challengeObj);
    return challengeObj;
  };

  const resetReportDraft = () => {
    setReportDraft({
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
    });
  };

  const createStudentTeam = (teamData) => {
    const newTeam = {
      id: `TEAM-2026-00${teams.length + 1}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Active Team',
      ...teamData
    };
    setTeams(prev => [newTeam, ...prev]);
    return newTeam;
  };

  const submitProposal = (proposalData) => {
    const newProp = {
      id: `PROP-2026-00${proposals.length + 1}`,
      submittedAt: new Date().toISOString(),
      status: 'Submitted for Review',
      ...proposalData
    };
    setProposals(prev => [newProp, ...prev]);
    return newProp;
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userRole,
        setUserRole,
        selectedLanguage,
        setSelectedLanguage,
        helpModalOpen,
        setHelpModalOpen,
        activeAIUnderstanding,
        setActiveAIUnderstanding,
        activePatternDetail,
        setActivePatternDetail,
        activeTrackedProblemId,
        setActiveTrackedProblemId,
        activeValidationPattern,
        setActiveValidationPattern,
        activeChallengeDraft,
        setActiveChallengeDraft,
        publishedChallengeSuccess,
        setPublishedChallengeSuccess,
        userProfile,
        setUserProfile,
        notifications,
        setNotifications,
        reportDraft,
        setReportDraft,
        communitySignals,
        setCommunitySignals,
        communityPatterns,
        setCommunityPatterns,
        challenges,
        setChallenges,
        teams,
        setTeams,
        proposals,
        setProposals,
        projects,
        setProjects,
        runPatternDetection,
        openPatternForValidation,
        createChallengeDraft,
        publishChallenge,
        resetReportDraft,
        createStudentTeam,
        submitProposal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
