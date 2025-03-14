import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Want to connect or discuss opportunities? Feel free to reach out to me via email or social media.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <a 
                      href="mailto:mandarakale@gmail.com" 
                      className="text-accent hover:text-accent/80"
                    >
                      mandarakale@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <FaLinkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/mandar-kale/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                    >
                      linkedin.com/in/mandar-kale
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <FaMedium className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Medium</h3>
                    <a 
                      href="https://mandarakale.medium.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                    >
                      mandarakale.medium.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <FaGithub className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">GitHub</h3>
                    <a 
                      href="https://github.com/MandarKale" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                    >
                      github.com/MandarKale
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 