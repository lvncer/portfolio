"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "普通免許 (AT限定)",
    date: "2025",
    organization: "国家公安委員会",
    description: "自動車運転免許",
  },
  {
    title: "Paiza Bランク取得",
    date: "2024",
    organization: "Paiza",
    description: "プログラミングスキルを証明する資格",
  },
  {
    title: "基本情報技術者試験",
    date: "2023",
    organization: "IPA",
    description: "ITスキル・知識を公式に認定する国家資格",
  },
  {
    title: "情報セキュリティマネジメント試験",
    date: "2023",
    organization: "IPA",
    description: "情報セキュリティに関する知識を問う国家資格",
  },
];

const experiences = [
  {
    id: "livefx",
    title: "LiveFx",
    company: "SIW実行委員会",
    period: "2025",
    post: "プロジェクトマネージャー、フロントエンドエンジニア",
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
    description: "ドローンのプログラミングや操縦に関する全国大会です。",
    skills: ["Python"],
  },
];

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
              <h1 className="text-4xl font-bold mb-8">保有している資格</h1>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{cert.title}</span>
                          <Badge variant="secondary">{cert.date}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-1">
                          {cert.organization}
                        </p>
                        <p className="text-sm">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h1 className="text-4xl font-bold mb-8">外部での経験</h1>
              <div className="grid gap-3">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="transition-all duration-200">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{exp.title}</span>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-medium mb-1">
                          運営: {exp.company}
                        </p>
                        <p className="text-sm font-medium mb-3">
                          担当: {exp.post}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        {exp.url && (
                          <>
                            <div className="mt-4" />
                            <div className="flex gap-4">
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
                          </>
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
