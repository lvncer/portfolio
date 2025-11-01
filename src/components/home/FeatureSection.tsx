import Link from "next/link"
import { AnimatedElement } from "@/components/ui/animated-element"

interface FeatureSection {
  title: string
  items: string[]
}

interface Feature {
  title: string
  description?: string
  sections?: FeatureSection[]
}

const features: Feature[] = [
  {
    title: "自己PR",
    sections: [
      {
        title: "コミュニケーション能力の高さ",
        items: ["チーム開発でのスムーズなやりとり", "クライアントとの折衝経験"],
      },
      {
        title: "主体性・誠実性の高さ",
        items: [
          "個人開発でAIなどの最新情報を常にキャッチアップ",
          "オープンな会話を推進し、インシデント発生時は即時連絡",
        ],
      },
      {
        title: "豊富な経験",
        items: [
          "ドローンプログラミング全国大会で優勝経験あり",
          "学校内外でさまざまなプロジェクトマネージャーを担当",
          "学内の授業アシスタントで後輩をサポート",
        ],
      },
    ],
  },
  {
    title: "Future Vision",
    description:
      "AIエージェントによる開発の自律化をさらに推し進め、チーム全体の生産性を飛躍させることに挑戦したいと考えています。また、これまでの開発経験を活かし、生成AIを応用したパーソナライズ機能や、これまでにない対話型のユーザー体験をシステムに実装し、事業の成長に直接貢献できるエンジニアを目指します。",
  },
]

export const FeatureSection = () => {
  return (
    <div id="features" className="relative py-16 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement delay={0.2} className="mb-12">
            <h2 className="text-5xl font-medium tracking-tight text-white">
              Features
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 gap-4 px-4 mb-16 md:grid-cols-1">
            {features.map((feature, index) => (
              <AnimatedElement key={feature.title} delay={0.4 + index * 0.1}>
                <div className="text-left bg-white/60 rounded-xl p-8 border border-white/50">
                  <h3 className="text-xl font-bold text-black pb-6">
                    {feature.title}
                  </h3>
                  <div className="space-y-6 px-12">
                    {feature.sections ? (
                      feature.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-3">
                          <h4 className="text-lg font-medium text-gray-900">
                            {sectionIndex + 1}. {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-gray-900 leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-gray-900 px-8">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <p className="text-base text-gray-900 leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
