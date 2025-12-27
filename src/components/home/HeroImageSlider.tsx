"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type Slide = {
  src: string
  alt: string
  caption?: string
}

const DEFAULT_SLIDES: Slide[] = [
  {
    src: "/images/lt-in-siw.jpg",
    alt: "Lightning Talk in SIW.",
    caption: "Lightning Talk in SIW.",
  },
  {
    src: "/images/engineering.jpg",
    alt: "Engineering in Starbucks.",
    caption: "Engineering in Starbucks.",
  },
  {
    src: "/images/monster-hunter.jpg",
    alt: "Monster Hunter in the Game.",
    caption: "Monster Hunter in the Game.",
  },
]

export function HeroImageSlider({
  slides,
  intervalMs = 3500,
  className,
}: {
  slides?: Slide[]
  intervalMs?: number
  className?: string
}) {
  const safeSlides = useMemo(
    () => (slides && slides.length > 0 ? slides : DEFAULT_SLIDES),
    [slides]
  )

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  useEffect(() => {
    if (safeSlides.length <= 1) return

    const id = window.setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % safeSlides.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [intervalMs, safeSlides.length])

  const current = safeSlides[index] ?? safeSlides[0]

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="relative aspect-[16/11] w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.src}
              className="absolute inset-0"
              initial={{ x: direction * 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {current.caption ? (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white/90 text-sm font-light">
                    {current.caption}
                  </div>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 px-4 py-3">
          {safeSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                if (i === index) return
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className={cn(
                "h-1.5 w-1.5 rounded-full bg-white/35 transition-all hover:bg-white/60",
                i === index && "w-6 bg-white"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
