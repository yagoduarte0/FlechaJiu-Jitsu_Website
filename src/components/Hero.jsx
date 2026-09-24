function scrollTo(id) {
  const el = document.querySelector(id)
  if (!el) return
  window.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          src="/assets/images/hero-bg.jpg"
          alt=""
          className="hero__bg-img"
          aria-hidden="true"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Henderson, Nevada</p>
        <h1 className="hero__title">
          FLECHA<br />
          JIU-JITSU
        </h1>
        <p className="hero__text">
          Brazilian Jiu-Jitsu isn't just a martial art — it's a life-changing journey that builds
          mental resilience, physical strength, and unshakable confidence.
        </p>
        <div className="hero__actions">
          <a
            href="#contact"
            className="btn btn--primary btn--lg"
            onClick={e => { e.preventDefault(); scrollTo('#contact') }}
          >
            Start Free Trial
          </a>
          <a
            href="#about"
            className="btn btn--ghost btn--lg"
            onClick={e => { e.preventDefault(); scrollTo('#about') }}
          >
            Meet the Professor
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll down"
        onClick={e => { e.preventDefault(); scrollTo('#about') }}
      >
        <span className="hero__scroll-arrow" />
      </a>
    </section>
  )
}
