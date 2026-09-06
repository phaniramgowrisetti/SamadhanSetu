import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/Header.jsx';
import { Footer } from '../components/common/Footer.jsx';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-warm-white text-on-background font-body-md antialiased selection:bg-brand-indigo selection:text-white">
      <Header />
      <main className="flex-grow w-full">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
