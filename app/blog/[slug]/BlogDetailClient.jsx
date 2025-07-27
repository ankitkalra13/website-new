'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SpinnerLoader from '@/components/SpinnerLoader';


export default function BlogDetailClient({ blog, latestBlogs }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // simulate loading for 1 second
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <SpinnerLoader />;
  
  return (
    <div>
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
          <h1 className="text-4xl text-white font-bold animate-fadeInUp">{blog.title}</h1>
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
      <section className="py-10">
        <div className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {/* Main Blog Content */}
          <div className="lg:col-span-2 border rounded-lg p-6 border-gray">
            <article>
              <motion.img
                src={blog.image}
                alt={blog.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-lg my-4"
              />

              <p className="text-sm text-brand font-semibold mb-2">
                {blog.date} • {blog.readTime}
              </p> 
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="blog-content text-[#333] leading-7"
              />
            </article>
          </div>

          {/* Latest Blogs Section */}
          <aside className="space-y-6 bg-[#F3F7FB] p-6 rounded-lg">
            <h2 className="text-xl font-semibold border-b pb-2">Latest Blogs</h2>
            {latestBlogs?.map((item) => (
              <div key={item.slug} className="flex gap-4 items-start">
                <img src={item.image} alt={item.title}  className="w-20 h-20 object-cover rounded"/>
                <div>
                  <a href={`/blog/${item.slug}`}
                    className="font-medium text-bg-brand hover:underline block"
                  >
                    {item.title}
                  </a>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </div>
    
  );
}
