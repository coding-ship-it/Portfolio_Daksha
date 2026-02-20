'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavProps {
  isHomePage?: boolean;
}

const homeLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#recommendations', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation({ isHomePage = true }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-emerald-400 transition-colors tracking-tight"
          >
            DT<span className="text-emerald-400">.</span>
          </Link>

          {isHomePage && (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                {homeLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-zinc-400 hover:text-white transition-colors font-medium tracking-widest uppercase"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download="Daksha_Talekar_Resume.pdf"
                  className="text-[13px] px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-all font-medium tracking-wide"
                >
                  Resume
                </a>
              </nav>

              <button
                className="md:hidden text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </>
          )}

          {!isHomePage && (
            <Link
              href="/"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && isHomePage && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {homeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Daksha_Talekar_Resume.pdf"
                className="text-emerald-400 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
