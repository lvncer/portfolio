import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle overlay to enhance readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating elements with reduced opacity */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-violet-500/5 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedElement className="space-y-8">
          <AnimatedElement delay={0.2} className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
                CREATE
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-light tracking-wide text-gray-200">
              INNOVATE
            </h2>
            <h3 className="text-2xl md:text-4xl font-thin tracking-widest text-gray-300">
              INSPIRE
            </h3>
          </AnimatedElement>

          <AnimatedElement delay={0.4} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
              Building digital experiences that matter.
            </p>
            <p className="text-sm md:text-base text-gray-300 mt-2">
              美しく機能的なソリューションを創造
            </p>
          </AnimatedElement>

          <AnimatedElement
            delay={0.6}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Button
              variant="ghost"
              className="group text-gray-200 hover:text-white px-8 py-6 text-lg font-light transition-all duration-500 hover:scale-110"
              asChild
            >
              <Link href="#about">
                Explore
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="group text-gray-200 hover:text-white px-8 py-6 text-lg font-light transition-all duration-500 hover:scale-110"
              asChild
            >
              <Link href="#links">
                Connect
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  );
};
