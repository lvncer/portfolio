import Image from "next/image"

import type { SkillIconProps } from "@/types/skills"

export const SkillIcon = ({
  name,
  imageUrl,
  imageUrls,
  size,
}: SkillIconProps) => {
  const iconSize =
    size === "lg" ? "w-12 h-12" : size === "md" ? "w-9 h-9" : "w-8 h-8"
  const pixelSize = size === "lg" ? 48 : size === "md" ? 36 : 32

  if (imageUrls?.length) {
    return (
      <div className="flex -space-x-2">
        {imageUrls.map((url) => (
          <Image
            key={url}
            src={url}
            alt={name}
            width={pixelSize}
            height={pixelSize}
            className={`${iconSize} rounded-full ring-2 ring-black/80 bg-black/80`}
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
      className={`${iconSize} rounded-lg bg-white/10 flex items-center justify-center text-xs font-semibold text-white/80`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  )
}
