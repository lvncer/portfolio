import { SkillIcon } from "@/components/skills/SkillIcon"
import { SkillTile } from "@/components/skills/SkillTile"
import type { LanguageSkill } from "@/types/skills"

type LanguageGroupProps = {
  language: LanguageSkill
}

export const LanguageGroup = ({ language }: LanguageGroupProps) => {
  return (
    <div className="flex items-start gap-2">
      <div className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white/40 text-black/60 px-3 py-1.5">
        <SkillIcon
          name={language.name}
          imageUrl={language.imageUrl}
          imageUrls={language.imageUrls}
          size="lg"
        />
        <h3 className="text-sm font-semibold whitespace-nowrap">
          {language.name}
        </h3>
      </div>

      {language.technologies.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {language.technologies.map((tech) => (
            <SkillTile
              key={tech.name}
              name={tech.name}
              imageUrl={tech.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  )
}
