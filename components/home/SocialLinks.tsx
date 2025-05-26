import {
  Github,
  Mail,
  ChartNoAxesColumn,
  Twitter,
  LucideIcon,
  Globe,
} from "lucide-react";
import { LinkCard } from "@/components/ui/link-card";
import { LazyLoad } from "@/components/ui/lazy-load";

type LinkItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  isExternalLink?: boolean;
};

const links: LinkItem[] = [
  {
    title: "GitHub",
    description: "私のオープンソースプロジェクトと貢献を確認できます",
    icon: Github,
    url: "https://github.com/lvncer",
    isExternalLink: true,
  },
  {
    title: "Zenn",
    description:
      "Webアプリ開発とプログラミングに関する私の記事を読むことができます",
    icon: ChartNoAxesColumn,
    url: "https://zenn.dev/tkszenn",
    isExternalLink: true,
  },
  {
    title: "Connpass",
    description: "参加したイベントの記録を確認できます",
    icon: Globe,
    url: "https://connpass.com/user/lvncer",
    isExternalLink: true,
  },
  {
    title: "X",
    description:
      "AIの最新動向やプログラミング技術のアップデート情報をシェアしています",
    icon: Twitter,
    url: "https://x.com/p2WJVLYglL25267",
    isExternalLink: true,
  },
  {
    title: "Email",
    description: "直接連絡を取りたい場合は、こちらからどうぞ",
    icon: Mail,
    url: "",
    isExternalLink: false,
  },
];

export const SocialLinks = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16" id="links">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">My Social Links</h1>
        <div className="mb-8" />
        <LazyLoad>
          <div className="grid gap-4 md:grid-cols-1">
            {links.map((link) => (
              <div key={link.title} className="md:px-20">
                <LinkCard
                  title={link.title}
                  description={link.description}
                  icon={link.icon}
                  url={link.url}
                  isExternalLink={link.isExternalLink}
                />
              </div>
            ))}
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};
