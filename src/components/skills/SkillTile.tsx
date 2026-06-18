import { ProficiencyIndicator } from "@/components/skills/ProficiencyIndicator"
import { SkillIcon } from "@/components/skills/SkillIcon"
import type { SkillTileProps } from "@/types/skills"

export const SkillTile = ({
  name,
  stars,
  imageUrl,
  imageUrls,
  details,
  size = "md",
}: SkillTileProps) => {
  const tooltip = details ? `${name} — ${details}` : name

  return (
    <div
      className="group relative flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-black/60 p-3 transition-all hover:border-yellow-400/40 hover:bg-black/80 hover:scale-105"
      title={tooltip}
    >
      <SkillIcon
        name={name}
        imageUrl={imageUrl}
        imageUrls={imageUrls}
        size={size}
      />
      <span className="w-full truncate text-center text-[11px] font-medium text-white/90">
        {name}
      </span>
      <ProficiencyIndicator stars={stars} size={size === "lg" ? "md" : "sm"} />

      {details && (
        <div className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-20 w-52 -translate-x-1/2 rounded-lg border border-white/10 bg-black/95 px-3 py-2 text-xs opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          <p className="font-medium text-white">{name}</p>
          <p className="mt-1 leading-relaxed text-white/70">{details}</p>
        </div>
      )}
    </div>
  )
}
