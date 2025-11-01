import Image, { type StaticImageData } from "next/image"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import aidd from "../../../public/images/aidd.jpg"
import events from "../../../public/images/events.jpg"
import livefx from "../../../public/images/livefx.jpeg"

interface FeatureSection {
  title: string
  items?: string[]
  image?: string | StaticImageData
}

interface Feature {
  description?: string
  sections?: FeatureSection[]
}

const features: Feature[] = [
  {
    sections: [
      {
        title: "Modern Engineering & Project Management",
        image: livefx,
      },
      {
        title: "Events, Events, Events!",
        image: events,
      },
      {
        title: "AI Driven Development",
        image: aidd,
      },
    ],
  },
]

export const FeatureSection = () => {
  return (
    <div id="features" className="relative py-16 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-8">
              Features
            </h2>
            <p className="text-xl text-gray-300 font-light">
              My Skills & Experiences
            </p>
          </AnimatedElement>

          <div className="-pd-16 grid grid-cols-1 gap-4 md:grid-cols-1">
            {features.map((feature, index) => (
              <AnimatedElement key={index} delay={0.4 + index * 0.1}>
                <div className="text-leftrounded-xl">
                  {feature.sections ? (
                    <div className="grid grid-cols-2 gap-4">
                      {/* 左側 */}
                      <div className="pt-52 pb-52">
                        <Card className="h-full bg-black border-white/30 relative overflow-hidden">
                          <CardHeader>
                            <CardTitle className="p-4 text-2xl font-extralight tracking-tight text-gray-100">
                              {feature.sections[1].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative pb-32">
                            <ul className="space-y-2">
                              {feature.sections[1].items?.map(
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
                          </CardContent>
                          {feature.sections[1].image && (
                            <div className="absolute bottom-0 right-0 w-120 aspect-video p-6">
                              <Image
                                src={feature.sections[1].image}
                                alt={feature.sections[1].title}
                                fill
                                className="rounded-tl-2xl transition-opacity object-cover"
                              />
                            </div>
                          )}
                        </Card>
                      </div>

                      {/* 右側 */}
                      <div className="flex flex-col gap-4">
                        {/* 1つ目: 上 */}
                        <Card className="h-full bg-black border-white/30 relative overflow-hidden">
                          <CardHeader>
                            <CardTitle className="p-4 text-2xl font-extralight tracking-tight text-gray-100">
                              {feature.sections[0].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative pb-120">
                            <ul className="space-y-2">
                              {feature.sections[0].items?.map(
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
                          </CardContent>
                          {feature.sections[0].image && (
                            <div className="absolute bottom-0 right-0 w-120 aspect-video p-6">
                              <Image
                                src={feature.sections[0].image}
                                alt={feature.sections[0].title}
                                fill
                                className="rounded-tl-2xl transition-opacity object-cover"
                              />
                            </div>
                          )}
                        </Card>

                        {/* 3つ目: 下 */}
                        <Card className="h-full bg-black border-white/30 relative overflow-hidden">
                          <CardHeader>
                            <CardTitle className="p-4 text-2xl font-extralight tracking-tight text-gray-100">
                              {feature.sections[2].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative pb-32">
                            <ul className="space-y-2">
                              {feature.sections[2].items?.map(
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
                          </CardContent>
                          {feature.sections[2].image && (
                            <div className="absolute bottom-0 right-0 w-120 aspect-video p-6">
                              <Image
                                src={feature.sections[2].image}
                                alt={feature.sections[2].title}
                                fill
                                className="rounded-tl-2xl transition-opacity object-cover"
                              />
                            </div>
                          )}
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
