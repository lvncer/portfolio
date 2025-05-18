import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-48 pb-8">
      <AnimatedElement className="max-w-5xl mx-auto text-center">
        <AnimatedElement
          delay={0.2}
          className="text-4xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-violet-600"
        >
          Welcome to My Portfolio
        </AnimatedElement>

        <div className="mt-6" />

        <AnimatedElement
          delay={0.4}
          className="text-lg leading-8 text-muted-foreground"
        >
          私は、様々な社会的課題に対して、
        </AnimatedElement>

        <AnimatedElement
          delay={0.4}
          className="text-lg leading-8 text-muted-foreground"
        >
          美しく機能的なシステム体験を創り出すことを目指しています。
        </AnimatedElement>

        <AnimatedElement
          delay={0.6}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button
            variant="outline"
            className="rounded-full hover:scale-[110%] transition-all duration-300"
            asChild
          >
            <Link className="p-4" href="#about">
              About Me
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full hover:scale-[110%] transition-all duration-300"
            asChild
          >
            <Link className="p-4" href="#links">
              Social Links
            </Link>
          </Button>
        </AnimatedElement>
      </AnimatedElement>
    </div>
  );
};
