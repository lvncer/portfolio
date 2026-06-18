import { ProficiencyIndicator } from "@/components/skills/ProficiencyIndicator"
import { SkillIcon } from "@/components/skills/SkillIcon"
import { SkillTile } from "@/components/skills/SkillTile"
import type { LanguageSkill } from "@/types/skills"

type LanguageGroupProps = {
  language: LanguageSkill
}

export const LanguageGroup = ({ language }: LanguageGroupProps) => {
  return (
    <div className="space-y-3">
      <div
        className="group/lang relative flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 px-4 py-3 transition-colors hover:border-yellow-400/30"
        title={language.details}
      >
        <SkillIcon
          name={language.name}
          imageUrl={language.imageUrl}
          imageUrls={language.imageUrls}
          size="lg"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold">{language.name}</h3>
        </div>
        <ProficiencyIndicator stars={language.stars} size="lg" />

        {language.details && (
          <div className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-4 z-20 w-64 rounded-lg border border-white/10 bg-black/95 px-3 py-2 text-xs opacity-0 shadow-xl transition-opacity group-hover/lang:opacity-100">
            <p className="font-medium text-white">{language.name}</p>
            <p className="mt-1 leading-relaxed text-white/70">
              {language.details}
            </p>
          </div>
        )}
      </div>

      {language.technologies.length > 0 && (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {language.technologies.map((tech) => (
            <SkillTile
              key={tech.name}
              name={tech.name}
              stars={tech.stars}
              imageUrl={tech.imageUrl}
              details={tech.details}
              size="sm"
            />
          ))}
        </div>
      )}
    </div>
  )
}
