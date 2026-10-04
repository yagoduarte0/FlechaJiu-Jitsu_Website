import { GALLERY } from '../data/gallery'
import { TRIAL_MAILTO } from '../data/links'

const svgProps = {
  viewBox: '0 0 40 40',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const FEATURES = [
  {
    icon: (
      <svg {...svgProps}>
        <path d="M20 36C20 36 32 25 32 16C32 9.373 26.627 4 20 4C13.373 4 8 9.373 8 16C8 25 20 36 20 36Z"/>
        <circle cx="20" cy="16" r="4.5"/>
      </svg>
    ),
    title: 'Prime Henderson Location',
    text: 'Right off the Horizon Ridge exit, with quick freeway access.',
  },
  {
    icon: (
      <svg {...svgProps}>
        <rect x="6" y="6" width="28" height="28" rx="4"/>
        <path d="M16 29V11H22C25.314 11 28 13.686 28 17C28 20.314 25.314 23 22 23H16"/>
      </svg>
    ),
    title: 'Easy Parking',
    text: 'Pull in, park, and walk straight onto the mats. No circling the lot.',
  },
  {
    icon: (
      <svg {...svgProps}>
        <rect x="5" y="22" width="12" height="12" rx="1.5"/>
        <rect x="23" y="22" width="12" height="12" rx="1.5"/>
        <rect x="14" y="7" width="12" height="12" rx="1.5"/>
        <path d="M18 13H22M11 28H11.01M29 26V30"/>
      </svg>
    ),
    title: 'Kids Playroom',
    text: 'Bring the little ones. They play safely nearby while you train.',
  },
  {
    icon: (
      <svg {...svgProps}>
        <path d="M4 14L20 6L36 14L20 22L4 14Z"/>
        <path d="M4 22L20 30L36 22"/>
        <path d="M4 14V22M36 14V22"/>
      </svg>
    ),
    title: 'Spacious Mats',
    text: 'Room to learn, drill and grow — from your first class to your next belt.',
  },
  {
    icon: (
      <svg {...svgProps}>
        <circle cx="20" cy="13" r="6"/>
        <path d="M8 34C8 27.373 13.373 22 20 22C26.627 22 32 27.373 32 34"/>
      </svg>
    ),
    title: 'Friendly Front Desk',
    text: 'From sign-up to billing questions, our team has you covered.',
  },
  {
    icon: (
      <svg {...svgProps}>
        <path d="M20 5C20 5 10 16 10 23C10 28.523 14.477 33 20 33C25.523 33 30 28.523 30 23C30 16 20 5 20 5Z"/>
        <path d="M15 24C15 26.761 17.239 29 20 29"/>
      </svg>
    ),
    title: 'Two Clean Restrooms',
    text: 'Comfort and convenience for the whole family.',
  },
]

function Slides({ hidden = false }) {
  return GALLERY.map(({ src, alt }) => (
    <img
      key={src}
      src={src}
      alt={hidden ? '' : alt}
      className="academy__slide"
      decoding="async"
      draggable="false"
    />
  ))
}

export default function Academy() {
  return (
    <section className="academy section" id="academy">
      <div className="container">
        <div className="section-header fade-up">
          <p className="eyebrow">The Academy</p>
          <h2 className="section-title">
            More Than a Place to Train —<br />
            A Place to <span className="text--green">Belong</span>
          </h2>
          <p className="academy__intro">
            Flecha Jiu-Jitsu was built so training fits into your family's everyday life — not the
            other way around.
          </p>
        </div>
      </div>

      {/* Lista renderizada duas vezes: a faixa anda -50% e recomeca sem salto. */}
      <div className="academy__marquee fade-up" style={{ '--delay': '0.1s' }}>
        <div className="academy__track">
          <div className="academy__group">
            <Slides />
          </div>
          <div className="academy__group" aria-hidden="true">
            <Slides hidden />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="academy__grid">
          {FEATURES.map(({ icon, title, text }, i) => (
            <div
              key={title}
              className="academy__feature fade-up"
              style={{ '--delay': `${(i % 3) * 0.1}s` }}
            >
              <div className="pillar__icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="academy__closing">
        <div className="container fade-up">
          <p>
            A great location. A welcoming team. A place where families train together —
            and <span className="text--green">grow together</span>.
          </p>
          <a href={TRIAL_MAILTO} className="btn btn--primary">
            Come See the Difference
          </a>
        </div>
      </div>
    </section>
  )
}
