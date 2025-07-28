import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import testimonialsdata from '../lib/testimonialsdata.json';
import "swiper/css";


const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col lg:flex-row items-center gap-14 pb-10 sm:pb-0 px-4">
    <div
      className="w-full lg:w-[300px] h-[300px] bg-cover bg-center rounded-xl flex-shrink-0"
      style={{ backgroundImage: `url(${testimonial.image})` }}
    />
    <div className="flex-1 sm:hidden">
      <p className="text-xl text-brand uppercase">{testimonial.title}</p>
      <h3 className="text-2xl font-bold text-secondary mt-4">{testimonial.name}</h3>
      <p className="text-brand font-medium">{testimonial.position}</p>
      <p className="text-gray text-base mt-4">{testimonial.quote}</p>
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="py-20 sm:py-10 relative">
    <div className="absolute top-1/2 left-0 w-full h-full bg-brand -z-10" />
    <div className="container mx-auto px-4">
      <div className="bg-white p-[80px] border border-gray sm:px-[15px] sm:py-10 pt-10 rounded-xl shadow-lg mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-5"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear it from those who know us the best.
          </p>
        </motion.div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000 }}
          speed={800} 
        >
          {testimonialsdata.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
