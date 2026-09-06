import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export const AuthPage = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserRole } = useApp();
  const [phone, setPhone] = useState('9431188221');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone');

  const handleSendOtp = (e) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUserRole('citizen');
    navigate('/citizen/report-method');
  };

  return (
    <div className="py-20 px-6 max-w-md mx-auto">
      <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-brand-violet uppercase tracking-widest">SAMADHANSETU AUTH</span>
          <h2 className="text-2xl font-extrabold text-brand-indigo">Citizen Sign In</h2>
          <p className="text-xs text-[#4A4D73]">Secure mobile authentication for reporting & tracking.</p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Mobile Number</label>
              <div className="flex">
                <span className="bg-[#F8F8F6] border border-r-0 border-outline-variant/60 px-3 py-2 text-xs font-bold text-slate-500 rounded-l-xl flex items-center">+91</span>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-outline-variant/60 rounded-r-xl px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-brand-violet"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-[#24285B] text-white text-xs font-bold hover:bg-brand-violet transition-colors">
              Send OTP via SMS →
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1A1A1A] mb-1">Enter 4-Digit OTP</label>
              <input 
                type="text" 
                placeholder="4 3 2 1" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-outline-variant/60 rounded-xl px-3 py-2 text-center text-lg font-bold text-[#1A1A1A] tracking-widest focus:outline-none focus:border-brand-violet"
                required
              />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-brand-violet text-white text-xs font-bold hover:bg-brand-indigo transition-colors">
              Verify & Proceed →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
