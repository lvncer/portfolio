import type { GalleryItem } from "@/types/gallery"

// ここに写真と一文の説明を追加するだけでギャラリーに反映されます。
export const GALLERY_ITEMS = [
  {
    image: "/images/gallery/eft-prestige.jpg",
    caption: "Escape From Tarkov PvE Prestige 2",
    date: "2026-10-15",
  },
  {
    image: "/images/gallery/devinmeetuptokyo.jpg",
    caption: "DevInMeetup Tokyo 2025",
    date: "2025-07-26",
  },
] satisfies GalleryItem[]
