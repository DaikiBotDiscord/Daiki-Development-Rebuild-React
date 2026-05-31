import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './nav-bar.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/docs', label: 'Docs' },
  { to: '/contact', label: 'Contact' },
  { to: '/commands', label: 'Commands' },
  { to: '/dashboard', label: 'Dashboard' },
]

const NavBar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={`nav-bar-nav-bar ${props.rootClassName || ''}`}>
      <header className="nav-bar-navbar-interactive">
        <Link to="/" aria-label="Daiki home" className="nav-bar-brand">
          <img alt={props.image1Alt} src={props.image1Src} className="nav-bar-image1" />
        </Link>

        <nav className="nav-bar-links1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-bar-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={props.action1Url}
          target="_blank"
          rel="noreferrer noopener"
          className="nav-bar-action11"
        >
          Invite Daiki
        </a>

        <button
          type="button"
          className="nav-bar-burger-menu"
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg viewBox="0 0 1024 1024" className="nav-bar-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </button>

        <div className={`nav-bar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-bar-top">
            <img alt={props.logoAlt} src={props.logoSrc} className="nav-bar-logo" />
            <button
              type="button"
              className="nav-bar-close-menu"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg viewBox="0 0 1024 1024" className="nav-bar-icon12">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </button>
          </div>
          <nav className="nav-bar-links2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="nav-bar-link" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={props.action1Url1}
            target="_blank"
            rel="noreferrer noopener"
            className="nav-bar-action12"
          >
            Invite Daiki
          </a>
        </div>
      </header>
    </div>
  )
}

NavBar.defaultProps = {
  action1Url: 'https://daiki-bot.xyz/invite',
  action1Url1: 'https://daiki-bot.xyz/invite',
  image1Alt: 'Daiki Development logo',
  image1Src: '/daiki6-1500h.png',
  logoAlt: 'Daiki Development logo',
  logoSrc: '/daiki6-1500h.png',
  rootClassName: '',
}

export default NavBar
