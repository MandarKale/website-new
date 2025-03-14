import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A comprehensive web application built with React and Node.js that allows users to manage their tasks efficiently.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/MandarKale/project1',
      demo: 'https://project1-demo.example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'An e-commerce platform developed with Next.js and Stripe integration for seamless online shopping experience.',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/MandarKale/project2',
      demo: 'https://project2-demo.example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A real-time chat application built with Socket.io and React that enables instant messaging and file sharing.',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/MandarKale/project3',
      demo: 'https://project3-demo.example.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A mobile-responsive portfolio website template designed with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/MandarKale/project4',
      demo: 'https://project4-demo.example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'A weather application that fetches real-time weather data from an API and displays it in a user-friendly interface.',
      tags: ['React', 'API Integration', 'CSS'],
      github: 'https://github.com/MandarKale/project5',
      demo: 'https://project5-demo.example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'A blog platform built with Django that allows users to create, edit, and publish articles.',
      tags: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
      github: 'https://github.com/MandarKale/project6',
      demo: 'https://project6-demo.example.com',
      featured: false,
    },
  ];

  // Categories for filtering
  const categories = ['All', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Django', 'API Integration'];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              A showcase of my projects and professional work in web development and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>
          
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
            <p className="text-xl mb-8">
              Check out my GitHub for more projects and code samples.
            </p>
            <a 
              href="https://github.com/MandarKale" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white text-accent hover:bg-gray-100 inline-flex items-center"
            >
              <FaGithub className="mr-2" /> Visit My GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: any }) {
  return (
    <div className="card overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {/* Replace with actual image when available */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          {project.title} Image
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-accent bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent p-3 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="View GitHub Repository"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent p-3 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 