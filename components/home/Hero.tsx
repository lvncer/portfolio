import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-48 pb-8">
      <AnimatedElement className="max-w-5xl mx-auto text-center">
        <AnimatedElement
          delay={0.2}
          className="text-4xl font-bold tracking-tight sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-violet-600"
        >
          Code Fast, Code Smart
        </AnimatedElement>

        <div className="mt-8" />

        <AnimatedElement
          delay={0.4}
          className="text-xl leading-8 text-muted-foreground"
        >
          私は、様々な社会的課題に対して、
        </AnimatedElement>

        <AnimatedElement
          delay={0.4}
          className="text-xl leading-8 text-muted-foreground"
        >
          美しく機能的なシステム体験を創り出すことを目指しています。
        </AnimatedElement>

        <AnimatedElement
          delay={0.6}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <Button
            variant="outline"
            className="rounded-full hover:scale-[110%] transition-all duration-300"
            asChild
          >
            <Link href="#about">
              <span className="text-xl font-semibold p-4">About</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full hover:scale-[110%] transition-all duration-300"
            asChild
          >
            <Link href="#links">
              <span className="text-xl font-semibold p-4">Links</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </AnimatedElement>
      </AnimatedElement>
    </div>
  );
};
