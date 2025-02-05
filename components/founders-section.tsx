'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const founders = [
  {
    name: "Gouraj Yadav",
    role: "CEO & Co-Founder",
    image: "/founders/gy.webp",
    description: "With over 15 years of experience in intellectual property law, Gouraj leads our strategic vision and operations. His innovative approach to patent drafting has revolutionized how we serve our clients."
  },
  {
    name: "Ojas Sabnis",
    role: "CTO & Co-Founder",
    image: "/founders/os.webp",
    description: "A former patent examiner turned tech innovator, Ojas brings unique insights into patent prosecution. His technical expertise ensures our patent applications meet the highest quality standards."
  }
];

const FoundersSection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            <span className="text-white">Meet Our </span>
            <span className="text-blue-500">Founders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Combining decades of expertise in intellectual property law and innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-24">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8 relative">
                <div className="absolute -top-4 -left-4 w-[400px] h-[400px] rounded-2xl border-2 border-blue-500/30" />
                <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden bg-slate-800">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-blue-500/50 rounded-br-2xl" />
              </div>

              <h3 className="text-white text-2xl font-bold mb-2">{founder.name}</h3>
              <div className="w-12 h-1 bg-blue-500 mb-4"></div>
              <p className="text-blue-400 font-medium mb-6">{founder.role}</p>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                {founder.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection; 