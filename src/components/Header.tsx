import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { TAVERN_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', path: '/' },
    { name: 'Η Ταβέρνα', path: '/about' },
    { name: 'Μενού', path: '/menu' },
    { name: 'Γκαλερί', path: '/gallery' },
    { name: 'Επικοινωνία', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center">
          <span className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${
            isScrolled ? 'text-brand-olive' : 'text-white'
          }`}>
            {TAVERN_INFO.name}
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
            isScrolled ? 'text-brand-burgundy' : 'text-white/80'
          }`}>
            Από το 1990
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-burgundy ${
                location.pathname === link.path 
                  ? (isScrolled ? 'text-brand-burgundy' : 'text-white underline underline-offset-8') 
                  : (isScrolled ? 'text-brand-dark' : 'text-white/90')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`tel:${TAVERN_INFO.phone}`}
            className="bg-brand-olive hover:bg-brand-olive/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg"
          >
            <Phone size={16} />
            Κράτηση
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-brand-burgundy' : 'text-brand-dark'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${TAVERN_INFO.phone}`}
                className="bg-brand-olive text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                Καλέστε για Κράτηση
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
