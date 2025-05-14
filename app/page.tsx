"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Code2,
    title: "高い志向性",
    description: "常に最高品質を目指し、洗練されたコードと成果物を提供します。",
  },
  {
    icon: Sparkles,
    title: "豊富な経験",
    description:
      "多様なプロジェクトで培った経験を活かし、価値あるソリューションを実現します。",
  },
  {
    icon: Rocket,
    title: "優れたコミュニケーション力",
    description: "チームやクライアントと円滑に連携し、アイデアを形にします。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700"
          >
            Welcome to My Portfolio
          </motion.h1>
          <div className="mt-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg leading-8 text-muted-foreground"
          >
            私は、様々な社会的課題に対して、
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg leading-8 text-muted-foreground"
          >
            美しく機能的なシステム体験を創り出すことを目指しています。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Button variant="outline" asChild>
              <Link href="#about">
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24 grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <Card className="relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pt-4 pb-32" id="about">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/profile.JPG"
                    alt="Profile"
                    className="rounded-lg w-full object-cover aspect-square"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">はじめまして！</h2>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">About me</h3>
                    <p className="text-muted-foreground">
                      さいたまIT・WEB専門学校 高度専門士情報技術科
                      3年の高橋といいます。システム開発のフルスタックエンジニアを目指しています。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <p className="text-muted-foreground">
                      WEBアプリやシステムなどの開発を、チームを含めて積極的に挑戦し、経験してきました。この経験を生かしてさらに成長していきたいと考えています。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Interests</h3>
                    <p className="text-muted-foreground">
                      コーディングしていないときは、新しい技術を探求したり、オープンソースプロジェクトに貢献したり、開発者コミュニティと知識を共有したりしています。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
