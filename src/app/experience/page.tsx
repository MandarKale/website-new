"use client";

import Link from 'next/link';
import { FaLinkedin, FaBuilding, FaCalendarAlt, FaTools, FaArrowRight, FaMountain } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundImage from '@/components/BackgroundImage';

// Define the experience data structure
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export default function Experience() {
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
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <BackgroundImage
          imgSrc="/images/backgrounds/mountain-experience.jpg"
          imgAlt="Mountain trekking landscape with stunning peaks"
          overlay={true}
          overlayOpacity="bg-black/50"
          position="center"
        />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Professional Experience</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-6 drop-shadow-md">
              A showcase of my leadership journey and professional growth at Intuit.
            </p>
            <div className="flex justify-center items-center">
              <div className="h-1 w-24 bg-accent rounded-full"></div>
              <FaMountain className="mx-4 text-accent text-xl" />
              <div className="h-1 w-24 bg-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6">My Journey at <span className="text-accent">Intuit</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Highlighting my professional growth and leadership experiences at Intuit, where I've had the opportunity to drive engineering excellence and build high-performance teams.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent/20 rounded-full"></div>

            {/* Experience Cards */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className="mb-16 relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -mt-2 w-6 h-6 rounded-full bg-accent shadow-md z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} ml-8 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <span className="flex items-center text-accent bg-accent/10 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit">
                        <FaCalendarAlt className="mr-1" />
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-1">
                        <FaBuilding className="mr-2 text-accent" />
                        <span className="font-medium">{exp.company}</span>
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
                        <FaTools className="mr-2 text-accent" />
                        <span className="font-medium">Skills & Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-300">
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
          <div className="mt-16 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Want to know more?</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              View my complete professional history and connect with me on LinkedIn.
            </p>
            <a 
              href="https://www.linkedin.com/in/mandar-kale/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              <FaLinkedin className="mr-2 h-5 w-5" />
              Visit My LinkedIn Profile 
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <BackgroundImage
          imgSrc="/images/backgrounds/mountain4.jpg"
          imgAlt="Mountain landscape"
          overlay={true}
          overlayOpacity="bg-black/70"
          position="center"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl mb-10">
              Interested in learning more about my experience or discussing potential opportunities?
            </p>
            <a 
              href="mailto:mandarakale@gmail.com" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-block transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 