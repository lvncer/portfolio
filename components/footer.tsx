"use client";

import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 lvncer. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/lvncer/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
