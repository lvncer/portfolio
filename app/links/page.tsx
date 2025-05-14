"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Mail, ChartNoAxesColumn, Twitter } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "GitHub",
    description: "私のオープンソースプロジェクトと貢献を確認できます",
    icon: Github,
    url: "https://github.com/lvncer",
  },
  {
    title: "Zenn",
    description:
      "Webアプリ開発とプログラミングに関する私の記事を読むことができます",
    icon: ChartNoAxesColumn,
    url: "https://zenn.dev/tkszenn",
  },
  {
    title: "X",
    description:
      "AIの最新動向やプログラミング技術のアップデート情報をシェアしています",
    icon: Twitter,
    url: "https://x.com/p2WJVLYglL25267",
  },
  {
    title: "Email",
    description: "直接連絡を取りたい場合は、こちらからどうぞ",
    icon: Mail,
    url: "/contact/",
  },
];

export default function Links() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">My Social Links</h1>
          <div className="grid gap-6 md:grid-cols-1">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <link.icon className="h-8 w-8 mr-2" />
                        <div>
                          <CardTitle>{link.title}</CardTitle>
                          <div className="mb-2" />
                          <CardDescription>{link.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
