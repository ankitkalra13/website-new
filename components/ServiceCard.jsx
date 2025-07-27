'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features, href, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="group">
      <div className="relative group rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border group-hover:border-brand h-full overflow-hidden bg-white">
        
        <div className="absolute inset-0 bg-brand transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />
        <div className="relative z-10">
          <div className="flex items-center justify-center w-12 h-12 bg-brand rounded-lg mb-4 group-hover:scale-110 group-hover:bg-white transition-transform duration-300">
            <Icon className="w-6 h-6 text-white group-hover:text-brand" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
            {description}
          </p>

          {features && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-brand group-hover:bg-white rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <Link
            href={href}
            className="inline-flex items-center font-semibold group-hover:text-white text-bg-brand transition-colors group/link"
          >
            Learn More
            <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </motion.div>
  );
};

export default ServiceCard;