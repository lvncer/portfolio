import { Brain, BrushCleaning, Cpu, Database, WrenchIcon } from "lucide-react"

import type { LanguageSkill, SkillCategory } from "@/types/skills"

export const LANGUAGE_SKILLS = [
  {
    name: "Python",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    technologies: [
      {
        name: "FastAPI",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg",
      },
      {
        name: "Flask",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        name: "Django",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
    ],
  },
  {
    name: "JavaScript / TypeScript",
    names: ["JavaScript", "TypeScript"],
    imageUrls: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    ],
    technologies: [
      {
        name: "React",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Next.js",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Redux",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "TailwindCSS",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Astro",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
      },
      {
        name: "Electron",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
      },
      {
        name: "React Native",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
      },
    ],
  },
  {
    name: "PHP",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    technologies: [
      {
        name: "Laravel",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
    ],
  },
  {
    name: "Swift",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    technologies: [],
  },
  {
    name: "Go",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    technologies: [{ name: "Gin" }, { name: "ent." }],
  },
  {
    name: "Rust",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-line.svg",
    technologies: [],
  },
  {
    name: "Ruby",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    technologies: [
      {
        name: "Ruby on Rails",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
      },
    ],
  },
] satisfies LanguageSkill[]

export const OTHER_SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Platforms",
    icon: Cpu,
    skills: [
      { name: "Linux" },
      { name: "Github" },
      { name: "GitHub Actions" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Clerk" },
      { name: "AWS" },
    ],
  },
  {
    title: "Hardware",
    icon: WrenchIcon,
    skills: [{ name: "Raspberry Pi" }, { name: "M5Stack" }],
  },
  {
    title: "Creatives",
    icon: BrushCleaning,
    skills: [
      { name: "Figma" },
      { name: "Illustrator" },
      { name: "Photoshop" },
      { name: "Godot" },
      { name: "Unreal Engine" },
      { name: "Blender" },
    ],
  },
  {
    title: "AI Tools",
    icon: Brain,
    skills: [
      { name: "Cursor" },
      { name: "Gemini" },
      { name: "Claude Code" },
      { name: "Windsurf" },
      { name: "Devin" },
      { name: "Code Rabbit" },
    ],
  },
]
