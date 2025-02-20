"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/certifications", label: "Certifications" },
  { path: "/projects", label: "Projects" },
  { path: "/links", label: "Links" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "relative -mx-3 px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === path ? "text-foreground" : "text-foreground/60"
              )}
            >
              {pathname === path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-accent rounded-md z-[-1]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
              {label}
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
}
