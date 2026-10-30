export function HalloweenSpeechBubble() {
  return (
    <div className="relative inline-block max-w-sm rounded-2xl bg-orange-700 px-5 py-4 shadow-lg">
      <div
        aria-hidden="true"
        className="absolute left-6 top-0 -translate-y-1/2 h-4 w-4 rotate-45 bg-orange-700 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-6 -translate-x-1/2 hidden h-4 w-4 rotate-45 bg-orange-700 lg:block"
      />
      <p className="relative z-10 text-lg font-medium text-white">
        Happy Halloween! (Oct 31 == Dec 25)
      </p>
    </div>
  )
}
