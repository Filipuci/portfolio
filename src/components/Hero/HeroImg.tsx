import heroPerson from "@/assets/images/hero/hero-person.png"

export const HeroImg = () => {
  return (
    <div className="absolute right-0 top-10 h-full hidden lg:block pointer-events-none animate-fade-up opacity-0 [animation-delay:200ms]" role="img" aria-label="Foto de Rafael Filipuci">
      <div
        aria-hidden="true"
        className="absolute -right-30 -top-5 w-80 h-80 rounded-full blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(240,235,255,0.08) 35%, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute right-5 -top-2.5 w-115 h-115 rounded-full border z-0"
        style={{
          border: "2px solid rgba(255,255,255,0.08)",
          filter: "blur(0.4px)",
        }}
      />

      <img src={heroPerson} className="h-full w-auto relative z-10" />
    </div>
  )
}