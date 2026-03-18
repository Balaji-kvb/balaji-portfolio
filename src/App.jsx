import { lazy, Suspense, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import { useTheme } from './context/ThemeContext';

// Lazy load below-the-fold sections
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const GithubStats = lazy(() => import('./components/GithubStats'));
const Certifications = lazy(() => import('./components/Certifications'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Minimal fallback for Suspense
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-20" aria-label="Loading section">
      <div className="w-8 h-8 border-2 rounded-full animate-spin"
        style={{ borderColor: 'var(--border-card)', borderTopColor: 'var(--text-accent)' }} />
    </div>
  );
}

function App() {
  const { isDark } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaded} />}

      <div
        className={`min-h-screen relative transition-colors duration-500 ${!loaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'opacity 0.5s ease' }}
      >
        {/* Skip to content link (accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-xl focus:text-sm focus:font-medium btn-primary"
        >
          Skip to main content
        </a>

        {/* Global animated gradient mesh */}
        <div className="fixed inset-0 animated-gradient-bg -z-10" />

        <div className="relative z-10">
          <Navbar />
          <main id="main-content">
            <Hero />
            <Suspense fallback={<SectionFallback />}>
              <About />
              <Experience />
              <Skills />
              <Projects />
              <GithubStats />
              <Blog />
              <Certifications />
              <Testimonials />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
