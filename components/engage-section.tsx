'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EngageSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-[#3D82F4]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-[80%] mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-medium text-white mb-16"
        >
          Read More On How We Engage
        </motion.h2>

        <div className="grid grid-cols-2 gap-16">
          {/* First Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/engage/en1.webp"
                alt="Corporate Meeting"
                fill
                className="object-cover"
              />
              {/* Enhanced Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D82F4]/30 to-transparent" />
            </div>
            <div className="space-y-6">
              {/* Enhanced Title Styling */}
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/30" />
                <h3 className="text-3xl font-medium text-white pl-6 border-l-2 border-white">
                  When It Comes To Corporate
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Our company offers health insurance, retirement plans, flexible working hours, professional growth opportunities, and wellness programs to support and enhance our employees' personal and professional lives.
              </p>
              <a href="/strategies" 
                className="inline-flex items-center gap-2 text-white text-lg group hover:text-white/90 transition-colors"
              >
                Read More On Our Strategies
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Second Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/engage/en2.webp"
                alt="Startup Team"
                fill
                className="object-cover"
              />
              {/* Enhanced Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D82F4]/30 to-transparent" />
            </div>
            <div className="space-y-6">
              {/* Enhanced Title Styling */}
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/30" />
                <h3 className="text-3xl font-medium text-white pl-6 border-l-2 border-white">
                  We Understand At Startups
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Discover our company's benefits: comprehensive health insurance, secure retirement plans, flexible schedules, opportunities for professional development, and wellness programs to enrich our employees' work-life balance and career growth.
              </p>
              <a href="/strategies" 
                className="inline-flex items-center gap-2 text-white text-lg group hover:text-white/90 transition-colors"
              >
                Read More On Our Strategies
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngageSection; 