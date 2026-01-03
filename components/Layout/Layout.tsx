'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CursorParticles from '@/components/UI/CursorParticles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorParticles />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

