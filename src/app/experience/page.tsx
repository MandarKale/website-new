"use client";

import Link from 'next/link';
import { FaLinkedin, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaTools, FaArrowRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define the experience data structure
interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export default function Experience() {
  // Top experiences from LinkedIn
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Engineering Leader",
      company: "Intuit",
      location: "Mountain View, CA",
      duration: "Aug 2020 - Present",
      description: [
        "Leading the engineering team responsible for the Intuit ProConnect suite of professional tax preparation products.",
        "Developing and executing technical strategy and roadmap for the professional tax software platform.",
        "Driving engineering excellence, innovation, and best practices across the organization.",
        "Mentoring and coaching engineering managers and technical leads to grow their leadership capabilities.",
        "Collaborating with product management and other stakeholders to deliver high-quality software solutions."
      ],
      skills: ["Leadership", "Engineering Management", "Technical Strategy", "Team Building", "Product Development", "Agile"]
    },
    {
      id: 2,
      title: "Senior Engineering Manager",
      company: "Intuit",
      location: "Mountain View, CA",
      duration: "Oct 2018 - Jul 2020",
      description: [
        "Managed multiple engineering teams responsible for critical components of the tax preparation platform.",
        "Led the transformation from monolithic architecture to microservices-based architecture.",
        "Implemented technical standards and processes to improve code quality and reduce technical debt.",
        "Successfully delivered major product features while maintaining high engineering standards.",
        "Developed and mentored team members, resulting in multiple promotions and career growth."
      ],
      skills: ["Engineering Management", "Architecture", "Microservices", "DevOps", "Cloud Technologies", "Team Development"]
    },
    {
      id: 3,
      title: "Engineering Manager",
      company: "Intuit",
      location: "Mountain View, CA",
      duration: "Jan 2017 - Sep 2018",
      description: [
        "Led a team of software engineers developing tax calculation engine for professional tax software.",
        "Drove the adoption of continuous integration and deployment practices across the team.",
        "Improved system reliability and performance through architectural improvements and optimizations.",
        "Collaborated with product teams to define technical requirements and implementation strategies.",
        "Fostered a culture of innovation, learning, and knowledge sharing within the team."
      ],
      skills: ["Software Development", "Technical Leadership", "Tax Domain", "CI/CD", "Performance Optimization", "Team Leadership"]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              A showcase of my leadership journey and professional growth at Intuit.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="section-header">My Journey at Intuit</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Highlighting my professional growth and leadership experiences at Intuit, where I've had the opportunity to drive engineering excellence and build high-performance teams.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent/20 rounded-full"></div>

            {/* Experience Cards */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-accent z-10"></div>
                
                {/* Card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} ml-8 md:ml-0`}>
                  <div className="experience-card">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <span className="flex items-center text-accent">
                        <FaCalendarAlt className="mr-1" />
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-1">
                        <FaBuilding className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FaMapMarkerAlt className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center mb-2 text-gray-800 dark:text-gray-200">
                        <FaTools className="mr-2" />
                        <span className="font-medium">Skills & Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              View my complete professional history and connect with me on LinkedIn.
            </p>
            <a 
              href="https://www.linkedin.com/in/mandar-kale/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center"
            >
              <FaLinkedin className="mr-2" /> Visit My LinkedIn Profile <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 