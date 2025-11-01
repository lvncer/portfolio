import Image from "next/image"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureSection {
  title: string
  items: string[]
  image?: string
}

interface Feature {
  description?: string
  sections?: FeatureSection[]
}

const features: Feature[] = [
  {
    sections: [
      {
        title: "AI Driven Development",
        items: ["チーム開発でのスムーズなやりとり", "クライアントとの折衝経験"],
        image: "/images/communication.png",
      },
      {
        title: "主体性・誠実性の高さ",
        items: [
          "個人開発でAIなどの最新情報を常にキャッチアップ",
          "オープンな会話を推進し、インシデント発生時は即時連絡",
        ],
        image: "/images/honesty.png",
      },
      {
        title: "豊富な経験",
        items: [
          "学校内外でさまざまなプロジェクトマネージャーを担当",
          "学内の授業アシスタントで後輩をサポート",
        ],
        image: "/images/experience.png",
      },
    ],
  },
]

export const FeatureSection = () => {
  return (
    <div id="features" className="relative py-16 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedElement delay={0.2} className="mb-12">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-8">
              Features
            </h2>
            <p className="text-xl text-gray-300 font-light">
              My Skills & Experiences
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            {features.map((feature, index) => (
              <AnimatedElement key={index} delay={0.4 + index * 0.1}>
                <div className="text-leftrounded-xl">
                  {feature.sections ? (
                    <div className="grid grid-cols-2 gap-4">
                      {/* 右側: 1つ目と3つ目を縦に並べる */}
                      <div className="flex flex-col gap-4">
                        {/* 1つ目: 上 */}
                        <Card className="h-full bg-black border-white/30 relative overflow-hidden">
                          <CardHeader>
                            <CardTitle className="text-lg font-light tracking-tight text-white">
                              {feature.sections[0].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative pb-20">
                            <ul className="space-y-2">
                              {feature.sections[0].items.map(
                                (item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-white leading-relaxed"
                                  >
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                            {feature.sections[0].image && (
                              <div className="absolute bottom-2 right-2">
                                <Image
                                  src={feature.sections[0].image}
                                  alt={feature.sections[0].title}
                                  width={80}
                                  height={80}
                                  className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
                                />
                              </div>
                            )}
                          </CardContent>
                        </Card>

                        {/* 3つ目: 下 */}
                        <Card className="h-full bg-black border-white/30 relative overflow-hidden">
                          <CardHeader>
                            <CardTitle className="text-lg font-medium text-white">
                              3. {feature.sections[2].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative pb-20">
                            <ul className="space-y-2">
                              {feature.sections[2].items.map(
                                (item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-white leading-relaxed"
                                  >
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                            {feature.sections[2].image && (
                              <div className="absolute bottom-2 right-2">
                                <Image
                                  src={feature.sections[2].image}
                                  alt={feature.sections[2].title}
                                  width={80}
                                  height={80}
                                  className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
                                />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>

                      {/* 左側: 2つ目（上部にパディング） */}
                      <div className="pt-24 pb-24">
                        <Card className="h-full bg-black border-white/30 relative overflow-hidden">
                          <CardHeader>
                            <CardTitle className="text-lg font-medium text-white">
                              2. {feature.sections[1].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative pb-20">
                            <ul className="space-y-2">
                              {feature.sections[1].items.map(
                                (item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-white leading-relaxed"
                                  >
                                    {item}
                                  </li>
                                )
                              )}
                            </ul>
                            {feature.sections[1].image && (
                              <div className="absolute bottom-2 right-2">
                                <Image
                                  src={feature.sections[1].image}
                                  alt={feature.sections[1].title}
                                  width={80}
                                  height={80}
                                  className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
                                />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ) : (
                    <div className="px-12">
                      <p className="text-base text-gray-900 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
