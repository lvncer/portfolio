import { ArrowRight } from "lucide-react"
import { SOCIAL_LINKS } from "@/constants/social-links"

export const SocialLinks = () => {
  return (
    <div
      className="relative py-12 pb-32 overflow-hidden scroll-mt-32"
      id="contact"
    >
      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Single subtle background element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Right side - Social links */}
          <div className="space-y-2">
            {SOCIAL_LINKS.map((link) => (
              <div key={link.title}>
                <div className="relative">
                  <div className="rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/10 rounded-lg p-3">
                          <link.icon className="h-6 w-6 text-white/80" />
                        </div>
                        <div>
                          <div className="text-lg font-light text-white">
                            {link.title}
                          </div>
                          <div className="text-sm text-gray-400 font-extralight">
                            {link.description}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {link.isExternalLink && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Visit ${link.title}`}
                    >
                      <span className="sr-only">{link.title}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Left side - Simple text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-white">
                Connect
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-extralight leading-relaxed max-w-lg">
                Let&apos;s build something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
