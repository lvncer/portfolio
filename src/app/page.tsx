"use client"

import { About } from "@/components/home/About"
import { FeatureSection } from "@/components/home/FeatureSection"
import { Hero } from "@/components/home/Hero"
import { SocialLinks } from "@/components/home/SocialLinks"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen">
        <Hero />
        <About />
        <FeatureSection />
        <SocialLinks />
      </div>
    </div>
  )
}
