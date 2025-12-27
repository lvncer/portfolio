"use client"

import {
  Brain,
  Code2,
  Cpu,
  Database,
  type LucideIcon,
  Star,
  WrenchIcon,
} from "lucide-react"
import Image from "next/image"

// スキルの型定義
interface Skill {
  name: string
  stars: 1 | 2 | 3 // 1-3の星評価
  imageUrl?: string // PNG画像のURL
  details?: string // スキルの詳細説明
}

// フレームワーク・ライブラリの型定義
interface Framework {
  name: string
  stars: 1 | 2 | 3
  imageUrl?: string
  details?: string
}

// 言語スキルの型定義
interface LanguageSkill {
  name: string
  names?: string[] // 複数の言語名（JavaScript/TypeScript用）
  stars: 1 | 2 | 3
  imageUrl?: string
  imageUrls?: string[] // 複数の画像URL（JavaScript/TypeScript用）
  details: string
  technologies: Framework[] // フレームワークとライブラリを統合
}

// その他のスキルカテゴリの型定義
interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

// 言語スキルデータ
const languageSkills: LanguageSkill[] = [
  {
    name: "Python",
    stars: 3,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    details:
      "機械学習、データサイエンス、Web開発での実務経験。複数のプロジェクトでバックエンド開発を担当。",
    technologies: [
      {
        name: "FastAPI",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg",
        details:
          "高速なAPI開発フレームワーク。型ヒントとOpenAPI自動生成での豊富な実務経験。",
      },
      {
        name: "Flask",
        stars: 2,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        details:
          "軽量Webフレームワーク。API開発とマイクロサービス構築での使用経験。",
      },
      {
        name: "Django",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        details:
          "基本的なWebアプリケーション開発の経験。ORMとMVCパターンの理解。",
      },
    ],
  },
  {
    name: "JavaScript / TypeScript",
    names: ["JavaScript", "TypeScript"],
    stars: 3,
    imageUrls: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    ],
    details:
      "フロントエンド・バックエンド開発の主力言語。型安全なJavaScript開発で保守性の高いコードを実現。",
    technologies: [
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
        name: "Next.js",
        stars: 3,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        details:
          "React フルスタックフレームワーク。SSR、SSG、API Routes での豊富な開発経験。",
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
        name: "Astro",
        stars: 2,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
        details: "静的サイトジェネレーター。高速なWebサイト構築での使用経験。",
      },
      {
        name: "React Native",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
        details:
          "クロスプラットフォームモバイルアプリ開発。基本的なアプリ作成経験。",
      },
    ],
  },
  {
    name: "PHP",
    stars: 2,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    details: "Webアプリケーション開発の基礎知識。",
    technologies: [
      {
        name: "Laravel",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        details: "PHPのMVCフレームワーク。基本的なCRUD操作。",
      },
    ],
  },
  {
    name: "Swift",
    stars: 1,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    details: "iOSアプリ開発の基礎学習中。SwiftUIを使った簡単なアプリ作成経験。",
    technologies: [],
  },
  {
    name: "Go",
    stars: 2,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    details:
      "高速なバックエンドサービス開発のための学習中。基本文法とgoroutineの理解。",
    technologies: [
      {
        name: "Gin",
        stars: 1,
        details:
          "Go の Web フレームワーク。基本的な CRUD 操作とミドルウェアの使用経験。",
      },
      {
        name: "ent.",
        stars: 1,
        details:
          "Go の ORM。データベースとの連携を容易にするためのライブラリ。",
      },
    ],
  },
  {
    name: "Rust",
    stars: 1,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-line.svg",
    details:
      "システムプログラミング言語としての基礎を学習中。メモリ安全性とパフォーマンスに興味。",
    technologies: [],
  },
  {
    name: "Ruby",
    stars: 1,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    details:
      "Webアプリケーション開発の基礎学習中。基本的なCRUD操作とActiveRecordの使用経験。",
    technologies: [
      {
        name: "Ruby on Rails",
        stars: 1,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
        details:
          "RubyのMVCフレームワーク。基本的なCRUD操作とActiveRecordの使用経験。",
      },
    ],
  },
]

// その他のスキルカテゴリデータ
const otherSkillCategories: SkillCategory[] = [
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
      { name: "Web3", stars: 1 },
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
      { name: "Claude Code", stars: 2 },
      { name: "Windsurf", stars: 3 },
      { name: "Devin", stars: 3 },
    ],
  },
]

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
  )
}

// 言語スキルカードコンポーネント
const LanguageSkillCard = ({ language }: { language: LanguageSkill }) => {
  return (
    <div className="bg-card bg-black/80 border rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-4">
        {language.imageUrls ? (
          <div className="flex gap-2">
            {language.imageUrls.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={language.names?.[index] || language.name}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            ))}
          </div>
        ) : language.imageUrl ? (
          <Image
            src={language.imageUrl}
            alt={language.name}
            width={48}
            height={48}
            className="w-12 h-12"
          />
        ) : null}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{language.name}</h3>
          <StarRating stars={language.stars} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {language.details}
      </p>

      {language.technologies.length > 0 && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {language.technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-accent/20 rounded-md px-6 py-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {tech.imageUrl && (
                      <Image
                        src={tech.imageUrl}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                  <StarRating stars={tech.stars} />
                </div>
                {tech.details && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold py-3 pb-2">Skills</h1>

          <div className="space-y-8">
            {/* 言語スキルセクション */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Code2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Programming Languages
                </h2>
              </div>

              {languageSkills.map((language) => (
                <LanguageSkillCard key={language.name} language={language} />
              ))}
            </section>

            {/* その他のスキルカテゴリ */}
            {otherSkillCategories.map((category) => (
              <section key={category.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="px-4 py-3 bg-black/80 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-md hover:scale-105">
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
    </div>
  )
}
