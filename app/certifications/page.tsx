"use client"

import { motion } from "framer-motion"
import { Building, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
]

const getCertificationCategoryColor = (category: string) => {
  switch (category) {
    case "プログラミング":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "国家資格":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "免許":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "上級":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "中級":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    case "初級":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "標準":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function Certifications() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
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
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
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
        </motion.div>
      </div>
    </div>
  )
}
