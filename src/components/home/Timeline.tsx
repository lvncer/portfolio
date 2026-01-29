"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type JourneyItem = {
  date: string
  title: string
  description: string
}

// NOTE: 下に行くほど新しい出来事（古い → 新しい）順に並べてください
const journey: JourneyItem[] = [
  {
    date: "2023.04",
    title: "入学",
    description: "プログラミングという単語すら知らない状態",
  },
  {
    date: "2023.09",
    title: "AI の世界に飛び込む",
    description: "どうやらChatGPTなるものがすごいらしいな",
  },
  {
    date: "2024.06",
    title: "React との出会い",
    description: "Udemyで恩師と出会い、Reactから個人開発にハマる",
  },
  {
    date: "2024.07",
    title: "さらなる AI の世界へ",
    description: "Claude 3.5 Sonnet が飛び抜けて優秀だと実感",
  },
  {
    date: "2025.02",
    title: "はじめての大規模プロジェクト",
    description:
      "Livefxでプロジェクトマネジメント兼フロントエンドエンジニアを担当",
  },
  {
    date: "2025.06",
    title: "CursorやAIコミュニティに参加",
    description: "CursorでAI駆動開発をさらに加速",
  },
  {
    date: "2025.12〜",
    title: "内々定取得、そして",
    description: "自社開発系の企業に内々定をもらい、さらなる自己成長を目指す",
  },
]

export const Timeline = () => {
  return (
    <section id="journey" className="relative py-16 sm:py-32 scroll-mt-32">
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
              Journey
            </h2>
            <p className="text-xl text-gray-300 font-light">
              遍歴 / これまでの歩み
            </p>
          </div>

          <div className="relative px-20">
            {/* 一本の棒（縦ライン） */}
            <div className="absolute left-24 top-0 bottom-0 w-[2px] bg-white/20" />

            <ul className="space-y-3">
              {journey.map((item, index) => (
                <li key={`${item.date}-${index}`} className="relative pl-12">
                  {/* 枝（横ライン） */}
                  <div className="absolute left-4 top-8 w-8 h-[2px] bg-white/20" />

                  {/* ノード（丸） */}
                  <div className="absolute left-4 top-8 -translate-x-1/2 -translate-y-1/2">
                    <div className="h-3.5 w-3.5 rounded-full bg-white/85 ring-4 ring-white/15" />
                  </div>

                  <div>
                    <Card className="border-white/20 bg-black/60">
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <CardTitle className="text-xl md:text-2xl font-extralight tracking-tight text-gray-100">
                            {item.title}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="border-white/20 text-gray-200 font-light"
                          >
                            {item.date}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-300 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
