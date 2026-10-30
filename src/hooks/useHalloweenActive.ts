"use client"

import { useEffect, useState } from "react"
import { isHalloweenActive } from "@/lib/halloween"

export function useHalloweenActive(): boolean {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const override = new URLSearchParams(window.location.search).get(
      "halloween"
    )
    if (override === "on") {
      setActive(true)
      return
    }
    if (override === "off") {
      setActive(false)
      return
    }
    setActive(isHalloweenActive())
  }, [])

  return active
}
