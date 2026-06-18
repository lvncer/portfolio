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
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-accent p-2">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {skills.map((skill) => (
          <SkillTile
            key={skill.name}
            name={skill.name}
            stars={skill.stars}
            imageUrl={skill.imageUrl}
            details={skill.details}
            size="sm"
          />
        ))}
      </div>
    </section>
  )
}
