import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { ThreeDot } from 'react-loading-indicators'

import NavBarLI from '../../components/nav-bar-li'
import Footer from '../../components/footer'
import './account.css'

const Account = () => {
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

    const avatarUrl = `https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`
    const createdAt = new Date(userData.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div className="account-container1 daiki-page">
            <Helmet>
                <title>Account - Daiki Development</title>
                <meta property="og:title" content="Account - Daiki Development" />
            </Helmet>
            <NavBarLI />

            <main className="daiki-account-shell">
                <header role="banner" className="daiki-profile-header">
                    <div className="daiki-header-bg-shapes">
                        <div className="daiki-shape-hex"></div>
                        <div className="daiki-shape-tri"></div>
                        <div className="daiki-shape-diamond"></div>
                    </div>
                    <div className="daiki-profile-header-inner">
                        <div className="daiki-avatar-wrap">
                            <div className="daiki-avatar-ring"></div>
                            <div className="daiki-avatar-ring-outer"></div>
                            <img src={avatarUrl} alt={`${userData.displayName} avatar`} className="daiki-avatar-image" />
                            <div aria-label="Online status" className="daiki-avatar-status"></div>
                        </div>
                        <div className="daiki-profile-text">
                            <p className="daiki-eyebrow">Account</p>
                            <h1 className="daiki-username">{userData.displayName}</h1>
                            <p className="daiki-user-tagline">Discord ID {userData.discordId}</p>
                        </div>
                    </div>
                </header>

                <section aria-labelledby="stats-heading" className="daiki-stats-section">
                    <div className="daiki-stats-inner">
                        <h2 id="stats-heading" className="daiki-section-title">Account Stats</h2>
                        <div className="daiki-stats-grid">
                            <article className="daiki-stat-card">
                                <div className="daiki-stat-glow"></div>
                                <div className="daiki-stat-value">{userData.guildCount}</div>
                                <div className="daiki-stat-label">Total Servers</div>
                            </article>
                            <article className="daiki-stat-card">
                                <div className="daiki-stat-glow"></div>
                                <div className="daiki-stat-value">{userData.mutualCount}</div>
                                <div className="daiki-stat-label">Servers with Daiki</div>
                            </article>
                            <article className="daiki-stat-card">
                                <div className="daiki-stat-glow"></div>
                                <div className="daiki-stat-value">{userData.manageableCount}</div>
                                <div className="daiki-stat-label">Manageable Servers</div>
                            </article>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="details-heading" className="daiki-settings-section">
                    <div className="daiki-settings-inner">
                        <h2 id="details-heading" className="daiki-section-title">Account Details</h2>
                        <div className="daiki-detail-grid">
                            <article className="daiki-detail-card">
                                <span>Email</span>
                                <strong>{userData.email}</strong>
                            </article>
                            <article className="daiki-detail-card">
                                <span>Daiki Account Created</span>
                                <strong>{createdAt}</strong>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Account
