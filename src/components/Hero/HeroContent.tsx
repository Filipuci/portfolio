import { HeroActions } from "./HeroActions"
import { HeroImg } from "./HeroImg"
import { HeroSkills } from "./HeroSkills"
import { HeroText } from "./HeroText"

export const HeroContent = () => {
  return (
    <div className="relative flex-1 flex items-start pt-25">
      <div className="w-2/5">
        <HeroText />
        <HeroActions />
        <HeroSkills />
      </div>

      <HeroImg />
    </div>
  )
}