import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './page-not-found.css'
import Footer from '../components/footer'
import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'

const PageNotFound = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
      credentials: 'include',
    })
      .then((res) => setIsLoggedIn(res.ok))
      .catch(() => setIsLoggedIn(false))
  }, [])

  return (
    <div className="page-not-found-container1 daiki-page">
      <Helmet>
        <title>Page Not Found - Daiki Development</title>
        <meta property="og:title" content="Page Not Found - Daiki Development" />
      </Helmet>
      {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}

      <main className="daiki-page-shell">
        <section className="daiki-panel-hero daiki-not-found">
          <p className="daiki-eyebrow">404</p>
          <h1>Page Not Found</h1>
          <p>This route does not exist, but the home page is still right where it should be.</p>
          <Link to="/" className="daiki-hero__btn daiki-hero__btn--primary">
            Go To Home Page
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PageNotFound
