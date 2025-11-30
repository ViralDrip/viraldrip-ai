import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
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
    { name: 'How it Works', href: '#process' },
    { name: 'What You Get', href: '#services' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/20">
             <Droplets className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-space tracking-tight text-white">
            Viral<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Drip</span>.ai
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://calendly.com/jonas-algowerk/30min-meeting-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/30"
          >
            Schedule Audit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://calendly.com/jonas-algowerk/30min-meeting-clone"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block text-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30"
              >
                Schedule Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};