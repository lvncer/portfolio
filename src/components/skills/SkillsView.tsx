import { CategorySection } from "@/components/skills/CategorySection"
import { ProgrammingLanguagesSection } from "@/components/skills/ProgrammingLanguagesSection"
import { OTHER_SKILL_CATEGORIES } from "@/constants/skills"

export const SkillsView = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-6xl space-y-10">
          <h1 className="text-4xl font-bold">Skills</h1>

          <ProgrammingLanguagesSection />

          {OTHER_SKILL_CATEGORIES.map((category) => (
            <CategorySection
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
