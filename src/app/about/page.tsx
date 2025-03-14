"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';

// Profile Image component with error handling
function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return imageError ? (
    // Fallback to initials when image fails to load
    <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
      MK
    </div>
  ) : (
    // Try to load the image first
    <Image 
      src="/images/profile.jpg" 
      alt="Mandar Kale" 
      width={192} 
      height={192} 
      className="object-cover w-full h-full"
      priority
      onError={() => setImageError(true)}
    />
  );
}

export default function About() {
  // Skills data
  const skills = [
    { category: 'Leadership', items: ['Engineering Management', 'Team Building', 'Product Strategy', 'Agile/Scrum', 'Mentoring', 'Technical Leadership'] },
    { category: 'Technical', items: ['Software Architecture', 'Cloud Computing', 'Microservices', 'API Design', 'DevOps', 'Data Engineering'] },
    { category: 'Languages & Frameworks', items: ['Java', 'JavaScript/TypeScript', 'React', 'Node.js', 'Spring Boot', 'AWS/Azure'] },
    { category: 'Tools & Platforms', items: ['CI/CD Pipelines', 'Kubernetes', 'Docker', 'Git', 'Jira/Confluence', 'Monitoring Systems'] },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg bg-accent">
                  {/* Profile image with fallback to initials */}
                  <ProfileImage />
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Hello! I'm Mandar Kale, an Engineering Leader at Intuit with a passion for building innovative technology solutions. 
                  With over a decade of experience in the industry, I specialize in leading engineering teams to deliver high-quality 
                  products that solve complex business problems.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  As a newly-minted Vibe Coder, I enjoy exploring emerging technologies and finding creative ways to solve challenging problems.
                  I believe in building high-performance teams through authentic leadership, embracing ownership, and staying composed under pressure.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Outside of work, I'm an avid fitness enthusiast who loves trekking in nature and playing competitive badminton. 
                  These activities not only keep me physically active but also help me maintain mental clarity and balance in my life.
                  When not outdoors, you'll find me writing technical articles on Medium or mentoring aspiring engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="section bg-white dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              For detailed information about my professional experience, please visit my LinkedIn profile.
            </p>
            <a 
              href="https://www.linkedin.com/in/mandar-kale/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center"
            >
              <FaLinkedin className="mr-2 h-5 w-5" />
              View on LinkedIn
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section bg-accent text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-8">
              Want to connect or discuss opportunities? Feel free to reach out to me via email.
            </p>
            <a href="mailto:mandarakale@gmail.com" className="btn bg-white text-accent hover:bg-gray-100">
              mandarakale@gmail.com
            </a>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
} 