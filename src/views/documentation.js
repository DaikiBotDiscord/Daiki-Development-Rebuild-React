import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Docs from '../components/docs'
import Footer from '../components/footer'
import './documentation.css'

const Documentation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
            credentials: 'include',
        })
            .then((res) => setIsLoggedIn(res.ok))
            .catch(() => setIsLoggedIn(false))
    }, [])

    return (
        <div className="documentation-container1 daiki-page">
            <Helmet>
                <title>Documentation - Daiki Development</title>
                <meta property="og:title" content="Documentation - Daiki Development" />
            </Helmet>
            {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero">
                    <p className="daiki-eyebrow">Knowledge base</p>
                    <h1>Documentation</h1>
                    <p>Set up Daiki, understand each feature, and keep your server configuration tidy.</p>
                </section>

                <section className="daiki-content-panel">
                    <Docs />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Documentation
