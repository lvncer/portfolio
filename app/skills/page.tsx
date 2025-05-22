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
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

// スキルの型定義
interface Skill {
  name: string;
  startDate: string; // YYYY-MM-DD形式
  months?: number; // 計算後に追加される経過月数
  confident?: boolean; // 自信ありフラグ
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

  // 未来の日付の場合は0を返す
  if (start > currentDate) {
    return 0;
  }

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
      { name: "Python", startDate: "2023-04-01", confident: true },
      { name: "JavaScript", startDate: "2023-04-01", confident: true },
      { name: "TypeScript", startDate: "2024-04-01", confident: true },
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
      { name: "React", startDate: "2024-04-01", confident: true },
      { name: "Node.js", startDate: "2024-04-01", confident: true },
      { name: "Express.js", startDate: "2024-04-01", confident: true },
      { name: "Redux", startDate: "2024-04-01" },
      { name: "TailwindCSS", startDate: "2024-06-01", confident: true },
    ],
  },
  {
    title: "ライブラリ/ツール",
    icon: TestTube,
    skills: [
      { name: "Django", startDate: "2024-01-01" },
      { name: "Fast API", startDate: "2024-04-01", confident: true },
      { name: "Next.js", startDate: "2024-06-01", confident: true },
      { name: "Astro", startDate: "2024-06-01" },
      { name: "Flask", startDate: "2024-09-01", confident: true },
      { name: "React Native", startDate: "2024-09-01" },
    ],
  },
  {
    title: "データベース",
    icon: Database,
    skills: [
      { name: "MySQL", startDate: "2023-04-01", confident: true },
      { name: "MongoDB", startDate: "2024-04-01" },
      { name: "SQLite", startDate: "2024-04-01" },
      { name: "Firebase", startDate: "2024-05-01" },
      { name: "Supabase", startDate: "2024-09-01", confident: true },
    ],
  },
  {
    title: "その他",
    icon: Cpu,
    skills: [
      { name: "Linux", startDate: "2023-04-01", confident: true },
      { name: "VSCode", startDate: "2023-04-01", confident: true },
      { name: "Git", startDate: "2023-06-01", confident: true },
      { name: "AWS", startDate: "2023-09-01" },
      { name: "Figma", startDate: "2024-09-01" },
      { name: "Docker", startDate: "2025-01-01" },
      { name: "CI/CD", startDate: "2025-01-01" },
      { name: "Cursor Pro", startDate: "2025-05-16" },
      { name: "Google AI Pro", startDate: "2025-05-21" },
    ],
  },
];

// 経過月数が計算されたスキルカテゴリの型定義
interface SkillCategoryWithMonths extends SkillCategory {
  skills: (Skill & { months: number })[];
}

// 経験月数からパーセンテージを計算（最大36ヶ月=100%とする）
const calculatePercentage = (months: number): number => {
  const maxMonths = 36; // 3年を100%とする
  const percentage = Math.min((months / maxMonths) * 100, 100);
  return percentage;
};

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
          <div className="mb-6" />
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
                      const percentage = calculatePercentage(skill.months);
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                        >
                          <Card>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-xl font-semibold">
                                  {skill.name}
                                </CardTitle>
                                {skill.confident && (
                                  <Badge
                                    variant="secondary"
                                    className="flex items-center"
                                  >
                                    <Star className="w-3 h-3 fill-current" />
                                    自信あり
                                  </Badge>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
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
                                </p>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="font-medium">経験:</span>
                                    <span>{skill.months}ヶ月</span>
                                  </div>
                                  {/* カスタムプログレスバー */}
                                  <div className="h-2 w-full rounded-full overflow-hidden relative">
                                    <div
                                      className="bg-gray-400 absolute top-0 left-0 h-full rounded-full"
                                      style={{ width: `${percentage}%` }}
                                    />
                                  </div>
                                  <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>0</span>
                                    <span>1年</span>
                                    <span>2年</span>
                                    <span>3年+</span>
                                  </div>
                                </div>
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
