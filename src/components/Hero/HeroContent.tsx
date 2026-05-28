import { HeroActions } from "./HeroActions"
import { HeroImg } from "./HeroImg"
import { HeroSkills } from "./HeroSkills"
import { HeroText } from "./HeroText"

export const HeroContent = () => {
  return (
    <div className="relative flex-1 flex items-start pt-25">
      <div className="w-full flex flex-col items-center lg:w-[42%] lg:block">
        <HeroText />
        <HeroActions />
        <HeroSkills />
      </div>

      <HeroImg />
    </div>
  )
}