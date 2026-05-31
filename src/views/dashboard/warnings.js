import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { ThreeDot } from 'react-loading-indicators'
import axios from 'axios'

import NavBarLI from '../../components/nav-bar-li'
import Footer from '../../components/footer'
import './warnings.css'

const formatWarningTime = (timestamp) => {
    if (!timestamp) return 'Unknown'

    const date = new Date(timestamp)
    if (Number.isNaN(date.getTime())) return 'Unknown'

    return date.toLocaleString(undefined, {
        timeZoneName: 'short',
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}

const Warnings = () => {
    const [warnings, setWarningsData] = useState(null)

    useEffect(() => {
        axios.get('https://dash.api.daiki-bot.xyz/api/users/@me/warnings', {
            withCredentials: true,
        })
            .then((res) => setWarningsData(res.data.warnings || []))
            .catch((err) => {
                console.error('Error fetching warnings:', err)
                window.location.href = 'https://daiki-bot.xyz/dashboard-sync'
            })
    }, [])

    if (!warnings) {
        return (
            <div className="daiki-loading">
                <ThreeDot variant="bounce" color={['#ff00ff', '#5865f2', '#00d4ff']} size="large" text="" textColor="" />
            </div>
        )
    }

    return (
        <div className="warnings-container1 daiki-page">
            <Helmet>
                <title>Warnings - Daiki Development</title>
                <meta property="og:title" content="Warnings - Daiki Development" />
            </Helmet>
            <NavBarLI />

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero">
                    <p className="daiki-eyebrow">Moderation history</p>
                    <h1>Warnings</h1>
                    <p>Review warning records tied to your account.</p>
                </section>

                <section className="daiki-list-grid">
                    {warnings.length > 0 ? (
                        warnings.map((warn) => (
                            <article key={warn.id} className="daiki-warning-card">
                                <div className="daiki-warning-card__top">
                                    <span className="daiki-feature-card__icon">Warning #{warn.id}</span>
                                    <strong>{formatWarningTime(warn.created_at)}</strong>
                                </div>
                                <dl>
                                    <div>
                                        <dt>Moderator ID</dt>
                                        <dd>{warn.moderator_id}</dd>
                                    </div>
                                    <div>
                                        <dt>Server ID</dt>
                                        <dd>{warn.guild_id}</dd>
                                    </div>
                                    <div>
                                        <dt>User ID</dt>
                                        <dd>{warn.user_id}</dd>
                                    </div>
                                    {warn.receiverUsername ? (
                                        <div>
                                            <dt>Username</dt>
                                            <dd>{warn.receiverUsername}</dd>
                                        </div>
                                    ) : null}
                                </dl>
                                <p>{warn.reason || 'No reason provided.'}</p>
                            </article>
                        ))
                    ) : (
                        <article className="daiki-empty-state">
                            <h3>No warnings found</h3>
                            <p>Your account does not currently have warning records.</p>
                        </article>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Warnings
