import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import CommandsDropDowns from '../components/commands-drop-downs'
import Footer from '../components/footer'
import './commands.css'

const Commands = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
            credentials: 'include',
        })
            .then((res) => setIsLoggedIn(res.ok))
            .catch(() => setIsLoggedIn(false))
    }, [])

    return (
        <div className="commands-container1 daiki-page">
            <Helmet>
                <title>Commands - Daiki Development</title>
                <meta property="og:title" content="Commands - Daiki Development" />
            </Helmet>
            {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero">
                    <p className="daiki-eyebrow">Command center</p>
                    <h1>Commands</h1>
                    <p>Browse Daiki commands by category and find the exact tool your server needs.</p>
                </section>

                <section className="commands-warning" aria-label="Commands availability warning">
                    <span className="commands-warning__label">Command Notice</span>
                    <p>
                        All commands may be unavailable due to Discord restructuring.
                        We are working to restore all commands as soon as possible.
                    </p>
                </section>

                <section className="daiki-content-panel">
                    <CommandsDropDowns />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Commands
