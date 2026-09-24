import { MONTHLY_PLANS, PREPAID_PLANS } from '../data/pricing'

function scrollTo(id) {
  const el = document.querySelector(id)
  if (!el) return
  window.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' })
}

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header fade-up">
          <p className="eyebrow">Investment in Yourself</p>
          <h2 className="section-title">
            Training <span className="text--green">Plans</span>
          </h2>
        </div>

        <div className="pricing__grid">

          <div className="pricing-block fade-up">
            <h3 className="pricing-block__title">Monthly Plans</h3>
            <div className="pricing-list">
              {MONTHLY_PLANS.map(({ name, price, discount, featured }) => (
                <div
                  key={name}
                  className={`pricing-row${featured ? ' pricing-row--featured' : ''}`}
                >
                  <div className="pricing-row__info">
                    <span className="pricing-row__name">{name}</span>
                    {discount && (
                      <span className="pricing-row__discount">{discount}</span>
                    )}
                  </div>
                  <span className="pricing-row__price">
                    ${price}<small>/mo</small>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-block fade-up" style={{ '--delay': '0.15s' }}>
            <h3 className="pricing-block__title">Prepaid Plans</h3>
            <div className="prepaid-cards">
              {PREPAID_PLANS.map(({ name, duration, price, highlight }) => (
                <div
                  key={name}
                  className={`prepaid-card${highlight ? ' prepaid-card--highlight' : ''}`}
                >
                  <div>
                    <span className="prepaid-card__name">{name}</span>
                    <span className="prepaid-card__duration">{duration}</span>
                  </div>
                  <span className="prepaid-card__price">{price}</span>
                </div>
              ))}
            </div>

            <div className="discount-notice">
              <span className="discount-notice__badge">5% OFF</span>
              <p>
                <strong>Veterans &amp; First Responders</strong> receive 5% off any plan.
                Thank you for your service.
              </p>
            </div>
          </div>

        </div>

        <div className="pricing__cta fade-up">
          <p>Not sure which plan is right for you? Try a few free classes first.</p>
          <a
            href="#contact"
            className="btn btn--primary btn--lg"
            onClick={e => { e.preventDefault(); scrollTo('#contact') }}
          >
            Book Your Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
