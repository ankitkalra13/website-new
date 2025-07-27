'use client';
import SpinnerLoader from "@/components/SpinnerLoader"; 
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BlogCard from './BlogCard';
import Link from 'next/link';


export default function BlogSlider() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await import('../lib/blogs.json');
      setBlogPosts(response.default);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="py-20 bg-[#F3F7FB]">
      <div className="container mx-auto px-4 ">
        <div className="mb-12">
          <p className="text-base text-brand">Stay updated with</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Insights on UAE Business Setup
          </h2>
          <p className="text-gray text-sm">
            Stay updated on latest insights and trends about business formation in Dubai through our expert articles. Find out what’s new in UAE’s vibrant business landscape.
          </p>
        </div>

        {loading ? (
          <SpinnerLoader />
          ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            loop={true}
            speed={800}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {blogPosts.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogCard {...blog} delay={0} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="text-center mt-8">
          <Link href="/blog" className="theme-btn mt-5">
            View All Articles
            <ArrowRight className="ml-2 inline-block" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
