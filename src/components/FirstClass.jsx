function scrollTo(id) {
  const el = document.querySelector(id)
  if (!el) return
  window.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' })
}

const STEPS = [
  {
    num: '1',
    title: 'Show Up & Settle In',
    text: "Come a few minutes early in a t-shirt and shorts — no gear required. We keep loaner gis on hand, so a missing kimono is never a reason to skip your first class.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="14" cy="13" rx="4.5" ry="6.5" transform="rotate(-18 14 13)" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="27" cy="25" rx="4.5" ry="6.5" transform="rotate(14 27 25)" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Break Down the Basics',
    text: 'A coach walks you through one or two core movements at a pace that makes sense, explaining the why behind each detail.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 6a9.5 9.5 0 0 0-5 17.6V27h10v-3.4A9.5 9.5 0 0 0 20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16.5 31h7M17.7 34h4.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Move With a Partner',
    text: "You'll try the technique slowly with a training partner who still remembers exactly how their own first class felt.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M15 14a8.5 8.5 0 1 0 8.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M25 26a8.5 8.5 0 1 0-8.5-8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="14" r="2.2" fill="currentColor"/>
        <circle cx="25" cy="26" r="2.2" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function FirstClass() {
  return (
    <section className="first-class section" id="first-class">
      <div className="container">
        <div className="section-header fade-up">
          <p className="eyebrow">First Time on the Mats?</p>
          <h2 className="section-title">
            What To <span className="text--green">Expect</span>
          </h2>
          <p className="first-class__subtitle">
            Never grappled before? Good — that's exactly who this is for. Here's how a first visit actually goes.
          </p>
        </div>

        <div className="first-class__grid">
          {STEPS.map(({ num, title, text, icon }, i) => (
            <div
              key={num}
              className="first-class__step fade-up"
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <div className="first-class__step-top">
                <span className="first-class__num">{num}</span>
                <span className="first-class__line" />
              </div>
              <div className="first-class__icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="first-class__cta fade-up">
          <a
            href="#contact"
            className="btn btn--primary btn--lg"
            onClick={e => { e.preventDefault(); scrollTo('#contact') }}
          >
            Reserve My First Class
          </a>
          <p className="first-class__disclaimer">No gear, no experience, no pressure required.</p>
        </div>
      </div>
    </section>
  )
}
