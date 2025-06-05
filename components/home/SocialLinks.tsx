import {
  Github,
  Mail,
  ChartNoAxesColumn,
  Twitter,
  LucideIcon,
  Globe,
} from "lucide-react";
import { LazyLoad } from "@/components/ui/lazy-load";
import { AnimatedElement } from "@/components/ui/animated-element";

type LinkItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  isExternalLink?: boolean;
  color: string;
};

const links: LinkItem[] = [
  {
    title: "GitHub",
    description: "Open source projects & contributions",
    icon: Github,
    url: "https://github.com/lvncer",
    isExternalLink: true,
    color: "from-gray-400 to-gray-600",
  },
  {
    title: "Zenn",
    description: "Tech articles & programming insights",
    icon: ChartNoAxesColumn,
    url: "https://zenn.dev/tkszenn",
    isExternalLink: true,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Connpass",
    description: "Event participation records",
    icon: Globe,
    url: "https://connpass.com/user/lvncer",
    isExternalLink: true,
    color: "from-green-400 to-green-600",
  },
  {
    title: "X",
    description: "AI trends & tech updates",
    icon: Twitter,
    url: "https://x.com/p2WJVLYglL25267",
    isExternalLink: true,
    color: "from-sky-400 to-sky-600",
  },
  {
    title: "Email",
    description: "Direct contact for collaboration",
    icon: Mail,
    url: "",
    isExternalLink: false,
    color: "from-purple-400 to-purple-600",
  },
];

export const SocialLinks = () => {
  return (
    <div className="relative py-40 overflow-hidden" id="links">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Reduced background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatedElement delay={0.2} className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">
              CONNECT
            </h1>
            <p className="text-lg text-gray-300 font-light">
              Let's build something amazing together
            </p>
          </AnimatedElement>

          <LazyLoad>
            <div className="grid gap-1 md:gap-2">
              {links.map((link, index) => (
                <AnimatedElement
                  key={link.title}
                  delay={0.4 + index * 0.1}
                  className="group"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-700`}
                    />

                    <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-2 md:p-4 group-hover:bg-black transition-all duration-500">
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-xl blur-lg group-hover:blur-xl transition-all duration-700 opacity-50`}
                          />
                          <div className="relative bg-white/15 backdrop-blur-sm rounded-xl p-4 group-hover:scale-110 transition-all duration-500">
                            <link.icon className="h-8 w-8 text-white" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                            {link.title}
                          </h3>
                          <p className="text-gray-200 font-light leading-relaxed">
                            {link.description}
                          </p>
                        </div>

                        {link.isExternalLink && (
                          <div className="text-gray-300 group-hover:text-white transition-colors duration-500">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        )}
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
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};
