"use client";

import {
  Code2,
  LayoutTemplate,
  TestTube,
  Database,
  Cpu,
  LucideIcon,
} from "lucide-react";

// スキルの型定義
interface Skill {
  name: string;
}

// スキルカテゴリの型定義
interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

// スキルカテゴリデータ
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" },
      { name: "Swift" },
      { name: "Go" },
      { name: "Rust" },
    ],
  },
  {
    title: "Frameworks",
    icon: LayoutTemplate,
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Redux" },
      { name: "TailwindCSS" },
      { name: "Laravel" },
    ],
  },
  {
    title: "Libraries",
    icon: TestTube,
    skills: [
      { name: "Django" },
      { name: "Fast API" },
      { name: "Next.js" },
      { name: "Astro" },
      { name: "Flask" },
      { name: "React Native" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Tools",
    icon: Cpu,
    skills: [
      { name: "Linux" },
      { name: "VSCode" },
      { name: "Git" },
      { name: "AWS" },
      { name: "Clerk" },
      { name: "Figma" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "Cursor Pro" },
      { name: "Google AI Pro" },
      { name: "Claude Code" },
      { name: "Windsurf" },
      { name: "Devin" },
    ],
  },
  {
    title: "Others",
    icon: Cpu,
    skills: [
      { name: "Waterfall Development" },
      { name: "Agile Development" },
      { name: "AI Driven Development" },
      { name: "Test Driven Development" },
    ],
  },
];

export default function Skills(): JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold py-6">Skills</h1>
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <section key={category.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="px-4 py-3 rounded-lg border bg-black hover:bg-accent/50 transition-all duration-300 hover:shadow-md hover:scale-105">
                        <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                          {skill.name}
                        </span>
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
  );
}
