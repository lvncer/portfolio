import { Code2, Sparkles, Rocket, LucideIcon } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: Code2,
    title: "CRAFT",
    subtitle: "精密性",
    description: "Clean code, perfect execution",
  },
  {
    icon: Sparkles,
    title: "INNOVATE",
    subtitle: "革新性",
    description: "Creative solutions, lasting impact",
  },
  {
    icon: Rocket,
    title: "DELIVER",
    subtitle: "実現力",
    description: "Fast results, exceptional quality",
  },
];

export const Features = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Reduced background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <AnimatedElement
          delay={0.8}
          className="grid gap-16 md:gap-24 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <AnimatedElement
              key={feature.title}
              delay={1 + index * 0.2}
              className="group text-center"
            >
              <div className="relative">
                {/* Icon container */}
                <div className="relative mx-auto w-24 h-24 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300 font-light">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-200 font-light leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-24 transition-all duration-700" />
              </div>
            </AnimatedElement>
          ))}
        </AnimatedElement>
      </div>
    </div>
  );
};
