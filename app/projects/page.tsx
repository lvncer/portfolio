"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
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
  {
    title: "Bookmarks",
    description:
      "Next.Js、Clerk、Supabaseを使用したシンプルなブックマークマネージャー。Clerkによるユーザ認証とSupabaseの高速データベースにより、快適な操作性を実現。",
    image: "/bookmark.png",
    technologies: ["Next.Js", "TypeScript", "Supabase", "Clerk"],
    github: "https://github.com/lvncer/bookmarks",
    live: "https://bookmarks-gamma-vert.vercel.app",
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">制作物</h1>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
