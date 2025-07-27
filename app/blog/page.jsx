'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search,ChevronRight } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import blogPosts from '../../lib/blogs.json';
import Image from 'next/image';
import SpinnerLoader from '@/components/SpinnerLoader';



export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const categories = ['All', 'Business Setup', 'Golden Visa', 'Legal', 'Finance', 'Tax'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-cover py-10 overflow-hidden" style={{backgroundImage: "url('https://dubiz.co/public/assets/img/breadcrumbImages/blog.webp')", }}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#002B98] to-[#00060C] opacity-75"></div>

        <div className="absolute top-5 left-0 z-10">
          <Image width={200} height={200} loading="lazy" src="https://dubiz.co/public/assets/img/element.png" alt="shape-img" />
        </div>

        <div className="absolute top-0 bottom-0 right-0 z-10">
          <Image
            width={200} height={200}
            loading="lazy"
            src="https://dubiz.co/public/assets/img/line-element.png"
            alt="shape-img"
            className='h-full w-full'
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center py-12">
          <h1 className="text-4xl text-white font-bold animate-fadeInUp">Latest Blogs, News & Updates</h1>
          <ul className="flex items-center justify-center gap-2 mt-5 animate-fadeInUp text-white">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <ChevronRight className="inline-block" size={16} />
            </li>
            <li>Stay informed with the latest business trends, industry insights, and updates that matter to you</li>
          </ul>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bg-brand focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bg-brand focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights and practical guides to help you navigate business in the UAE
            </p>
          </motion.div>

          {loading ? (
            <SpinnerLoader />
          ) : filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} {...post} delay={index * 0.1} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}