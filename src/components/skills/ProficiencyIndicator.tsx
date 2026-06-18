import { Star } from "lucide-react"

import type { ProficiencyIndicatorProps } from "@/types/skills"

export const ProficiencyIndicator = ({
  stars,
  size = "md",
}: ProficiencyIndicatorProps) => {
  const starSize =
    size === "lg" ? "w-4 h-4" : size === "md" ? "w-3.5 h-3.5" : "w-3 h-3"

  return (
    <div className="flex">
      {[1, 2, 3].map((level) => (
        <Star
          key={level}
          className={`${starSize} ${
            level <= stars ? "fill-yellow-400 text-yellow-400" : "text-white/20"
          }`}
        />
      ))}
    </div>
  )
}
