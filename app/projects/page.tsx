"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "LightningTalks",
    description:
      "Next.Js、Clerk、Neonを使用したライトニングトーク登録サイト。もともと、学校でLTを行いたいという意見が多かったため作成。学校の学生だけでなく、外部のユーザも登録可能。",
    image: "/lt.png",
    technologies: ["Next.Js", "TypeScript", "Neon", "Clerk"],
    github: "https://github.com/lvncer/lt",
    live: "https://siw-lt.vercel.app",
  },
  {
    title: "Bookmarks",
    description:
      "Next.Js、Clerk、Supabaseを使用したシンプルなブックマークマネージャー。Clerkによるユーザ認証とSupabaseの高速データベースにより、快適な操作性を実現。",
    image: "/bookmark.png",
    technologies: ["Next.Js", "TypeScript", "Supabase", "Clerk"],
    github: "https://github.com/lvncer/bookmarks",
    live: "https://bookmarks-gamma-vert.vercel.app",
  },
  {
    title: "Next SNS",
    description:
      "Next.jsとNode.Jsを使用したモダンなSNSサイト。MongoDBと連携したAPIサーバーを間に挟むことで高い保守性が保たれる。",
    image: "/nextsns.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.Js",
      "Tailwind CSS",
      "ShadCn",
      "Redux",
      "Vitest",
      "MongoDB",
    ],
    github: "https://github.com/lvncer/nextsns",
    live: "https://nextsns-one.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold py-6">制作物</h1>
          <div className="mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="mb-2 text-2xl font-semibold">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        width={500}
                        height={300}
                      />
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4" />
                    <div className="flex gap-4">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
