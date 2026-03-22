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
