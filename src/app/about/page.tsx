"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { FaLinkedin, FaMountain, FaCode, FaUsers, FaLaptopCode } from 'react-icons/fa';
import BackgroundImage from '@/components/BackgroundImage';

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
    { category: 'Leadership', icon: <FaUsers className="text-accent mb-3 text-3xl" />, items: ['Engineering Management', 'Team Building', 'Product Strategy', 'Agile/Scrum', 'Mentoring', 'Technical Leadership'] },
    { category: 'Technical', icon: <FaLaptopCode className="text-accent mb-3 text-3xl" />, items: ['Software Architecture', 'Cloud Computing', 'Microservices', 'API Design', 'DevOps', 'Data Engineering'] },
    { category: 'Languages & Frameworks', icon: <FaCode className="text-accent mb-3 text-3xl" />, items: ['Java', 'JavaScript/TypeScript', 'React', 'Node.js', 'Spring Boot', 'AWS/Azure'] },
    { category: 'Outdoor', icon: <FaMountain className="text-accent mb-3 text-3xl" />, items: ['Trekking', 'Hiking', 'Badminton', 'Photography', 'Nature Exploration', 'Fitness'] },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BackgroundImage
          imgSrc="/images/backgrounds/mountain2.jpg"
          imgAlt="Mountain trekking landscape"
          overlay={true}
          overlayOpacity="bg-black/70"
          position="center"
        />

        <div className="container relative z-10 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-accent">
                  {/* Profile image with fallback to initials */}
                  <ProfileImage />
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                  <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                    Hello! I'm <span className="text-accent font-semibold">Mandar Kale</span>, an Engineering Leader at Intuit with a passion for building innovative technology solutions. 
                    With over a decade of experience in the industry, I specialize in leading engineering teams to deliver high-quality 
                    products that solve complex business problems.
                  </p>
                  <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                    As a newly-minted <span className="text-accent font-semibold">Vibe Coder</span>, I enjoy exploring emerging technologies and finding creative ways to solve challenging problems.
                    I believe in building high-performance teams through authentic leadership, embracing ownership, and staying composed under pressure.
                  </p>
                  <p className="text-lg text-gray-100 leading-relaxed">
                    Outside of work, I'm an avid <span className="text-accent font-semibold">trekking enthusiast</span> who loves exploring nature and playing competitive badminton. 
                    These activities not only keep me physically active but also help me maintain mental clarity and balance in my life.
                    When not outdoors, you'll find me writing technical articles on Medium or mentoring aspiring engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">My <span className="text-accent">Skills</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="flex justify-center">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-300"
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
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Work <span className="text-accent">Experience</span></h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
              For detailed information about my professional experience, please visit my LinkedIn profile.
            </p>
            <a 
              href="https://www.linkedin.com/in/mandar-kale/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              <FaLinkedin className="mr-2 h-5 w-5" />
              View on LinkedIn
            </a>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-accent/10 rounded-full"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/10 rounded-full"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <BackgroundImage
          imgSrc="/images/backgrounds/mountain4.jpg"
          imgAlt="Mountain landscape"
          overlay={true}
          overlayOpacity="bg-black/80"
          position="center"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl mb-10">
              Want to connect or discuss opportunities? Feel free to reach out to me via email.
            </p>
            <a 
              href="mailto:mandarakale@gmail.com" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-block transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              mandarakale@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 