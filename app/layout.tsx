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
        <header className="fixed w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-[80%] mx-auto px-4">
            <nav className="flex justify-between items-center h-16">
              <div className="flex items-center gap-8">
                <a href="/" className="font-bold text-xl">Hourglass</a>
                <div className="flex gap-6">
                  <a href="/about-us" className="text-sm hover:text-blue-600">About Us</a>
                  <a href="/services" className="text-sm hover:text-blue-600">Services</a>
                  <a href="/solution" className="text-sm hover:text-blue-600">Solution</a>
                  <a href="/knowledge" className="text-sm hover:text-blue-600">Knowledge</a>
                  <a href="/testimonials" className="text-sm hover:text-blue-600">Testimonials</a>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="/client-login" className="text-sm px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">
                  Client Login
                </a>
                <a href="/contact-us" className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
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
