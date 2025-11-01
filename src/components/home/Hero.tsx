import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <AnimatedElement delay={0.2} className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
                Welcome to Portfolio
              </h1>
              <p className="text-md md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                A ship in the harbor is safe, but that is not what a ship is
                for. Sail out to sea and do new things.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.4} className="space-y-8">
            <div className="grid gap-4">
              <Button
                variant="ghost"
                className="group justify-start text-left h-auto p-6 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
                asChild
              >
                <Link href="#features">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-lg font-medium">Features</div>
                      <div className="text-sm text-gray-400 font-light">
                        Core Values
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="group justify-start text-left h-auto p-6 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
                asChild
              >
                <Link href="#about">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-lg font-medium">Explore</div>
                      <div className="text-sm text-gray-400 font-light">
                        About & Background
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}
