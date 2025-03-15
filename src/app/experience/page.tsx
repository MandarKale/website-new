"use client";

import Link from 'next/link';
import { FaLinkedin, FaBuilding, FaCalendarAlt, FaTools, FaArrowRight, FaMountain } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import ExperienceBackground from '@/components/ExperienceBackground';

// Define the experience data structure
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export default function ExperiencePage() {
  // Top experiences from LinkedIn with updated dates
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Engineering Leader",
      company: "Intuit",
      duration: "Mar 2022 - Present",
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
      duration: "Jul 2019 - Feb 2022",
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
      duration: "Apr 2016 - Jun 2019",
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
    <Layout>
      <ExperienceBackground className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Professional Experience</h1>
          
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg text-white">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Engineering Leader</h2>
              <h3 className="text-xl font-medium mb-2 text-accent">Intuit</h3>
              <p className="text-gray-200 mb-4">2020 - Present</p>
              <p className="mb-3">Leading engineering teams to build innovative financial solutions. Responsible for strategic technical direction, team development, and delivery of high-quality products.</p>
              <ul className="list-disc pl-5 text-gray-200">
                <li className="mb-2">Led the development of cloud-native applications that improved customer experience</li>
                <li className="mb-2">Implemented agile methodologies that increased team productivity by 30%</li>
                <li className="mb-2">Mentored junior engineers, fostering their growth and professional development</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Senior Software Engineer</h2>
              <h3 className="text-xl font-medium mb-2 text-accent">Cerner Corporation</h3>
              <p className="text-gray-200 mb-4">2015 - 2020</p>
              <p className="mb-3">Developed healthcare technology solutions that improved patient care outcomes. Focused on building reliable, secure, and scalable software.</p>
              <ul className="list-disc pl-5 text-gray-200">
                <li className="mb-2">Architected and developed microservices for patient data management</li>
                <li className="mb-2">Optimized database performance, reducing query times by 40%</li>
                <li className="mb-2">Collaborated with cross-functional teams to deliver integrated solutions</li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-6">For a complete overview of my professional journey:</p>
              <a 
                href="https://www.linkedin.com/in/mandar-kale/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FaLinkedin className="mr-2" />
                View my LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </ExperienceBackground>
    </Layout>
  );
} 