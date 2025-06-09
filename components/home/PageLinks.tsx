import Link from "next/link";
import { AnimatedElement } from "@/components/ui/animated-element";
import { Award, Briefcase, Calendar, Code2, FolderOpen } from "lucide-react";

const pageLinks = [
  {
    href: "/skills",
    title: "Skills",
    description: "技術スタック",
    icon: Code2,
  },
  {
    href: "/projects",
    title: "Projects",
    description: "制作物",
    icon: FolderOpen,
  },
  {
    href: "/certifications",
    title: "Certifications",
    description: "保有資格",
    icon: Award,
  },
  {
    href: "/experiences",
    title: "Experiences",
    description: "外部経験",
    icon: Briefcase,
  },
  {
    href: "/events",
    title: "Events",
    description: "イベント・活動",
    icon: Calendar,
  },
];

export const PageLinks = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 container mx-auto px-4">
        <AnimatedElement
          delay={1.2}
          className="grid gap-8 md:gap-12 grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
        >
          {pageLinks.map((link, index) => (
            <AnimatedElement
              key={link.href}
              delay={1.4 + index * 0.1}
              className="group"
            >
              <Link
                href={link.href}
                className="block text-center transition-all duration-500 hover:scale-105"
              >
                <div className="relative">
                  {/* Icon container */}
                  <div className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
                    <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-3 group-hover:bg-black/40 transition-all duration-300">
                      <link.icon className="h-8 w-8 text-white/80 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-300/80 font-light">
                      {link.description}
                    </p>
                  </div>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 group-hover:w-12 transition-all duration-500" />
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </AnimatedElement>
      </div>
    </div>
  );
};
