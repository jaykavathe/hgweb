'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-[80%] mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link href="/" className="font-bold text-2xl">Hourglass</Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <Link href="/about-us" className="text-base font-medium hover:text-blue-600 transition-colors">About Us</Link>
              <Link href="/services" className="text-base font-medium hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/solution" className="text-base font-medium hover:text-blue-600 transition-colors">Solution</Link>
              <Link href="/knowledge" className="text-base font-medium hover:text-blue-600 transition-colors">Knowledge</Link>
              <Link href="/testimonials" className="text-base font-medium hover:text-blue-600 transition-colors">Testimonials</Link>
            </div>
          </div>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex gap-6">
            <Link href="/client-login" 
              className="text-base px-6 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Client Login
            </Link>
            <Link href="/contact-us" 
              className="text-base px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/about-us" className="text-base font-medium hover:text-blue-600 transition-colors px-4 py-2">About Us</Link>
              <Link href="/services" className="text-base font-medium hover:text-blue-600 transition-colors px-4 py-2">Services</Link>
              <Link href="/solution" className="text-base font-medium hover:text-blue-600 transition-colors px-4 py-2">Solution</Link>
              <Link href="/knowledge" className="text-base font-medium hover:text-blue-600 transition-colors px-4 py-2">Knowledge</Link>
              <Link href="/testimonials" className="text-base font-medium hover:text-blue-600 transition-colors px-4 py-2">Testimonials</Link>
              <div className="flex flex-col gap-4 px-4 pt-4 border-t border-gray-100">
                <Link href="/client-login" 
                  className="text-base px-6 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                >
                  Client Login
                </Link>
                <Link href="/contact-us" 
                  className="text-base px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 