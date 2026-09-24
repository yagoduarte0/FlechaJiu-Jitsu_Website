const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 14L26 17V23L20 26L14 23V17L20 14Z" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: 'Technique Over Strength',
    text: 'Leverage and precision allow a smaller person to overcome a larger, stronger opponent every time.',
    delay: '0s',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 10V20L26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Mental Resilience',
    text: 'Train your mind as hard as your body. Build confidence that carries far beyond the mat.',
    delay: '0.1s',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="26" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 34C6 28.477 9.582 24 14 24H26C30.418 24 34 28.477 34 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'For Everyone',
    text: 'Classes from age 3 to adult, all skill levels. Jiu-Jitsu is a journey open to all.',
    delay: '0.2s',
  },
]

export default function Pillars() {
  return (
    <section className="pillars section--alt" aria-label="Why Jiu-Jitsu">
      <div className="container">
        <div className="pillars__grid">
          {PILLARS.map(({ icon, title, text, delay }) => (
            <div
              key={title}
              className="pillar fade-up"
              style={{ '--delay': delay }}
            >
              <div className="pillar__icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
