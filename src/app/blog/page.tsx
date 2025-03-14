import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Since this is a static site, we'll just use sample blog data for now
// In a real implementation, you would fetch from the Medium API
export default function Blog() {
  // Sample blog posts data (to be replaced with actual Medium data)
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding JavaScript Promises',
      excerpt: 'An in-depth look at JavaScript Promises and how they help manage asynchronous operations in your code.',
      date: 'March 15, 2023',
      readTime: '8 min read',
      url: 'https://mandarakale.medium.com/post-1',
      image: '/images/blog1.jpg',
      tags: ['JavaScript', 'Web Development', 'Promises'],
    },
    {
      id: 2,
      title: 'Building Responsive UIs with React and Tailwind CSS',
      excerpt: 'Learn how to combine React and Tailwind CSS to create beautiful, responsive user interfaces for your web applications.',
      date: 'February 20, 2023',
      readTime: '10 min read',
      url: 'https://mandarakale.medium.com/post-2',
      image: '/images/blog2.jpg',
      tags: ['React', 'Tailwind CSS', 'UI/UX'],
    },
    {
      id: 3,
      title: 'Getting Started with Next.js and Server-Side Rendering',
      excerpt: 'A comprehensive guide to building server-rendered React applications with Next.js framework.',
      date: 'January 5, 2023',
      readTime: '12 min read',
      url: 'https://mandarakale.medium.com/post-3',
      image: '/images/blog3.jpg',
      tags: ['Next.js', 'React', 'SSR'],
    },
    {
      id: 4,
      title: 'Database Design Patterns for Scalable Applications',
      excerpt: 'Explore various database design patterns that help in building scalable and maintainable applications.',
      date: 'December 10, 2022',
      readTime: '15 min read',
      url: 'https://mandarakale.medium.com/post-4',
      image: '/images/blog4.jpg',
      tags: ['Databases', 'System Design', 'Scalability'],
    },
    {
      id: 5,
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Learn techniques and best practices to optimize your React applications for better performance.',
      date: 'November 25, 2022',
      readTime: '9 min read',
      url: 'https://mandarakale.medium.com/post-5',
      image: '/images/blog5.jpg',
      tags: ['React', 'Performance', 'Optimization'],
    },
    {
      id: 6,
      title: 'Introduction to Docker for Web Developers',
      excerpt: 'A beginner-friendly guide to using Docker for containerizing web applications and setting up development environments.',
      date: 'October 18, 2022',
      readTime: '11 min read',
      url: 'https://mandarakale.medium.com/post-6',
      image: '/images/blog6.jpg',
      tags: ['Docker', 'DevOps', 'Containers'],
    },
  ];

  // Categories for filtering
  const categories = ['All', 'JavaScript', 'React', 'Next.js', 'Databases', 'DevOps', 'UI/UX'];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Thoughts, tutorials, and insights on software development and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-accent hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 bg-accent text-white"
                aria-current="page"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Medium CTA Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Follow Me on Medium</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              For more articles, tutorials, and insights on software development and technology.
            </p>
            <a 
              href="https://mandarakale.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Visit My Medium Profile
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: any }) {
  return (
    <div className="card overflow-hidden group">
      {/* Blog Post Image */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {/* Replace with actual image when available */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Blog Image
        </div>
      </div>
      
      {/* Blog Post Details */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-600 dark:text-gray-400">{post.date}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{post.readTime}</div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={post.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent hover:text-accent/80 font-medium inline-block"
        >
          Read Article →
        </a>
      </div>
    </div>
  );
} 