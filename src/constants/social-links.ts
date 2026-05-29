import {
  BookOpen,
  ChartNoAxesColumn,
  FishSymbol,
  Github,
  Instagram,
  Mail,
  Speaker,
  Twitter,
  Youtube,
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
    title: "YouTube",
    description: "Videos & channel updates",
    icon: Youtube,
    url: "https://youtube.com/@lvncer-k8d?si=O96AVvC8xg_w12Dn",
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
    title: "Instagram",
    description: "Personal life & photos",
    icon: Instagram,
    url: "https://www.instagram.com/lvncer/",
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
