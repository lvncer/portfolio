import Image from "next/image"

import type { SkillIconProps } from "@/types/skills"

export const SkillIcon = ({
  name,
  imageUrl,
  imageUrls,
  size = "sm",
}: SkillIconProps) => {
  const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4"
  const pixelSize = size === "lg" ? 20 : 16

  if (imageUrls?.length) {
    return (
      <div className="flex -space-x-1">
        {imageUrls.map((url) => (
          <Image
            key={url}
            src={url}
            alt={name}
            width={pixelSize}
            height={pixelSize}
            className={`${iconSize} rounded-full ring-1 ring-black/80 bg-black/80`}
          />
        ))}
      </div>
    )
  }

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={name}
        width={pixelSize}
        height={pixelSize}
        className={iconSize}
      />
    )
  }

  return (
    <div
      className={`${iconSize} shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-semibold text-white/80`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  )
}
