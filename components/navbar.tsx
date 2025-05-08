"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, MoonIcon, Rocket, SunIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";

// ナビゲーション項目の定義
const navItems = [
  { path: "/", label: "Home" },
  { path: "/skills", label: "Skills" },
  { path: "/certifications", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/links", label: "Links" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // モバイルメニューの開閉状態を切り替える関数
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* ロゴと名前 */}
        <div className="flex items-center gap-4">
          <Rocket className="mt-1" />
          <Link href="/" className="text-2xl font-semibold text-foreground">
            lvncer.dev
          </Link>
        </div>

        {/* デスクトップ用ナビゲーション */}
        <div className="hidden md:flex items-center gap-6">
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

          {/* テーマ切替ボタン（デスクトップ） */}
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

        {/* モバイルメニューボタン */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <button
            className="text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー（開いているときのみ表示） */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/40">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md hover:bg-accent",
                  pathname === path ? "bg-accent/50" : ""
                )}
              >
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
