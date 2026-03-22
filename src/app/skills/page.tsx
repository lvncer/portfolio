"use client"

import { Code2, Star } from "lucide-react"
import Image from "next/image"

import { LANGUAGE_SKILLS, OTHER_SKILL_CATEGORIES } from "@/constants/skills"
import type { LanguageSkill } from "@/types/skills"

// 星評価を表示するコンポーネント
const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex">
      {[...Array(3)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

// 言語スキルカードコンポーネント
const LanguageSkillCard = ({ language }: { language: LanguageSkill }) => {
  return (
    <div className="bg-card bg-black/80 border rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-4">
        {language.imageUrls ? (
          <div className="flex gap-2">
            {language.imageUrls.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={language.names?.[index] || language.name}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            ))}
          </div>
        ) : language.imageUrl ? (
          <Image
            src={language.imageUrl}
            alt={language.name}
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ) : null}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{language.name}</h3>
          <StarRating stars={language.stars} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {language.details}
      </p>

      {language.technologies.length > 0 && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {language.technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-accent/20 rounded-md px-6 py-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {tech.imageUrl && (
                      <Image
                        src={tech.imageUrl}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                  <StarRating stars={tech.stars} />
                </div>
                {tech.details && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold py-3 pb-2">Skills</h1>

          <div className="space-y-8">
            {/* 言語スキルセクション */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Code2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Programming Languages
                </h2>
              </div>

              {LANGUAGE_SKILLS.map((language) => (
                <LanguageSkillCard key={language.name} language={language} />
              ))}
            </section>

            {/* その他のスキルカテゴリ */}
            {OTHER_SKILL_CATEGORIES.map((category) => (
              <section key={category.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="px-4 py-3 bg-black/80 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-md hover:scale-105">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            {skill.imageUrl && (
                              <Image
                                src={skill.imageUrl}
                                alt={skill.name}
                                width={20}
                                height={20}
                                className="w-5 h-5 flex-shrink-0"
                              />
                            )}
                            <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground truncate">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <StarRating stars={skill.stars} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
