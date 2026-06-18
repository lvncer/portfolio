import type { LucideIcon } from "lucide-react"

export type SkillStar = 1 | 2 | 3

export type Skill = {
  name: string
  stars: SkillStar
  imageUrl?: string
  details?: string
}

export type Framework = {
  name: string
  stars: SkillStar
  imageUrl?: string
  details?: string
}

export type LanguageSkill = {
  name: string
  names?: string[]
  stars: SkillStar
  imageUrl?: string
  imageUrls?: string[]
  details: string
  technologies: Framework[]
}

export type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export type SkillTileSize = "sm" | "md" | "lg"

export type SkillTileProps = {
  name: string
  stars: SkillStar
  imageUrl?: string
  imageUrls?: string[]
  details?: string
  size?: SkillTileSize
}

export type SkillIconProps = Pick<
  SkillTileProps,
  "name" | "imageUrl" | "imageUrls" | "size"
>

export type ProficiencyIndicatorProps = {
  stars: SkillStar
  size?: SkillTileSize
}
