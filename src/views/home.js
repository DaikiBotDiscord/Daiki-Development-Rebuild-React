import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './home.css'

const particles = Array.from({ length: 15 })

const stats = [
  { value: '100+', label: 'Servers' },
  { value: '100K+', label: 'Users' },
  { value: '99.9%', label: 'Uptime' },
]

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
      credentials: 'include',
    })
      .then((res) => setIsLoggedIn(res.ok))
      .catch(() => setIsLoggedIn(false))
  }, [])

  return (
    <div className="home-container1 daiki-page">
      <Helmet>
        <title>Daiki Development</title>
        <meta property="og:title" content="Daiki Development" />
      </Helmet>
      {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}

      <section aria-label="Hero" className="daiki-hero">
        <div className="daiki-hero__bg">
          <div aria-hidden="true" className="daiki-hero__grid"></div>
          <div aria-hidden="true" className="daiki-hero__particles">
            {particles.map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>
        <div className="daiki-hero__container">
          <div className="daiki-hero__content">
            <p className="daiki-eyebrow">Daiki Development</p>
            <h1 className="daiki-hero__headline">
              The Discord Bot That Does It All
            </h1>
            <p className="daiki-hero__subheadline">
              Powerful moderation, fun commands, server controls, and clear
              documentation in one polished place.
            </p>
            <div className="daiki-hero__actions">
              <a
                href="https://daiki-bot.xyz/invite"
                target="_blank"
                rel="noreferrer noopener"
                className="daiki-hero__btn daiki-hero__btn--primary"
              >
                Add to Server
              </a>
              <Link to="/docs" className="daiki-hero__btn daiki-hero__btn--secondary">
                See Documentation
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="daiki-hero__visual">
            <div className="daiki-hero__orb daiki-hero__orb--1"></div>
            <div className="daiki-hero__orb daiki-hero__orb--2"></div>
            <div className="daiki-hero__orb daiki-hero__orb--3"></div>
            <div className="daiki-hero__shape daiki-hero__shape--hex">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#5865F2" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <polygon
                  points="100,10 190,55 190,145 100,190 10,145 10,55"
                  fill="none"
                  stroke="url(#hexGrad)"
                  strokeWidth="2"
                />
                <polygon
                  points="100,30 170,65 170,135 100,170 30,135 30,65"
                  fill="url(#hexGrad)"
                  fillOpacity="0.15"
                />
                <circle cx="100" cy="100" r="25" fill="url(#hexGrad)" fillOpacity="0.4" />
                <circle cx="100" cy="100" r="12" fill="#00D4FF" fillOpacity="0.8" />
              </svg>
            </div>
            <div className="daiki-hero__shape daiki-hero__shape--ring">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#5865F2" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#00D4FF" strokeWidth="2" strokeOpacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <main className="daiki-home-content">
        <section id="features" className="daiki-section">
          <p className="daiki-eyebrow">Core tools</p>
          <h2 className="daiki-section-title">Everything your server needs</h2>
          <div className="daiki-card-grid daiki-card-grid--three">
            <Link to="/docs" className="daiki-feature-card">
              <span className="daiki-feature-card__icon">DOCS</span>
              <h3>Documentation</h3>
              <p>Guides and references for setting up Daiki with confidence.</p>
            </Link>
            <Link to="/commands" className="daiki-feature-card">
              <span className="daiki-feature-card__icon">CMD</span>
              <h3>Commands</h3>
              <p>Browse moderation, fun, utility, and server management commands.</p>
            </Link>
            <Link to="/contact" className="daiki-feature-card">
              <span className="daiki-feature-card__icon">HELP</span>
              <h3>Support</h3>
              <p>Reach the team when you need account, bot, or billing help.</p>
            </Link>
          </div>
        </section>

        <section aria-label="Daiki statistics" className="daiki-stats">
          <div className="daiki-stats__container">
            {stats.map((stat) => (
              <div key={stat.label} className="daiki-stats__item">
                <span className="daiki-stats__number">{stat.value}</span>
                <span className="daiki-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
