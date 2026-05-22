const skills = ['React', 'TypeScript', 'TailwindCSS', 'UI/UX']

export const HeroSkills = () => {
  return (
    <div>
      <p className="text-white/40 text-sm mt-15 text-center lg:text-left">Especializado em</p>
      <ul className="mt-3 flex gap-5">
        {skills.map(skill => (
          <li
            key={skill}
            className="text-[#bea181] select-none"
            aria-label={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}