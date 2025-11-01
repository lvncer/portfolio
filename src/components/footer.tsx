"use client"

import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative z-10 bg-black border-t border-border/40">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-light">
                © 2025 lvncer.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/lvncer/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-accent/30 backdrop-blur-sm hover:bg-accent/50 p-3 rounded-xl transition-all duration-500 group-hover:scale-110">
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="text-center">
              <p className="text-xs text-muted-foreground/70 font-light tracking-wider">
                Creating digital experiences that inspire
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
