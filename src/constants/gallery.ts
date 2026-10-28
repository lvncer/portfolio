import type { GalleryItem } from "@/types/gallery"

// ここに写真と一文の説明を追加するだけでギャラリーに反映されます。
export const GALLERY_ITEMS = [
  {
    image: "/images/profile.jpeg",
    caption: "プロフィール写真",
    date: "2026-01-01",
  },
] satisfies GalleryItem[]
