"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaCode, FaMountain } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-accent/10 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-800"></path>
        </svg>
      </div>
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <FaMountain className="text-accent text-xl" />
              <h3 className="text-2xl font-bold">Mandar Kale</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Engineering Leader at Intuit | Vibe Coder | Blogger | Trekking Enthusiast
            </p>
            <div className="flex space-x-6">
              <SocialLink href="https://github.com/MandarKale" icon={<FaGithub size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/mandar-kale/" icon={<FaLinkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://mandarakale.medium.com/" icon={<FaMedium size={20} />} label="Medium" />
              <SocialLink href="mailto:mandarakale@gmail.com" icon={<FaEnvelope size={20} />} label="Email" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About" />
              <FooterLink href="/experience" label="Experience" />
              <FooterLink href="/blog" label="Blog" />
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Get In Touch</h3>
            <p className="text-gray-300 mb-6">Have a question or want to connect? I'm always open to discussing new opportunities and ideas.</p>
            <a 
              href="mailto:mandarakale@gmail.com" 
              className="inline-flex items-center bg-accent hover:bg-accent-dark px-6 py-3 rounded-lg text-white font-medium transition-colors duration-300"
            >
              <FaEnvelope className="mr-2" />
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p className="mb-4">© {currentYear} Mandar Kale. All rights reserved.</p>
          <p className="text-sm flex items-center justify-center">
            <FaCode className="mr-2 text-accent" /> This website is completely built using vibe coding.
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
    className="text-gray-300 hover:text-accent transition-colors duration-300"
    aria-label={label}
  >
    {icon}
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
          className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center"
        >
          <span className="mr-2">→</span> {label}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center"
      >
        <span className="mr-2">→</span> {label}
      </Link>
    </li>
  );
};

export default Footer; 