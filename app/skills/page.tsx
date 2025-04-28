"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Braces,
  LayoutTemplate,
  Atom,
  TestTube,
  Paintbrush,
  Database,
  Cpu,
  Container,
  Cloud,
  GitBranch,
  Workflow,
} from "lucide-react";

const skillCategories = [
  {
    title: "プログラミング言語",
    icon: Code2,
    skills: [
      { name: "Python", level: 100, icon: Braces },
      { name: "TypeScript", level: 100, icon: Braces },
      { name: "PHP", level: 60, icon: Braces },
      { name: "Swift", level: 40, icon: Braces },
      { name: "Go", level: 20, icon: Braces },
      { name: "Rust", level: 20, icon: Braces },
    ],
  },
  {
    title: "フレームワーク",
    icon: LayoutTemplate,
    skills: [
      { name: "React", level: 100, icon: Atom },
      { name: "Node.js", level: 100, icon: Atom },
      { name: "TailwindCSS", level: 100, icon: Atom },
      { name: "Express.js", level: 100, icon: Atom },
      { name: "Redux", level: 80, icon: Atom },
    ],
  },
  {
    title: "ライブラリ/ツール",
    icon: TestTube,
    skills: [
      { name: "Next.js", level: 100, icon: Paintbrush },
      { name: "Flask", level: 80, icon: Paintbrush },
      { name: "Fast API", level: 80, icon: Paintbrush },
      { name: "Django", level: 60, icon: Paintbrush },
      { name: "Astro", level: 60, icon: Paintbrush },
      { name: "React Native", level: 40, icon: Paintbrush },
    ],
  },
  {
    title: "データベース",
    icon: Database,
    skills: [
      { name: "MySQL", level: 100, icon: Database },
      { name: "Supabase", level: 100, icon: Database },
      { name: "MongoDB", level: 100, icon: Database },
      { name: "SQLite", level: 80, icon: Database },
      { name: "Firebase", level: 80, icon: Database },
    ],
  },
  {
    title: "その他",
    icon: Cpu,
    skills: [
      { name: "Git", level: 100, icon: GitBranch },
      { name: "Docker", level: 80, icon: Container },
      { name: "AWS", level: 80, icon: Cloud },
      { name: "Figma", level: 80, icon: Cloud },
      { name: "Linux", level: 80, icon: Cloud },
      { name: "CI/CD", level: 80, icon: Workflow },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Skills</h1>
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <Card>
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-3">
                            <skill.icon className="w-5 h-5" />
                            <CardTitle className="text-lg">
                              {skill.name}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 0.8,
                                  delay:
                                    categoryIndex * 0.1 + skillIndex * 0.05,
                                }}
                                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {skill.level}% proficiency
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
