"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mandar Kale</h3>
            <p className="text-gray-300 mb-4">
              Engineering Leader at Intuit | Vibe Coder | Blogger
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/MandarKale" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/mandar-kale/" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialLink href="https://mandarakale.medium.com/" icon={<FaMedium />} label="Medium" />
              <SocialLink href="mailto:mandarakale@gmail.com" icon={<FaEnvelope />} label="Email" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About" />
              <FooterLink href="/experience" label="Experience" />
              <FooterLink href="/blog" label="Blog" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Have a question or want to connect?</p>
            <a href="mailto:mandarakale@gmail.com" className="text-accent hover:text-accent/80 font-medium">
              mandarakale@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">© {currentYear} Mandar Kale. All rights reserved.</p>
          <p className="text-sm flex items-center justify-center">
            <FaCode className="mr-2 text-accent" /> This website was generated using only Vibe Coding
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-accent transition-colors duration-200"
    aria-label={label}
  >
    <span className="w-5 h-5">{icon}</span>
  </a>
);

const FooterLink = ({ href, label, externalLink = false }: { href: string; label: string; externalLink?: boolean }) => {
  if (externalLink) {
    return (
      <li>
        <a 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-accent transition-colors duration-200"
        >
          {label}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-accent transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer; 