import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';

// Landing Pages
import { IntroPage } from './pages/landing/IntroPage.jsx';
import { RoleSelectionPage } from './pages/landing/RoleSelectionPage.jsx';
import { AuthPage } from './pages/landing/AuthPage.jsx';
import { HowItWorksPage } from './pages/landing/HowItWorksPage.jsx';

// Citizen Pages
import { ReportMethodPage } from './pages/citizen/ReportMethodPage.jsx';
import { VoiceReportPage } from './pages/citizen/VoiceReportPage.jsx';
import { TextReportPage } from './pages/citizen/TextReportPage.jsx';
import { CitizenEvidencePage } from './pages/citizen/CitizenEvidencePage.jsx';
import { CitizenLocationPage } from './pages/citizen/CitizenLocationPage.jsx';
import { CitizenFinalReviewPage } from './pages/citizen/CitizenFinalReviewPage.jsx';
import { CitizenAIUnderstandingPage } from './pages/citizen/CitizenAIUnderstandingPage.jsx';
import { CitizenAIConfirmationPage } from './pages/citizen/CitizenAIConfirmationPage.jsx';
import { CommunitySignalConfirmedPage } from './pages/citizen/CommunitySignalConfirmedPage.jsx';
import { TrackProblemsPage } from './pages/citizen/TrackProblemsPage.jsx';
import { MyReportsPage, CitizenProfilePage } from './pages/citizen/MyReportsPage.jsx';

// Admin / Validation Queue Pages
import { CommunityPatternsPage } from './pages/admin/CommunityPatternsPage.jsx';
import { ValidationQueuePage } from './pages/admin/ValidationQueuePage.jsx';

// University Pages
import { MentorDashboardPage } from './pages/university/MentorDashboardPage.jsx';
import { ChallengeFormationPage, ChallengePublishedPage } from './pages/university/ChallengeFormationPage.jsx';
import { PublishedChallengesPage, ProjectsPage, CollaborationsPage, UniversityProfilePage, CompletedSolutionPage } from './pages/university/PublishedChallengesPage.jsx';

// Student Pages
import { DiscoverChallengesPage, ChallengeDetailPage } from './pages/student/DiscoverChallengesPage.jsx';
import { TeamFormationPage, MyTeamsPage } from './pages/student/TeamFormationPage.jsx';
import { StudentProposalsPage } from './pages/student/StudentProposalsPage.jsx';
import { ProjectWorkspacePage, StudentImpactPage } from './pages/student/ProjectWorkspacePage.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}
        <Route index element={<IntroPage />} />
        <Route path="join" element={<RoleSelectionPage />} />
        <Route path="role-selection" element={<RoleSelectionPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />

        {/* Citizen Routes */}
        <Route path="citizen">
          <Route index element={<ReportMethodPage />} />
          <Route path="report-method" element={<ReportMethodPage />} />
          <Route path="report-voice" element={<VoiceReportPage />} />
          <Route path="report-text" element={<TextReportPage />} />
          <Route path="report-evidence" element={<CitizenEvidencePage />} />
          <Route path="report-location" element={<CitizenLocationPage />} />
          <Route path="report-final-review" element={<CitizenFinalReviewPage />} />
          <Route path="ai-understanding" element={<CitizenAIUnderstandingPage />} />
          <Route path="ai-confirmation" element={<CitizenAIConfirmationPage />} />
          <Route path="signal-confirmed" element={<CommunitySignalConfirmedPage />} />
          <Route path="track-problems" element={<TrackProblemsPage />} />
          <Route path="my-reports" element={<MyReportsPage />} />
          <Route path="profile" element={<CitizenProfilePage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="admin">
          <Route index element={<CommunityPatternsPage />} />
          <Route path="community-patterns" element={<CommunityPatternsPage />} />
          <Route path="validation-queue" element={<ValidationQueuePage />} />
        </Route>

        {/* University Routes (Approved V1 Baseline) */}
        <Route path="university">
          <Route index element={<MentorDashboardPage />} />
          <Route path="dashboard" element={<MentorDashboardPage />} />
          <Route path="validation-queue" element={<ValidationQueuePage />} />
          <Route path="challenge-formation" element={<ChallengeFormationPage />} />
          <Route path="challenge-published" element={<ChallengePublishedPage />} />
          <Route path="published-challenges" element={<PublishedChallengesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="collaborations" element={<CollaborationsPage />} />
          <Route path="profile" element={<UniversityProfilePage />} />
          <Route path="completed-solution" element={<CompletedSolutionPage />} />
        </Route>

        {/* Student Routes */}
        <Route path="student">
          <Route index element={<DiscoverChallengesPage />} />
          <Route path="challenges" element={<DiscoverChallengesPage />} />
          <Route path="challenges/:id" element={<ChallengeDetailPage />} />
          <Route path="teams" element={<MyTeamsPage />} />
          <Route path="teams/create" element={<TeamFormationPage />} />
          <Route path="proposals" element={<StudentProposalsPage />} />
          <Route path="projects" element={<ProjectWorkspacePage />} />
          <Route path="impact" element={<StudentImpactPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
