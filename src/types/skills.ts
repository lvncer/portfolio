import type { LucideIcon } from "lucide-react"

export type Skill = {
  name: string
  imageUrl?: string
}

export type Framework = {
  name: string
  imageUrl?: string
}

export type LanguageSkill = {
  name: string
  names?: string[]
  imageUrl?: string
  imageUrls?: string[]
  technologies: Framework[]
}

export type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export type SkillTileSize = "sm" | "lg"

export type SkillTileProps = {
  name: string
  imageUrl?: string
  imageUrls?: string[]
  size?: SkillTileSize
}

export type SkillIconProps = Pick<
  SkillTileProps,
  "name" | "imageUrl" | "imageUrls" | "size"
>
