import type { LucideIcon } from "lucide-react"

import { SkillTile } from "@/components/skills/SkillTile"
import type { Skill } from "@/types/skills"

type CategorySectionProps = {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export const CategorySection = ({
  title,
  icon: Icon,
  skills,
}: CategorySectionProps) => {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-white/70" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTile
            key={skill.name}
            name={skill.name}
            imageUrl={skill.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}
