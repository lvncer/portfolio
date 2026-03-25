import type { LucideIcon } from "lucide-react"

export type SocialLink = {
  title: string
  description: string
  icon: LucideIcon
  url: string
  isExternalLink?: boolean
}
