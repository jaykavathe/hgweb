'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HomeIcon, ShieldIcon, TagIcon, FileIcon, DollarIcon } from "@/components/icons";
import { initializePortfolioCardEffect } from "./portfolio-card-effect";
import ProcessFlow from "@/components/process-flow";
import TechnologyExpertise from "@/components/technology-expertise";
import StrengthSection from "@/components/strength-section";
import FoundersSection from "@/components/founders-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initializePortfolioCardEffect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/hero.png"
          alt="Patent Drafting Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center max-w-[80%] mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Patent Drafting</h1>
          <nav className="flex gap-2 text-sm mb-8 text-white">
            <a href="/">Home</a>
            <span>/</span>
            <span>Patent Drafting</span>
          </nav>
        </div>
      </section>

      <div className="max-w-[80%] mx-auto px-4">
        {/* Trust Message */}
        <section className="py-16 text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Trusted by several Fortune 500 companies, Hourglass has been creating high-value patent portfolios - for both corporations as well as start-ups. With over 2000 patent applications prepared and prosecuted till date, and a grant rate of more than 90%, our clients have benefited in multiple aspects:
          </p>
        </section>

        {/* Portfolio Cards */}
        <section className="grid grid-cols-5 gap-6 mb-16">
          {[
            { title: "Build Moat\nAround Products", icon: HomeIcon, image: "/portfolio/01_moat.webp" },
            { title: "Create Defense\nArsenal", icon: ShieldIcon, image: "/portfolio/02_cda.webp" },
            { title: "Valuable\nExits", icon: TagIcon, image: "/portfolio/03_ve.webp" },
            { title: "Cross License\nPatents", icon: FileIcon, image: "/portfolio/04_clp.webp" },
            { title: "Secure\nFunding", icon: DollarIcon, image: "/portfolio/05_sf.webp" }
          ].map((card, index) => (
            <div key={index} className="portfolio-card relative group cursor-pointer">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 group-hover:from-black/40 group-hover:to-black/70 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 60%)'
                }} />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 gap-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 flex items-center justify-center">
                  <card.icon />
                </div>
                <h3 className="text-lg font-semibold whitespace-pre-line leading-tight">{card.title}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white text-center">Patent Drafting Process At Hourglass</h2>
          <p className="text-gray-400 mb-20 text-center max-w-2xl mx-auto">
            At Hourglass, we follow a streamlined approach right from capturing innovations till filing the patent, as shown below
          </p>
          <ProcessFlow />
        </div>
      </section>

      {/* Technology Expertise Section */}
      <TechnologyExpertise />

      {/* Strength Section */}
      <StrengthSection />

      {/* Founders Section */}
      <FoundersSection />
    </main>
  );
}
