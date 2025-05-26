import { Code2, Sparkles, Rocket, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedElement } from "@/components/ui/animated-element";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: Code2,
    title: "高い志向性",
    description:
      "常に最高品質を目指し、洗練されたコードと成果物を迅速に提供します。",
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

export const Features = () => {
  return (
    <div className="container mx-auto px-4 pt-12">
      <AnimatedElement
        delay={0.8}
        y={40}
        className="max-w-8xl mx-auto grid gap-8 md:grid-cols-3"
      >
        {features.map((feature, index) => (
          <AnimatedElement key={feature.title} delay={1 + index * 0.1}>
            <Card className="relative overflow-hidden group text-center">
              <CardContent className="p-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-center">
                  <feature.icon className="h-12 w-12 mb-4" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </AnimatedElement>
        ))}
      </AnimatedElement>
    </div>
  );
};
