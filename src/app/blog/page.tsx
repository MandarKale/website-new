"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaMedium, FaCalendarAlt, FaClock, FaChevronRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundImage from '@/components/BackgroundImage';

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
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <BackgroundImage
          imgSrc="/images/backgrounds/mountain3.jpg"
          imgAlt="Mountain trekking landscape"
          overlay={true}
          overlayOpacity="bg-black/60"
          position="center"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">My Blog</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow">
              Thoughts on leadership, engineering management, trekking experiences, and building high-performance teams.
            </p>
            <a 
              href="https://mandarakale.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium inline-flex items-center transition-colors duration-300 shadow-lg"
            >
              <FaMedium className="mr-2 text-xl" /> Follow on Medium
            </a>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                  filter === category 
                    ? 'bg-accent text-white shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-accent/20 hover:text-accent-dark dark:hover:text-white'
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id}>
                <BlogPostCard 
                  post={post} 
                  hasImageError={!!imageError[post.id]}
                  onImageError={() => handleImageError(post.id)}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">No posts found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                There are no posts in this category yet. Please check back later or choose another category.
              </p>
              <button 
                onClick={() => setFilter('All')}
                className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors duration-300"
              >
                View All Posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Medium Profile CTA */}
      <section className="py-16 relative overflow-hidden">
        <BackgroundImage
          imgSrc="/images/backgrounds/mountain2.jpg"
          imgAlt="Mountain trekking landscape"
          overlay={true}
          overlayOpacity="bg-black/60"
          position="center"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Read More on Medium</h2>
            <p className="text-xl mb-10">
              I regularly write about leadership, engineering, trekking experiences, and personal growth.
              Follow me on Medium to stay updated with my latest articles.
            </p>
            <a 
              href="https://mandarakale.medium.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-semibold inline-flex items-center transition-colors duration-300 shadow-lg"
            >
              <FaMedium className="mr-2 text-xl" />
              View All Articles
            </a>
          </div>
        </div>
      </section>

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