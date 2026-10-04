import { useState, useEffect, useCallback } from 'react'
import scrollTo from '../utils/scrollTo'
import { TRIAL_MAILTO, ENROLL_ANCHOR } from '../data/links'

const LINKS = [
  { label: 'Academy',     href: '#academy'     },
  { label: 'First Class', href: '#first-class' },
  { label: 'About',       href: '#about'        },
  { label: 'Schedule',    href: '#schedule'     },
  { label: 'Pricing',     href: '#pricing'      },
  { label: 'Enroll',      href: ENROLL_ANCHOR   },
  { label: 'Contact',     href: '#contact'      },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = useCallback((e, href) => {
    e.preventDefault()
    scrollTo(href)
    setMenuOpen(false)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav">
      <div className="nav__container">

        <a href="#home" className="nav__logo" onClick={e => handleLink(e, '#home')}>
          <img
            src="/assets/logos/flecha-logo-vertical.png"
            alt="Flecha Jiu-Jitsu"
            className="nav__logo-img"
          />
        </a>

        <ul className={`nav__links${menuOpen ? ' is-open' : ''}`} id="navLinks">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav__link"
                onClick={e => handleLink(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={TRIAL_MAILTO}
          className="btn btn--primary nav__cta"
          onClick={() => setMenuOpen(false)}
        >
          Free Trial
        </a>

        <button
          className={`nav__hamburger${menuOpen ? ' is-open' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  )
}
