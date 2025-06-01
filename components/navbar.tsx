"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import l from "@/public/l.png";

// ナビゲーション項目の定義
const navItems = [
  { path: "/", label: "Home" },
  { path: "/skills", label: "Skills" },
  { path: "/certifications", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/events", label: "Events" },
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
    <nav className="fixed top-0 w-full z-50 bg-black/20 dark:bg-black/20 backdrop-blur-xl border-b border-white/10 dark:border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* ロゴと名前 */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-full p-1">
                <Image
                  src={l}
                  alt="logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
              </div>
            </div>
            <span className="text-xl font-black tracking-tight text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all duration-500">
              PORTFOLIO
            </span>
          </Link>
        </div>

        {/* デスクトップ用ナビゲーション */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-foreground group",
                pathname === path ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {pathname === path && (
                <div className="absolute inset-0 bg-accent/50 backdrop-blur-sm rounded-lg" />
              )}
              <span className="relative z-10">{label}</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}

          {/* テーマ切替ボタン（デスクトップ） */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative bg-accent/30 backdrop-blur-sm hover:bg-accent/50 text-foreground border-0 rounded-xl transition-all duration-300 hover:scale-110"
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
            className="relative bg-accent/30 backdrop-blur-sm hover:bg-accent/50 text-foreground border-0 rounded-xl transition-all duration-300"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <button
            className="relative bg-accent/30 backdrop-blur-sm hover:bg-accent/50 text-foreground p-2 rounded-xl transition-all duration-300 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー（開いているときのみ表示） */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-xl border-t border-border/40">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-300 text-foreground font-medium",
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
