"use client"

import GhostFibers from "@/components/GhostFibers"
import Squares from "@/components/Squares"
import { useHalloweenActive } from "@/hooks/useHalloweenActive"

export function SeasonalBackground() {
  const isHalloween = useHalloweenActive()

  if (!isHalloween) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#ccc"
          hoverFillColor={undefined}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300" />
      <div className="absolute inset-0">
        <GhostFibers
          lightMode
          glowColor="#2e1065"
          secondaryColor="#7c2d12"
          lineColor="#000000"
          threads={80}
          volume={0.8}
          particles={0.6}
          sparkle={0.7}
          brightness={1.15}
          vignette={0.2}
          grain={0.05}
          mouseInteraction={false}
          dpr={undefined}
        />
      </div>
    </div>
  )
}
