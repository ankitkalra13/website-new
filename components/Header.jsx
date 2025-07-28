'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import NavLink from './NavLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@dubiz.co</span>
              </div>
            </div>
            <div className="text-yellow-400 font-medium">
              Free Consultation Available
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Dubiz</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/golden-visa">Golden Visa</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="theme-btn">
                Get Started <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white text-brand border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium py-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium py-2"
                  >
                    Services
                  </Link>
                  <Link
                    href="/golden-visa"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium py-2"
                  >
                    Golden Visa
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium py-2"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium py-2"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-brand text-white px-6 py-3 rounded-lg font-medium text-center mt-4"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;