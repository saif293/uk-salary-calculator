import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Meta from './components/Meta';
import Header from './components/Header';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import FAQSection from './components/FAQSection';
import ContentSection from './components/ContentSection';

import './App.css';

// Lazy load pages — only load when user navigates to them
const Blog          = lazy(() => import('./pages/Blog'));
const BlogPost1     = lazy(() => import('./pages/BlogPost1'));
const BlogPost2     = lazy(() => import('./pages/BlogPost2'));
const BlogPost3     = lazy(() => import('./pages/BlogPost3'));
const BlogPost4     = lazy(() => import('./pages/BlogPost4'));
const BlogPost5     = lazy(() => import('./pages/BlogPost5'));
const BlogPost6     = lazy(() => import('./pages/BlogPost6'));
const BlogPost7     = lazy(() => import('./pages/BlogPost7'));
const About         = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms         = lazy(() => import('./pages/Terms'));
const Contact       = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', color: 'var(--text-muted)', fontSize: 14 }}>
      Loading...
    </div>
  );
}

function CalculatorPage() {
  return (
    <div className="main-layout">
      <Meta
        title="Salary Calculator UK – Calculate Your Take Home Pay 2026/27"
        description="Use the free Salary Calculator UK to calculate your exact take-home pay for 2026/27. Instant results for income tax, National Insurance, pension and student loan deductions."
      />
      <div className="page-hero">
        <h1>Salary Calculator UK – Calculate Your Take Home Pay 2026/27</h1>
        <p>Calculate your net salary after Income Tax, National Insurance, pension and student loan — <strong>2026/27 tax year</strong>.</p>
      </div>
      <Calculator />
      <ContentSection />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px' }}>
        <FAQSection />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <CookieBanner />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"        element={<CalculatorPage />} />
          <Route path="/blog"    element={<Blog />} />
          <Route path="/blog/how-to-calculate-take-home-pay-uk" element={<BlogPost1 />} />
          <Route path="/blog/uk-tax-year-2026-27-everything-you-need-to-know" element={<BlogPost2 />} />
          <Route path="/blog/25000-after-tax-uk" element={<BlogPost3 />} />
          <Route path="/blog/45000-after-tax-uk" element={<BlogPost4 />} />
          <Route path="/blog/50000-after-tax-uk" element={<BlogPost5 />} />
          <Route path="/blog/uk-income-tax-2026-27" element={<BlogPost6 />} />
          <Route path="/blog/uk-take-home-pay-tables-2026-27" element={<BlogPost7 />} />
          <Route path="/about"   element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms"   element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
