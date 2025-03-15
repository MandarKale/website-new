"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { FaLinkedin, FaMountain, FaCode, FaUsers, FaLaptopCode } from 'react-icons/fa';
import Layout from '@/components/Layout';
import AboutBackground from '@/components/AboutBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Mandar Kale',
  description: 'Learn more about Mandar Kale\'s background, education, and interests.',
};

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

export default function AboutPage() {
  // Skills data
  const skills = [
    { category: 'Leadership', icon: <FaUsers className="text-accent mb-3 text-3xl" />, items: ['Engineering Management', 'Team Building', 'Product Strategy', 'Agile/Scrum', 'Mentoring', 'Technical Leadership'] },
    { category: 'Technical', icon: <FaLaptopCode className="text-accent mb-3 text-3xl" />, items: ['Software Architecture', 'Cloud Computing', 'Microservices', 'API Design', 'DevOps', 'Data Engineering'] },
    { category: 'Languages & Frameworks', icon: <FaCode className="text-accent mb-3 text-3xl" />, items: ['Java', 'JavaScript/TypeScript', 'React', 'Node.js', 'Spring Boot', 'AWS/Azure'] },
    { category: 'Outdoor', icon: <FaMountain className="text-accent mb-3 text-3xl" />, items: ['Trekking', 'Hiking', 'Badminton', 'Photography', 'Nature Exploration', 'Fitness'] },
  ];

  return (
    <Layout>
      <AboutBackground className="min-h-[50vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">About Me</h1>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg text-white">
            <p className="mb-4">
              I'm a seasoned Software Engineering leader with over 20 years of experience in building and leading high-performing teams. Throughout my career, I've had the privilege of working with talented professionals across various domains, from enterprise applications to cutting-edge web platforms.
            </p>
            <p className="mb-4">
              My journey in technology began with a strong foundation in computer science, which I've continuously built upon through hands-on development, architectural design, and strategic leadership. I'm particularly passionate about leveraging technology to solve complex business problems while fostering a culture of innovation and continuous improvement.
            </p>
            <p className="mb-4">
              When I'm not immersed in the world of technology, you can find me exploring mountain trails, capturing landscape photographs, or reading about emerging tech trends. I believe in maintaining a balanced approach to life and work, which helps me bring fresh perspectives to challenges.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Education</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-white">Master of Computer Applications</h3>
              <p className="text-gray-200">University of Pune - 2001</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-white">Bachelor of Computer Science</h3>
              <p className="text-gray-200">University of Pune - 1998</p>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Interests</h2>
            <ul className="list-disc pl-5 text-gray-200">
              <li className="mb-2">Trekking and hiking</li>
              <li className="mb-2">Landscape photography</li>
              <li className="mb-2">Reading technical books and articles</li>
              <li className="mb-2">Mentoring aspiring engineers</li>
              <li>Exploring new technologies</li>
            </ul>
          </div>
        </div>
      </AboutBackground>
    </Layout>
  );
} 