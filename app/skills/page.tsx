"use client";

import {
  Code2,
  LayoutTemplate,
  TestTube,
  Database,
  Cpu,
  Star,
  LucideIcon,
  WrenchIcon,
  Brain,
} from "lucide-react";

// スキルの型定義
interface Skill {
  name: string;
  stars: 1 | 2 | 3; // 1-3の星評価
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
      { name: "Python", stars: 3 },
      { name: "JavaScript", stars: 3 },
      { name: "TypeScript", stars: 3 },
      { name: "PHP", stars: 2 },
      { name: "Swift", stars: 1 },
      { name: "Go", stars: 1 },
      { name: "Rust", stars: 1 },
    ],
  },
  {
    title: "Frameworks",
    icon: LayoutTemplate,
    skills: [
      { name: "React", stars: 3 },
      { name: "Node.js", stars: 3 },
      { name: "Express.js", stars: 3 },
      { name: "Redux", stars: 3 },
      { name: "TailwindCSS", stars: 3 },
      { name: "Laravel", stars: 1 },
    ],
  },
  {
    title: "Libraries",
    icon: TestTube,
    skills: [
      { name: "Fast API", stars: 3 },
      { name: "Next.js", stars: 3 },
      { name: "Astro", stars: 2 },
      { name: "Flask", stars: 2 },
      { name: "React Native", stars: 2 },
      { name: "Django", stars: 1 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", stars: 3 },
      { name: "MySQL", stars: 3 },
      { name: "MongoDB", stars: 3 },
      { name: "Supabase", stars: 3 },
      { name: "SQLite", stars: 2 },
      { name: "Firebase", stars: 2 },
    ],
  },
  {
    title: "Platforms",
    icon: Cpu,
    skills: [
      { name: "Linux", stars: 3 },
      { name: "Github", stars: 3 },
      { name: "Clerk", stars: 3 },
      { name: "AWS", stars: 2 },
      { name: "Figma", stars: 2 },
      { name: "Docker", stars: 2 },
      { name: "GitHub Actions", stars: 2 },
      { name: "Kubernetes", stars: 1 },
    ],
  },
  {
    title: "Hardware",
    icon: WrenchIcon,
    skills: [
      { name: "Raspberry Pi", stars: 3 },
      { name: "M5Stack", stars: 3 },
    ],
  },
  {
    title: "AI Tools",
    icon: Brain,
    skills: [
      { name: "Cursor Pro", stars: 3 },
      { name: "Google AI Pro", stars: 3 },
      { name: "Claude Code", stars: 3 },
      { name: "Windsurf", stars: 3 },
      { name: "Devin", stars: 3 },
    ],
  },
  {
    title: "Others",
    icon: Cpu,
    skills: [
      { name: "ウォーターフォール開発", stars: 3 },
      { name: "アジャイル開発", stars: 3 },
      { name: "AI駆動開発", stars: 3 },
      { name: "テスト駆動開発", stars: 1 },
    ],
  },
];

// 星評価の説明を表示するコンポーネント
const StarLegend = () => {
  const levels = [
    {
      stars: 3,
      label: "上級",
      description: "実務経験豊富、他者に教えることができるレベル",
    },
    {
      stars: 2,
      label: "中級",
      description: "一人で開発を進められる、使用経験あり",
    },
    {
      stars: 1,
      label: "初級",
      description: "基本的な操作・開発ができる、学習中",
    },
  ];

  return (
    <div className="bg-accent/20 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">スキルレベル説明</h3>
      <div className="space-y-2">
        {levels.map((level) => (
          <div key={level.stars} className="flex items-center gap-3">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < level.stars
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{level.label}:</span>
            <span className="text-muted-foreground text-sm">
              {level.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

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
  );
};

export default function Skills(): JSX.Element {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold py-6">Skills</h1>
          <StarLegend />
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
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                            {skill.name}
                          </span>
                          <StarRating stars={skill.stars} />
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
  );
}
