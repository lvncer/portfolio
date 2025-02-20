"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    className="rounded-lg w-full object-cover aspect-square"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Hello! 👋</h2>
                  <p className="text-muted-foreground">
                    フルスタックエンジニアやシステムエンジニア、セキュリティエンジニアなどまだまだやりたいことが決まっていないです。
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <p className="text-muted-foreground">
                      WEBアプリ開発やシステム開発など、チームワークを含めて様々な開発を経験してきました。
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
        </motion.div>
      </div>
    </div>
  );
}
