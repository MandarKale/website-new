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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-blue-800 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-heading font-bold text-blue-700 dark:text-white">
          Mandar Kale
          <span className="block text-xs text-blue-500 dark:text-blue-200 font-normal mt-0.5">Engineering Leader | Vibe Coder</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <SocialLinks />
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-blue-700 dark:text-blue-200" 
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
        <div className="md:hidden bg-white dark:bg-blue-800 shadow-lg">
          <div className="px-4 py-5 space-y-5">
            <NavLinks mobile />
            <div className="flex justify-center space-x-6 pt-4 border-t border-blue-100 dark:border-blue-700">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
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
      {links.map((link) => (
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-600 hover:text-accent dark:text-blue-200 dark:hover:text-accent-light font-medium ${
              mobile ? 'text-lg' : ''
            }`}
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={`text-blue-600 hover:text-accent dark:text-blue-200 dark:hover:text-accent-light font-medium ${
              mobile ? 'text-lg' : ''
            }`}
          >
            {link.label}
          </Link>
        )
      ))}
    </div>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    { href: 'https://github.com/MandarKale', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mandar-kale/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://mandarakale.medium.com/', icon: FaMedium, label: 'Medium' },
  ];

  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-accent dark:text-blue-300 dark:hover:text-accent-light"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </>
  );
};

export default Navbar; 