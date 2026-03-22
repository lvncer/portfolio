import { AnimatedElement } from "@/components/ui/animated-element"

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-start justify-center overflow-hidden pt-48 px-4 pb-4 lg:items-center lg:pt-0 lg:pb-0">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <AnimatedElement delay={0.2} className="space-y-6">
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-7xl font-light tracking-tightest text-white">
                Welcome.
              </h1>
              <p className="text-md md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                A ship in the harbor is safe, but that is not what a ship is
                for. Sail out to sea and do new things.
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  )
}
