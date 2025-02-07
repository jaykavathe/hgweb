'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const locations = [
  {
    city: "Bengaluru",
    country: "India",
    address: "Brigade Tech Park, Whitefield",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8269587398!2d77.7147!3d12.9792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329c73049b1%3A0x81a90c81c26ac452!2sBrigade%20Tech%20Park!5e0!3m2!1sen!2sin!4v1616816674432!5m2!1sen!2sin"
  },
  {
    city: "San Jose",
    country: "USA",
    address: "North First Street",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-121.8853!3d37.3387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca1767e346b%3A0x91cc475f42f7a0e4!2sN%201st%20St%2C%20San%20Jose%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1616816674432!5m2!1sen!2sin"
  }
];

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Solutions", href: "/solutions" },
  { title: "Knowledge", href: "/knowledge" },
  { title: "Careers", href: "/careers" }
];

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" }
];

const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1C4ED8] via-[#3D82F4] to-[#5280F1] text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-[80%] mx-auto py-24 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-12 mb-16">
          {/* Company Info - First Column */}
          <div className="flex flex-col">
            {/* Contact Button */}
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-[#3D82F4] hover:bg-white/90 font-medium text-lg px-8 py-6 h-auto w-fit mb-8"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Company Name */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 w-fit mb-12">
              <span className="text-6xl font-bold">Hourglass</span>
            </div>

            {/* Company Description */}
            <div className="max-w-xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white/90 text-2xl font-light leading-relaxed tracking-wide"
              >
                Creating high-value patent portfolios for corporations and startups 
                <span className="block mt-2">
                  with our innovative approach to
                </span>
                <span className="block mt-2 text-white font-normal">
                  intellectual property protection.
                </span>
              </motion.p>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Connect</h3>
            <div className="space-y-6">
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </div>
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </div>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Quick Links</h3>
            <ul className="space-y-6">
              {quickLinks.map(link => (
                <li key={link.title}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Legal</h3>
            <ul className="space-y-6">
              {legalLinks.map(link => (
                <li key={link.title}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations - Last Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Our Offices</h3>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.city} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{location.city}, {location.country}</h4>
                      <p className="text-white/80 text-sm">{location.address}</p>
                    </div>
                  </div>
                  <div className="relative h-[160px] rounded-xl overflow-hidden">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex justify-between items-center">
          <p className="text-white/60 text-base">
            © {new Date().getFullYear()} Hourglass. All rights reserved.
          </p>
          <div className="flex gap-12">
            <a href="tel:+1234567890" className="flex items-center gap-3 text-white/80 hover:text-white text-lg">
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@hourglass.com" className="flex items-center gap-3 text-white/80 hover:text-white text-lg">
              <Mail className="w-5 h-5" />
              <span>info@hourglass.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 