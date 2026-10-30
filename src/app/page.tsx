"use client"

import { About } from "@/components/home/About"
import { SocialLinks } from "@/components/home/SocialLinks"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen">
        <About />
        <SocialLinks />
      </div>
    </div>
  )
}
