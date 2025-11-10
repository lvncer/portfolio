"use client"

import { motion } from "framer-motion"
import { Calendar, Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "VRMCP",
    description: "VRM モデルを AI が自然言語で制御できる MCP リモートサーバー",
    image:
      "https://github.com/lvncer/vrmcp/blob/main/public/images/animate_vrm_bone.png?raw=true",
    technologies: [
      "Nodejs",
      "Express",
      "React",
      "VRM",
      "stdio / SSE",
      "MCP",
      "Upstash Redis",
      "Railway",
    ],
    category: "Webアプリケーション",
    status: "公開中",
    year: "2025",
    github: "https://github.com/lvncer/vrmcp",
    live: "https://vrmcp.up.railway.app/",
  },
  {
    title: "Kaiwa Dash",
    description: "AI との会話練習でコミュニケーション力を向上させる Web アプリ",
    image:
      "https://github.com/lvncer/kaiwa-dash/raw/main/public/images/result.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAPI",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
    ],
    category: "Webアプリケーション",
    status: "公開中",
    year: "2025",
    github: "https://github.com/lvncer/kaiwa-dash",
    live: "https://kaiwa-dash.vercel.app",
  },
  {
    title: "Claude Code CHANGELOG 監視通知システム",
    description:
      "Claude Code リポジトリの CHANGELOG.md 変更を 5 分毎に監視し、DeepL で日本語翻訳して Discord に美しい通知を送るシステムです。",
    image: "/cc-changelog.png",
    technologies: [
      "Node.js",
      "Discord.js",
      "DeepL API",
      "GitHub API",
      "TypeScript",
    ],
    category: "ツール",
    status: "停止",
    year: "2025",
    github: "https://github.com/lvncer/cc-changelogs",
    live: "https://discord.gg/mkEWzCDv",
  },
  {
    title: "cclog",
    description:
      "Claude Code の会話履歴をコマンドライン上で効率的に閲覧・管理するためのツール。過去のセッションを簡単に検索、閲覧、再開できます。",
    image:
      "https://raw.githubusercontent.com/lvncer/cclog/HEAD/public/images/sessions-preview.jpeg",
    technologies: ["TypeScript"],
    category: "ツール",
    status: "公開中",
    year: "2025",
    github: "https://github.com/lvncer/echoes",
    live: "https://www.npmjs.com/package/@lvncer/cclog",
  },
  {
    title: "Echoes",
    description:
      "AIの3Dモデルと直接会話ができるWebアプリ。音声入力から認識・合成・出力までできます。",
    image: "/echoes.jpeg",
    technologies: [
      "Next.Js",
      "TypeScript",
      "React Three Fiber",
      "Zustand",
      "Gemini",
    ],
    category: "Webアプリケーション",
    status: "公開中",
    year: "2025",
    github: "https://github.com/lvncer/echoes",
    live: "https://echoes-livid.vercel.app/",
  },
  {
    title: "NameCard",
    description:
      "Markdown ファイルから美しい名刺を作成・エクスポートできる CLI ツール",
    image: "./name-card.jpg",
    technologies: [
      "Next.Js",
      "TypeScript",
      "NPM",
      "Commander",
      "Tailwind CSS",
      "Puppeteer",
    ],
    category: "ライブラリ",
    status: "公開中",
    year: "2025",
    github: "https://github.com/lvncer/name-card",
    live: "https://www.npmjs.com/package/@lvncer/name-card",
  },
  {
    title: "LightningTalks",
    description:
      "ライトニングトーク管理サイト。学校でLTを行いたいという意見が多かったため作成しました。学校の学生だけでなく、外部のユーザも登録可能です。",
    image: "/lt.png",
    technologies: ["Next.Js", "TypeScript", "Neon", "Clerk"],
    category: "Webアプリケーション",
    status: "公開中",
    year: "2025",
    github: "https://github.com/lvncer/lt",
    live: "https://siw-lt.vercel.app",
  },
  {
    title: "Bookmarks",
    description:
      "シンプルなブックマークマネージャー。カテゴリ別にブックマークを管理できます。",
    image: "/bookmark.png",
    technologies: ["Next.Js", "TypeScript", "Supabase", "Clerk"],
    category: "Webアプリケーション",
    status: "停止",
    year: "2025",
    github: "https://github.com/lvncer/bookmarks",
    // live: "https://bookmarks-gamma-vert.vercel.app",
  },
  {
    title: "Next SNS",
    description:
      "シンプルなSNSのクローンサイト。フルスタックで作成した初めてのWebアプリです。",
    image: "/nextsns.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.Js",
      "Express",
      "Redux",
      "Tailwind CSS",
      "MongoDB",
    ],
    category: "Webアプリケーション",
    status: "公開中",
    year: "2024",
    github: "https://github.com/lvncer/nextsns",
    live: "https://nextsns-one.vercel.app",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "公開中":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "開発中":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "メンテナンス":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "停止":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Webアプリケーション":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "ツール":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    case "SNS":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
    case "ライブラリ":
      return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold py-6">制作物</h1>
          <p className="text-muted-foreground mb-8">
            Web開発を中心とした様々なプロジェクトを手がけ、モダンな技術スタックを活用してユーザー体験の向上を目指しています。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.year}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                        width={500}
                        height={300}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {project.live && (
                        <Button asChild variant="outline" size="sm">
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
