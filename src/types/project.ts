export type Project = {
  title: string
  description: string
  /**
   * `video` がある場合は video を優先して表示する想定。
   * `image` は `public/` 配下のパス（例: "/name-card.jpg"）か外部URL。
   */
  image?: string
  video?: string
  technologies: string[]
  category: string
  status: string
  year: string
  github?: string
  live?: string
}
