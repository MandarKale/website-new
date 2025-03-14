"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

// Profile Image component with error handling
function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return imageError ? (
    // Fallback to initials when image fails to load
    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
      MK
    </div>
  ) : (
    // Try to load the image first
    <Image 
      src="/images/profile.jpg" 
      alt="Mandar Kale" 
      width={160} 
      height={160} 
      className="object-cover w-full h-full"
      priority
      onError={() => setImageError(true)}
    />
  );
}

// Blog post data from Medium
const mediumBlogPosts = [
  {
    title: "Building High-Performance Team: Staying Composed When It Matters",
    date: "Aug 24, 2024",
    excerpt: "As leaders at all levels build high-performance teams, leaders must maintain their composure in all situations, most importantly the tough ones.",
    url: "https://mandarakale.medium.com/building-high-performance-team-staying-composed-when-it-matters-cd0f7e309c33"
  },
  {
    title: "High-Performance Team: The Crucial Art of Checking the Ego",
    date: "Mar 9, 2024",
    excerpt: "In the realm of leadership, the ego can be both a formidable ally and a treacherous foe. While a healthy dose of self-confidence and belief is essential, unchecked ego can derail even the most promising teams.",
    url: "https://mandarakale.medium.com/high-performance-team-the-crucial-art-of-checking-the-ego-5d55e86f32e7"
  },
  {
    title: "High-Performance Team — Tough Love",
    date: "Jan 21, 2024",
    excerpt: "This blog is all about balancing care, empathy, recognition, and criticism. Effective leadership goes beyond just delegating tasks and monitoring progress.",
    url: "https://mandarakale.medium.com/high-performance-team-tough-love-a21d71d6a77a"
  },
  {
    title: "High-Performance Team - Building a feedback-driven culture",
    date: "Sep 24, 2023",
    excerpt: "Feedback-driven culture is pivotal in retaining talent, improving performances, and driving winning results. If you want to improve your organization's performance, start by building a feedback-driven culture.",
    url: "https://mandarakale.medium.com/high-performance-team-building-a-feedback-driven-culture-fc8eff4e1da5"
  },
  {
    title: "The Goechala Trek and my life lessons",
    date: "Jun 11, 2023",
    excerpt: "In this blog, I want to highlight my life lessons from this trek which was very draining and challenging physically and mentally.",
    url: "https://mandarakale.medium.com/the-goechala-trek-and-my-life-lessons-fe1f9b87bbda"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg bg-accent">
                {/* Profile image with fallback to initials */}
                <ProfileImage />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-accent">Mandar Kale</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Engineering Leader | Newly-minted Vibe Coder | Blogger
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/about" className="btn-primary">
                About Me
              </Link>
              <Link href="mailto:mandarakale@gmail.com" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* About Section */}
      <AnimatedSection className="section bg-white dark:bg-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm an Engineering Leader at Intuit with expertise in building and scaling software solutions. 
              With a strong background in technology leadership and a passion for innovation, 
              I guide teams to create efficient, user-centric applications that deliver business value.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Beyond my role at Intuit, I share my knowledge and insights through blogging on Medium.
              I believe in continuous learning and staying updated with emerging technologies and industry best practices.
            </p>
            <div className="text-center">
              <Link href="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Medium Blog Posts */}
      <AnimatedSection className="section bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediumBlogPosts.map((post, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={post.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-medium inline-flex items-center"
                  >
                    Read on Medium <FaArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://mandarakale.medium.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View All Blog Posts
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