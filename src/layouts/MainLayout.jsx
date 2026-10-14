import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { initSmoothScroll, destroySmoothScroll } from '../hooks/useGsap';

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      destroySmoothScroll();
    };
  }, []);

  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content" style={{ minHeight: '100vh', paddingTop: isHome ? '0' : 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
