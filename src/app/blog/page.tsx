"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaMedium, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

// Medium blog posts data - these would ideally come from an API
const mediumBlogPosts = [
  {
    id: 1,
    title: "Building High-Performance Team: Staying Composed When It Matters",
    date: "Aug 24, 2023",
    excerpt: "As leaders at all levels build high-performance teams, leaders must maintain their composure in all situations, most importantly the tough ones.",
    url: "https://mandarakale.medium.com/building-high-performance-team-staying-composed-when-it-matters-cd0f7e309c33",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Z7eMVvLLIVnvSvJV4H3I6A.jpeg",
    tags: ["Leadership", "Management", "Team Building"],
  },
  {
    id: 2,
    title: "High-Performance Team: The Crucial Art of Checking the Ego",
    date: "Mar 9, 2023",
    excerpt: "In the realm of leadership, the ego can be both a formidable ally and a treacherous foe. While a healthy dose of self-confidence and belief is essential, unchecked ego can derail even the most promising teams.",
    url: "https://mandarakale.medium.com/high-performance-team-the-crucial-art-of-checking-the-ego-5d55e86f32e7",
    readTime: "7 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gXUdCgqS1Rp7PEnlFNEI2A.jpeg",
    tags: ["Leadership", "Management", "Personal Growth"],
  },
  {
    id: 3,
    title: "High-Performance Team — Tough Love",
    date: "Jan 21, 2023",
    excerpt: "This blog is all about balancing care, empathy, recognition, and criticism. Effective leadership goes beyond just delegating tasks and monitoring progress.",
    url: "https://mandarakale.medium.com/high-performance-team-tough-love-1c79739dde20",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*8wAcn5iqmOVv7gp4aJ4GJg.jpeg",
    tags: ["Leadership", "Management", "Feedback"],
  },
  {
    id: 4,
    title: "Building High-Performance Team: Embracing Authenticity",
    date: "Dec 10, 2022",
    excerpt: "Authenticity in leadership is about being true to your values, principles, and personality. It's about showing up as who you really are, rather than who you think others want you to be.",
    url: "https://mandarakale.medium.com/building-high-performance-team-embracing-authenticity-a0d87fd71e6a",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*QZQmLkxnSsHMzDqYtJ-2aw.jpeg",
    tags: ["Leadership", "Authenticity", "Team Building"],
  },
  {
    id: 5,
    title: "Building High-Performance Team: Ownership And Impact",
    date: "Nov 25, 2022",
    excerpt: "Owning your work means taking responsibility for your decisions and actions. It means understanding that you are the one in charge of your career and your contributions.",
    url: "https://mandarakale.medium.com/building-high-performance-team-ownership-and-impact-fdec76d62cea",
    readTime: "8 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*33-gBF45-_Ieo_9BVzNYsQ.jpeg",
    tags: ["Leadership", "Ownership", "Career Growth"],
  },
  {
    id: 6,
    title: "Building High-Performance Team — Working And Growing Together",
    date: "Oct 18, 2022",
    excerpt: "In this article, I am sharing the traits and behaviors that create a High-Performance & growth culture. I believe these are essential both from an individual standpoint and for a team.",
    url: "https://medium.com/@mandarakale/building-high-performance-team-working-and-growing-together-7f3a42e60a19",
    readTime: "7 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sfgZszA5lSQP-LBPfRRdnw.jpeg",
    tags: ["Leadership", "Team Building", "Growth Culture"],
  },
];

// Categories for filtering
const categories = ['All', 'Leadership', 'Management', 'Team Building', 'Personal Growth', 'Career Growth'];

export default function Blog() {
  const [filter, setFilter] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(mediumBlogPosts);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  // Filter posts when category changes
  useEffect(() => {
    if (filter === 'All') {
      setFilteredPosts(mediumBlogPosts);
    } else {
      const filtered = mediumBlogPosts.filter(post => 
        post.tags.includes(filter)
      );
      setFilteredPosts(filtered);
    }
  }, [filter]);

  // Handle image loading error
  const handleImageError = (id: number) => {
    setImageError(prev => ({...prev, [id]: true}));
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Blog</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Thoughts on leadership, engineering management, and building high-performance teams.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Content Section */}
      <AnimatedSection className="section bg-white dark:bg-gray-900" delay={0.1}>
        <div className="container">
          {/* Filter Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-accent/30 hover:text-accent-dark dark:hover:text-white'
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <BlogPostCard 
                  post={post} 
                  hasImageError={!!imageError[post.id]}
                  onImageError={() => handleImageError(post.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">No posts found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                There are no posts in this category yet. Please check back later or choose another category.
              </p>
              <motion.button 
                onClick={() => setFilter('All')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Posts
              </motion.button>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* Medium CTA Section */}
      <AnimatedSection className="section bg-gray-50 dark:bg-gray-800" delay={0.2}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Follow Me on Medium</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              For more articles on leadership, engineering management, and building high-performance teams.
            </p>
            <motion.a 
              href="https://mandarakale.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary flex items-center justify-center mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMedium className="mr-2" /> Follow on Medium
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}

// Blog Post Card Component
function BlogPostCard({ post, hasImageError, onImageError }: { 
  post: any, 
  hasImageError: boolean,
  onImageError: () => void 
}) {
  return (
    <motion.div 
      className="blog-card"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Blog Post Image */}
      <div className="blog-card-image bg-accent/10">
        {hasImageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-accent text-xl p-4 text-center">
            {post.title}
          </div>
        ) : (
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            onError={onImageError}
          />
        )}
      </div>
      
      {/* Blog Post Details */}
      <div className="blog-card-content">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1.5" size={12} />
            {post.date}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1.5" size={12} />
            {post.readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-accent">{post.title}</h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {post.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a 
          href={post.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read on Medium <FaArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
} 