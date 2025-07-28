'use client';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const BlogCard = ({ title, excerpt, date, readTime, image, slug, delay = 0 }) => {
  return (
    
      <article className="bg-white rounded-xl overflow-hidden transition-all duration-300 border h-full">
        <div className="aspect-video bg-gradient-to-br from-bg-brand to-bg-brand relative overflow-hidden">
          {image ? (
            <Image width={300} height={300}
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-bg-brand to-bg-brand flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{title.split(' ').map(word => word[0]).join('').slice(0, 3)}</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className='text-brand' size={14}  />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className='text-brand' size={14} />
              <span>{readTime} read</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-brand mb-3 group-hover:text-bg-brand transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray mb-4 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          
          <Link
            href={`/blog/${slug}`}
            className="theme-btn group/link"
          >
            Read More
            <ArrowRight size={16} className="ml-2 inline-block" />
          </Link>
        </div>
      </article>
  );
};

export default BlogCard;