import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hourglass - Patent Drafting Services",
  description: "Professional patent drafting services for Fortune 500 companies and startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <div className="max-w-[80%] mx-auto px-4">
            <nav className="flex justify-between items-center h-20">
              <div className="flex items-center gap-12">
                <a href="/" className="font-bold text-2xl">Hourglass</a>
                <div className="flex gap-8">
                  <a href="/about-us" className="text-base font-medium hover:text-blue-600 transition-colors">About Us</a>
                  <a href="/services" className="text-base font-medium hover:text-blue-600 transition-colors">Services</a>
                  <a href="/solution" className="text-base font-medium hover:text-blue-600 transition-colors">Solution</a>
                  <a href="/knowledge" className="text-base font-medium hover:text-blue-600 transition-colors">Knowledge</a>
                  <a href="/testimonials" className="text-base font-medium hover:text-blue-600 transition-colors">Testimonials</a>
                </div>
              </div>
              <div className="flex gap-6">
                <a href="/client-login" 
                  className="text-base px-6 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Client Login
                </a>
                <a href="/contact-us" 
                  className="text-base px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
