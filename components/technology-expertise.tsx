'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const technologies = [
  {
    id: "electronics",
    title: "Electronics",
    image: "/tech/el.webp",
    items: [
      "Imaging cell array",
      "Optoelectronic circuits and nano fabrication",
      "Micro resonators",
      "Semiconductor packaging, fabrication & assembly",
      "VLSI device design and Test bench (entire ASIC workflow)",
      "Automatic test equipment/ EDA tools and scan testing",
      "MEMS"
    ]
  },
  {
    id: "computing",
    title: "Computing",
    image: "/tech/comp.webp",
    items: [
      "Artificial Neural networks",
      "Internet of Things (IoT)",
      "Cryptocurrencies",
      "Encryption, Hashing",
      "DBMS, Cloud computing",
      "Business management methods",
      "ERP, CRM",
      "Secure communication",
      "Enterprise networks",
      "Omni-channel commerce"
    ]
  },
  {
    id: "chemical",
    title: "Chemical",
    image: "/tech/chem.webp",
    items: [
      "Organic/ Inorganic compounds",
      "Polymers",
      "Oil well operations",
      "Chemical processes and technologies",
      "Specialty Chemicals",
      "Equipment Manufacturing and Simulation",
      "Refining processes",
      "Nano-compounds"
    ]
  },
  {
    id: "electro-mechanical",
    title: "Electro Mechanical",
    image: "/tech/em.webp",
    items: [
      "Domestic appliances",
      "HVAC systems",
      "Motors",
      "Pumps",
      "Unmanned aerial vehicles",
      "Turbines",
      "Fans and blowers",
      "MEMS",
      "Material science",
      "Electric machines",
      "Leadership"
    ]
  }
];

const TechnologyExpertise = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[80%] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          Our Varied Technology Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-gray-600 mb-16"
        >
          Expertise across multiple technology domains with proven success
        </motion.p>

        <Accordion type="single" collapsible className="space-y-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem 
                value={tech.id}
                className="rounded-lg border-2 border-gray-200 overflow-hidden bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-200 group"
              >
                <AccordionTrigger className="px-6 py-8 hover:no-underline data-[state=open]:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl text-gray-900 text-left group-hover:text-blue-600 transition-colors duration-200">
                      {tech.title}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-blue-600" />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-8 pt-2 bg-gray-50">
                    <div className="grid grid-cols-[2fr_1fr] gap-8 items-start">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {tech.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all duration-200" />
                            <p className="text-gray-600 text-sm group-hover/item:text-gray-900 transition-colors duration-200">{item}</p>
                          </motion.div>
                        ))}
                      </div>
                      <div className="relative w-1/2 aspect-[4/3] rounded-lg overflow-hidden mx-auto shadow-lg">
                        <Image
                          src={tech.image}
                          alt={tech.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TechnologyExpertise; 