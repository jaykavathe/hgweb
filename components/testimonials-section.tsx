'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Their innovative approach to patent law has transformed how we protect our intellectual property. The team's expertise and attention to detail are unmatched in the industry.",
    author: {
      name: "Emily Rodriguez",
      role: "Head of Innovation",
      company: "TechVision Labs",
      image: "/test/t1.webp"
    }
  },
  {
    quote: "Working with their team has been a game-changer for our IP strategy. They don't just file patents; they understand our technology and help us build a comprehensive protection framework.",
    author: {
      name: "David Kim",
      role: "CTO",
      company: "Quantum Dynamics",
      image: "/test/t2.webp"
    }
  },
  {
    quote: "The level of expertise and professionalism is exceptional. They've helped us secure crucial patents that have become cornerstone assets for our company.",
    author: {
      name: "Rachel Chen",
      role: "VP of Research",
      company: "BioTech Solutions",
      image: "/test/t3.webp"
    }
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            <span className="text-slate-900">What Our </span>
            <span className="text-blue-500">Clients</span>
            <span className="text-slate-900"> Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Trusted by industry leaders in technology and innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-blue-500/20 translate-y-[1rem] 
                            rounded-2xl blur-xl transition-all duration-300 group-hover:translate-y-[1.2rem]
                            group-hover:from-blue-500/15 group-hover:to-blue-500/25" />
              
              <div className="relative bg-white rounded-2xl p-8 min-h-[420px] transition-all duration-300
                            shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm
                            hover:shadow-[0_15px_35px_rgb(0,0,0,0.12)]
                            hover:-translate-y-2 hover:bg-white">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.3 
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full 
                            flex items-center justify-center mb-6 
                            shadow-[0_4px_10px_rgb(59,130,246,0.3)]
                            transition-all duration-300 
                            group-hover:scale-110 group-hover:shadow-[0_6px_15px_rgb(59,130,246,0.35)]"
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.4 }}
                  className="mb-8"
                >
                  <p className="text-gray-700 leading-relaxed text-lg italic font-serif">
                    "{testimonial.quote}"
                  </p>
                </motion.div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative 
                                shadow-[0_4px_10px_rgb(0,0,0,0.08)]
                                transition-all duration-300 
                                group-hover:scale-105 
                                group-hover:shadow-[0_6px_15px_rgb(0,0,0,0.12)]">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {testimonial.author.name}
                      </h4>
                      <p className="text-blue-600 font-medium mb-1">
                        {testimonial.author.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.author.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 