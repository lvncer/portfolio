"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    date: "2024",
    organization: "Amazon Web Services",
    description:
      "クラウドアーキテクチャの設計と実装に関する専門知識を証明する認定資格",
  },
  {
    title: "基本情報技術者",
    date: "2023",
    organization: "IPA",
    description: "ITスキル・知識を公式に認定する国家資格",
  },
];

const experiences = [
  {
    title: "第一回ドロカツ プログラミング部門優勝",
    company: "ドロカツ実行委員会",
    period: "2024",
    description: "ドローンのプログラミングや操縦に関する大会",
    skills: ["Python"],
  },
  {
    title: "自動運転AIチャレンジ2024 予選出場",
    company: "自動車技術会",
    period: "2024",
    description:
      "オンラインのシミュレーションで実施します。予選の競技はデジタルツイン指向のAWSIMを用いてコースをより速く走行することを目指します",
    skills: ["ROS", "Ubuntu", "Docker"],
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
          className="max-w-4xl mx-auto space-y-12"
        >
          <section>
            <h1 className="text-4xl font-bold mb-8">資格</h1>
            <div className="grid gap-6">
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
                      <p className="text-sm text-muted-foreground mb-2">
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
            <h1 className="text-4xl font-bold mb-8">職務経験</h1>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{exp.title}</span>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium mb-2">{exp.company}</p>
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
