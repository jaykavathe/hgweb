'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const strengthPoints = [
  {
    id: 1,
    title: "Skilled & Diverse Team",
    description: "Our team, experts in patent drafting, has a 93% success rate globally, specializing in Electrical, Electronics, Communication, Instrumentation, and OS, with graduates from top universities like UH, IIT, BITS, NIT, PEO.",
    image: "/strength/div.webp",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "Tailored Flexibility",
    description: "Our team dynamically adapts to client needs, scaling and tailoring expertise for specific requirements. We accommodate rush requests, rotate specialists, and efficiently manage cross-location collaboration, ensuring a personalized, smooth service through our adept coordination and flexible team composition.",
    image: "/strength/str.webp",
    imagePosition: "left"
  }
];

const StrengthSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[80%] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          What Makes Our Process Unique Yet Efficient?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-gray-600 mb-20"
        >
          Discover how our unique approach delivers exceptional results
        </motion.p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-blue-300 -translate-x-1/2" />

          {/* Strength Points */}
          <div className="relative space-y-32">
            {strengthPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="space-y-4 pr-16">
                        <div className="flex items-center gap-4">
                          <span className="text-7xl font-light text-blue-300">#{point.id}</span>
                          <h3 className="text-2xl font-semibold text-gray-900">{point.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{point.description}</p>
                      </div>
                      {/* Image */}
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
                        >
                          <Image
                            src={point.image}
                            alt={point.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image */}
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
                        >
                          <Image
                            src={point.image}
                            alt={point.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                      <div className="space-y-4 pl-16">
                        <div className="flex items-center gap-4">
                          <span className="text-7xl font-light text-blue-300">#{point.id}</span>
                          <h3 className="text-2xl font-semibold text-gray-900">{point.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{point.description}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthSection; 