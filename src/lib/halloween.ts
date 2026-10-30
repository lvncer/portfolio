export const HALLOWEEN_START = new Date("2026-10-30T00:00:00+09:00")
export const HALLOWEEN_END = new Date("2026-11-14T00:00:00+09:00")

export function isHalloweenActive(now: Date = new Date()): boolean {
  const t = now.getTime()
  return t >= HALLOWEEN_START.getTime() && t < HALLOWEEN_END.getTime()
}
