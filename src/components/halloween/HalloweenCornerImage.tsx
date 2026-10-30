"use client"

import Image from "next/image"
import { useHalloweenActive } from "@/hooks/useHalloweenActive"
import halloweenImg from "../../../public/images/halloween.png"

export function HalloweenCornerImage() {
  const isHalloween = useHalloweenActive()

  if (!isHalloween) return null

  return (
    <Image
      src={halloweenImg}
      alt=""
      aria-hidden="true"
      className="fixed right-0 bottom-0 z-40 h-auto w-auto pointer-events-none select-none
        max-h-[22vh] max-w-[38vw]
        sm:max-h-[26vh] sm:max-w-[30vw]
        md:max-h-[32vh] md:max-w-[26vw]
        lg:max-h-[36vh] lg:max-w-[20vw]"
    />
  )
}
