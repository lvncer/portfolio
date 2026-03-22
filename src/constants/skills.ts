import { Brain, Cpu, Database, WrenchIcon } from "lucide-react"

import type { LanguageSkill, SkillCategory } from "@/types/skills"

export const LANGUAGE_SKILLS = [
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
        name: "Electron",
        stars: 2,
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
        details: "デスクトップアプリケーションを構築するフレームワーク",
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
] satisfies LanguageSkill[]

export const OTHER_SKILL_CATEGORIES: SkillCategory[] = [
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
