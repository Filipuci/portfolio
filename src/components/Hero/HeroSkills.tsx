const skills = ['React', 'TypeScript', 'TailwindCSS', 'UI/UX']

export const HeroSkills = () => {
  return (
    <div className="animate-fade-up opacity-0 [animation-delay:600ms]">
      <p className="text-white/40 text-sm mt-15 text-center xl:text-left">Especializado em</p>
      <ul className="mt-3 flex gap-5">
        {skills.map(skill => (
          <li
            key={skill}
            className="select-none"
            aria-label={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}