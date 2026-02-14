import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, User } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Solution', id: 'solution' },
    { name: 'Features', id: 'features' },
    { name: 'Impact', id: 'impact' },
    { name: 'Pilot', id: 'pilot' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' ? 'bg-white shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group focus:outline-none">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled || currentPage !== 'home' ? 'bg-primary-50 text-primary-600' : 'bg-white/20 text-white'}`}>
              <Activity className="h-6 w-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}`}>
              Antibiogram<span className={isScrolled || currentPage !== 'home' ? 'text-primary-600' : 'text-blue-200'}>-AI</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium hover:opacity-80 transition-all ${
                  currentPage === link.id 
                    ? 'text-primary-600 font-semibold' 
                    : (isScrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-blue-50')
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('auth')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isScrolled || currentPage !== 'home'
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/20' 
                  : 'bg-white text-primary-800 hover:bg-blue-50 shadow-lg'
              }`}
            >
              <User size={16} />
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left font-medium py-2 border-b border-gray-50 ${currentPage === link.id ? 'text-primary-600' : 'text-slate-600'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigate('auth');
              setMobileMenuOpen(false);
            }}
            className="text-center bg-primary-600 text-white py-3 rounded-lg font-medium shadow-md"
          >
            Login / Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};