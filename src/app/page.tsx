"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import BackgroundImage from '@/components/BackgroundImage';

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
      <BackgroundImage 
        imgSrc="/images/backgrounds/mountain1.jpg" 
        imgAlt="Mountain trekking scene"
        overlayOpacity="bg-black/50"
        className="min-h-screen flex items-center"
      >
        <div className="container py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-accent z-10">
                {/* Profile image with fallback to initials */}
                <ProfileImage />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="text-white">Mandar Kale</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-100 mb-10 drop-shadow-md">
              Engineering Leader | Newly-minted Vibe Coder | Blogger
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/about" className="btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                About Me
              </Link>
              <Link href="mailto:mandarakale@gmail.com" className="btn bg-white/90 hover:bg-white text-gray-900 text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                Contact Me
              </Link>
            </div>
            
            <div className="absolute bottom-10 left-0 right-0 text-center hidden md:block">
              <a href="#about" className="text-white/80 hover:text-white">
                <FaArrowDown className="mx-auto animate-bounce text-2xl" />
                <span className="sr-only">Scroll down</span>
              </a>
            </div>
          </div>
        </div>
      </BackgroundImage>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  I'm an Engineering Leader at Intuit with expertise in building and scaling software solutions. 
                  With a strong background in technology leadership and a passion for innovation, 
                  I guide teams to create efficient, user-centric applications that deliver business value.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Beyond my role at Intuit, I share my knowledge and insights through blogging on Medium.
                  I believe in continuous learning and staying updated with emerging technologies and industry best practices.
                </p>
                <div className="mt-8">
                  <Link href="/about" className="btn-primary inline-flex items-center text-lg">
                    Learn More About Me <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/images/backgrounds/mountain2.jpg" 
                  alt="Mountain landscape" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Medium Blog Posts */}
      <BackgroundImage 
        imgSrc="/images/backgrounds/mountain3.jpg" 
        imgAlt="Mountain night scene"
        overlayOpacity="bg-black/70"
        className="py-24"
      >
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediumBlogPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <div className="text-gray-300 text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{post.title}</h3>
                  <p className="text-gray-200 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a 
                    href={post.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent bg-white/90 hover:bg-white px-4 py-2 rounded-full font-medium inline-flex items-center shadow-md"
                  >
                    Read on Medium <FaArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a 
              href="https://mandarakale.medium.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white/90 hover:bg-white text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg"
            >
              View All Blog Posts
            </a>
          </div>
        </div>
      </BackgroundImage>
      
      {/* CTA Section */}
      <BackgroundImage 
        imgSrc="/images/backgrounds/mountain4.jpg" 
        imgAlt="Mountain valley"
        overlayOpacity="bg-accent/60"
        className="py-28"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
            <p className="text-2xl mb-10 text-white">
              Want to connect or discuss opportunities? Feel free to reach out to me via email.
            </p>
            <a 
              href="mailto:mandarakale@gmail.com" 
              className="btn bg-white/90 hover:bg-white text-accent text-xl px-10 py-5 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
              mandarakale@gmail.com
            </a>
          </div>
        </div>
      </BackgroundImage>
      
      <Footer />
    </main>
  );
} 