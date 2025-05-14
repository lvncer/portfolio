"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

type ProjectImage = {
  url: string;
  alt: string;
  caption: string;
};

const experience = {
  title: "スマホ向けインタラクティブシステム LiveFx",
  company: "SIW実行委員会",
  period: "2025",
  post: "プロジェクトマネージャー、フロントエンドエンジニア",
  description:
    "入学式で、観客のスマホでカラフルなアニメーションなどを行いました。3000台以上のスマホの同期と、リアルタイムでのデータのやり取りを行うための工夫にこだわりました。",
  skills: [
    "React",
    "TypeScript",
    "WebSocket",
    "Docker",
    "k8s",
    "Node.js",
    "AWS",
    "Prometheus",
    "Grafana",
  ],
  images: [] as ProjectImage[],
  // images: [
  //   {
  //     url: "/livefx/overview.png",
  //     alt: "LiveFxシステム概要",
  //     caption: "システム全体のアーキテクチャ図",
  //   } as ProjectImage,
  //   {
  //     url: "/livefx/monitoring.png",
  //     alt: "モニタリングダッシュボード",
  //     caption: "Grafanaを用いたリアルタイムモニタリング",
  //   } as ProjectImage,
  //   {
  //     url: "/livefx/frontend.png",
  //     alt: "フロントエンド画面",
  //     caption: "観客のスマートフォンに表示される画面",
  //   } as ProjectImage,
  // ],
};

export default function LiveFxDetail() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{experience.title}</span>
            <Badge variant="secondary">{experience.period}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium mb-1">
                運営: {experience.company}
              </p>
              <p className="text-sm font-medium mb-3">
                担当: {experience.post}
              </p>
              <p className="text-sm text-muted-foreground">
                {experience.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>

            {experience.images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experience.images.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  プロジェクトの画像は現在準備中です。公開をお待ちください。
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
