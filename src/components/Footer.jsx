export default function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer__top">
        <div className="container">

          <div className="footer__waiver">
            <a href="#" className="waiver-link">
              <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M4 2l6 4-6 4V2z" />
              </svg>
              Sign Our Waiver
            </a>
          </div>

          <div className="footer__logos">
            <img src="/assets/logos/flecha-logo-vertical.png" alt="Flecha Jiu-Jitsu" className="footer__logo-img footer__logo-img--mono" />
            <img src="/assets/logos/ibjjf-logo.svg"          alt="IBJJF"               className="footer__logo-img" />
            <img src="/assets/logos/roleta-logo.png"         alt="Roleta Jiu-Jitsu"    className="footer__logo-img" />
          </div>

          <div className="footer__info">
            <p className="footer__location-label">We are located at:</p>

            <address className="footer__address">
              <a
                href="https://maps.google.com/?q=270+E+Horizon+Dr+%23103+Henderson+NV+89015"
                target="_blank"
                rel="noopener noreferrer"
              >
                270 E Horizon Dr. #103<br />
                Henderson, NV 89015
              </a>
            </address>

            <p className="footer__contact">
              Give us a call:{' '}
              <a href="tel:+17029865618">(702) 986-5618</a>
            </p>
            <p className="footer__contact">
              <a href="mailto:support@flechabjj.com">support@flechabjj.com</a>
            </p>

            <div className="footer__social">
              <a
                href="https://instagram.com/flechajiujitsu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Follow us on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__map">
        <iframe
          src="https://maps.google.com/maps?q=270+E+Horizon+Dr+%23103+Henderson+NV+89015&output=embed"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Flecha Jiu-Jitsu Location — Henderson, NV"
        />
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Flecha Jiu-Jitsu. All rights reserved. Henderson, Nevada.</p>
        </div>
      </div>

    </footer>
  )
}
