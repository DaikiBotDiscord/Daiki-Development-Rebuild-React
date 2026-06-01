import React from 'react'
import { Helmet } from 'react-helmet'

import NavBarLI from '../../components/nav-bar-li'
import Footer from '../../components/footer'
import './music.css'

const Music = () => {
    return (
        <div className="music-container1 daiki-page">
            <Helmet>
                <title>Music - Daiki Development</title>
                <meta property="og:title" content="Music - Daiki Development" />
            </Helmet>
            <NavBarLI />

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero">
                    <p className="daiki-eyebrow">Audio controls</p>
                    <h1>Music</h1>
                    <p>Manage music playback, queues, and server audio settings for Daiki.</p>
                </section>

                <section className="daiki-content-panel music-panel">
                    <article className="music-card">
                        <span className="daiki-feature-card__icon">COMING SOON</span>
                        <h2>Music controls are being prepared</h2>
                        <p>
                            This page is ready for dashboard routing and can be connected to
                            playback, queue, and permission controls when the music API is available.
                        </p>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Music
