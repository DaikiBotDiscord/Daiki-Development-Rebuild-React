import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import NavBarLI from '../components/nav-bar-li'
import Footer from '../components/footer'
import './contact.css'

const contactMethods = [
    {
        label: 'Email',
        value: 'support@daiki-bot.xyz',
        href: 'mailto:support@daiki-bot.xyz?subject=',
        copy: 'Best for support requests, account questions, and anything that needs a paper trail.',
        icon: 'MAIL',
    },
    {
        label: 'Phone',
        value: '+1 (267) 544-9565',
        href: 'tel:+12675449565',
        copy: 'Call during business hours for direct help from Daiki Development.',
        icon: 'CALL',
    },
    {
        label: 'Hours',
        value: 'Mon-Fri, 8 AM-6 PM MST',
        copy: 'We generally respond within 1-2 business days.',
        icon: 'TIME',
    },
]

const Contact = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('https://dash.api.daiki-bot.xyz/api/users/@me', {
            credentials: 'include',
        })
            .then((res) => setIsLoggedIn(res.ok))
            .catch(() => setIsLoggedIn(false))
    }, [])

    return (
        <div className="contact-container1 daiki-page">
            <Helmet>
                <title>Contact - Daiki Development</title>
                <meta property="og:title" content="Contact - Daiki Development" />
            </Helmet>
            {isLoggedIn ? <NavBarLI id="top" /> : <NavBar id="top" />}

            <main className="daiki-page-shell">
                <section className="daiki-panel-hero">
                    <p className="daiki-eyebrow">Support</p>
                    <h1>Contact</h1>
                    <p>Need help with Daiki, your dashboard, or a server configuration? Reach us here.</p>
                </section>

                <section className="daiki-card-grid daiki-card-grid--three">
                    {contactMethods.map((method) => {
                        const content = (
                            <>
                                <span className="daiki-feature-card__icon">{method.icon}</span>
                                <h3>{method.label}</h3>
                                <p>{method.copy}</p>
                                <strong>{method.value}</strong>
                            </>
                        )

                        return method.href ? (
                            <a key={method.label} href={method.href} className="daiki-feature-card daiki-contact-card">
                                {content}
                            </a>
                        ) : (
                            <article key={method.label} className="daiki-feature-card daiki-contact-card">
                                {content}
                            </article>
                        )
                    })}
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Contact
