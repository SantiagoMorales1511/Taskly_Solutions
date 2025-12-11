import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Cómo trabajamos', id: 'proceso' },
    { label: 'Casos', id: 'casos' },
    { label: 'Sobre Taskly', id: 'sobre-taskly' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      scrollToSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  const goToDevMaterial = () => {
    navigate('/dev-material');
    setIsMobileMenuOpen(false);
  };

  const hasOverlay = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasOverlay
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            Taskly Solutions
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-300 hover:text-primary-green transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/dev-material"
              className="text-gray-100 hover:text-white font-medium px-4 py-2 rounded-lg border border-primary-purple/60 bg-primary-purple/10 hover:bg-primary-purple/20 transition-colors"
            >
              Pack de 3.500+ workflows para n8n
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-primary-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left text-gray-300 hover:text-primary-green transition-colors duration-200 py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={goToDevMaterial}
              className="block w-full text-left text-gray-100 hover:text-white font-medium px-4 py-3 rounded-lg border border-primary-purple/60 bg-primary-purple/10 hover:bg-primary-purple/20 transition-colors"
            >
              Pack de 3.500+ workflows para n8n
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

