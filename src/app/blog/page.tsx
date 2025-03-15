"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaMedium, FaCalendarAlt, FaClock, FaChevronRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import BlogBackground from '@/components/BlogBackground';
import ExperienceBackground from '@/components/ExperienceBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Mandar Kale',
  description: 'Read Mandar Kale\'s latest thoughts and articles on technology, leadership, and engineering.',
};

// Medium blog posts data from Mandar Kale's actual Medium account
// These are updated with actual articles from https://mandarakale.medium.com/
const mediumBlogPosts = [
  {
    id: 1,
    title: "Building High-Performance Team: Staying Composed When It Matters",
    date: "Aug 24, 2023",
    excerpt: "As leaders at all levels build high-performance teams, leaders must maintain their composure in all situations, most importantly the tough ones.",
    url: "https://mandarakale.medium.com/building-high-performance-team-staying-composed-when-it-matters-cd0f7e309c33",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Z7eMVvLLIVnvSvJV4H3I6A.jpeg",
    tags: ["Leadership", "Team Building", "Management"],
  },
  {
    id: 2,
    title: "High-Performance Team: The Crucial Art of Checking the Ego",
    date: "Mar 9, 2023",
    excerpt: "In the realm of leadership, the ego can be both a formidable ally and a treacherous foe. While a healthy dose of self-confidence is essential, unchecked ego can derail even the most promising teams.",
    url: "https://mandarakale.medium.com/high-performance-team-the-crucial-art-of-checking-the-ego-5d55e86f32e7",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gXUdCgqS1Rp7PEnlFNEI2A.jpeg",
    tags: ["Leadership", "Personal Growth", "Team Building"],
  },
  {
    id: 3,
    title: "High-Performance Team — Tough Love",
    date: "Jan 21, 2023",
    excerpt: "This blog is all about balancing care, empathy, recognition, and criticism. Effective leadership goes beyond just delegating tasks and monitoring progress.",
    url: "https://mandarakale.medium.com/high-performance-team-tough-love-1c79739dde20",
    readTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*8wAcn5iqmOVv7gp4aJ4GJg.jpeg",
    tags: ["Leadership", "Management", "Feedback"],
  },
  {
    id: 4, 
    title: "The Goechala Trek and my life lessons",
    date: "Jun 11, 2023",
    excerpt: "In this blog, I want to highlight my life lessons from this trek which was very draining and challenging physically and mentally.",
    url: "https://mandarakale.medium.com/the-goechala-trek-and-my-life-lessons-fe1f9b87bbda",
    readTime: "7 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*lVZsC7z3WU3Qg77LYgijTQ.jpeg",
    tags: ["Trekking", "Personal Growth", "Life Lessons"],
  },
  {
    id: 5,
    title: "Goal setting demystified",
    date: "Nov 27, 2022",
    excerpt: "Goal setting is an art and a science. If done right, it can be transformational. If done wrong, it can be frustrating and demotivating.",
    url: "https://mandarakale.medium.com/goal-setting-demystified-83c2d9a06b97",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YO-kxiZ5vHNmJoN3QbcZCg.jpeg",
    tags: ["Leadership", "Management", "Goal Setting"],
  },
  {
    id: 6,
    title: "Conflict management made easy",
    date: "Aug 17, 2022",
    excerpt: "Conflict is inevitable in any team environment. How leaders manage conflict can make or break the team's performance and culture.",
    url: "https://mandarakale.medium.com/conflict-management-made-easy-de53f9cd9ada",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RxYtkrM-xgP-QTK3NvAmhA.jpeg",
    tags: ["Leadership", "Management", "Conflict Resolution"],
  }
];

// Categories for filtering - updated to match the actual blog topics
const categories = ['All', 'Leadership', 'Team Building', 'Management', 'Personal Growth', 'Trekking', 'Goal Setting', 'Conflict Resolution', 'Feedback', 'Authenticity', 'Ownership'];

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
    <Layout>
      <BlogBackground className="min-h-[50vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">My Blog</h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white hover:bg-white/20 transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-3">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <div className="flex items-center mb-4 text-gray-200 text-sm">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="mb-4">{post.excerpt}</p>
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-white inline-flex items-center"
                  >
                    Read more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlogBackground>

      {/* Medium Profile CTA */}
      <ExperienceBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <FaMedium className="mx-auto text-5xl mb-6" />
            <h2 className="text-3xl font-bold mb-4">Follow Me on Medium</h2>
            <p className="text-xl mb-8">
              I regularly write about technology, leadership, and engineering challenges.
              Subscribe to my Medium profile to get notified about new articles.
            </p>
            <a 
              href="https://medium.com/@mandar-kale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold inline-block transition-colors"
            >
              View My Medium Profile
            </a>
          </div>
        </div>
      </ExperienceBackground>
    </Layout>
  );
}

// Blog Post Card Component
function BlogPostCard({ post, hasImageError, onImageError }: { 
  post: any, 
  hasImageError: boolean,
  onImageError: () => void 
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
      {/* Blog Post Image */}
      <div className="relative h-60 w-full overflow-hidden">
        {hasImageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-accent/10 text-accent text-xl p-4 text-center">
            {post.title}
          </div>
        ) : (
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-500"
            onError={onImageError}
          />
        )}
      </div>
      
      {/* Blog Post Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1.5" size={12} />
            {post.date}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1.5" size={12} />
            {post.readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-accent">{post.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={post.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-accent hover:text-accent-dark font-medium mt-auto group"
        >
          Read Article <FaChevronRight className="ml-2 group-hover:ml-3 transition-all duration-300 text-sm" />
        </a>
      </div>
    </div>
  );
} 