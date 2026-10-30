import { SkillIcon } from "@/components/skills/SkillIcon"
import type { SkillTileProps } from "@/types/skills"

export const SkillTile = ({
  name,
  imageUrl,
  imageUrls,
  size = "sm",
}: SkillTileProps) => {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-white/90 transition-colors hover:border-yellow-400/40 hover:bg-black/80">
      <SkillIcon
        name={name}
        imageUrl={imageUrl}
        imageUrls={imageUrls}
        size={size}
      />
      <span>{name}</span>
    </div>
  )
}
