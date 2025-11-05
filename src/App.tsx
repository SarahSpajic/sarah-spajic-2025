import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import { PageTransition } from './components/PageTransition';

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/experience" element={
          <PageTransition>
            <Experience />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/case-study" element={
          <PageTransition>
            <CaseStudy />
          </PageTransition>
        } />
        <Route path="/about" element={<Navigate to="/experience" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App; 