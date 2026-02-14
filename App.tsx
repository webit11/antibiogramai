import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solution } from './pages/Solution';
import { Features } from './pages/Features';
import { Impact } from './pages/Impact';
import { Pilot } from './pages/Pilot';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigateTo = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  // If on dashboard and authenticated, show dashboard layout (no navbar/footer)
  if (currentPage === 'dashboard' && isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }
  
  // Guard clause: Redirect to auth if trying to access dashboard while logged out
  if (currentPage === 'dashboard' && !isAuthenticated) {
    setCurrentPage('auth');
    return null; // Will re-render next tick
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar visible on all pages except Dashboard */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      {/* Content Router */}
      <div className="min-h-screen">
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'solution' && <Solution />}
        {currentPage === 'features' && <Features />}
        {currentPage === 'impact' && <Impact />}
        {currentPage === 'pilot' && <Pilot />}
        {currentPage === 'auth' && <Auth onLogin={handleLogin} />}
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;