"use client";

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { PageLinks } from "@/components/home/PageLinks";
import { About } from "@/components/home/About";
import { SocialLinks } from "@/components/home/SocialLinks";
import Squares from "@/components/Squares";
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
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ccc"
          hoverFillColor="#222"
        />
      </div>

      {/* Content overlay */}
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
