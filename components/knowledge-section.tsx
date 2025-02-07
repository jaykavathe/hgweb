'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    category: "AI & Patents",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    title: "The Future of AI Patents: Navigating New Territory",
    description: "As artificial intelligence continues to evolve, understanding how to protect AI innovations becomes increasingly crucial...",
    image: "/blog/b1.webp"
  },
  {
    category: "Strategy",
    readTime: "12 min read",
    date: "Mar 10, 2024",
    title: "Global Patent Strategy: A Comprehensive Guide",
    description: "Developing a robust international patent portfolio requires careful planning and strategic execution...",
    image: "/blog/b2.webp"
  },
  {
    category: "Digital IP",
    readTime: "10 min read",
    date: "Mar 5, 2024",
    title: "IP Protection in the Digital Age",
    description: "Digital transformation has created new challenges for intellectual property protection in the modern era...",
    image: "/blog/b3.webp"
  },
  {
    category: "Legal Updates",
    readTime: "15 min read",
    date: "Mar 1, 2024",
    title: "Patent Law Updates: 2024 Overview",
    description: "Stay informed about the latest changes in patent law and their implications for your intellectual property strategy...",
    image: "/blog/b4.webp"
  }
];

const KnowledgeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            <span className="text-slate-900">Latest </span>
            <span className="text-[#3D82F4]">Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Expert perspectives on intellectual property and innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Category Tag - Now positioned on the image */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-4 py-1.5 bg-[#3D82F4] text-white rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                      {article.category}
                    </div>
                  </div>
                  {/* Optional: Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 line-clamp-2 group-hover:text-[#3D82F4] transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 line-clamp-2 text-sm">
                    {article.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/insights" className="inline-flex items-center gap-2 text-[#3D82F4] font-medium group">
            View All Articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeSection; 