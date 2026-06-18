import { Code2 } from "lucide-react"

import { LanguageGroup } from "@/components/skills/LanguageGroup"
import { LANGUAGE_SKILLS } from "@/constants/skills"

export const ProgrammingLanguagesSection = () => {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-accent p-2">
          <Code2 className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold">Programming Languages</h2>
      </div>

      <div className="space-y-6">
        {LANGUAGE_SKILLS.map((language) => (
          <LanguageGroup key={language.name} language={language} />
        ))}
      </div>
    </section>
  )
}
