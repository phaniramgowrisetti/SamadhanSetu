import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole, isAuthenticated, userProfile, notifications, selectedLanguage, setSelectedLanguage } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const pathname = location.pathname;

  const isMentor = userRole === 'mentor' || pathname.startsWith('/university');
  const isStudent = userRole === 'student' || pathname.startsWith('/student');
  const isCitizen = userRole === 'citizen' || pathname.startsWith('/citizen');
  const isAdmin = userRole === 'admin' || pathname.startsWith('/admin');

  const unreadCount = notifications ? notifications.filter(n => n.unread).length : 0;

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी (Hindi)' },
    { code: 'te', label: 'తెలుగు (Telugu)' }
  ];

  const currentLangLabel = languages.find(l => l.code === selectedLanguage)?.label || 'English';

  return (
    <header className="bg-[#FAFAF8] sticky top-0 w-full z-50 border-b border-outline-variant/50">
      <div className="flex justify-between items-center h-16 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Left: Official SamadhanSetu Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center cursor-pointer group py-1 bg-transparent p-0 border-none shadow-none text-left"
          >
            <img 
              src="/assests/logo.png" 
              alt="SamadhanSetu — Civic Innovation Platform" 
              className="w-[125px] sm:w-[140px] h-auto max-w-full object-contain block bg-transparent" 
              onError={(e) => { e.target.onerror = null; e.target.src = '/logo.png'; }}
            />
          </button>
        </div>

        {/* Center Navigation Links depending on Active Role / Path */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Public Navbar */}
          {!isMentor && !isStudent && !isCitizen && !isAdmin && (
            <>
              <button 
                onClick={() => navigate('/')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname === '/' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/how-it-works')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname === '/how-it-works' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                How It Works
              </button>
              <button 
                onClick={() => navigate('/student/challenges')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.startsWith('/student/challenges') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Explore Challenges
              </button>
              <button 
                onClick={() => navigate('/join')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname === '/join' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Join Ecosystem
              </button>
            </>
          )}

          {/* Citizen Navbar */}
          {isCitizen && (
            <>
              <button 
                onClick={() => navigate('/citizen/report-method')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('report') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Report Problem
              </button>
              <button 
                onClick={() => navigate('/citizen/track-problems')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('track') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Track Problems
              </button>
              <button 
                onClick={() => navigate('/citizen/my-reports')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('my-reports') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                My Reports
              </button>
              <button 
                onClick={() => navigate('/citizen/profile')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('profile') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Profile
              </button>
            </>
          )}

          {/* University / Mentor Navbar */}
          {isMentor && (
            <>
              <button 
                onClick={() => navigate('/university/dashboard')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname === '/university/dashboard' ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => navigate('/university/validation-queue')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('validation') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Opportunities
              </button>
              <button 
                onClick={() => navigate('/university/profile')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('profile') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                My University
              </button>
              <button 
                onClick={() => navigate('/university/projects')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('projects') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/university/collaborations')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('collaborations') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Collaborations
              </button>
            </>
          )}

          {/* Admin Navbar */}
          {isAdmin && (
            <>
              <button 
                onClick={() => navigate('/admin/community-patterns')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('patterns') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Community Patterns
              </button>
              <button 
                onClick={() => navigate('/admin/validation-queue')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('validation') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Validation Queue
              </button>
            </>
          )}

          {/* Student Navbar */}
          {isStudent && (
            <>
              <button 
                onClick={() => navigate('/student/challenges')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('challenges') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Discover Challenges
              </button>
              <button 
                onClick={() => navigate('/student/teams')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('teams') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                My Teams
              </button>
              <button 
                onClick={() => navigate('/student/proposals')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('proposals') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Solution Proposals
              </button>
              <button 
                onClick={() => navigate('/student/projects')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('projects') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/student/impact')}
                className={`font-label-md text-sm font-semibold transition-colors duration-200 py-1 ${pathname.includes('impact') ? 'text-brand-indigo font-bold border-b-2 border-brand-indigo' : 'text-[#4A4D73] hover:text-brand-indigo'}`}
              >
                Community Impact
              </button>
            </>
          )}
        </nav>

        {/* Right Actions: Notifications, Language, Role Selector */}
        <div className="flex items-center gap-3">
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#4A4D73] hover:text-brand-indigo bg-white px-2.5 py-1.5 rounded-lg border border-outline-variant/60 shadow-sm transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">language</span>
              <span>{currentLangLabel.split(' ')[0]}</span>
              <span className="material-symbols-outlined text-xs">arrow_drop_down</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-outline-variant/60 py-2 z-50">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setSelectedLanguage(l.code); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-[#F1F0FA] flex items-center justify-between ${selectedLanguage === l.code ? 'font-bold text-brand-indigo bg-[#F1F0FA]' : 'text-[#1A1A1A]'}`}
                  >
                    <span>{l.label}</span>
                    {selectedLanguage === l.code && <span className="material-symbols-outlined text-sm">check</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
              className="w-9 h-9 rounded-lg bg-[#F1F0FA] hover:bg-[#E5E3F5] border border-outline-variant/40 text-[#24285B] flex items-center justify-center transition-colors relative cursor-pointer"
              title="Notifications"
            >
              <span className="material-symbols-outlined text-lg">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#3F3A8A]"></span>
              )}
            </button>

            {notifDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-outline-variant/60 p-4 z-50 space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <h4 className="font-bold text-xs text-brand-indigo uppercase tracking-wider">Notifications ({unreadCount})</h4>
                  <span className="text-[10px] text-slate-400">Real-time alerts</span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className="p-2.5 rounded-lg bg-[#F8F8F6] hover:bg-[#F1F0FA] transition-colors cursor-pointer text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A1A1A]">{n.title}</span>
                        <span className="text-[10px] text-slate-400">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-[#4A4D73] mt-1 leading-tight">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Role Switcher / Profile Badge */}
          <button 
            onClick={() => navigate('/join')}
            className="hidden sm:flex items-center gap-2 bg-[#24285B] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-violet transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">switch_account</span>
            <span>Switch Role</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-outline-variant/60 text-[#1A1A1A] flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/60 px-6 py-4 space-y-3 text-sm font-medium">
          <button onClick={() => { navigate('/'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b">Home</button>
          <button onClick={() => { navigate('/how-it-works'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b">How It Works</button>
          <button onClick={() => { navigate('/citizen/report-method'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b">Citizen Portal</button>
          <button onClick={() => { navigate('/admin/community-patterns'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b">Admin Validation</button>
          <button onClick={() => { navigate('/university/dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b">University Portal</button>
          <button onClick={() => { navigate('/student/challenges'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b">Student Portal</button>
          <button onClick={() => { navigate('/join'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-bold text-brand-violet">Join Ecosystem / Role Selection</button>
        </div>
      )}
    </header>
  );
};
