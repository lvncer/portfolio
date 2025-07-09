"use client";

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { PageLinks } from "@/components/home/PageLinks";
import { About } from "@/components/home/About";
import { SocialLinks } from "@/components/home/SocialLinks";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen">
        <Hero />
        <Features />
        <PageLinks />
        <About />
        <SocialLinks />
      </div>
    </div>
  );
}
