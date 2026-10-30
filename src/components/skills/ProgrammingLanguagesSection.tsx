import { Code2 } from "lucide-react"

import { LanguageGroup } from "@/components/skills/LanguageGroup"
import { LANGUAGE_SKILLS } from "@/constants/skills"

export const ProgrammingLanguagesSection = () => {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <Code2 className="h-4 w-4 text-white/70" />
        <h2 className="text-lg font-semibold">Programming Languages</h2>
      </div>

      <div className="space-y-2">
        {LANGUAGE_SKILLS.map((language) => (
          <LanguageGroup key={language.name} language={language} />
        ))}
      </div>
    </section>
  )
}
