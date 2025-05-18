"use client";

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { About } from "@/components/home/About";
import { SocialLinks } from "@/components/home/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <Features />
      <About />
      <SocialLinks />
    </div>
  );
}
