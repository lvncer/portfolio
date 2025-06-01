"use client";

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { About } from "@/components/home/About";
import { SocialLinks } from "@/components/home/SocialLinks";
import LiquidChrome from "@/components/LiquidChrome";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();

  // ホームページでは常にライトテーマに設定
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <div className="relative min-h-screen">
      {/* Full-screen animated background */}
      <div className="fixed inset-0 z-0">
        <LiquidChrome
          baseColor={[0.05, 0.05, 0.1]}
          speed={0.3}
          amplitude={0.4}
          frequencyX={2.5}
          frequencyY={1.8}
          interactive={true}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen">
        <Hero />
        <Features />
        <About />
        <SocialLinks />
      </div>
    </div>
  );
}
