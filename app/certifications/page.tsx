"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Calendar, User } from "lucide-react";

const certifications = [
  {
    title: "Paiza A ランク取得",
    date: "2025",
    organization: "Paiza",
    category: "プログラミング",
    level: "上級",
    description:
      "複雑なロジックを限られた時間内で設計、実装できる、あらゆる実装ができるスキルを証明する (Python)",
  },
  {
    title: "普通免許 (AT限定)",
    date: "2025",
    organization: "国家公安委員会",
    category: "免許",
    description:
      "普通自動車のうちオートマチック車だけを運転することができる免許",
  },
  {
    title: "Paiza B ランク取得",
    date: "2024",
    organization: "Paiza",
    category: "プログラミング",
    level: "中級",
    description: "実用的なロジックを時間内に実装するスキルを証明する (Python)",
  },
  {
    title: "基本情報技術者試験",
    date: "2023",
    organization: "IPA",
    category: "国家資格",
    level: "ITSS 2",
    description: "ITスキル・知識を公式に認定する国家資格",
  },
  {
    title: "情報セキュリティマネジメント試験",
    date: "2023",
    organization: "IPA",
    category: "国家資格",
    level: "ITSS 2",
    description: "情報セキュリティに関する知識を問う国家資格",
  },
];

const getCertificationCategoryColor = (category: string) => {
  switch (category) {
    case "プログラミング":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "国家資格":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "免許":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "上級":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    case "中級":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    case "初級":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "標準":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const experiences = [
  {
    id: "livefx",
    title: "LiveFx",
    company: "SIW実行委員会",
    period: "2025",
    post: "プロジェクトマネージャー、フロントエンドエンジニア",
    category: "開発プロジェクト",
    status: "完了",
    description:
      "専門学校のグループの入学式イベントで、演者側の MIDI コントローラーによる画面演出の操作を、リアルタイムに観客のスマートフォンへ視覚効果として同期表示させました。",
    skills: [
      "React",
      "TypeScript",
      "WebSocket",
      "k8s",
      "Express",
      "AWS",
      "Prometheus",
      "Grafana",
    ],
    url: "https://zenn.dev/tkszenn/articles/2e73439f678488",
  },
  {
    id: "autonomous-driving",
    title: "自動運転AIチャレンジ2024 予選出場",
    company: "自動車技術会",
    period: "2024",
    post: "プロジェクトマネージャー",
    category: "競技",
    status: "参加",
    description:
      "オンラインのシミュレーションで実施します。予選の競技はデジタルツイン指向のAWSIMを用いてコースをより速く走行することを目指します",
    skills: ["ROS", "Ubuntu", "Docker"],
  },
  {
    id: "drocats",
    title: "第一回ドロカツ プログラミング部門優勝",
    company: "ドロカツ実行委員会",
    period: "2024",
    post: "プロジェクトマネージャー",
    category: "競技",
    status: "優勝",
    description: "ドローンのプログラミングや操縦に関する全国大会です。",
    skills: ["Python"],
  },
];

const getExperienceCategoryColor = (category: string) => {
  switch (category) {
    case "開発プロジェクト":
      return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300";
    case "競技":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    case "インターン":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getExperienceStatusColor = (status: string) => {
  switch (status) {
    case "優勝":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "完了":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "参加":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "進行中":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function Certifications() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section>
              <h1 className="text-4xl font-bold mb-4">保有している資格</h1>
              <p className="text-muted-foreground mb-8">
                技術力向上と専門知識の習得を目的として、様々な資格取得に取り組んでいます。
              </p>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">
                            {cert.title}
                          </CardTitle>
                          {cert.level && (
                            <Badge className={getLevelColor(cert.level)}>
                              {cert.level}
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge
                            className={getCertificationCategoryColor(
                              cert.category
                            )}
                          >
                            {cert.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {cert.date}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="w-4 h-4 mr-2" />
                          {cert.organization}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h1 className="text-4xl font-bold mb-4">外部での経験</h1>
              <p className="text-muted-foreground mb-8">
                学外での開発プロジェクトや競技への参加を通じて、実践的なスキルと経験を積んでいます。
              </p>
              <div className="grid gap-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-all duration-200">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <Badge
                            className={getExperienceStatusColor(exp.status)}
                          >
                            {exp.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge
                            className={getExperienceCategoryColor(exp.category)}
                          >
                            {exp.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Building className="w-4 h-4 mr-2" />
                            運営: {exp.company}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="w-4 h-4 mr-2" />
                            担当: {exp.post}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        {exp.url && (
                          <div className="pt-2">
                            <Button asChild variant="outline" size="sm">
                              <Link
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                詳細を見る
                              </Link>
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
