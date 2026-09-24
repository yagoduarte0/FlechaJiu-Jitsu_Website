import { useState } from 'react'

const STATS = [
  { value: '5th', label: 'Degree Black Belt' },
  { value: '23',  label: 'Age at Black Belt'  },
  { value: '30+', label: 'Years on the Mats'  },
]

const TIMELINE = [
  { year: 'Age 8',  text: 'Began training under Master Fernando Pinduka — Monte Libano' },
  { year: 'Age 13', text: 'Joined IBJJF Hall of Famer Roberto "Roleta" Magalhães — Barra da Tijuca' },
  { year: '2006',   text: 'Black belt under Master Carlos Gracie Jr. at age 23' },
  { year: 'Today',  text: '5th-degree black belt, teaching in Henderson, Nevada' },
]

export default function Professor() {
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [photoError, setPhotoError]   = useState(false)

  return (
    <section className="professor section" id="about">
      <div className="container">
        <div className="professor__grid">

          <div className="professor__visual fade-up">
            <div className="professor__photo-wrap">
              {!photoError && (
                <img
                  src="/assets/images/pedro-galvao-professor.jpeg"
                  alt="Professor Pedro Galvão"
                  className="professor__photo"
                  onLoad={() => setPhotoLoaded(true)}
                  onError={() => setPhotoError(true)}
                />
              )}
              {!photoLoaded && (
                <div className="professor__photo-placeholder" aria-hidden="true">
                  <span>Photo<br />Coming<br />Soon</span>
                </div>
              )}
            </div>

            <div className="professor__stats">
              {STATS.map(({ value, label }) => (
                <div className="stat" key={label}>
                  <span className="stat__value">{value}</span>
                  <span className="stat__label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="professor__content fade-up" style={{ '--delay': '0.15s' }}>
            <p className="eyebrow">About Our Professor</p>
            <h2 className="section-title">
              Pedro <span className="text--green">"Flecha"</span> Galvão
            </h2>

            <p className="professor__bio">
              A 5th-degree black belt, Pedro's journey began at <strong>age 8</strong> under{' '}
              <strong>Master Fernando Pinduka</strong> at the Monte Libano club in Rio de Janeiro,
              sparked by his father's friendship with the renowned master.
            </p>
            <p className="professor__bio">
              At 13, he joined <strong>IBJJF Hall of Famer Roberto "Roleta" Magalhães</strong> in
              Barra da Tijuca — one of the most technical and creative black belts in the history
              of the sport. Inspired by Roleta's mentorship, Pedro became a formidable competitor,
              dominating state, national, and world championships.
            </p>
            <p className="professor__bio">
              Under the legendary <strong>Master Carlos Gracie Jr.</strong>, founder of the IBJJF,
              Pedro earned his brown and black belts — achieving black belt status in{' '}
              <strong>2006 at just 23 years old</strong>. Since then, he has embraced Jiu-Jitsu as
              a lifestyle, teaching with a focus on technical precision and philosophical depth.
            </p>

            <div className="professor__timeline">
              {TIMELINE.map(({ year, text }) => (
                <div className="timeline-item" key={year}>
                  <div className="timeline-item__marker" />
                  <span className="timeline-item__year">{year}</span>
                  <span className="timeline-item__text">{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
