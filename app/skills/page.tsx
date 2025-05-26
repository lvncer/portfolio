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
  Calendar,
  TrendingUp,
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
      { name: "Laravel", startDate: "2025-05-18" },
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
    title: "ツール",
    icon: Cpu,
    skills: [
      { name: "Linux", startDate: "2023-04-01", confident: true },
      { name: "VSCode", startDate: "2023-04-01", confident: true },
      { name: "Git", startDate: "2023-06-01", confident: true },
      { name: "AWS", startDate: "2023-09-01" },
      { name: "Figma", startDate: "2024-09-01" },
      { name: "Docker", startDate: "2025-01-01" },
      { name: "GitHub Actions", startDate: "2025-01-01" },
      { name: "Cursor Pro", startDate: "2025-05-16" },
      { name: "Google AI Pro", startDate: "2025-05-21" },
    ],
  },
  {
    title: "その他",
    icon: Cpu,
    skills: [
      { name: "アジャイル開発", startDate: "2023-09-01", confident: true },
      { name: "AI 駆動開発", startDate: "2025-04-01", confident: true },
      { name: "テスト駆動開発", startDate: "2025-05-26" },
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

// スキルカテゴリの色を取得
const getCategoryColor = (title: string) => {
  switch (title) {
    case "プログラミング言語":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "フレームワーク":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "ライブラリ/ツール":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "データベース":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    case "その他":
      return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

// プログレスバーの色を取得
const getProgressColor = (months: number) => {
  if (months >= 24) {
    return "bg-gradient-to-r from-red-400 to-red-600";
  } else if (months >= 12) {
    return "bg-gradient-to-r from-orange-400 to-orange-600";
  } else if (months >= 6) {
    return "bg-gradient-to-r from-yellow-400 to-yellow-600";
  } else {
    return "bg-gradient-to-r from-gray-400 to-gray-600";
  }
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold py-6">スキル</h1>
          <p className="text-muted-foreground mb-8">
            継続的な学習と実践を通じて習得した技術スキルです。経験年数と自信度に基づいて整理しています。
          </p>

          <div className="space-y-12">
            {isLoading ? (
              // データがロードされるまでの表示
              <div className="flex items-center justify-center py-12">
                <p className="text-muted-foreground">データを読み込み中...</p>
              </div>
            ) : (
              monthsData.map((category, categoryIndex) => (
                <motion.section
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-accent">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                    <Badge className={getCategoryColor(category.title)}>
                      {category.skills.length}個
                    </Badge>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.skills.map((skill, skillIndex) => {
                      const percentage = calculatePercentage(skill.months);
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                        >
                          <Card className="h-full">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-xl">
                                  {skill.name}
                                </CardTitle>
                                <div className="flex flex-col gap-1">
                                  {skill.confident && (
                                    <Badge
                                      variant="secondary"
                                      className="flex items-center gap-1 text-xs"
                                    >
                                      <Star className="w-3 h-3 fill-current text-yellow-500" />
                                      自信あり
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <div className="flex items-center">
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    <span className="font-medium">経験</span>
                                  </div>
                                  <span className="font-semibold">
                                    {skill.months}ヶ月
                                  </span>
                                </div>

                                {/* カスタムプログレスバー */}
                                <div className="space-y-1">
                                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                                        skill.months
                                      )}`}
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
                </motion.section>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
