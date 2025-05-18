"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  LayoutTemplate,
  TestTube,
  Database,
  Cpu,
  LucideIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

// スキルの型定義
interface Skill {
  name: string;
  startDate: string; // YYYY-MM-DD形式
  months?: number; // 計算後に追加される経過月数
}

// スキルカテゴリの型定義
interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

// 日付から経過月数を計算する関数
const calculateMonths = (startDate: string): number => {
  // 現在の日付を取得
  const currentDate = new Date();
  // 開始日を解析（YYYY-MM-DD形式）
  const start = new Date(startDate);

  // 年の差を計算
  const yearDiff = currentDate.getFullYear() - start.getFullYear();
  // 月の差を計算
  const monthDiff = currentDate.getMonth() - start.getMonth();

  // 合計経過月数を計算（年の差*12 + 月の差）
  const totalMonths = yearDiff * 12 + monthDiff;

  return totalMonths > 0 ? totalMonths : 0; // 負の値の場合は0を返す
};

// スキルカテゴリデータ
const skillCategories: SkillCategory[] = [
  {
    title: "プログラミング言語",
    icon: Code2,
    skills: [
      { name: "Python", startDate: "2023-04-01" },
      { name: "JavaScript", startDate: "2023-04-01" },
      { name: "TypeScript", startDate: "2024-04-01" },
      { name: "PHP", startDate: "2024-04-01" },
      { name: "Swift", startDate: "2024-04-01" },
      { name: "Go", startDate: "2024-05-01" },
      { name: "Rust", startDate: "2025-03-01" },
    ],
  },
  {
    title: "フレームワーク",
    icon: LayoutTemplate,
    skills: [
      { name: "React", startDate: "2024-04-01" },
      { name: "Node.js", startDate: "2024-04-01" },
      { name: "Express.js", startDate: "2024-04-01" },
      { name: "Redux", startDate: "2024-04-01" },
      { name: "TailwindCSS", startDate: "2024-06-01" },
    ],
  },
  {
    title: "ライブラリ/ツール",
    icon: TestTube,
    skills: [
      { name: "Django", startDate: "2024-01-01" },
      { name: "Fast API", startDate: "2024-04-01" },
      { name: "Next.js", startDate: "2024-06-01" },
      { name: "Astro", startDate: "2024-06-01" },
      { name: "Flask", startDate: "2024-09-01" },
      { name: "React Native", startDate: "2024-09-01" },
    ],
  },
  {
    title: "データベース",
    icon: Database,
    skills: [
      { name: "MySQL", startDate: "2023-04-01" },
      { name: "MongoDB", startDate: "2024-04-01" },
      { name: "SQLite", startDate: "2024-04-01" },
      { name: "Firebase", startDate: "2024-05-01" },
      { name: "Supabase", startDate: "2024-09-01" },
    ],
  },
  {
    title: "その他",
    icon: Cpu,
    skills: [
      { name: "Linux", startDate: "2023-04-01" },
      { name: "VSCode", startDate: "2023-04-01" },
      { name: "Git", startDate: "2023-06-01" },
      { name: "AWS", startDate: "2023-09-01" },
      { name: "Figma", startDate: "2024-09-01" },
      { name: "Docker", startDate: "2025-01-01" },
      { name: "CI/CD", startDate: "2025-01-01" },
      { name: "Cursor Pro", startDate: "2025-05-16" },
    ],
  },
];

// 経過月数が計算されたスキルカテゴリの型定義
interface SkillCategoryWithMonths extends SkillCategory {
  skills: (Skill & { months: number })[];
}

export default function Skills(): JSX.Element {
  // 現在表示されている経過月数を保持するための状態
  const [monthsData, setMonthsData] = useState<SkillCategoryWithMonths[]>([]);
  // データがロード中かどうかを示す状態
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // コンポーネントがマウントされたときに経過月数を計算
  useEffect(() => {
    // 各スキルカテゴリの経過月数を計算
    const calculatedMonths: SkillCategoryWithMonths[] = skillCategories.map(
      (category) => ({
        ...category,
        skills: category.skills.map((skill) => ({
          ...skill,
          months: calculateMonths(skill.startDate),
        })),
      })
    );

    setMonthsData(calculatedMonths);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Skills</h1>
          <div className="mb-10" />
          <div className="space-y-12">
            {isLoading ? (
              // データがロードされるまでの表示
              <p>データを読み込み中...</p>
            ) : (
              monthsData.map((category, categoryIndex) => (
                <section key={category.title}>
                  <div className="flex items-center gap-3">
                    <category.icon className="w-8 h-8" />
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                  </div>
                  <div className="mb-6" />
                  <div className="grid gap-4 md:grid-cols-3">
                    {category.skills.map((skill, skillIndex) => {
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                        >
                          <div className="mt-2" />
                          <Card>
                            <CardHeader>
                              <div className="flex items-center gap-3">
                                <CardTitle className="text-xl font-semibold">
                                  {skill.name}
                                </CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                  {/* 開始日と経過月数を表示 */}
                                  <span className="font-medium">開始: </span>
                                  {new Date(skill.startDate).toLocaleDateString(
                                    "ja-JP",
                                    {
                                      year: "numeric",
                                      month: "long",
                                    }
                                  )}
                                  <br />
                                  <span className="font-medium">経験: </span>
                                  {skill.months}ヶ月
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
