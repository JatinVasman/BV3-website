'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Portfolio', href: 'social' },
    { label: 'CRM', href: 'crm' },
    { label: 'Testimonials', href: 'testimonials' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToElement('hero')}
          className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="/logo.webp"
            alt="Business Volunteers"
            className="h-10 brightness-0 invert transition-all duration-300 group-hover:scale-110"
          />
          <span className="hidden sm:inline text-white font-playfair font-bold text-lg">
            Business <span className="text-gradient">Volunteers</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToElement(link.href)}
              className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToElement('contact')}
          className="hidden md:inline-block btn-primary"
        >
          Start a Project
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold hover:text-gold-light transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur border-t border-gold/20">
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToElement(link.href);
                  setIsOpen(false);
                }}
                className="block w-full text-left text-white hover:text-gold transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToElement('contact');
                setIsOpen(false);
              }}
              className="w-full btn-primary text-center"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
