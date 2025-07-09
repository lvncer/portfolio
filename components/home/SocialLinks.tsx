import {
  Github,
  Mail,
  ChartNoAxesColumn,
  Twitter,
  LucideIcon,
  Globe,
} from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { ArrowRight } from "lucide-react";

type LinkItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  isExternalLink?: boolean;
};

const links: LinkItem[] = [
  {
    title: "GitHub",
    description: "Open source projects & contributions",
    icon: Github,
    url: "https://github.com/lvncer",
    isExternalLink: true,
  },
  {
    title: "Zenn",
    description: "Tech articles & programming insights",
    icon: ChartNoAxesColumn,
    url: "https://zenn.dev/tkszenn",
    isExternalLink: true,
  },
  {
    title: "Connpass",
    description: "Event participation records",
    icon: Globe,
    url: "https://connpass.com/user/lvncer",
    isExternalLink: true,
  },
  {
    title: "X",
    description: "AI trends & tech updates",
    icon: Twitter,
    url: "https://x.com/p2WJVLYglL25267",
    isExternalLink: true,
  },
  {
    title: "Email",
    description: "Direct contact for collaboration",
    icon: Mail,
    url: "",
    isExternalLink: false,
  },
];

export const SocialLinks = () => {
  return (
    <div className="relative py-48 overflow-hidden" id="links">
      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Single subtle background element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Right side - Social links */}
          <AnimatedElement delay={0.4} className="space-y-4">
            {links.map((link, index) => (
              <AnimatedElement
                key={link.title}
                delay={0.6 + index * 0.1}
                className="group"
              >
                <div className="relative">
                  <div className="rounded-xl p-6 group-hover:bg-black/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/10 rounded-lg p-3">
                          <link.icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-white group-hover:text-blue-200 transition-colors duration-300">
                            {link.title}
                          </div>
                          <div className="text-sm text-gray-400 font-light">
                            {link.description}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  {link.isExternalLink && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Visit ${link.title}`}
                    />
                  )}
                </div>
              </AnimatedElement>
            ))}
          </AnimatedElement>

          {/* Left side - Simple text */}
          <AnimatedElement delay={0.2} className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                Connect
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-lg">
                Let&apos;s build something amazing together.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};
