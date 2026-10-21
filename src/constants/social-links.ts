import {
  BookOpen,
  ChartNoAxesColumn,
  Github,
  Mail,
  Speaker,
} from "lucide-react"
import type { SocialLink } from "@/types/social-link"

export const SOCIAL_LINKS = [
  {
    title: "GitHub",
    description: "Open source projects & contributions",
    icon: Github,
    url: "https://github.com/lvncer",
    isExternalLink: true,
  },
  {
    title: "lvncerpedia",
    description: "My personal knowledge base",
    icon: BookOpen,
    url: "https://github.com/lvncerpedia",
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
    title: "Blog",
    description: "My blog posts",
    icon: BookOpen,
    url: "https://blog.lvncer.dev",
    isExternalLink: true,
  },
  {
    title: "Speaker Deck",
    description: "Tech presentations",
    icon: Speaker,
    url: "https://speakerdeck.com/lvncer",
    isExternalLink: true,
  },
  {
    title: "Email",
    description: "Direct contact for collaboration",
    icon: Mail,
    url: "mailto:hi@lvncer.dev",
    isExternalLink: true,
  },
] satisfies SocialLink[]
