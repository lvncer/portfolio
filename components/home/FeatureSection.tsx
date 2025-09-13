import { AnimatedElement } from "@/components/ui/animated-element";
import Link from "next/link";

const features = [
  {
    title: "PR",
    description:
      "学校内外でのチーム開発と個人開発の両輪で、実践的な技術力と課題解決能力を磨いてまいりました。チーム開発では、プロジェクトマネージャーとしてイベントの演出システム開発やドローンプログラミングコンテストを成功に導き、特にコンテストでは優勝という成果を挙げています。多様なメンバーと連携し、一つの目標に向かってやり遂げる力には自信があります。\n\nまた、技術への探求心から個人開発にも没頭しており、AIとの対話が可能な3Dアプリケーションや開発効率を高めるCLIツールなど、Web技術を中心に幅広いアプリケーションを独力で開発してきました。\n\nこれらの経験で培った技術と、チームを率いて課題を解決してきた経験を活かし、今後はより大きな社会的課題の解決に貢献したいと強く願っています。技術で社会をより良くしていく挑戦ができることを楽しみにしております。",
  },
  {
    title: "Future Vision",
    description:
      "日進月歩で進化するAI技術の最先端を探求し続け、その成果を「開発プロセスの革新」と「プロダクトの付加価値向上」の両面に活かしていきたいです。具体的には、AIエージェントによる開発の自律化をさらに推し進め、チーム全体の生産性を飛躍させることに挑戦したいと考えています。また、これまでの開発経験を活かし、生成AIを応用したパーソナライズ機能や、これまでにない対話型のユーザー体験をシステムに実装し、事業の成長に直接貢献できるエンジニアを目指します。",
  },
];

const pageLinks = [
  {
    href: "/skills",
    title: "Skills",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/certifications",
    title: "Certifications",
  },
  {
    href: "/experiences",
    title: "Experiences",
  },
  {
    href: "/events",
    title: "Events",
  },
  {
    href: "/social",
    title: "Socials",
  },
];

export const FeatureSection = () => {
  return (
    <div id="features" className="relative py-16 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedElement delay={0.2} className="mb-20">
            <h2 className="text-5xl font-medium tracking-tight text-white">
              Features
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 gap-4 px-4 mb-16 md:grid-cols-1">
            {features.map((feature, index) => (
              <AnimatedElement key={feature.title} delay={0.4 + index * 0.1}>
                <div className="text-left bg-black/80 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <div className="grid grid-cols-2 justify-end gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-3 md:flex lg:gap-x-16">
            {pageLinks.map((link, index) => (
              <AnimatedElement key={link.href} delay={0.8 + index * 0.1}>
                <Link
                  href={link.href}
                  className="hover:text-blue-300 transition-colors font-light"
                >
                  {link.title}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
