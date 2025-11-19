
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const InvolvePage = lazy(() => import('./pages/InvolvePage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Simulate page load
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }
  
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <main className="pt-20">
        <Suspense fallback={<Loader />}>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/get-involved" element={<InvolvePage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageWrapper>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;
