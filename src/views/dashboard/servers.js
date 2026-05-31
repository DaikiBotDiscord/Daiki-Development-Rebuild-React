import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { ThreeDot } from 'react-loading-indicators'

import Footer from '../../components/footer'
import NavBarLI from '../../components/nav-bar-li'
import './servers.css'

const Servers = () => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        axios.get('https://dash.api.daiki-bot.xyz/api/users/@me', {
            withCredentials: true,
        })
            .then((res) => setUserData(res.data))
            .catch((err) => {
                console.error('Error fetching user data:', err)
                window.location.href = 'https://daiki-bot.xyz/dashboard-sync'
            })
    }, [])

    if (!userData) {
        return (
            <div className="daiki-loading">
                <ThreeDot variant="bounce" color={['#ff00ff', '#5865f2', '#00d4ff']} size="large" text="" textColor="" />
            </div>
        )
    }

    const guilds = userData?.manageable_guilds || []

    return (
        <div className="servers-container1 daiki-page">
            <Helmet>
                <title>Servers - Daiki Development</title>
                <meta property="og:title" content="Servers - Daiki Development" />
            </Helmet>
            <NavBarLI />

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero daiki-panel-hero--split">
                    <div>
                        <p className="daiki-eyebrow">Server management</p>
                        <h1>Servers</h1>
                        <p>Manage the Discord servers where you have Daiki access.</p>
                    </div>
                    <a
                        href="https://daiki-bot.xyz/invite"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="daiki-hero__btn daiki-hero__btn--primary"
                    >
                        Invite Daiki
                    </a>
                </section>

                <section className="daiki-list-grid">
                    {guilds.length > 0 ? (
                        guilds.map((guild) => (
                            <article className="daiki-list-card" key={guild.id}>
                                <img
                                    src={
                                        guild.icon
                                            ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                                            : '/default-server-icon.png'
                                    }
                                    alt={`${guild.name} server icon`}
                                    className="daiki-list-card__image"
                                />
                                <div>
                                    <h3>{guild.name}</h3>
                                    <p>{guild.id}</p>
                                    <span>{guild.owner ? 'Owner' : 'Bot Manager'}</span>
                                </div>
                            </article>
                        ))
                    ) : (
                        <article className="daiki-empty-state">
                            <h3>No manageable servers found</h3>
                            <p>Invite Daiki or check that your Discord account has the right permissions.</p>
                        </article>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Servers
