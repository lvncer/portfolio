"use client";

import {
  Code2,
  LayoutTemplate,
  TestTube,
  Database,
  Cpu,
  Star,
  LucideIcon,
  WrenchIcon,
  Brain,
  Info,
  X,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// スキルの型定義
interface Skill {
  name: string;
  stars: 1 | 2 | 3; // 1-3の星評価
  imageUrl?: string; // PNG画像のURL
  details?: string; // スキルの詳細説明
}

// スキルカテゴリの型定義
interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

// スキルカテゴリデータ
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      {
        name: "Python",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        details:
          "機械学習、データサイエンス、Web開発（Django、Flask、FastAPI）での実務経験。複数のプロジェクトでバックエンド開発を担当。",
      },
      {
        name: "JavaScript",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        details:
          "フロントエンド開発の主力言語。React、Node.js、Express.jsを使った複数のWebアプリケーション開発経験。",
      },
      {
        name: "TypeScript",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        details:
          "型安全なJavaScript開発。Next.js、React、Node.jsプロジェクトで活用し、保守性の高いコードを実現。",
      },
      {
        name: "PHP",
        stars: 2,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        details:
          "Laravelフレームワークを使用したWebアプリケーション開発の基礎知識。",
      },
      {
        name: "Swift",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        details:
          "iOSアプリ開発の基礎学習中。SwiftUIを使った簡単なアプリ作成経験。",
      },
      {
        name: "Go",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        details:
          "高速なバックエンドサービス開発のための学習中。基本文法とgoroutineの理解。",
      },
      {
        name: "Rust",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-line.svg",
        details:
          "システムプログラミング言語としての基礎を学習中。メモリ安全性とパフォーマンスに興味。",
      },
    ],
  },
  {
    title: "Frameworks",
    icon: LayoutTemplate,
    skills: [
      {
        name: "React",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        details:
          "フロントエンド開発の主力フレームワーク。Hooks、Context API、カスタムコンポーネント開発での豊富な実務経験。",
      },
      {
        name: "Node.js",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        details:
          "サーバーサイドJavaScript環境。API開発、リアルタイム通信、マイクロサービス構築での実務経験。",
      },
      {
        name: "Express.js",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        details:
          "Node.jsの軽量Webフレームワーク。RESTful API、認証システム、ミドルウェア開発での実装経験。",
      },
      {
        name: "Redux",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        details:
          "React状態管理ライブラリ。複雑なアプリケーションの状態管理とRedux Toolkitでの開発経験。",
      },
      {
        name: "TailwindCSS",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        details:
          "ユーティリティファーストCSSフレームワーク。レスポンシブデザインとモダンUIの高速開発を実現。",
      },
      {
        name: "Laravel",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        details:
          "PHPのMVCフレームワーク。基本的なCRUD操作とEloquent ORMの使用経験。",
      },
      {
        name: "Ruby on Rails",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
        details:
          "PHPのMVCフレームワーク。基本的なCRUD操作とEloquent ORMの使用経験。",
      },
    ],
  },
  {
    title: "Libraries",
    icon: TestTube,
    skills: [
      { name: "Fast API", stars: 3 },
      { name: "Next.js", stars: 3 },
      { name: "Astro", stars: 2 },
      { name: "Flask", stars: 2 },
      { name: "React Native", stars: 2 },
      { name: "Django", stars: 1 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", stars: 3 },
      { name: "MySQL", stars: 3 },
      { name: "MongoDB", stars: 3 },
      { name: "Supabase", stars: 3 },
      { name: "SQLite", stars: 2 },
      { name: "Firebase", stars: 2 },
    ],
  },
  {
    title: "Platforms",
    icon: Cpu,
    skills: [
      { name: "Linux", stars: 3 },
      { name: "Github", stars: 3 },
      { name: "Clerk", stars: 3 },
      { name: "AWS", stars: 2 },
      { name: "Figma", stars: 2 },
      { name: "Docker", stars: 2 },
      { name: "GitHub Actions", stars: 2 },
      { name: "Kubernetes", stars: 1 },
    ],
  },
  {
    title: "Hardware",
    icon: WrenchIcon,
    skills: [
      { name: "Raspberry Pi", stars: 3 },
      { name: "M5Stack", stars: 3 },
    ],
  },
  {
    title: "AI Tools",
    icon: Brain,
    skills: [
      { name: "Cursor Pro", stars: 3 },
      { name: "Google AI Pro", stars: 3 },
      { name: "Claude Code", stars: 3 },
      { name: "Windsurf", stars: 3 },
      { name: "Devin", stars: 3 },
    ],
  },
];

// 星評価の説明を表示するコンポーネント
const StarLegend = () => {
  const levels = [
    {
      stars: 3,
      label: "上級",
      description: "実務経験豊富、他者に教えることができるレベル",
    },
    {
      stars: 2,
      label: "中級",
      description: "一人で開発を進められる、使用経験あり",
    },
    {
      stars: 1,
      label: "初級",
      description: "基本的な操作・開発ができる、学習中",
    },
  ];

  return (
    <div className="bg-accent/20 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">スキルレベル説明</h3>
      <div className="space-y-2">
        {levels.map((level) => (
          <div key={level.stars} className="flex items-center gap-3">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < level.stars
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{level.label}:</span>
            <span className="text-muted-foreground text-sm">
              {level.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// モーダルコンポーネント
const SkillModal = ({
  skill,
  isOpen,
  onClose,
}: {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!skill || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-xl p-6 max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {skill.imageUrl && (
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <StarRating stars={skill.stars} />
            </div>
          </div>

          {skill.details && (
            <div className="mt-4">
              <h4 className="font-medium text-sm text-muted-foreground mb-2">
                詳細
              </h4>
              <p className="text-sm leading-relaxed">{skill.details}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 星評価を表示するコンポーネント
const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="flex">
      {[...Array(3)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Skills(): JSX.Element {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    if (skill.details) {
      setSelectedSkill(skill);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold py-6">Skills</h1>
          <StarLegend />
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <section key={category.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div
                        className={`px-4 py-3 rounded-lg border bg-black hover:bg-accent/50 transition-all duration-300 hover:shadow-md hover:scale-105 ${
                          skill.details ? "cursor-pointer" : ""
                        }`}
                        onClick={() => handleSkillClick(skill)}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            {skill.imageUrl && (
                              <Image
                                src={skill.imageUrl}
                                alt={skill.name}
                                width={20}
                                height={20}
                                className="w-5 h-5 flex-shrink-0"
                              />
                            )}
                            <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground truncate">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <StarRating stars={skill.stars} />
                            {skill.details && (
                              <Info className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
