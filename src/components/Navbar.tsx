"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`font-heading font-bold text-2xl ${isScrolled ? 'text-accent dark:text-white' : 'text-white'}`}>
          Mandar Kale
          <span className={`block text-xs font-normal mt-0.5 ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'}`}>
            Engineering Leader | Vibe Coder
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLinks isScrolled={isScrolled} />
          <SocialLinks isScrolled={isScrolled} />
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-accent dark:text-gray-300' : 'text-white'}`}
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-5 space-y-5">
            <NavLinks mobile />
            <div className="flex justify-center space-x-8 pt-4 border-t border-gray-200 dark:border-gray-700">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false, isScrolled = true }: { mobile?: boolean; isScrolled?: boolean }) => {
  // Added proper type definition with optional external property
  type NavLink = {
    href: string;
    label: string;
    external?: boolean;
  };

  const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
      {links.map((link) => {
        const textColorClass = mobile || isScrolled
          ? 'text-gray-700 hover:text-accent dark:text-gray-200 dark:hover:text-white' 
          : 'text-white/90 hover:text-white';
          
        return link.external ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${textColorClass} font-medium transition-colors duration-300 ${
              mobile ? 'text-lg' : ''
            }`}
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={`${textColorClass} font-medium transition-colors duration-300 ${
              mobile ? 'text-lg' : ''
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

const SocialLinks = ({ isScrolled = true }: { isScrolled?: boolean }) => {
  const socialLinks = [
    { href: 'https://github.com/MandarKale', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mandar-kale/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://mandarakale.medium.com/', icon: FaMedium, label: 'Medium' },
  ];

  const iconColorClass = isScrolled 
    ? 'text-accent hover:text-accent-dark dark:text-gray-300 dark:hover:text-white' 
    : 'text-white/80 hover:text-white';

  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconColorClass} transition-colors duration-300`}
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </>
  );
};

export default Navbar; 