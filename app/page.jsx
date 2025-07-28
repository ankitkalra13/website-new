'use client';

import { motion } from 'framer-motion';
import IMAGES from '@/lib/images';
import Link from 'next/link';
import faqItems from '../lib/faqItems.json';
import { ArrowRight, Phone, Check, ArrowLeft} from 'lucide-react';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import Accordion from '@/components/Accordion';
import { services } from '../lib/servicesData';
import BlogSlider from '@/components/BlogSlider';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import HomePageMainSlider from '@/components/HomePageMainSlider';
import Jurisdictions from '@/components/Jurisdictions';



export default function Home() {


  return (
    <div>
      <section className="relative h-[500px] max-h-[90vh] xxl:h-[70vh] sm:h-[450px] sm:max-h-[600px]">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }} className='absolute top-[105px] sm:top-[50px] z-10 translate-x-[-50%] w-full'> 
              <div className="">
                <p className="text-white text-base mb-5 sm:mx-auto text-center">
                  You are unstoppable, so is your</p>
                <p className="text-white mb-5 xl:text-[56px] xl:leading-[64px] lg:text-heading3 md:text-textxl sm:text-xl sm:max-w-[70%] sm:mx-auto sm:whitespace-break-spaces	 font-semibold text-center whitespace-pre	drop-shadow-md">
                  Business Setup in Dubai with Dubiz</p>

                <p className='text-white text-base sm:max-w-[90%] sm:mx-auto text-center'>
                  <b>4k+ Success Stories | 7+ Years of Excellence | End-to-End Services</b><br/>  
                  We are here to make your entrepreneurial dreams faster, affordable, and completely
                  stress-free!</p>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                viewport={{ once: true }} className="flex items-center h-full">
                <div className="flex items-center h-full w-full">
                  <Link href="/contact" rel="noopener noreferrer" className="flex h-full w-[50%] items-center relative overflow-hidden group">
                    
                    <div>
                      <div className="absolute right-0 left-0 top-0 bottom-0 z-[1] bg-black opacity-50 sm:opacity-70"></div>
                      <div className="absolute left-[-40px] top-0 right-0 bg-right-bottom z-[-1] bottom-0 transition-transform duration-1000 transform group-hover:translate-x-10 bg-no-repeat" style={{ backgroundImage: `url(${IMAGES.HomeNew.banner1.src})`, backgroundSize: 'cover' }}>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }} className="ml-auto">
                      
                      <div className="bg-brand border border-brand shadow-md text-white text-sm sm:text-xs px-5 pl-10 sm:px-2 font-bold sm:font-medium rounded-s-[5px] h-[50px] flex items-center mt-[150px] sm:mt-[250px] relative z-[2] transition-all duration-300 ease-in-out group-hover:from-[#0363C4] group-hover:to-[#022B5C]">
                        <ArrowLeft size={20} className="transition-transform duration-200 transform group-hover:translate-x-[-20px] sm:group-hover:translate-x-[-3px] sm:w-[14px] sm:h-[14px]"></ArrowLeft>
                        <span className="ml-1"> Free Consultation </span>
                      </div>
                    </motion.div>

                  </Link>

                  <Link href="/services" rel="noopener noreferrer" className="flex h-full w-[50%] items-center relative overflow-hidden group">
                    
                    <div>
                      <div className="absolute left-0 right-[-40px] bg-right-bottom bg-no-repeat z-[-1] bottom-0 top-0 transition-transform duration-1000 transform group-hover:translate-x-[-40px]" style={{ backgroundImage: `url(${IMAGES.HomeNew.banner2.src})`, backgroundSize: 'cover' }}>
                      </div>
                      <div className="absolute right-0 left-0 top-0 bottom-0 z-[1] bg-black opacity-50 sm:opacity-70"></div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }} className="mr-auto">

                      <div className="bg-white border border-brand shadow-md text-brand text-sm px-5 sm:text-xs pr-10 sm:px-2 font-bold sm:font-medium rounded-e-[5px] h-[50px] mr-auto flex items-center mt-[150px] sm:mt-[250px] relative z-[2]">
                        <span className="mr-1">  View Services </span>
                          <ArrowRight size={20} className="transition-transform duration-200 transform group-hover:translate-x-[20px] sm:group-hover:translate-x-[3px] sm:w-[14px] sm:h-[14px]"></ArrowRight>
                      </div>
                    </motion.div>
                  </Link>
                </div>
            </motion.div>  
      </section>

      {/* Jurisdictions */}
      <Jurisdictions />

      {/* About Section */}
      <section className="py-20 sm:py-10 mb-16 sm:mb-0">
        <div className='container mx-auto px-4'>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column */}
            <div className="w-full lg:w-[45%] relative">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}> 
                {/* Counter Box */}
                <div className="absolute bottom-[30px] -left-[50px] sm:left-0 z-10 bg-white shadow-md flex items-center gap-4 p-6 animate-[float-bob-y_3s_linear_infinite]">
                  <div className="w-8 h-8">
                    <Image
                      width={200} height={200}
                      src="https://dubiz.co/public/assets/img/about/icon-1.svg"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="text-black text-2xl font-bold">
                    4,000<span className="text-base">+</span>
                  </p>
                </div>

                {/* Main Image Container */}
                <div
                  className="relative bg-cover bg-center max-w-[415px] h-[445px]"
                  style={{
                    backgroundImage:
                      'url(https://dubiz.co/public/assets/img/about/about1.webp)',
                  }}
                >
                  {/* Decorative Border */}
                  <div className="absolute right-[-55px] top-[20%] w-full h-[88%] border-4 border-orange-500 z-[-1] sm:hidden"></div>

                  {/* Overlay Image */}
                  <div className="absolute bottom-[-13%] right-[-35%] w-[249px] h-[272px] sm:hidden">
                    <Image 
                      width={200} height={200}
                      src="https://dubiz.co/public/assets/img/about/about2.webp"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}> 
                <div className="mb-6">
                  <p className="text-brand font-semibold uppercase tracking-wide">
                    Dubiz Stands As
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Most Trusted Business Setup Consultancy in Dubai & UAE
                  </h2>
                </div>

                <p className="text-gray-700 mb-6">
                  With us, your company setup in Dubai is just the beginning of an extraordinary journey. Our
                  value-added services ensure your business not only gets started but flourishes in the vibrant UAE market.
                </p>

                <hr className="mb-6" />

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2 text-gray-800">
                    <Check className="text-brand w-5 h-5 mt-1" />
                    End-to-end company formation in UAE.
                  </li>
                  <li className="flex items-start gap-2 text-gray-800">
                    <Check className="text-brand w-5 h-5 mt-1" />
                    Transparent and hassle-free process.
                  </li>
                  <li className="flex items-start gap-2 text-gray-800">
                    <Check className="text-brand w-5 h-5 mt-1" />
                    Custom packages at unmatched price.
                  </li>
                </ul>

                <div className="flex sm:flex-col items-start gap-6">
                  <Link
                    href="/services"
                    className="theme-btn"
                  >
                    Get To Know Us
                    <ArrowRight className="inline-block ml-2" size={20} />
                  </Link>

                  <a href="tel:+971563695485" className="flex items-center gap-3">
                    <div className="bg-brand p-3 rounded-full flex justify-center items-center">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call Us Now</p>
                      <p className="text-lg font-semibold text-gray-900">
                        +971 563695485
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Setup in Dubai */}
      <section className="relative py-20 sm:py-10 bg-cover bg-center overflow-hidden bg-fixed" style={{
        backgroundImage: 'url(https://dubiz.co/public/assets/img/Business-Setup-in-Dubai-the-Dubiz-difference.webp)',   }}>
        <div
          className="absolute inset-0 w-full h-full opacity-75 z-0"
          style={{
            backgroundImage: 'linear-gradient(270.07deg, #002B98 0.07%, #00060C 99.95%)',
          }}
        />

        {/* Content */}
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}> 
            <div className="relative z-10 container mx-auto px-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="relative">
                  <h2 className="text-center text-white text-3xl lg:text-4xl font-bold">
                    Business Setup in Dubai – the Dubiz difference
                  </h2>
                  <p className="text-center text-white mt-4">
                    Dubai is the city of dreams. The city's unmatched infrastructure, strategic location, pro-business
                    policies, tax incentives, and lavish economy make business setup in Dubai a perfect choice for worldwide
                    entrepreneurs.
                  </p>
                  <p className="text-center text-white mt-2">
                    Dubiz has been in the game for long. With our years of experience, we have mastered the process of
                    establishing successful ventures in this dynamic city. We have the networks, the right team, and the
                    expertise in the industry. If you are looking for a new company setup in Dubai or want to expand an
                    existing business here, let us know. We will make the journey one to remember for you.
                  </p>

                  <div className="text-center mt-6">
                    <Link href="/contact" className="theme-btn secondary light-mode">
                      Let’s Do It
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </motion.div>
      </section>

      {/* Slider Section */}
      <HomePageMainSlider />    

      {/* Packages */}
      <section id="packages" className='py-20 sm:py-10'>
        <div className="container mx-auto px-4"> 
          <div className="section-title-area mb-3 md:mb-0">
            <div className="section-title relative mb-[30px] -mt-[7px]">
              <p className="section-p text-brand mb-2 inline-block font-medium uppercase">
                Effortless Company Formation in UAE Begins Here
              </p>
              <h2 className="text-3xl lg:text-4xl text-brand font-bold mb-5">
                Our Dubai Company Setup Packages
              </h2>
              <p className='text-gray text-base'>Get customized company formation services Dubai at best prices</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}> 
            {/* Pricing cards */}
            <div className="flex sm:flex-col gap-10">
              {/* Mainland Package */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items border border-brand h-full mt-0 flex flex-col justify-between rounded-[16px] p-[25px_40px_40px] sm:px-[20px] relative transition-all duration-400">
                  {/* <div className="tag absolute top-[40px] right-0 bg-brand inline-block px-[18px] py-[14px] pl-[40px] overflow-hidden">
                    <p className="pricing-tag">Mainland</p>
                  </div> */}

                  <div className="tag absolute top-[40px] right-0 bg-brand inline-block px-[18px] py-[14px] pl-[40px] overflow-hidden">
                    {/* Triangle */}
                    <div className="absolute -left-[22px] bottom-[13%] w-0 h-0 rotate-[135deg] border-t-[32px] border-t-[#f3f7fb] border-r-[37px] border-r-transparent"></div>

                    {/* Label */}
                    <p className="pricing-tag text-white font-semibold relative z-10">Mainland</p>
                  </div>

                  <div className="pricing-header border-b pb-[25px]">
                    <p className="price pricing-p mt-[20px] mb-[20px] text-[38px] sm:text-[28px] font-bold">AED 17,900*</p>
                    <h3 className="pricing-h3 text-[18px] font-medium text-black inline-block">Professional License</h3>
                    <p>
                      Deliver expert services across Dubai Mainland with our professional license package and turn your business dreams into reality.
                    </p>
                  </div>
                  <ul className="pricing-list mt-10 flex-grow font-semibold">
                    {[
                      'Initial Approval',
                      'Tradename Registration',
                      'Memorandum Of Association',
                      'Company Incorporation',
                      'PRO Services Inc. VAT',
                      'Establishment Card',
                      'Investor Visa',
                      'Medical Test',
                      'Emirates ID',
                      'Status Change',
                      'Tax Consultation',
                      'Bank Account Assistance'
                    ].map((item, i) => (
                      <li key={i} className={`${i < 11 ? 'mb-[10px]' : ''} flex items-center gap-2`}>
                      <Check className="text-brand w-5 h-5 mr-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-button mt-[30px]">
                    <p className="text-start">T&amp;Cs apply*</p>
                    <Link href="/contact" className="pricing-btn mt-4 inline-block w-full text-center bg-transparent text-brand text-[16px] font-semibold py-[24px] px-[40px] border border-brand rounded-[36px] hover:bg-brand hover:text-white transition-colors duration-300">
                      Book Now <i className="fa-solid fa-arrow-right-long ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Freezone Package */}
              
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items border border-brand h-full mt-0 flex flex-col justify-between rounded-[16px] p-[25px_40px_40px] sm:px-[20px] relative transition-all duration-400">
                  {/* <div className="tag absolute top-[40px] right-0 bg-brand inline-block px-[18px] py-[14px] pl-[40px] overflow-hidden">
                    <p className="pricing-tag">Mainland</p>
                  </div> */}

                  <div className="tag absolute top-[40px] right-0 bg-brand inline-block px-[18px] py-[14px] pl-[40px] overflow-hidden">
                    {/* Triangle */}
                    <div className="absolute -left-[22px] bottom-[13%] w-0 h-0 rotate-[135deg] border-t-[32px] border-t-[#f3f7fb] border-r-[37px] border-r-transparent"></div>

                    {/* Label */}
                    <p className="pricing-tag text-white font-semibold relative z-10">Freezone</p>
                  </div>

                  <div className="pricing-header border-b pb-[25px]">
                    <p className="price pricing-p mt-[20px] mb-[20px] text-[38px] sm:text-[28px] font-bold">AED 17,900*</p>
                    <h3 className="pricing-h3 text-[18px] font-medium text-black inline-block">Professional License</h3>
                    <p>
                      Deliver expert services across Dubai Mainland with our professional license package and turn your business dreams into reality.
                    </p>
                  </div>
                  <ul className="pricing-list mt-10 flex-grow font-semibold">
                    {[
                      'Initial Approval',
                      'Tradename Registration',
                      'Memorandum Of Association',
                      'Company Incorporation',
                      'PRO Services Inc. VAT',
                      'Establishment Card',
                      'Investor Visa',
                      'Medical Test',
                      'Emirates ID',
                      'Status Change',
                      'Tax Consultation',
                      'Bank Account Assistance'
                    ].map((item, i) => (
                      <li key={i} className={`${i < 11 ? 'mb-[10px]' : ''} flex items-center gap-2`}>
                      <Check className="text-brand w-5 h-5 mr-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-button mt-[30px]">
                    <p className="text-start">T&amp;Cs apply*</p>
                    <Link href="/contact" className="pricing-btn mt-4 inline-block w-full text-center bg-transparent text-brand text-[16px] font-semibold py-[24px] px-[40px] border border-brand rounded-[36px] hover:bg-brand hover:text-white transition-colors duration-300">
                      Book Now <i className="fa-solid fa-arrow-right-long ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Offshore Package */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items border border-brand h-full mt-0 flex flex-col justify-between rounded-[16px] p-[25px_40px_40px] sm:px-[20px] relative transition-all duration-400">
                  {/* <div className="tag absolute top-[40px] right-0 bg-brand inline-block px-[18px] py-[14px] pl-[40px] overflow-hidden">
                    <p className="pricing-tag">Mainland</p>
                  </div> */}

                  <div className="tag absolute top-[40px] right-0 bg-brand inline-block px-[18px] py-[14px] pl-[40px] overflow-hidden">
                    {/* Triangle */}
                    <div className="absolute -left-[22px] bottom-[13%] w-0 h-0 rotate-[135deg] border-t-[32px] border-t-[#f3f7fb] border-r-[37px] border-r-transparent"></div>

                    {/* Label */}
                    <p className="pricing-tag text-white font-semibold relative z-10">Offshore</p>
                  </div>

                  <div className="pricing-header border-b pb-[25px]">
                    <p className="price pricing-p mt-[20px] mb-[20px] text-[38px] sm:text-[28px] font-bold">AED 17,900*</p>
                    <h3 className="pricing-h3 text-[18px] font-medium text-black inline-block">Professional License</h3>
                    <p>
                      Deliver expert services across Dubai Offshore with our professional license package and turn your business dreams into reality.
                    </p>
                  </div>
                  <ul className="pricing-list mt-10 flex-grow font-semibold">
                    {[
                      'Initial Approval',
                      'Tradename Registration',
                      'Memorandum Of Association',
                      'Company Incorporation',
                      'PRO Services Inc. VAT',
                      'Establishment Card',
                      'Investor Visa',
                      'Medical Test',
                      'Emirates ID',
                      'Status Change',
                      'Tax Consultation',
                      'Bank Account Assistance'
                    ].map((item, i) => (
                      <li key={i} className={`${i < 11 ? 'mb-[10px]' : ''} flex items-center gap-2`}>
                      <Check className="text-brand w-5 h-5 mr-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-button mt-[30px]">
                    <p className="text-start">T&amp;Cs apply*</p>
                    <Link href="/contact" className="pricing-btn mt-4 inline-block w-full text-center bg-transparent text-brand text-[16px] font-semibold py-[24px] px-[40px] border border-brand rounded-[36px] hover:bg-brand hover:text-white transition-colors duration-300">
                      Book Now <i className="fa-solid fa-arrow-right-long ml-2"></i>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          
            {/* View All Packages Button */}
            <div className="mt-10">
              <div className="col-lg-12 text-center mt-3">
                <Link href="/services" className="theme-btn wow fadeInUp custom-theme-btn">
                  <p>View All Packages</p>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-10 bg-[#F3F7FB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }} className='text-center mb-12'>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive business solutions tailored to your needs in the UAE
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
           initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}>
            <div className="mt-10">
              <div className="col-lg-12 text-center mt-3">
                <Link href="/services" className="theme-btn wow fadeInUp custom-theme-btn">
                  <p>View All Services</p>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>      

      {/* Testimonials */}
      <TestimonialsSlider />
        

      {/* Blog Section */}
       <BlogSlider/>

      {/* FAQ Section */}
      <section className="py-20 sm:py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray">
              Get answers to common questions about business setup and our services
            </p>
          </motion.div>

          <div>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}