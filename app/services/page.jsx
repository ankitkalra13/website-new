'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  FileText, 
  CreditCard, 
  Scale, 
  Calculator,
  Globe,
  CheckCircle,
  ChevronRight,
  Star,
  Users
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Business Setup',
      description: 'Complete business formation services in Dubai and UAE free zones with expert guidance and support.',
      features: [
        'Free Zone Company Formation',
        'Mainland Business Setup',
        'License Processing & Approval',
        'Trade Name Registration',
        'MOA & AOA Preparation',
        'Initial Approvals'
      ],
      href: '/contact',
    },
    {
      icon: FileText,
      title: 'PRO Services',
      description: 'Professional government relations services for all your official document and visa processing needs.',
      features: [
        'Visa Processing & Renewals',
        'Document Attestation',
        'Government Relations',
        'License Renewals',
        'Emirates ID Processing',
        'Labor Card Services'
      ],
      href: '/contact',
    },
    {
      icon: CreditCard,
      title: 'Banking Solutions',
      description: 'Streamlined corporate banking setup with major UAE banks and comprehensive financial services.',
      features: [
        'Corporate Account Opening',
        'Trade Finance Solutions',
        'Investment Banking',
        'Credit Facilities',
        'Online Banking Setup',
        'Multi-Currency Accounts'
      ],
      href: '/contact',
    },
    {
      icon: Scale,
      title: 'Legal Services',
      description: 'Comprehensive legal support for business operations, compliance, and regulatory requirements in the UAE.',
      features: [
        'Contract Drafting & Review',
        'Legal Consultation',
        'Regulatory Compliance',
        'Dispute Resolution',
        'IP Protection',
        'Employment Law'
      ],
      href: '/contact',
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Professional accounting and bookkeeping services to keep your business finances organized and compliant.',
      features: [
        'Bookkeeping & Accounting',
        'Tax Consultation',
        'VAT Registration & Filing',
        'Financial Reporting',
        'Payroll Management',
        'Audit Support'
      ],
      href: '/contact',
    },
    {
      icon: Globe,
      title: 'Business Consulting',
      description: 'Strategic business consulting services to help you make informed decisions and grow your business.',
      features: [
        'Market Research',
        'Business Planning',
        'Growth Strategy',
        'Feasibility Studies',
        'Investment Consulting',
        'Exit Strategy Planning'
      ],
      href: '/contact',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free consultation to understand your business requirements and goals.'
    },
    {
      step: '02',
      title: 'Planning & Strategy',
      description: 'Develop a customized plan based on your specific business needs.'
    },
    {
      step: '03',
      title: 'Documentation',
      description: 'Prepare and submit all required documents and applications.'
    },
    {
      step: '04',
      title: 'Processing',
      description: 'Handle all government procedures and approvals on your behalf.'
    },
    {
      step: '05',
      title: 'Completion',
      description: 'Deliver your completed setup with ongoing support as needed.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Successfully served over 500 businesses across various industries'
    },
    {
      icon: CheckCircle,
      title: '99% Success Rate',
      description: 'Proven track record with highest success rate in the industry'
    },
    {
      icon: Star,
      title: 'Expert Team',
      description: 'Experienced professionals with deep knowledge of UAE regulations'
    },
    {
      icon: Globe,
      title: 'Comprehensive Service',
      description: 'One-stop solution for all your business setup and support needs'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-cover py-10 overflow-hidden" style={{backgroundImage: "url('https://dubiz.co/public/assets/img/breadcrumbImages/services.webp')", }}>
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

        <div className="container px-4 mx-auto relative z-20 text-center py-12">
          <h1 className="text-4xl text-white font-bold animate-fadeInUp">Services</h1>
          <ul className="flex items-center justify-center gap-2 mt-5 animate-fadeInUp text-white">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <ChevronRight className="inline-block" size={16} />
            </li>
            <li>Services</li>
          </ul>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-20 bg-cover" id="services" style={{backgroundImage: "url('https://dubiz.co/public/assets/img/service/service-bg.webp')", }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From business setup to ongoing support, we provide everything you need to establish and grow your business in the UAE
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, streamlined process to get your business up and running quickly
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-bg-brand to-transparent -z-10"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dubiz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best service and support for your business success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}