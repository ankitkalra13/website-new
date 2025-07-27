'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle, 
  Users, 
  Clock, 
  Shield,
  Globe,
  Star,
  ChevronRight,
  FileText,
  TrendingUp
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Accordion from '@/components/Accordion';
import Image from 'next/image';


export default function GoldenVisa() {
  const benefits = [
    {
      icon: Clock,
      title: '10-Year Residency',
      description: 'Long-term residency visa valid for 10 years with renewal options'
    },
    {
      icon: Users,
      title: 'Family Inclusion',
      description: 'Sponsor your spouse, children, and parents under the same visa'
    },
    {
      icon: Globe,
      title: 'Multiple Entry',
      description: 'Unlimited entries to the UAE with no maximum stay period'
    },
    {
      icon: Shield,
      title: 'No Sponsor Required',
      description: 'Independent residency without need for employer sponsorship'
    }
  ];

  const eligibilityCategories = [
    {
      icon: TrendingUp,
      title: 'Investors',
      description: 'Real estate, business, or fund investors meeting minimum thresholds',
      features: [
        'Real estate investment of AED 2 million+',
        'Business investment of AED 500,000+',
        'Investment fund contributions',
        'Partnership in existing business'
      ],
      href: '/contact',
    },
    {
      icon: Award,
      title: 'Entrepreneurs',
      description: 'Innovative entrepreneurs with approved business projects',
      features: [
        'Approved startup project',
        'Previous entrepreneurial success',
        'Innovation-focused business',
        'Economic contribution potential'
      ],
      href: '/contact',
    },
    {
      icon: Users,
      title: 'Skilled Professionals',
      description: 'Highly skilled professionals in specialized fields',
      features: [
        'Advanced degrees',
        'Specialized expertise',
        'Minimum salary requirements',
        'Professional achievements'
      ],
      href: '/contact',
    },
    {
      icon: FileText,
      title: 'Outstanding Students',
      description: 'Exceptional students from top universities worldwide',
      features: [
        'Top university graduates',
        'Exceptional academic performance',
        'STEM field specialization',
        'Research contributions'
      ],
      href: '/contact',
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Eligibility Assessment',
      description: 'Comprehensive evaluation of your qualifications and documents'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Gathering and attestation of all required certificates and documents'
    },
    {
      step: '03',
      title: 'Application Submission',
      description: 'Filing application with General Directorate of Residency and Foreigners Affairs'
    },
    {
      step: '04',
      title: 'Review & Approval',
      description: 'Government review and approval process (typically 30-60 days)'
    },
    {
      step: '05',
      title: 'Visa Issuance',
      description: 'Golden Visa issuance and Emirates ID processing'
    }
  ];

  const requirements = [
    {
      title: 'Investment Requirements',
      content: 'For real estate investors: minimum AED 2 million property investment. For business investors: minimum AED 500,000 capital investment in new or existing business. Investment must be maintained for at least 3 years.'
    },
    {
      title: 'Professional Requirements',
      content: 'PhD holders, specialized talents in medical, scientific, research, and technical fields. Minimum salary of AED 30,000 per month with valid employment contract. Exceptional students need minimum GPA of 3.75 from top universities.'
    },
    {
      title: 'Documentation Requirements',
      content: 'Valid passport, attested educational certificates, medical fitness certificate, police clearance certificate, passport-sized photographs, bank statements, and investment proof or employment contracts as applicable.'
    },
    {
      title: 'Financial Requirements',
      content: 'Proof of financial stability, bank statements for the last 6 months, salary certificates for professionals, and proof of investment for investors. All financial documents must be recent and properly attested.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Golden Visas Processed' },
    { number: '95%', label: 'Approval Rate' },
    { number: '45', label: 'Average Processing Days' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-cover py-10 overflow-hidden" style={{backgroundImage: "url('https://dubiz.co/public/assets/img/breadcrumbImages/dcsd.webp')", }}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-orange-700  opacity-75"></div>
        
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
          <h1 className="text-4xl text-white font-bold animate-fadeInUp">Services</h1>
          <ul className="flex items-center justify-center gap-2 mt-5 animate-fadeInUp text-white">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <ChevronRight className="inline-block" size={16} />
            </li>
            <li>Golden Visa</li>
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#242424]">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-white font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Golden Visa Benefits
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Enjoy exclusive benefits and privileges with the UAE Golden Visa program
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Categories */}
      <section className="py-20 bg-[#242424]" id="eligibility">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4">
              Eligibility Categories
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover if you qualify for the UAE Golden Visa under one of these categories
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityCategories.map((category, index) => (
              <ServiceCard
                key={category.title}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, streamlined process to secure your UAE Golden Visa
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent -z-10"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#242424]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-white">
              Hear from our successful Golden Visa clients
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                The Golden Visa process was seamless with Dubiz. Their expertise made what seemed complex very manageable. Now my family and I have long-term security in the UAE.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">David Rodriguez</h4>
                <p className="text-sm text-gray-600">Real Estate Investor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                As an entrepreneur, the Golden Visa opened up incredible opportunities. Dubiz handled everything professionally and kept us informed throughout the process.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                <p className="text-sm text-gray-600">Tech Entrepreneur</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Requirements & Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Detailed requirements for each Golden Visa category
            </p>
          </motion.div>

          <div className="mx-auto">
            <Accordion items={requirements} />
          </div>
        </div>
      </section>     
    </div>
  );
}