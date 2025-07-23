import { AnimatedElement } from "@/components/ui/animated-element";
import Link from "next/link";

const features = [
  {
    title: "Craft",
    description: "Clean code, perfect execution",
  },
  {
    title: "Innovate",
    description: "Creative solutions, lasting impact",
  },
  {
    title: "Deliver",
    description: "Fast results, exceptional quality",
  },
  {
    title: "Communication",
    description: "Clear and timely communication",
  },
];

const pageLinks = [
  {
    href: "/skills",
    title: "Skills",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/certifications",
    title: "Certifications",
  },
  {
    href: "/experiences",
    title: "Experiences",
  },
  {
    href: "/events",
    title: "Events",
  },
];

export const FeatureSection = () => {
  return (
    <div id="features" className="relative py-24 sm:py-64">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedElement delay={0.2} className="mb-28">
            <h2 className="text-5xl font-medium tracking-tight text-white">
              Features
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-2 gap-16 mb-24 md:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedElement key={feature.title} delay={0.4 + index * 0.1}>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <div className="grid grid-cols-2 justify-end gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-3 md:flex lg:gap-x-16">
            {pageLinks.map((link, index) => (
              <AnimatedElement key={link.href} delay={0.8 + index * 0.1}>
                <Link
                  href={link.href}
                  className="hover:text-blue-300 transition-colors font-light"
                >
                  {link.title} <span aria-hidden="true">&rarr;</span>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
